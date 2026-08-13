import { PageHeader } from "../components/shared/PageHeader";
import { CAREER_QUOTES } from "../data/career-quotes";

export function CareerPage() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Working Style"
        title="Working With Me"
        description="A few excerpts from past reviews and recommendations that reflect how I still work today: bringing clarity to ambiguous problems, keeping the user in view, taking ownership, and helping teams stay aligned through product and architecture decisions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-12">
        {CAREER_QUOTES.map((item) => (
          <article key={item.quote} className="bg-card border border-border p-5 sm:p-6">
            <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-4">{item.theme}</p>
            <blockquote className="text-sm text-foreground leading-relaxed mb-5">
              "{item.quote}"
            </blockquote>
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{item.source}</p>
          </article>
        ))}
      </div>

      <section className="max-w-2xl">
        <h3 className="font-mono text-sm font-semibold text-foreground tracking-widest uppercase mb-4">
          The Pattern
        </h3>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            I tend to be most useful when a team has a real system problem: product intent, UX behavior,
            architecture, and implementation details are all tangled together and need to become executable.
          </p>
          <p>
            The work usually starts with clarification. What is the actual user path? Which boundary is unstable?
            What should be a reusable primitive, and what belongs to the product surface? From there, I prefer
            typed APIs, small modules, tests, and review gates that keep the decision alive after the meeting ends.
          </p>
        </div>
      </section>
    </div>
  );
}
