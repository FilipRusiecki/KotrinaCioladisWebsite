const Vine = ({ mirror = false }) => (
  <svg
    viewBox="0 0 120 820"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-full w-full ${mirror ? '-scale-x-100' : ''}`}
    preserveAspectRatio="xMidYMin meet"
    aria-hidden
  >
    <path
      d="M58 12 C42 90 78 150 52 230 C28 310 74 370 48 460 C26 530 70 600 54 680 C44 730 62 780 50 808"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="text-kotrina-earth/35"
    />
    <path
      d="M76 40 C88 110 64 170 82 250 C98 320 70 390 86 470 C100 540 72 610 88 700"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      className="text-kotrina-coral/40"
    />
    <path
      d="M52 95 C28 88 18 108 34 118 C48 126 58 112 52 95Z"
      fill="currentColor"
      className="text-kotrina-earth/25"
    />
    <path
      d="M70 168 C94 158 108 178 92 190 C78 200 64 184 70 168Z"
      fill="currentColor"
      className="text-kotrina-coral/28"
    />
    <path
      d="M46 250 C22 242 14 266 30 276 C44 284 54 266 46 250Z"
      fill="currentColor"
      className="text-kotrina-earth/22"
    />
    <path
      d="M78 320 C102 308 118 332 100 346 C86 356 70 338 78 320Z"
      fill="currentColor"
      className="text-kotrina-parchment/55"
    />
    <path
      d="M48 410 C26 400 16 424 34 436 C48 444 56 426 48 410Z"
      fill="currentColor"
      className="text-kotrina-coral/22"
    />
    <path
      d="M82 490 C106 478 120 502 102 516 C88 526 74 508 82 490Z"
      fill="currentColor"
      className="text-kotrina-earth/20"
    />
    <path
      d="M50 575 C28 564 18 588 36 600 C48 608 58 590 50 575Z"
      fill="currentColor"
      className="text-kotrina-coral/26"
    />
    <path
      d="M84 650 C108 640 118 664 100 676 C88 684 76 666 84 650Z"
      fill="currentColor"
      className="text-kotrina-earth/24"
    />
    <path
      d="M52 730 C30 720 22 744 40 754 C52 762 60 744 52 730Z"
      fill="currentColor"
      className="text-kotrina-coral/20"
    />
    <circle cx="40" cy="140" r="3.2" fill="currentColor" className="text-kotrina-coral/35" />
    <circle cx="90" cy="290" r="2.6" fill="currentColor" className="text-kotrina-rust/25" />
    <circle cx="36" cy="450" r="3" fill="currentColor" className="text-kotrina-coral/30" />
    <circle cx="94" cy="560" r="2.4" fill="currentColor" className="text-kotrina-earth/30" />
    <circle cx="44" cy="690" r="2.8" fill="currentColor" className="text-kotrina-coral/28" />
  </svg>
)

const VineColumn = ({ mirror = false, side = 'left' }) => (
  <div
    className={`absolute inset-y-0 w-[7.5rem] opacity-90 xl:w-36 2xl:w-40 ${
      side === 'left' ? 'left-0' : 'right-0'
    }`}
  >
    <div className="flex min-h-full flex-col">
      <div className="h-[48rem] w-full shrink-0">
        <Vine mirror={mirror} />
      </div>
      <div className="h-[48rem] w-full shrink-0">
        <Vine mirror={mirror} />
      </div>
      <div className="h-[48rem] w-full shrink-0">
        <Vine mirror={mirror} />
      </div>
    </div>
  </div>
)

const SideOrnaments = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block" aria-hidden>
      <VineColumn side="left" />
      <VineColumn side="right" mirror />
    </div>
  )
}

export default SideOrnaments
