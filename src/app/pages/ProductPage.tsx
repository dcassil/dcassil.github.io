import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../components/shared/PageHeader";
import { Tag } from "../components/shared/Tag";
import { PRODUCT_SUITE_DESCRIPTIONS, PRODUCT_WORK } from "../data/product-work";
import type { Section } from "../types";

function DescriptionText({ text, className }: { text: string; className: string }) {
  return (
    <>
      {text.split("\n\n").map((paragraph, index) => (
        <p key={paragraph} className={`${className} ${index > 0 ? "mt-3" : ""}`}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

export function ProductPage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Selected Work"
        title="Product"
        description="Five product stories that show the range: founder-facing SaaS, AI guardrails, live-app editing, workflow intelligence, and reusable protocol design."
      />

      <div className="mb-10 border-y border-border py-5">
        <button
          type="button"
          onClick={() => { navigate("product/component-lib/demo"); }}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-primary hover:gap-3 transition-all duration-200"
        >
          View component library demo <ArrowRight size={12} />
        </button>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {PRODUCT_WORK.map((work, index) => {
          const showSuite = Boolean(work.suite && work.suite !== PRODUCT_WORK[index - 1]?.suite);

          return (
            <Fragment key={work.id}>
              {showSuite && work.suite && (
                <div className="pt-2 pb-7">
                  <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-3">
                    Product suite
                  </p>
                  <h3 className="font-mono text-xl font-semibold text-foreground leading-tight">
                    {work.suite}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mt-3">
                    {PRODUCT_SUITE_DESCRIPTIONS[work.suite]}
                  </p>
                </div>
              )}
              <article className="py-10 group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-muted-foreground tracking-widest">{work.period}</span>
                      <span className="text-border">·</span>
                      <span className="font-mono text-xs text-foreground tracking-widest uppercase">{work.status}</span>
                      <span className="text-border">·</span>
                      <span className="font-mono text-xs" style={{ color: work.accent }}>{work.category}</span>
                    </div>
                    <h3 className="font-mono text-lg font-semibold text-foreground mb-4 leading-tight">{work.title}</h3>
                    <div className="mb-5">
                      <DescriptionText text={work.description} className="text-sm text-muted-foreground leading-relaxed max-w-xl" />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {work.tags.slice(0, 3).map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                    {work.url && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-primary hover:gap-3 transition-all duration-200"
                      >
                        View project <ArrowRight size={12} />
                      </a>
                    )}
                  </div>
                  <div className="w-full sm:w-[220px] sm:flex-none">
                    <div className="grid grid-cols-3 sm:grid-cols-1 gap-px bg-border">
                      {work.metrics.map((m) => (
                        <div key={m.label} className="bg-card px-4 py-3 min-w-0">
                          <div className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">{m.label}</div>
                          <div className="font-mono text-xs font-semibold leading-snug mt-1.5" style={{ color: work.accent }}>{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
