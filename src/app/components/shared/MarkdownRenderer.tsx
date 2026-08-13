export function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*"))
      return <em key={i} className="italic text-muted-foreground">{part.slice(1, -1)}</em>;
    if (part.startsWith("`") && part.endsWith("`"))
      return <code key={i} className="font-mono text-[0.82em] text-primary bg-muted px-1.5 py-0.5 rounded-sm">{part.slice(1, -1)}</code>;
    return part;
  });
}

export function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i] ?? "";

    // Fenced code block
    if (line.startsWith("```")) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !(lines[i] ?? "").startsWith("```")) {
        code.push(lines[i] ?? "");
        i++;
      }
      elements.push(
        <pre key={i} className="my-6 p-4 bg-muted border border-border overflow-x-auto">
          <code className="font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre">
            {code.join("\n")}
          </code>
        </pre>
      );
    }
    // Table
    else if (line.startsWith("|") && line.endsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && (lines[i] ?? "").startsWith("|")) {
        if (!/^\|[-| :]+\|$/.exec(lines[i] ?? "")) {
          rows.push((lines[i] ?? "").split("|").slice(1, -1).map((c) => c.trim()));
        }
        i++;
      }
      elements.push(
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm font-mono">
            <thead>
              <tr>
                {rows[0]?.map((cell, ci) => (
                  <th key={ci} className="border border-border px-4 py-2 text-left text-muted-foreground font-medium text-xs uppercase tracking-wider">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className="border-b border-border hover:bg-muted/30 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-border px-4 py-2 text-foreground">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }
    // HR
    else if (/^---+$/.exec(line)) {
      elements.push(<hr key={i} className="my-8 border-t border-border" />);
    }
    // H1
    else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="font-mono text-2xl font-bold text-foreground mt-10 mb-4 leading-tight">
          {line.slice(2)}
        </h1>
      );
    }
    // H2
    else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-mono text-base font-semibold text-foreground mt-10 mb-3 tracking-wide uppercase">
          <span className="text-primary mr-2">§</span>{line.slice(3)}
        </h2>
      );
    }
    // H3
    else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-mono text-sm font-semibold text-foreground mt-6 mb-2 tracking-widest uppercase">
          {line.slice(4)}
        </h3>
      );
    }
    // Blockquote / backtick line (single-line code as inline block)
    else if (line.startsWith("`") && line.endsWith("`") && !line.startsWith("```")) {
      elements.push(
        <p key={i} className="font-mono text-xs text-muted-foreground mb-4">{line.slice(1, -1)}</p>
      );
    }
    // List item
    else if (/^[-*] /.exec(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.exec(lines[i] ?? "")) {
        items.push((lines[i] ?? "").slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="my-4 space-y-1">
          {items.map((item, ii) => (
            <li key={ii} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5 flex-shrink-0">—</span>
              <span>{parseInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }
    // Empty line
    else if (line.trim() === "") {
      // skip
    }
    // Paragraph
    else {
      elements.push(
        <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
          {parseInline(line)}
        </p>
      );
    }

    i++;
  }

  return <div className="max-w-2xl">{elements}</div>;
}
