import { Metadata } from '@redwoodjs/web'

import FadeIn from 'src/components/FadeIn/FadeIn'
import { MamaZineLogos } from 'src/components/Brand/Brand'
import ScrollPanel from 'src/components/ScrollPanel/ScrollPanel'
import { social } from 'src/data/siteContent'

const ContactPage = () => {
  return (
    <>
      <Metadata
        title="Contact"
        description="Commission, collaborate, or organise a workshop with Kotrina Cioladis."
      />

      <div className="mx-auto max-w-site px-5 pb-24 pt-8 sm:px-8 sm:pt-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-base tracking-brand text-kotrina-ink sm:text-lg">
            Get in touch
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-wide text-kotrina-ink sm:text-5xl">
            Contact
          </h1>
          <div className="ornament-rule mt-5" />
        </FadeIn>

        <FadeIn className="mx-auto mt-10 max-w-2xl" delay={0.06}>
          <ScrollPanel>
            <div className="text-center">
              <p className="text-balance text-lg leading-relaxed text-kotrina-mute sm:text-xl">
                If you&apos;d like to commission, collaborate, organise a workshop or more — email
                me at:
              </p>
              <a
                href={`mailto:${social.email}`}
                className="mt-7 inline-block break-all font-display text-xl tracking-wide text-kotrina-rust underline decoration-kotrina-coral decoration-2 underline-offset-8 transition hover:text-kotrina-blush sm:text-2xl md:text-3xl"
              >
                {social.email}
              </a>
            </div>
          </ScrollPanel>
        </FadeIn>

        <FadeIn className="mx-auto mt-8 max-w-2xl" delay={0.1}>
          <div className="rounded-2xl border border-kotrina-mist bg-kotrina-soft/80 px-6 py-8 text-center shadow-[0_10px_28px_rgba(47,42,39,0.05)] sm:px-8">
            <MamaZineLogos size="sm" />
            <h2 className="mt-5 font-display text-xl tracking-wide text-kotrina-ink sm:text-2xl">
              Workshop bookings
            </h2>
            <p className="mt-3 text-base text-kotrina-mute sm:text-lg">
              For MAMAzine workshop bookings, email:
            </p>
            <a
              href={`mailto:${social.workshopEmail}`}
              className="mt-4 inline-block break-all font-display text-lg tracking-wide text-kotrina-ink underline decoration-kotrina-coral/70 underline-offset-4 transition hover:text-kotrina-rust sm:text-xl"
            >
              {social.workshopEmail}
            </a>
          </div>
        </FadeIn>

        <FadeIn className="mx-auto mt-10 max-w-md text-center" delay={0.14}>
          <p className="font-display text-base tracking-brand text-kotrina-ink sm:text-lg">
            Or find me on
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-display text-lg tracking-wide text-kotrina-ink underline decoration-kotrina-coral underline-offset-8 transition hover:text-kotrina-rust sm:text-xl"
            >
              Instagram
            </a>
            <span className="h-1.5 w-1.5 rounded-full bg-kotrina-coral" aria-hidden />
            <a
              href={social.tiktok}
              target="_blank"
              rel="noreferrer"
              className="font-display text-lg tracking-wide text-kotrina-ink underline decoration-kotrina-coral underline-offset-8 transition hover:text-kotrina-rust sm:text-xl"
            >
              TikTok
            </a>
          </div>
        </FadeIn>
      </div>
    </>
  )
}

export default ContactPage
