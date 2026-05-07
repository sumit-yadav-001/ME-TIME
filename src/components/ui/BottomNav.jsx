// import { Home, Calendar } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { cn } from '../../lib/utils';

// export default function BottomNav() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navItems = [
//     { icon: Home, label: 'Home', path: '/' },
//     { icon: Calendar, label: 'Booking', path: '/booking' },
//   ];

//   return (
//     <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-3 z-50 flex justify-between items-center shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
//       {navItems.map((item) => {
//         const Icon = item.icon;
//         const isActive = location.pathname === item.path;
        
//         return (
//           <button
//             key={item.label}
//             onClick={() => navigate(item.path)}
//             className={cn(
//               "flex flex-col items-center gap-1 transition-all duration-300",
//               isActive ? "text-brand-dark" : "text-gray-400 hover:text-gray-600"
//             )}
//           >
//             <div className={cn(
//               "p-2 rounded-2xl transition-all duration-300",
//               isActive ? "bg-brand-primary" : "bg-transparent"
//             )}>
//               <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
//             </div>
//             <span className={cn(
//               "text-[10px] font-bold uppercase tracking-wider",
//               isActive ? "opacity-100" : "opacity-0"
//             )}>
//               {item.label}
//             </span>
//           </button>
//         );
//       })}
//     </div>
//   );
// }

