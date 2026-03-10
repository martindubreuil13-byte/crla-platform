export default function BadgeLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--gold-main)] bg-[var(--navy-soft)]">
        <span className="text-sm font-bold text-[var(--gold-main)]">CRLA</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-wide text-[var(--gold-soft)]">
          Certified
        </span>
        <span className="text-xs text-[var(--text-muted)]">
          Renovation Listing Agent
        </span>
      </div>
    </div>
  );
}