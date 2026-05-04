export default function Loader({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizes[size]} border-brand-primary border-t-brand-dark rounded-full animate-spin transition-all duration-300`} />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader size="lg" />
        <p className="text-brand-dark font-bold animate-pulse">Loading Me Time...</p>
      </div>
    </div>
  );
}
