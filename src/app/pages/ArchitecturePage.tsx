import { PageHeader } from "../components/shared/PageHeader";
import { Tag } from "../components/shared/Tag";
import { MarkdownRenderer } from "../components/shared/MarkdownRenderer";
import { ARCH_DOC } from "../data/architecture-doc";

export function ArchitecturePage() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Technical Writing"
        title="Architecture"
        description="Architecture works best when it is more than documentation. These pieces explore how principles become practical constraints through composable primitives, dependency boundaries, typed interfaces, automated tests, and delivery workflows."
      >
        <Tag>Markdown</Tag>
        <Tag>ADR</Tag>
        <Tag>Living Document</Tag>
      </PageHeader>
      <div className="bg-card border border-border p-5 sm:p-8">
        <MarkdownRenderer content={ARCH_DOC} />
      </div>
    </div>
  );
}
