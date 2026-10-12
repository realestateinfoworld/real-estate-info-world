import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/** Top-of-page header for inner pages; clears the fixed navbar. */
export function PageHeader({ eyebrow, title, description, children, className }: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-line", className)}>
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="gold-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container relative pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-3xl">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] text-ivory md:text-7xl">{title}</h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-sand">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
