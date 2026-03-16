import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  withArrow?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold tracking-[0.02em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantStyles = {
  primary:
    "border-primary bg-primary px-6 py-3 text-white shadow-[0_18px_45px_rgba(31,77,120,0.22)] hover:-translate-y-0.5 hover:bg-[#183f62]",
  secondary:
    "border-primary/15 bg-white/86 px-6 py-3 text-primary shadow-[0_12px_35px_rgba(31,77,120,0.08)] hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white",
  ghost: "border-transparent px-4 py-3 text-muted hover:bg-white/70 hover:text-ink"
} as const;

const sizeStyles = {
  sm: "px-4 py-2.5 text-sm",
  md: ""
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}>
      <span>{children}</span>
      {withArrow ? <ArrowRightIcon className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}
