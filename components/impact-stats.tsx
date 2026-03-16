import type { ImpactStat } from "@/data/site-content";

type ImpactStatsProps = {
  stats: ImpactStat[];
};

export function ImpactStats({ stats }: ImpactStatsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-[1.9rem] border border-border/70 bg-white/88 p-6 shadow-[0_22px_55px_rgba(31,77,120,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(31,77,120,0.14)]"
        >
          <p className="font-heading text-5xl tracking-[-0.05em] text-primary">{stat.value}</p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-secondary">{stat.label}</p>
          <p className="mt-4 text-sm leading-6 text-muted">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}
