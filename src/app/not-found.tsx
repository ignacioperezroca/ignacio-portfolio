import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6 py-24 text-center dark:bg-ink">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-green dark:text-paper-warm">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ink dark:text-paper sm:text-5xl">
          Page not found.
        </h1>
        <p className="mt-4 text-base leading-7 text-ink-muted dark:text-paper/70">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex rounded-md border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-line transition-premium hover:border-ink/20 hover:bg-paper/80 dark:border-paper/10 dark:bg-paper/5 dark:text-paper dark:hover:border-paper/25 dark:hover:bg-paper/10"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
