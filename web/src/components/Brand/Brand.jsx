const BrandFlourish = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path
      d="M8 6 C28 2 40 10 60 6 C80 2 92 10 112 6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className="text-kotrina-coral"
    />
    <circle cx="60" cy="6" r="2.2" fill="currentColor" className="text-kotrina-rust" />
  </svg>
)

const BrandMark = ({ className = '' }) => (
  <img
    src="/images/brand/k-mark.png"
    alt=""
    className={className}
    aria-hidden
  />
)

const mamaSizes = {
  sm: {
    wrap: 'gap-3 sm:gap-4',
    word: 'w-24 sm:w-28',
    mark: 'h-20 w-auto sm:h-24',
  },
  md: {
    wrap: 'gap-4 sm:gap-5',
    word: 'w-28 sm:w-32',
    mark: 'h-24 w-auto sm:h-28',
  },
  lg: {
    wrap: 'items-center gap-5 sm:gap-8 md:gap-10',
    word: 'w-[min(45%,12rem)] sm:w-[min(45%,14rem)] md:w-[min(45%,16rem)]',
    mark: 'h-36 w-auto sm:h-44 md:h-52',
  },
}

const MamaZineLogos = ({ size = 'md', className = '' }) => {
  const s = mamaSizes[size] || mamaSizes.md
  return (
    <div className={`mx-auto flex items-center justify-center ${s.wrap} ${className}`}>
      <img
        src="/images/logo/mamazine.png"
        alt="MAMAzine"
        className={`h-auto object-contain ${s.word}`}
      />
      <img
        src="/images/logo/mamazine-logo-2.png"
        alt=""
        aria-hidden
        className={`object-contain ${s.mark}`}
      />
    </div>
  )
}

export { BrandFlourish, BrandMark, MamaZineLogos }
