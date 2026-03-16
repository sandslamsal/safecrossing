import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "nav" | "hero" | "footer" | "card";
  className?: string;
  asLink?: boolean;
  priority?: boolean;
};

const variantStyles = {
  nav: "w-[182px] sm:w-[220px]",
  hero: "w-full max-w-[360px] sm:max-w-[430px]",
  footer: "w-[190px] sm:w-[228px]",
  card: "w-full max-w-[320px]"
} as const;

function LogoImage({ variant = "nav", className = "", priority = false }: Omit<LogoProps, "asLink">) {
  return (
    <span className={`inline-flex ${variantStyles[variant]} ${className}`.trim()}>
      <Image
        src="/images/safe-crossing-logo.png"
        alt="Safe Crossing Foundation logo depicting two schoolchildren crossing above a river"
        width={1536}
        height={1024}
        priority={priority}
        className="h-auto w-full object-contain"
      />
    </span>
  );
}

export function Logo({ variant = "nav", className = "", asLink = true, priority = false }: LogoProps) {
  if (!asLink) {
    return <LogoImage variant={variant} className={className} priority={priority} />;
  }

  return (
    <Link href="/" aria-label="Safe Crossing Foundation home" className={`inline-flex items-center ${className}`.trim()}>
      <LogoImage variant={variant} priority={priority} />
      <span className="sr-only">Safe Crossing Foundation</span>
    </Link>
  );
}
