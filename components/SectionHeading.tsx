import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ivory md:text-6xl">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-sand md:text-lg">{description}</p>
      )}
    </div>
  );
}
