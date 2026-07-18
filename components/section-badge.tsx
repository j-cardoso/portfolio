export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
      {children}
    </span>
  );
}
