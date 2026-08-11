import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { motion, useReducedMotion } from 'framer-motion'

import FadeIn from 'src/components/FadeIn/FadeIn'
import PortfolioGrid from 'src/components/PortfolioGrid/PortfolioGrid'
import ScrollPanel from 'src/components/ScrollPanel/ScrollPanel'

const HomePage = () => {
  const reduce = useReducedMotion()

  return (
    <>
      <Metadata
        title="Portfolio"
        description="Illustration by Kotrina Cioladis — digital and traditional collage from Carlow, Ireland."
      />

      <section className="relative w-full overflow-hidden px-4 pt-5 sm:px-6 sm:pt-6">
        <div className="relative mx-auto w-[min(100%,72rem)] overflow-hidden rounded-2xl border border-kotrina-mist bg-kotrina-soft p-2 shadow-[0_16px_50px_rgba(47,42,39,0.1)] sm:p-2.5">
          <div className="relative h-[22rem] overflow-hidden rounded-xl sm:h-[28rem] md:h-[34rem] lg:h-[38rem]">
            <motion.img
              src="/images/portfolio/newborn-bubble.jpg"
              alt="Newborn Bubble of Love — illustration by Kotrina"
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={reduce ? false : { scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kotrina-charcoal/80 via-kotrina-charcoal/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-kotrina-charcoal/50 to-transparent" />

            <div className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-9 text-center sm:pb-12">
              <motion.div
                className="ornament-rule mb-5 w-20"
                initial={reduce ? false : { opacity: 0, scaleX: 0.4 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              />
              <motion.p
                className="max-w-2xl text-balance font-display text-xl tracking-wide text-kotrina-soft sm:text-2xl md:text-3xl"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Illustrator based in Carlow, Ireland
              </motion.p>
              <motion.p
                className="mt-3 max-w-lg text-balance text-base text-kotrina-mist sm:text-lg"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.32 }}
              >
                Collage, pattern, and stories of motherhood.
              </motion.p>
              <motion.div
                className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.42 }}
              >
                <a
                  href="#portfolio"
                  className="bg-kotrina-coral px-8 py-3 font-display text-base font-medium tracking-[0.12em] text-kotrina-black transition hover:bg-kotrina-soft sm:text-lg"
                >
                  View work
                </a>
                <Link
                  to={routes.workshops()}
                  className="border-2 border-kotrina-soft bg-kotrina-charcoal/35 px-8 py-3 font-display text-base font-medium tracking-[0.12em] text-kotrina-white backdrop-blur-sm transition hover:border-kotrina-coral hover:text-kotrina-coral sm:text-lg"
                >
                  Workshops
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="pt-14 sm:pt-20">
        <FadeIn className="mx-auto mb-10 max-w-xl px-5 sm:px-8">
          <ScrollPanel>
            <div className="text-center">
              <p className="font-display text-base tracking-brand text-kotrina-ink sm:text-lg">
                Selected work
              </p>
              <h1 className="mt-2 font-display text-3xl tracking-wide text-kotrina-ink sm:text-4xl md:text-5xl">
                Portfolio
              </h1>
              <div className="ornament-rule mt-5" />
              <p className="mt-5 text-base text-kotrina-ink/75 sm:text-lg">
                Hover for titles — click to open the gallery.
              </p>
            </div>
          </ScrollPanel>
        </FadeIn>
        <PortfolioGrid />
      </section>

      <section className="border-t border-kotrina-mist/50 bg-kotrina-soft/35 px-5 py-14 sm:px-8 sm:py-16">
        <FadeIn className="mx-auto max-w-xl">
          <ScrollPanel>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/logo/mamazine.png"
                alt=""
                className="h-auto w-28 opacity-95 sm:w-32"
                aria-hidden
              />
              <h2 className="mt-5 font-display text-2xl tracking-wide text-kotrina-ink sm:text-3xl">
                MAMAzine workshops
              </h2>
              <p className="mt-3 max-w-md text-balance text-base text-kotrina-mute sm:text-lg">
                A gentle creative space for postpartum mothers — zines, collage, and community.
              </p>
              <Link
                to={routes.workshops()}
                className="mt-7 bg-kotrina-ink px-8 py-3 font-display text-base tracking-[0.12em] text-kotrina-soft transition hover:bg-kotrina-rust sm:text-lg"
              >
                Explore workshops
              </Link>
            </div>
          </ScrollPanel>
        </FadeIn>
      </section>
    </>
  )
}

export default HomePage
