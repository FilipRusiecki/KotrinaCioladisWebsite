import { Link, routes, useMatch } from '@redwoodjs/router'

import { BrandFlourish } from 'src/components/Brand/Brand'
import SideOrnaments from 'src/components/SideOrnaments/SideOrnaments'
import { social } from 'src/data/siteContent'

const NavLink = ({ label, to }) => {
  const { match } = useMatch(to)
  return (
    <Link to={to} className={`nav-link ${match ? 'nav-link-active' : ''}`}>
      {label}
    </Link>
  )
}

const SiteNav = () => {
  return (
    <header className="relative z-40 border-b border-kotrina-mist/50 bg-kotrina-soft/80 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-kotrina-parchment via-kotrina-coral to-kotrina-parchment opacity-80" />
      <div className="mx-auto flex max-w-site flex-col items-center px-5 py-3.5 sm:px-8 sm:py-4">
        <Link to={routes.home()} className="group flex flex-col items-center" aria-label="Kotrina home">
          <img
            src="/images/logo/kotrina.png"
            alt="Kotrina"
            className="h-14 w-auto opacity-95 transition-opacity duration-300 group-hover:opacity-70 sm:h-16 md:h-[4.5rem]"
          />
          <BrandFlourish className="mt-2 h-3 w-28 opacity-90 transition-opacity group-hover:opacity-100 sm:w-32" />
          <span className="mt-1.5 font-display text-xs tracking-brand text-kotrina-ink/80 sm:text-sm">
            Illustrator · Carlow
          </span>
        </Link>

        <nav
          className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:gap-x-8"
          aria-label="Primary"
        >
          <NavLink label="Portfolio" to={routes.home()} />
          <NavLink label="Workshops" to={routes.workshops()} />
          <NavLink label="About" to={routes.about()} />
          <NavLink label="Contact" to={routes.contact()} />
        </nav>
      </div>
    </header>
  )
}

const SiteFooter = () => {
  return (
    <footer className="mt-auto border-t border-kotrina-mist/60 bg-kotrina-soft/50">
      <div className="mx-auto flex max-w-site flex-col items-center gap-5 px-5 py-10 sm:px-8">
        <Link to={routes.home()} className="group flex flex-col items-center" aria-label="Kotrina home">
          <img
            src="/images/logo/kotrina.png"
            alt="Kotrina"
            className="h-10 w-auto opacity-90 transition-opacity group-hover:opacity-70 sm:h-12"
          />
          <BrandFlourish className="mt-2 h-3 w-24 opacity-80" />
        </Link>

        <p className="text-center font-display text-sm tracking-wide text-kotrina-ink/75 sm:text-base">
          Kotrina Cioladis · Illustrator
        </p>

        <div className="flex items-center gap-6">
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            className="font-display text-base tracking-brand text-kotrina-ink/85 hover:text-kotrina-rust sm:text-lg"
          >
            Instagram
          </a>
          <span className="h-1.5 w-1.5 rounded-full bg-kotrina-coral" aria-hidden />
          <a
            href={social.tiktok}
            target="_blank"
            rel="noreferrer"
            className="font-display text-base tracking-brand text-kotrina-ink/85 hover:text-kotrina-rust sm:text-lg"
          >
            TikTok
          </a>
        </div>

        <p className="text-center text-sm text-kotrina-ink/60 sm:text-base">
          © {new Date().getFullYear()} Kotrina Cioladis
        </p>
      </div>
    </footer>
  )
}

const SiteLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SideOrnaments />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}

export default SiteLayout
