import Image from "next/image";
import Link from "next/link";

import { getAssetPath } from "@/lib/asset-path";

type LogoProps = {
  variant?: "nav" | "hero" | "footer" | "card";
  className?: string;
  asLink?: boolean;
  priority?: boolean;
};

const variantStyles = {
  nav: "w-[208px] sm:w-[250px]",
  hero: "w-full max-w-[420px] sm:max-w-[540px]",
  footer: "w-[206px] sm:w-[244px]",
  card: "w-full max-w-[340px]"
} as const;

function LogoImage({ variant = "nav", className = "", priority = false }: Omit<LogoProps, "asLink">) {
  return (
    <span className={`inline-flex ${variantStyles[variant]} ${className}`.trim()}>
      <Image
        src={getAssetPath("/images/safe-crossing-logo.png")}
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
