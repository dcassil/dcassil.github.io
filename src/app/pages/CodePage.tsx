import { GitBranch, ExternalLink, Cpu } from "lucide-react";
import { PageHeader } from "../components/shared/PageHeader";
import { Tag } from "../components/shared/Tag";
import { CODE_FAMILIES, CODE_REPOS } from "../data/code-repos";

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

export function CodePage() {
  const repoIndexMap = new Map(CODE_REPOS.map((repo, i) => [repo.id, i + 1]));

  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Open Source"
        title="Code"
        description="A focused set of repositories: three featured projects that support the architecture thesis, with supporting libraries beneath them to show the systems thinking predates AI."
      />

      <div className="space-y-9">
        {CODE_FAMILIES.map((family) => {
          const repos = CODE_REPOS.filter((repo) => repo.family === family);

          return (
            <section key={family}>
              <h3 className="font-mono text-xs font-semibold text-foreground tracking-widest uppercase mb-3">
                {family}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {repos.map((repo) => {
                  const inner = (
                    <>
                      <div className="flex items-center gap-3 mb-4 min-w-0">
                        <span className="font-mono text-xs text-muted-foreground">{String(repoIndexMap.get(repo.id)).padStart(2, "0")}</span>
                        {repo.url ? (
                          <GitBranch size={14} className="text-muted-foreground flex-shrink-0" />
                        ) : (
                          <Cpu size={14} className="text-muted-foreground flex-shrink-0" />
                        )}
                        <h3 className="font-mono text-sm font-semibold text-foreground tracking-wide truncate">{repo.title}</h3>
                        {repo.url ? (
                          <ExternalLink size={13} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                        ) : (
                          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase ml-auto flex-shrink-0">Private</span>
                        )}
                      </div>
                      <div className="mb-4 flex-1">
                        <DescriptionText text={repo.description} className="text-xs text-muted-foreground leading-relaxed" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {repo.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                      </div>
                    </>
                  );

                  return repo.url ? (
                    <a
                      key={repo.id}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col bg-card border border-border p-5 transition-all hover:bg-muted/40 hover:border-primary/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={repo.id} className="group flex flex-col bg-card border border-border p-5">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
