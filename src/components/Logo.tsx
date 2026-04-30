export default function Logo({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <defs>
          <linearGradient id="kg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="9" fill="url(#kg)" />
        <path d="M12 28h16v2H12zM14 26h12l-1-3h1l-1-4h-2l-1-3v-2h1v-2h-2v-2h-2v2h-2v2h1v2h-1l-1 3h-2l-1 4h1z" fill="#0B1010" />
      </svg>
    </div>
  );
}