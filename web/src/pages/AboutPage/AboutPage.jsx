import { Metadata } from '@redwoodjs/web'

import { BrandFlourish } from 'src/components/Brand/Brand'
import FadeIn from 'src/components/FadeIn/FadeIn'
import ScrollPanel from 'src/components/ScrollPanel/ScrollPanel'

const AboutPage = () => {
  return (
    <>
      <Metadata
        title="About"
        description="About Kotrina Cioladis — illustrator working digitally and traditionally in Carlow, Ireland."
      />

      <div className="mx-auto max-w-site px-5 pb-16 pt-6 sm:px-8 lg:pt-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeIn className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-kotrina-mist bg-kotrina-soft p-2 shadow-[0_12px_40px_rgba(47,42,39,0.08)] sm:p-2.5">
              <img
                src="/images/about/kotrina.jpg"
                alt="Kotrina Cioladis"
                className="w-full rounded-xl object-cover object-top"
              />
            </div>
          </FadeIn>

          <FadeIn className="flex flex-col justify-center lg:col-span-7" delay={0.1}>
            <ScrollPanel>
              <h1 className="font-display text-4xl tracking-wide text-kotrina-ink sm:text-5xl">
                Hello
              </h1>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-kotrina-mute sm:text-xl">
                <p>
                  I am an illustrator based in Carlow, Ireland. I work digitally and traditionally. My
                  current work is focused on collaging and working with traditional mediums to create
                  patterned, layered artworks.
                </p>
                <p>
                  My digital work provides variety — I enjoy adding elements created traditionally
                  within the digital illustrations. My personal work explores themes surrounding
                  motherhood, utilising my own experiences as well as others to create deeply
                  meaningful works, while bringing humour into the daily life of parenting.
                </p>
                <p>
                  My current passion is providing MAMAzine workshops to postpartum mothers — inviting
                  reflection on the first year of motherhood within the zine format. Providing
                  community, creativity, and fun within the motherhood experience.
                </p>
              </div>
            </ScrollPanel>
          </FadeIn>
        </div>

        <FadeIn className="mt-12 flex flex-col items-center pb-4 sm:mt-16" delay={0.15}>
          <BrandFlourish className="h-3 w-28 opacity-90 sm:w-36" />
        </FadeIn>
      </div>
    </>
  )
}

export default AboutPage
