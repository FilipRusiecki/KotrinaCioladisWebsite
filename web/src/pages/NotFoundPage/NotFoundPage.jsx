export const NotFoundPage = () => (
  <main className="flex min-h-screen flex-col items-center justify-center bg-kotrina-linen px-5 text-center">
    <h1 className="font-display text-3xl tracking-wide text-kotrina-ink">Page not found</h1>
    <p className="mt-3 text-kotrina-mute">That page doesn&apos;t exist.</p>
    <a
      href="/"
      className="mt-8 font-display text-sm tracking-wide text-kotrina-rust underline decoration-kotrina-coral underline-offset-8 hover:text-kotrina-blush"
    >
      Back home
    </a>
  </main>
)

export default NotFoundPage
