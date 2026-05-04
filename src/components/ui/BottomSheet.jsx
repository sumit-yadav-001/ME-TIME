import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BottomSheet({ isOpen, onClose, title, children }) {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Small delay to ensure the element is in DOM before starting transition
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      // Wait for transition to complete before removing from DOM
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 transition-transform duration-300 transform",
          "sm:max-w-md sm:mx-auto",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="p-1 -ml-1 text-brand-dark focus:outline-none"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-bold text-brand-dark">{title}</h2>
          </div>
        </div>
        
        <div className="max-h-[80vh] overflow-y-auto hide-scrollbar pb-6">
          {children}
        </div>
      </div>
    </>
  );
}
