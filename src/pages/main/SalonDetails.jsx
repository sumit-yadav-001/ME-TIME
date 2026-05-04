import { ChevronLeft, Star, MapPin, Phone, MessageSquare, Navigation, Share2, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function SalonDetails() {
  const navigate = useNavigate();

  const reviews = [
    { id: 1, name: 'Jenny Wilson', rating: 5, date: '2 days ago', text: 'Amazing service! Patty is the best stylist I have ever had. Highly recommend!' },
    { id: 2, name: 'Guy Hawkins', rating: 4, date: '1 week ago', text: 'Very professional and clean salon. Loved the atmosphere.' }
  ];

  const ratings = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 60 },
    { stars: 3, percentage: 20 },
    { stars: 2, percentage: 10 },
    { stars: 1, percentage: 5 }
  ];

  return (
    <div className="flex flex-col h-full bg-white relative overflow-y-auto pb-24 hide-scrollbar">
      {/* Hero Image */}
      <div className="relative h-[320px] w-full shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
          alt="Salon" 
          className="w-full h-full object-cover"
        />
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-12 left-6 bg-white/20 backdrop-blur-xl p-3 rounded-2xl border border-white/30 text-white hover:bg-white/40 transition-all active:scale-95"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="flex-1 px-6 pt-8 flex flex-col">
        {/* Salon Info */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-brand-dark mb-2 tracking-tight italic">ME TIME</h1>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-bold text-brand-dark">4.8</span>
              <span className="text-xs text-brand-text-gray">(1.2k reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-brand-text-gray">
              <MapPin size={14} className="text-brand-primary" />
              <span className="text-sm font-medium">123 Beauty Lane, New York, NY</span>
            </div>
          </div>
          <div className="bg-brand-primary/10 px-3 py-1.5 rounded-full flex items-center gap-2 border border-brand-primary/20">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Open Now</span>
          </div>
        </div>

        {/* Action Icons */}
        <div className="grid grid-cols-4 gap-4 bg-brand-gray p-6 rounded-[32px] mb-10 shadow-inner">
          {[
            { icon: Phone, label: 'Call' },
            { icon: MessageSquare, label: 'Message' },
            { icon: Navigation, label: 'Directions' },
            { icon: Share2, label: 'Share' }
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 group-active:scale-90">
                <action.icon size={20} className="text-brand-dark group-hover:text-white transition-colors" />
              </div>
              <span className="text-[9px] font-black text-brand-text-gray uppercase tracking-[0.1em]">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Promo Banners */}
        <div className="flex gap-4 mb-12 overflow-x-auto hide-scrollbar -mx-6 px-6">
          <div className="min-w-[280px] bg-brand-primary rounded-[32px] p-6 flex items-center gap-5 shadow-xl shadow-brand-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150" />
            <div className="bg-white/20 p-4 rounded-2xl relative z-10">
              <CheckCircle size={28} className="text-white" />
            </div>
            <div className="relative z-10">
              <p className="text-white font-black text-2xl leading-none mb-1 tracking-tighter">10% OFF</p>
              <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">First booking</p>
            </div>
          </div>
          <div className="min-w-[280px] bg-brand-dark rounded-[32px] p-6 flex items-center gap-5 shadow-xl shadow-brand-dark/20 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-primary/5 rounded-full -ml-10 -mb-10 transition-transform duration-700 group-hover:scale-150" />
            <div className="bg-brand-primary/10 p-4 rounded-2xl relative z-10 text-brand-primary">
              <Star size={28} fill="currentColor" />
            </div>
            <div className="relative z-10">
              <p className="text-white font-black text-2xl leading-none mb-1 tracking-tighter">30% OFF</p>
              <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">Debit Card</p>
            </div>
          </div>
        </div>

        {/* Review Summary */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl font-black text-brand-dark tracking-tight">Reviews</h3>
            <button className="text-xs font-black text-brand-primary uppercase tracking-widest hover:text-brand-primary-hover transition-colors">Write a review</button>
          </div>
          
          <div className="flex gap-10 mb-10 items-center">
            <div className="flex flex-col items-center justify-center bg-brand-gray rounded-[40px] w-32 h-32 shrink-0 border border-white shadow-lg shadow-gray-100">
              <span className="text-5xl font-black text-brand-dark tracking-tighter">4.8</span>
              <div className="flex text-yellow-400 mt-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
              </div>
              <span className="text-[9px] font-black text-brand-text-gray uppercase tracking-widest">Average</span>
            </div>
            
            <div className="flex-1 flex flex-col gap-2.5">
              {ratings.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-brand-text-gray w-2">{rating.stars}</span>
                  <div className="flex-1 h-2 bg-brand-gray rounded-full overflow-hidden border border-white">
                    <div 
                      className="h-full bg-brand-primary rounded-full transition-all duration-1000" 
                      style={{ width: `${rating.percentage}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gray border border-white shadow-sm overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${review.id}`} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-base">{review.name}</h4>
                      <div className="flex text-yellow-400 mt-0.5">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill={s <= review.rating ? "currentColor" : "none"} className={s <= review.rating ? "" : "text-gray-200"} />)}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-brand-text-gray uppercase tracking-widest">{review.date}</span>
                </div>
                <p className="text-sm text-brand-text-gray leading-relaxed font-medium pl-16">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-2xl border-t border-brand-gray z-40">
        <div className="flex items-center gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col">
            <span className="text-[10px] text-brand-text-gray font-black uppercase tracking-widest mb-1">Total Price</span>
            <span className="text-3xl font-black text-brand-dark tracking-tighter">$45.00</span>
          </div>
          <Button 
            className="flex-1 h-16 text-lg font-black shadow-2xl shadow-brand-primary/30 uppercase tracking-widest"
            onClick={() => navigate('/checkout')}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
