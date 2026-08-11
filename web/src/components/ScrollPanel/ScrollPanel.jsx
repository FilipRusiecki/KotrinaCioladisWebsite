const ScrollPanel = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* parchment panel */}
      <div className="relative z-10 rounded-sm border border-kotrina-earth/20 bg-kotrina-soft/90 px-6 py-8 shadow-[0_10px_28px_rgba(47,42,39,0.06)] sm:px-8 sm:py-10 md:pr-14">
        {children}
      </div>

      {/* rolled right edge */}
      <div
        className="pointer-events-none absolute -right-2 top-3 bottom-3 z-20 w-5 sm:-right-3 sm:w-6"
        aria-hidden
      >
        <div className="h-full w-full rounded-r-md border border-kotrina-earth/25 border-l-kotrina-earth/15 bg-gradient-to-r from-kotrina-parchment via-kotrina-soft to-kotrina-mist/80 shadow-[2px_0_8px_rgba(47,42,39,0.08)]" />
        <div className="absolute inset-y-2 left-0 w-px bg-kotrina-earth/20" />
        <div className="absolute inset-y-4 left-1.5 w-px bg-kotrina-earth/10 sm:left-2" />
      </div>

      {/* soft top/bottom curl hints */}
      <div
        className="pointer-events-none absolute -right-1 top-1 z-30 h-3 w-7 rounded-full bg-kotrina-parchment/90 shadow-sm sm:-right-2"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1 bottom-1 z-30 h-3 w-7 rounded-full bg-kotrina-parchment/90 shadow-sm sm:-right-2"
        aria-hidden
      />

      {/* left edge stitch */}
      <div
        className="pointer-events-none absolute bottom-4 left-0 top-4 w-px bg-gradient-to-b from-transparent via-kotrina-earth/25 to-transparent"
        aria-hidden
      />
    </div>
  )
}

export default ScrollPanel
