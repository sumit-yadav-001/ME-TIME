import { ChevronLeft, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { authService } from '../../services/authService';

export default function Header({ title, showBack = true, rightElement, className }) {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  return (
    <div className={cn("flex items-center justify-between px-6 py-4 min-h-[60px] bg-white", className)}>
      <div className="flex-1">
        {showBack ? (
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-brand-gray transition-colors focus:outline-none"
            aria-label="Go back"
          >
            <ChevronLeft size={24} className="text-brand-dark" />
          </button>
        ) : (
          <button className="p-2 -ml-2 rounded-full hover:bg-brand-gray transition-colors focus:outline-none">
            <Menu size={24} className="text-brand-dark" />
          </button>
        )}
      </div>
      
      <div className="flex-[2] text-center">
        {title ? (
          <h1 className="text-[17px] font-bold text-brand-dark tracking-tight">{title}</h1>
        ) : (
          <h1 className="text-xl font-black text-brand-dark tracking-tighter italic">ME TIME</h1>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {rightElement || (
          <div 
            className="w-10 h-10 rounded-full bg-brand-gray overflow-hidden border border-gray-100 cursor-pointer transition-transform active:scale-95" 
            onClick={() => navigate('/account')}
          >
            <img 
              src="https://i.pravatar.cc/150?img=47" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
        )}
      </div>
    </div>
  );
}
