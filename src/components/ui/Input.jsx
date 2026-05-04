import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Input = forwardRef(({ className, label, type = 'text', rightIcon, leftIcon, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-brand-dark mb-1.5 ml-1">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-4 flex items-center justify-center text-gray-400">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] transition-colors',
            'placeholder:text-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary',
            'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
            leftIcon && 'pl-11',
            rightIcon && 'pr-11',
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 flex items-center justify-center text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
