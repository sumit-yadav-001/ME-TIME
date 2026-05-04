import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/ui/BottomNav';
import { cn } from '../../lib/utils';
import Header from '../../components/ui/Header';

export default function Booking() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Upcoming');

  const bookings = [
    {
      id: 1,
      title: "Classic Manicure",
      salon: "The Gallery Salon",
      date: "12 May, 2026",
      time: "10:00 AM",
      status: "Upcoming",
      price: 45,
      image: "https://www.image2url.com/r2/default/images/1777877171613-cac80c7b-ecdb-4a53-bf00-92c01b19dcf5.jpg"
    },
    {
      id: 2,
      title: "Hair Styling",
      salon: "The Gallery Salon",
      date: "15 May, 2026",
      time: "02:30 PM",
      status: "Upcoming",
      price: 85,
      image: "https://www.image2url.com/r2/default/images/1777877371615-e2fab8d7-2482-4a73-8da2-935c9deb91be.jpg"
    },
    {
      id: 3,
      title: "Full Body Massage",
      salon: "The Gallery Salon",
      date: "05 May, 2026",
      time: "11:00 AM",
      status: "Completed",
      price: 120,
      image: "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg"
    }
  ];

  const filteredBookings = bookings.filter(b => b.status === activeTab);

  return (
    <div className="flex flex-col h-full bg-brand-gray pb-24 overflow-y-auto">
      <div className="max-w-2xl mx-auto w-full flex flex-col min-h-full">
        <Header title="My Bookings" showBack={true} />

        {/* Tabs */}
        <div className="px-6 mt-4 mb-6 flex gap-3">
          {['Upcoming', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 py-3 rounded-full text-[14px] font-bold transition-all duration-300 shadow-sm",
                activeTab === tab 
                  ? "bg-brand-primary text-brand-dark shadow-brand-primary/20" 
                  : "bg-white text-brand-text-gray border border-transparent hover:border-gray-200"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Booking List */}
        <div className="px-6 flex flex-col gap-5">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div 
                key={booking.id}
                className="bg-white rounded-[32px] p-5 shadow-sm border border-white hover:border-brand-primary transition-all duration-300 group"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                    <img 
                      src={booking.image} 
                      alt={booking.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-brand-dark text-base truncate pr-2">
                        {booking.title}
                      </h3>
                      <span className="font-black text-brand-primary text-lg tracking-tighter shrink-0">
                        ${booking.price}
                      </span>
                    </div>
                    
                    <p className="text-brand-text-gray text-xs font-medium mb-2 uppercase tracking-wider">{booking.salon}</p>
                    
                    <div className="flex items-center gap-4 text-brand-dark/80">
                      <div className="flex items-center gap-1.5">
                        <CalendarIcon size={12} className="text-brand-primary" />
                        <span className="text-[11px] font-bold">{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-brand-primary" />
                        <span className="text-[11px] font-bold">{booking.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-brand-gray">
                  {booking.status === 'Upcoming' ? (
                    <>
                      <button className="flex-1 py-3 rounded-2xl border-2 border-brand-gray text-brand-text-gray text-xs font-black uppercase tracking-widest hover:border-red-200 hover:text-red-500 transition-all active:scale-95">
                        Cancel
                      </button>
                      <button className="flex-1 py-3 rounded-2xl bg-brand-primary text-brand-dark text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all active:scale-95">
                        Reschedule
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="flex-1 py-3 rounded-2xl border-2 border-brand-gray text-brand-text-gray text-xs font-black uppercase tracking-widest hover:bg-brand-gray transition-all active:scale-95">
                        Rate Service
                      </button>
                      <button className="flex-1 py-3 rounded-2xl bg-brand-primary text-brand-dark text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all active:scale-95">
                        Book Again
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-white rounded-[40px] flex items-center justify-center mb-6 shadow-xl shadow-gray-100">
                <CalendarIcon size={40} className="text-gray-200" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-1">No Bookings Found</h3>
              <p className="text-brand-text-gray text-sm">You don't have any {activeTab.toLowerCase()} appointments yet.</p>
              <button 
                onClick={() => navigate('/explore')}
                className="mt-8 text-brand-primary font-black uppercase tracking-widest text-xs hover:text-brand-primary-hover transition-colors"
              >
                Find Services
              </button>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
