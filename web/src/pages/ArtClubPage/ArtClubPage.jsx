import { useEffect, useState } from 'react'

import { Metadata } from '@redwoodjs/web'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import FadeIn from 'src/components/FadeIn/FadeIn'
import ScrollPanel from 'src/components/ScrollPanel/ScrollPanel'
import { artClub, social } from 'src/data/siteContent'

const PosterLightbox = ({ poster, alt, title, onClose }) => {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-kotrina-charcoal/92 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-20 rounded-full border border-kotrina-soft/30 bg-kotrina-soft/15 px-4 py-2 font-display text-base tracking-wide text-kotrina-white backdrop-blur-sm hover:bg-kotrina-coral hover:text-kotrina-black sm:right-8 sm:top-8 sm:text-lg"
        onClick={onClose}
      >
        Close
      </button>

      <motion.div
        className="flex max-h-full w-full max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="overflow-hidden rounded-2xl border border-kotrina-soft/25 bg-kotrina-soft/10 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
          <img
            src={poster}
            alt={alt}
            className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
          />
        </div>
        <p className="mt-5 text-center font-display text-xl tracking-wide text-kotrina-white sm:text-2xl">
          {title}
        </p>
      </motion.div>
    </motion.div>
  )
}

const ArtClubPage = () => {
  const { upcoming } = artClub
  const [posterOpen, setPosterOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!posterOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setPosterOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [posterOpen])

  return (
    <>
      <Metadata
        title="Art Club"
        description="Art Club with Kotrina — a relaxed monthly meetup for creatives in Carlow. Bring a project, connect, and create together."
      />

      <div className="mx-auto max-w-site px-5 pb-16 pt-5 sm:px-8 sm:pt-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
          <div className="flex flex-col gap-6">
            <FadeIn>
              <h1 className="font-display text-5xl tracking-wide text-kotrina-ink sm:text-6xl md:text-7xl">
                Art Club
              </h1>
              <p className="mt-2 font-display text-base tracking-brand text-kotrina-mute sm:text-lg">
                Monthly meetup · Carlow
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h2 className="font-display text-2xl tracking-wide text-kotrina-ink sm:text-3xl">
                How it started?
              </h2>
              <ScrollPanel className="mt-3">
                <div className="space-y-4 text-base leading-relaxed text-kotrina-mute sm:text-lg">
                  {artClub.howItStarted.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </ScrollPanel>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-2 flex flex-col items-center text-center">
              <p className="font-display text-3xl tracking-wide text-kotrina-rust sm:text-4xl">
                Free event
              </p>
              <a
                href={artClub.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block max-w-sm rounded-md bg-[#F4E47A] px-6 py-5 text-center shadow-[0_8px_22px_rgba(47,42,39,0.08)] transition hover:bg-[#F7EA93]"
              >
                <span className="block font-display text-lg leading-snug text-kotrina-ink sm:text-xl">
                  Limited spaces
                </span>
                <span className="mt-1 block font-display text-lg text-kotrina-ink sm:text-xl">
                  Book{' '}
                  <span className="underline decoration-2 underline-offset-4 decoration-kotrina-rust">
                    here
                  </span>
                </span>
              </a>
              <p className="mt-4 inline-block rounded-md border border-kotrina-earth/35 bg-kotrina-parchment/40 px-4 py-2 font-display text-sm tracking-wide text-kotrina-ink sm:text-base">
                {upcoming.when}
              </p>
              <p className="mt-3 text-sm text-kotrina-mute sm:text-base">
                {upcoming.where}
                <br />
                <span className="italic">Weather dependent</span>
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6">
            <FadeIn delay={0.03}>
              <h2 className="font-display text-2xl tracking-wide text-kotrina-ink sm:text-3xl">
                Description
              </h2>
              <ScrollPanel className="mt-3">
                <p className="text-balance text-base leading-relaxed text-kotrina-mute sm:text-lg">
                  {artClub.description}
                </p>
                <p className="mt-5 rounded-md border border-kotrina-earth/35 bg-kotrina-parchment/40 px-4 py-3 text-center font-display text-sm tracking-wide text-kotrina-ink sm:text-base">
                  {artClub.meetingsNote}
                </p>
              </ScrollPanel>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <div>
                  <h2 className="font-display text-xl tracking-wide text-kotrina-ink sm:text-2xl">
                    Join WhatsApp group
                  </h2>
                  <p className="mt-2 text-base text-kotrina-mute sm:text-lg">
                    Tap{' '}
                    <a
                      href={artClub.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-kotrina-rust underline decoration-kotrina-coral/70 underline-offset-4 transition hover:text-kotrina-blush"
                    >
                      here
                    </a>{' '}
                    for updates — or scan the code.
                  </p>
                  <p className="mt-2 text-sm text-kotrina-mute sm:text-base">
                    Or follow{' '}
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-kotrina-ink underline decoration-kotrina-coral/60 underline-offset-4 transition hover:text-kotrina-rust"
                    >
                      @kotrina.art
                    </a>
                  </p>
                </div>

                <a
                  href={artClub.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-lg border border-kotrina-mist bg-kotrina-white p-2.5 shadow-sm transition hover:border-kotrina-coral"
                  aria-label="Open Art Club WhatsApp group"
                >
                  <img
                    src={artClub.qr}
                    alt="QR code to join the Art Club WhatsApp group"
                    className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                  />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h2 className="text-center font-display text-2xl tracking-wide text-kotrina-ink sm:text-3xl">
                Next Meet Up
              </h2>
              <motion.button
                type="button"
                className="group mt-4 w-full overflow-hidden rounded-sm border border-kotrina-mist bg-kotrina-soft p-2 text-left shadow-[0_12px_40px_rgba(47,42,39,0.08)] transition hover:border-kotrina-coral/50 sm:p-2.5"
                onClick={() => setPosterOpen(true)}
                aria-label="Open meetup poster"
                whileHover={reduce ? undefined : { y: -2 }}
              >
                <img
                  src={upcoming.poster}
                  alt={upcoming.posterAlt}
                  className="w-full rounded-sm object-contain transition duration-500 group-hover:scale-[1.01]"
                />
                <p className="mt-3 text-center font-display text-sm tracking-brand text-kotrina-mute opacity-0 transition-opacity group-hover:opacity-100 sm:text-base">
                  Click to enlarge
                </p>
              </motion.button>
            </FadeIn>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {posterOpen && (
          <PosterLightbox
            poster={upcoming.poster}
            alt={upcoming.posterAlt}
            title={upcoming.title}
            onClose={() => setPosterOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ArtClubPage
