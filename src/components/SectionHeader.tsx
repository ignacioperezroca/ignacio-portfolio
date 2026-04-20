import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default"
}: SectionHeaderProps) {
  const isInverse = tone === "inverse";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p
        className={cn(
          "mb-4 text-xs font-semibold uppercase tracking-[0.22em]",
          isInverse ? "text-paper-warm" : "text-accent-green dark:text-paper-warm"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-6xl",
          isInverse ? "text-paper" : "text-ink dark:text-paper"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 sm:text-lg",
            isInverse ? "text-paper/68" : "text-ink-muted dark:text-paper/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
