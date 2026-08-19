import { PageHeader } from "../components/shared/PageHeader";
import { Tag } from "../components/shared/Tag";
import { EXPERIENCE_WORK } from "../data/experience";

export function ExperiencePage() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Experience"
        title="15+ Year Career Arc"
        description="From early IT and CMS work through NetSuite and Oracle, Knack, Swish Analytics, and co-founding Hiveginx: a career spent turning user needs into durable products, platforms, and architecture."
      />

      <div className="flex flex-col divide-y divide-border">
        {EXPERIENCE_WORK.map((item) => (
          <article key={`${item.company}-${item.role}`} className="py-9">
            <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
              <div>
                <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-3">
                  {item.period}
                </p>
                <h3 className="font-mono text-xl font-bold text-foreground leading-tight">
                  {item.company}
                </h3>
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mt-3">
                  {item.role}
                </p>
                {item.location && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {item.location}
                  </p>
                )}
              </div>
              <div className="min-w-0">
                {item.summary && (
                  <p className="text-sm text-foreground leading-relaxed max-w-3xl">
                    {item.summary}
                  </p>
                )}
                {item.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-0.5 flex-shrink-0">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
