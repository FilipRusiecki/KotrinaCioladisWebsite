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

  const prev = () =>
    setSlide((s) => (s - 1 + workshopPhotos.length) % workshopPhotos.length)
  const next = () => setSlide((s) => (s + 1) % workshopPhotos.length)

  return (
    <>
      <Metadata
        title="Workshops"
        description="MAMAzine — zine workshops for postpartum mothers with Kotrina Cioladis."
      />

      <div className="mx-auto max-w-site px-5 pb-14 pt-3 sm:px-8 sm:pt-5">
        <FadeIn className="mx-auto max-w-2xl">
          <MamaZineLogos size="md" />
        </FadeIn>

        <div className="mt-6 grid items-start gap-6 lg:mt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-8">
          <FadeIn delay={0.04}>
            <ScrollPanel>
              <div className="text-center lg:text-left">
                <h1 className="font-display text-3xl tracking-wide text-kotrina-ink sm:text-4xl">
                  MAMAzine:
                </h1>
                <p className="mt-2 font-display text-2xl tracking-wide text-kotrina-ink sm:text-3xl">
                  My first year too
                </p>
                <p className="mt-4 text-balance text-base leading-relaxed text-kotrina-mute sm:text-lg">
                  A zine workshop for postpartum mothers. Reflect on your first year of motherhood —
                  documenting your firsts within the zine format. Connect, create, and share in a
                  comforting space through collage, drawing, and zine-making. No creative experience
                  required.
                </p>
              </div>
            </ScrollPanel>
          </FadeIn>

          <FadeIn className="relative min-w-0" delay={0.06}>
            <div className="relative px-10 sm:px-11">
              <div className="overflow-hidden rounded-2xl border border-kotrina-mist bg-kotrina-soft p-1.5 shadow-[0_12px_40px_rgba(47,42,39,0.08)] sm:p-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-kotrina-parchment/50 sm:aspect-[3/2]">
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
                className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-kotrina-mist bg-kotrina-soft font-display text-2xl leading-none text-kotrina-ink shadow-sm transition hover:bg-kotrina-coral hover:text-kotrina-black sm:h-10 sm:w-10"
                onClick={prev}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next photo"
                className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-kotrina-mist bg-kotrina-soft font-display text-2xl leading-none text-kotrina-ink shadow-sm transition hover:bg-kotrina-coral hover:text-kotrina-black sm:h-10 sm:w-10"
                onClick={next}
              >
                ›
              </button>
            </div>

            <div className="mx-auto mt-3 flex max-w-md items-center justify-between gap-3 rounded-full border border-kotrina-mist bg-kotrina-soft/80 px-4 py-2 shadow-[0_6px_20px_rgba(47,42,39,0.05)]">
              <button
                type="button"
                className="font-display text-sm tracking-wide text-kotrina-ink/80 transition hover:text-kotrina-rust"
                onClick={prev}
              >
                ‹ Prev
              </button>

              <div className="flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-1.5">
                  {workshopPhotos.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show workshop photo ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === slide
                          ? 'w-6 bg-kotrina-rust'
                          : 'w-2.5 bg-kotrina-mist hover:bg-kotrina-coral'
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
                className="font-display text-sm tracking-wide text-kotrina-ink/80 transition hover:text-kotrina-rust"
                onClick={next}
              >
                Next ›
              </button>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mx-auto mt-10 max-w-3xl" delay={0.1}>
          <ScrollPanel>
            <h2 className="text-center font-display text-xl tracking-wide text-kotrina-ink sm:text-2xl">
              Upcoming workshops
            </h2>
            <div className="mt-4 overflow-x-auto border-y border-kotrina-mist/80">
              <table className="w-full min-w-[20rem] text-left text-base sm:text-lg">
                <thead>
                  <tr className="border-b border-kotrina-mist font-display text-sm tracking-brand text-kotrina-mute">
                    <th className="py-2.5 pr-4 font-normal">Date</th>
                    <th className="py-2.5 pr-4 font-normal">Time</th>
                    <th className="py-2.5 font-normal">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingWorkshops.map((row) => (
                    <tr
                      key={`${row.date}-${row.location}`}
                      className={
                        row.past
                          ? 'bg-kotrina-mist/25 text-kotrina-mute'
                          : 'text-kotrina-ink'
                      }
                    >
                      <td className="py-3 pr-4">
                        <span className="inline-flex flex-wrap items-center gap-2">
                          <span className={row.past ? 'opacity-70' : ''}>{row.date}</span>
                          {row.past && (
                            <span className="rounded-sm bg-kotrina-rust px-2 py-0.5 font-display text-xs tracking-brand text-kotrina-soft sm:text-sm">
                              Past event
                            </span>
                          )}
                        </span>
                      </td>
                      <td className={`py-3 pr-4 ${row.past ? 'opacity-70' : ''}`}>{row.time}</td>
                      <td className={`py-3 ${row.past ? 'opacity-70' : ''}`}>{row.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-base text-kotrina-mute sm:text-lg">
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
