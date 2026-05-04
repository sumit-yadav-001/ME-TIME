import { Settings, Bell, CreditCard, HelpCircle, LogOut, ChevronRight, User, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/ui/BottomNav';
import { authService } from '../../services/authService';
import { PageLoader } from '../../components/ui/Loader';
import { useState } from 'react';

export default function Account() {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await authService.logout();
      navigate('/login', { replace: true });
    } finally {
      setIsLoggingOut(false);
    }
  };

  const menuItems = [
    { icon: User, label: 'Profile Information', path: '/profile' },
    { icon: ShoppingBag, label: 'Order History', path: '/orders' },
    { icon: CreditCard, label: 'Payment Methods', path: '/add-card' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help' },
  ];

  return (
    <div className="flex flex-col h-full bg-brand-gray pb-24 overflow-y-auto">
      {isLoggingOut && <PageLoader />}
      <div className="max-w-2xl mx-auto w-full flex flex-col min-h-full">
        {/* Profile Header */}
        <div className="bg-white px-6 pt-16 pb-8 rounded-b-[40px] shadow-sm">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-brand-primary p-1 mb-4 shadow-lg">
                <img 
                  src="https://i.pravatar.cc/150?img=47" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover border-4 border-white"
                />
              </div>
              <button className="absolute bottom-6 right-0 bg-brand-dark text-white p-2 rounded-full border-2 border-white shadow-md">
                <Settings size={14} />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-brand-dark">Carol Peterson</h2>
            <p className="text-brand-text-gray text-sm">carol.peterson@email.com</p>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="px-6 mt-8 flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="flex items-center justify-between bg-white p-4 rounded-2xl border border-white hover:border-brand-primary transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-gray p-2.5 rounded-xl group-hover:bg-brand-primary/20 transition-colors">
                  <item.icon size={20} className="text-brand-dark" />
                </div>
                <span className="font-semibold text-brand-dark">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-gray-300 group-hover:text-brand-dark transition-colors" />
            </button>
          ))}

          <button
            onClick={handleLogout}
            className="flex items-center justify-between bg-white/50 p-4 rounded-2xl border border-transparent text-red-500 hover:bg-red-50 transition-all duration-300 mt-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-2.5 rounded-xl">
                <LogOut size={20} />
              </div>
              <span className="font-semibold">Log Out</span>
            </div>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
