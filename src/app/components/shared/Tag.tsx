export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center h-6 font-mono text-[10px] text-muted-foreground border border-border/80 bg-muted/30 px-2 tracking-wider uppercase">
      {children}
    </span>
  );
}
