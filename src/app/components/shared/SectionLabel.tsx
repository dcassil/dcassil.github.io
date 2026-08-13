export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] text-primary tracking-widest uppercase">
      {children}
    </p>
  );
}
