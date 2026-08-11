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
    <header className="sticky top-0 z-40 border-b border-kotrina-mist/50 bg-kotrina-soft/90 shadow-[0_8px_24px_rgba(47,42,39,0.06)] backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-kotrina-parchment via-kotrina-coral to-kotrina-parchment opacity-80" />
      <div className="mx-auto flex max-w-site flex-col items-center px-5 py-2.5 sm:px-8 sm:py-3">
        <Link to={routes.home()} className="group flex flex-col items-center" aria-label="Kotrina home">
          <img
            src="/images/logo/kotrina.png"
            alt="Kotrina"
            className="h-11 w-auto opacity-95 transition-opacity duration-300 group-hover:opacity-70 sm:h-12 md:h-14"
          />
          <BrandFlourish className="mt-1.5 h-2.5 w-24 opacity-90 transition-opacity group-hover:opacity-100 sm:w-28" />
          <span className="mt-1 font-display text-[0.7rem] tracking-brand text-kotrina-ink/80 sm:text-xs">
            Illustrator · Carlow
          </span>
        </Link>

        <nav
          className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:gap-x-8"
          aria-label="Primary"
        >
          <NavLink label="Portfolio" to={routes.home()} />
          <NavLink label="Workshops" to={routes.workshops()} />
          <NavLink label="Art Club" to={routes.artClub()} />
          <NavLink label="About" to={routes.about()} />
          <NavLink label="Contact" to={routes.contact()} />
        </nav>
      </div>
    </header>
  )
}

const SiteFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-kotrina-mist/50 bg-kotrina-soft/90 shadow-[0_-8px_24px_rgba(47,42,39,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[92rem] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link to={routes.home()} className="group shrink-0" aria-label="Kotrina home">
            <img
              src="/images/logo/kotrina.png"
              alt="Kotrina"
              className="h-8 w-auto opacity-90 transition-opacity group-hover:opacity-70 sm:h-9"
            />
          </Link>
          <div className="min-w-0">
            <p className="truncate font-display text-sm tracking-wide text-kotrina-ink/80 sm:text-base">
              Kotrina Cioladis · Illustrator
            </p>
            <p className="text-xs text-kotrina-ink/55 sm:text-sm">
              © {new Date().getFullYear()} Kotrina Cioladis
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            className="font-display text-sm tracking-brand text-kotrina-ink/85 hover:text-kotrina-rust sm:text-base"
          >
            Instagram
          </a>
          <span className="h-1.5 w-1.5 rounded-full bg-kotrina-coral" aria-hidden />
          <a
            href={social.tiktok}
            target="_blank"
            rel="noreferrer"
            className="font-display text-sm tracking-brand text-kotrina-ink/85 hover:text-kotrina-rust sm:text-base"
          >
            TikTok
          </a>
        </div>
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
        <main className="flex-1 pb-16 sm:pb-[4.25rem]">{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}

export default SiteLayout
