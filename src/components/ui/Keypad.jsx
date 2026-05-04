import { Delete } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Keypad({ onKeyPress, onDelete, className }) {
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', 'del']
  ];

  return (
    <div className={cn("w-full bg-white pb-10 pt-4", className)}>
      <div className="grid grid-cols-3 gap-y-4 max-w-sm mx-auto">
        {keys.flat().map((key, index) => {
          if (key === 'del') {
            return (
              <button
                key={index}
                onClick={onDelete}
                className="h-16 flex items-center justify-center text-brand-dark hover:bg-brand-gray rounded-full transition-all active:scale-90"
              >
                <Delete size={24} />
              </button>
            );
          }
          
          if (key === '*') {
             return <div key={index} className="h-16" />;
          }

          return (
            <button
              key={index}
              onClick={() => onKeyPress(key)}
              className="h-16 flex flex-col items-center justify-center rounded-full hover:bg-brand-gray transition-all active:scale-90 group"
            >
              <span className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{key}</span>
              {/* Optional: Add small letters like a phone dialer if needed */}
            </button>
          );
        })}
      </div>
    </div>
  );
}
