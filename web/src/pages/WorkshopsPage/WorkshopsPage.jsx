import { useEffect, useState } from 'react'

import { Metadata } from '@redwoodjs/web'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import FadeIn from 'src/components/FadeIn/FadeIn'
import { MamaZineLogos } from 'src/components/Brand/Brand'
import ScrollPanel from 'src/components/ScrollPanel/ScrollPanel'
import {
  social,
  upcomingWorkshops,
  workshopPhotos,
} from 'src/data/siteContent'

const WorkshopsPage = () => {
  const [slide, setSlide] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || workshopPhotos.length < 2) return undefined
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % workshopPhotos.length)
    }, 4200)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <>
      <Metadata
        title="Workshops"
        description="MAMAzine — zine workshops for postpartum mothers with Kotrina Cioladis."
      />

      <div className="mx-auto max-w-site px-5 pb-20 pt-4 sm:px-8 sm:pt-6">
        <FadeIn className="mx-auto max-w-3xl">
          <MamaZineLogos size="lg" />
        </FadeIn>

        <FadeIn className="mx-auto mt-8 max-w-2xl" delay={0.05}>
          <ScrollPanel>
            <div className="text-center">
              <h1 className="font-display text-4xl tracking-wide text-kotrina-ink sm:text-5xl">
                MAMAzine workshop
              </h1>
              <p className="mt-5 text-balance text-lg leading-relaxed text-kotrina-mute sm:text-xl">
                A zine workshop for postpartum mothers. Reflect on your first year of motherhood —
                documenting your firsts within the zine format. Connect, create, and share in a
                comforting space through collage, drawing, and zine-making. No creative experience
                required.
              </p>
            </div>
          </ScrollPanel>
        </FadeIn>

        <FadeIn className="relative mx-auto mt-12 max-w-3xl" delay={0.08}>
          <div className="relative px-12 sm:px-14">
            <div className="overflow-hidden rounded-2xl border border-kotrina-mist bg-kotrina-soft p-2 shadow-[0_12px_40px_rgba(47,42,39,0.08)] sm:p-2.5">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-kotrina-parchment/50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={workshopPhotos[slide]}
                    src={workshopPhotos[slide]}
                    alt={`MAMAzine workshop photo ${slide + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.55 }}
                  />
                </AnimatePresence>
              </div>
            </div>

            <button
              type="button"
              aria-label="Previous photo"
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-kotrina-mist bg-kotrina-soft font-display text-2xl leading-none text-kotrina-ink shadow-sm transition hover:bg-kotrina-coral hover:text-kotrina-black sm:h-11 sm:w-11"
              onClick={() =>
                setSlide((s) => (s - 1 + workshopPhotos.length) % workshopPhotos.length)
              }
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photo"
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-kotrina-mist bg-kotrina-soft font-display text-2xl leading-none text-kotrina-ink shadow-sm transition hover:bg-kotrina-coral hover:text-kotrina-black sm:h-11 sm:w-11"
              onClick={() => setSlide((s) => (s + 1) % workshopPhotos.length)}
            >
              ›
            </button>
          </div>

          <div className="mx-auto mt-5 flex max-w-md items-center justify-between gap-4 rounded-full border border-kotrina-mist bg-kotrina-soft/80 px-5 py-3 shadow-[0_6px_20px_rgba(47,42,39,0.05)]">
            <button
              type="button"
              className="font-display text-sm tracking-wide text-kotrina-ink/80 transition hover:text-kotrina-rust sm:text-base"
              onClick={() =>
                setSlide((s) => (s - 1 + workshopPhotos.length) % workshopPhotos.length)
              }
            >
              ‹ Prev
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5">
                {workshopPhotos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show workshop photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === slide
                        ? 'w-7 bg-kotrina-rust'
                        : 'w-3 bg-kotrina-mist hover:bg-kotrina-coral'
                    }`}
                    onClick={() => setSlide(i)}
                  />
                ))}
              </div>
              <p className="font-display text-xs tracking-brand text-kotrina-mute">
                {slide + 1} / {workshopPhotos.length}
              </p>
            </div>

            <button
              type="button"
              className="font-display text-sm tracking-wide text-kotrina-ink/80 transition hover:text-kotrina-rust sm:text-base"
              onClick={() => setSlide((s) => (s + 1) % workshopPhotos.length)}
            >
              Next ›
            </button>
          </div>
        </FadeIn>

        <FadeIn className="mx-auto mt-16 max-w-2xl" delay={0.12}>
          <ScrollPanel>
            <h2 className="text-center font-display text-2xl tracking-wide text-kotrina-ink sm:text-3xl">
              Upcoming workshops
            </h2>
            <div className="mt-6 overflow-x-auto border-y border-kotrina-mist/80">
              <table className="w-full min-w-[20rem] text-left text-base sm:text-lg">
                <thead>
                  <tr className="border-b border-kotrina-mist font-display text-sm tracking-brand text-kotrina-mute">
                    <th className="py-3 pr-4 font-normal">Date</th>
                    <th className="py-3 pr-4 font-normal">Time</th>
                    <th className="py-3 font-normal">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingWorkshops.map((row) => (
                    <tr key={`${row.date}-${row.location}`} className="text-kotrina-ink">
                      <td className="py-4 pr-4">{row.date}</td>
                      <td className="py-4 pr-4">{row.time}</td>
                      <td className="py-4">{row.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-base text-kotrina-mute sm:text-lg">
              Email{' '}
              <a
                href={`mailto:${social.workshopEmail}`}
                className="text-kotrina-rust underline decoration-kotrina-coral/60 underline-offset-4 hover:text-kotrina-blush"
              >
                {social.workshopEmail}
              </a>{' '}
              to book your spot.
            </p>
          </ScrollPanel>
        </FadeIn>
      </div>
    </>
  )
}

export default WorkshopsPage
