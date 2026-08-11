import { useCallback, useEffect, useState } from 'react'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import { portfolioWorks } from 'src/data/siteContent'

/** Slight tilts — keep scatter gentle */
const scatter = [
  { rotate: -1.8 },
  { rotate: 1.4 },
  { rotate: -1.0 },
  { rotate: 1.9 },
  { rotate: -1.5 },
  { rotate: 1.1 },
  { rotate: -2.0 },
  { rotate: 1.6 },
  { rotate: -0.8 },
]

const aspectClass = {
  wide: 'aspect-[16/10]',
  tall: 'aspect-[3/4]',
  square: 'aspect-square',
}

const PortfolioLightbox = ({ works, index, onClose, onPrev, onNext }) => {
  const reduce = useReducedMotion()
  const work = works[index]
  if (!work) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-kotrina-charcoal/92 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
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

      <button
        type="button"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-kotrina-soft/40 bg-kotrina-soft/90 font-display text-3xl leading-none text-kotrina-ink shadow-sm hover:bg-kotrina-coral sm:left-6 sm:h-12 sm:w-12"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
      >
        ‹
      </button>

      <button
        type="button"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-kotrina-soft/40 bg-kotrina-soft/90 font-display text-3xl leading-none text-kotrina-ink shadow-sm hover:bg-kotrina-coral sm:right-6 sm:h-12 sm:w-12"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
      >
        ›
      </button>

      <motion.div
        className="flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="hand-frame max-w-full bg-kotrina-soft/95 p-2 sm:p-2.5">
          <div className="hand-frame-media">
            <img
              src={work.src}
              alt={work.alt}
              className="max-h-[70vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
        <div className="mt-5 text-center text-kotrina-white">
          <p className="font-display text-2xl tracking-wide sm:text-3xl">{work.title}</p>
          <p className="mt-2 text-base text-kotrina-mist sm:text-lg">{work.credit}</p>
          <p className="mt-3 font-display text-sm tracking-brand text-kotrina-mist/80">
            {index + 1} / {works.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const PortfolioGrid = () => {
  const [active, setActive] = useState(null)
  const reduce = useReducedMotion()

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + portfolioWorks.length) % portfolioWorks.length
      ),
    []
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % portfolioWorks.length)),
    []
  )

  useEffect(() => {
    if (active === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, prev, next])

  return (
    <>
      {/* Masonry columns fill the full width like a packed sketchbook wall */}
      <div className="mx-auto w-full max-w-[92rem] columns-1 gap-5 px-3 pb-16 sm:columns-2 sm:gap-6 sm:px-5 md:columns-3 md:gap-7 lg:px-8 xl:px-10">
        {portfolioWorks.map((work, index) => {
          const tilt = scatter[index % scatter.length]
          return (
            <motion.div
              key={work.id}
              className="mb-5 break-inside-avoid sm:mb-6"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.04, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                type="button"
                className="hand-frame group w-full text-left outline-none [transition:transform_0.45s_cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-kotrina-coral/60"
                style={
                  reduce
                    ? undefined
                    : {
                        transform: `rotate(${tilt.rotate}deg)`,
                      }
                }
                onMouseEnter={(e) => {
                  if (reduce) return
                  e.currentTarget.style.transform = `rotate(${tilt.rotate * 0.3}deg) translateY(-4px)`
                }}
                onMouseLeave={(e) => {
                  if (reduce) return
                  e.currentTarget.style.transform = `rotate(${tilt.rotate}deg)`
                }}
                onClick={() => setActive(index)}
              >
                <div
                  className={`hand-frame-media relative w-full overflow-hidden ${
                    aspectClass[work.span] || aspectClass.square
                  }`}
                >
                  <img
                    src={work.src}
                    alt={work.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-kotrina-charcoal/85 via-kotrina-charcoal/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <div className="translate-y-2 p-4 text-kotrina-white transition-transform duration-500 group-hover:translate-y-0 sm:p-5">
                      <p className="font-display text-lg tracking-wide sm:text-xl">{work.title}</p>
                      <p className="mt-1 text-sm text-kotrina-mist sm:text-base">{work.credit}</p>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {active !== null && (
          <PortfolioLightbox
            works={portfolioWorks}
            index={active}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default PortfolioGrid
