import { cn } from '../../lib/utils';

export default function Button({
  children,
  variant = 'primary',
  className,
  fullWidth = true,
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-brand-primary hover:bg-brand-primary-hover text-brand-dark py-4 text-[15px]',
    outline: 'border border-gray-200 bg-transparent text-brand-dark hover:bg-gray-50 py-3.5',
    ghost: 'bg-transparent text-brand-dark hover:bg-gray-100 py-3',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth ? 'w-full' : '',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
