interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center flex flex-col items-center" : "text-left"} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-muted-foreground ${centered ? "max-w-2xl text-center" : "max-w-xl text-left"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
