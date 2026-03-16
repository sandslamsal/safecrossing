type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-secondary">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-balance text-3xl leading-tight tracking-[-0.045em] text-ink sm:text-[2.8rem]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-[1.05rem]">{description}</p> : null}
    </div>
  );
}
