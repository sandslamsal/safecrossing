type ContactFormProps = {
  title: string;
  description: string;
  submitLabel?: string;
  subjectOptions?: string[];
};

export function ContactForm({
  title,
  description,
  submitLabel = "Send message",
  subjectOptions = ["General Inquiry", "Volunteer", "Partnership", "Sponsorship", "Donation"]
}: ContactFormProps) {
  return (
    <div className="rounded-[2rem] border border-border/70 bg-white/88 p-7 shadow-[0_24px_60px_rgba(26,63,97,0.08)]">
      <h2 className="font-heading text-4xl leading-tight tracking-[-0.04em] text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
      {/* Replace the placeholder form action with your API route, CRM, or server action later. */}
      <form action="#" method="post" className="mt-8 grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-ink">
            First name
            <input
              type="text"
              name="firstName"
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-base text-ink outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              placeholder="Your first name"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-ink">
            Last name
            <input
              type="text"
              name="lastName"
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-base text-ink outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              placeholder="Your last name"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-ink">
            Email
            <input
              type="email"
              name="email"
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-base text-ink outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              placeholder="name@example.org"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-ink">
            Subject
            <select
              name="subject"
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-base text-ink outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              defaultValue={subjectOptions[0]}
            >
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Organization
          <input
            type="text"
            name="organization"
            className="rounded-2xl border border-border bg-surface px-4 py-3 text-base text-ink outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            placeholder="Optional"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Message
          <textarea
            name="message"
            rows={6}
            className="rounded-[1.6rem] border border-border bg-surface px-4 py-3 text-base text-ink outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            placeholder="Tell us how you would like to help or what you would like to discuss."
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-muted">This frontend form is ready to be connected to a backend workflow later.</p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(31,77,120,0.18)] transition hover:-translate-y-0.5 hover:bg-[#183f62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
