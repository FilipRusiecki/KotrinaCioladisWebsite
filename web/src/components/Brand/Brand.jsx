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

export { BrandFlourish, BrandMark }
