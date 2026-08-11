import { useCallback, useEffect, useState } from 'react'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import { portfolioWorks } from 'src/data/siteContent'

const spanClass = {
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
  square: '',
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
        <div className="overflow-hidden rounded-2xl border border-kotrina-soft/25 bg-kotrina-soft/10 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
          <img
            src={work.src}
            alt={work.alt}
            className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain"
          />
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
      <div className="mx-auto grid max-w-site grid-cols-1 gap-5 px-5 pb-20 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3 md:auto-rows-[minmax(14rem,auto)]">
        {portfolioWorks.map((work, index) => (
          <motion.button
            key={work.id}
            type="button"
            className={`group relative overflow-hidden rounded-2xl border border-kotrina-mist bg-kotrina-soft p-2 text-left shadow-[0_8px_24px_rgba(47,42,39,0.06)] transition duration-500 hover:-translate-y-1 hover:border-kotrina-coral/50 hover:shadow-[0_18px_40px_rgba(47,42,39,0.12)] ${
              spanClass[work.span] || ''
            }`}
            onClick={() => setActive(index)}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{
              duration: 0.55,
              delay: Math.min(index * 0.05, 0.35),
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative h-full min-h-[15rem] overflow-hidden rounded-xl md:min-h-[17rem]">
              <img
                src={work.src}
                alt={work.alt}
                className="h-full min-h-[15rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] md:min-h-[17rem]"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-kotrina-charcoal/85 via-kotrina-charcoal/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="translate-y-2 p-5 text-kotrina-white transition-transform duration-500 group-hover:translate-y-0 sm:p-6">
                  <p className="font-display text-xl tracking-wide sm:text-2xl">{work.title}</p>
                  <p className="mt-1 text-base text-kotrina-mist">{work.credit}</p>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
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
