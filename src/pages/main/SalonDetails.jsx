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
    <div className="flex flex-col h-full bg-white relative overflow-y-auto pb-32 md:pb-24 lg:pb-24 hide-scrollbar">

      {/* Hero Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex-shrink-0">
        <img
          src="https://www.image2url.com/r2/default/images/1777877607139-d3fa6432-56d2-49b9-bb36-c6c1d55f449c.jpg"
          alt="Salon"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 sm:top-12 left-4 sm:left-6 bg-white/20 backdrop-blur-xl p-2 sm:p-3 rounded-2xl border border-white/30 text-white hover:bg-white/40 transition-all active:scale-95 z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="absolute inset-0 text-center top-1/2 -translate-y-1/2 text-2xl sm:text-3xl font-bold text-white drop-shadow-md">MeTime</h1>
      </div>

      <div className="flex-1 px-4 sm:px-8 md:px-12 mt-6 flex flex-col gap-8">

        {/* Salon Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">The Gallery Salon</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3">8502 Preston Rd. Inglewood • $$</p>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm font-bold text-gray-800">4.8</span>
              <span className="text-xs text-gray-400">(27 global ratings)</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
              <MapPin size={14} className="text-pink-400" />
              <span>123 Beauty Lane, New York, NY</span>
            </div>
          </div>

          <div className="bg-pink-50/80 px-3 py-1.5 rounded-full flex items-center gap-2 border border-pink-200 shrink-0">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-pink-600">Open Now</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 sm:p-6 rounded-3xl mb-6">
          {[
            { icon: Phone, label: 'Call' },
            { icon: MessageSquare, label: 'Message' },
            { icon: Navigation, label: 'Directions' },
            { icon: Share2, label: 'Share' }
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-center gap-1 sm:gap-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-pink-400 hover:text-white transition-all active:scale-95">
                <action.icon size={20} className="text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Promo Banners */}
        <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4 mb-6">
          <div className="min-w-[250px] sm:min-w-[280px] bg-pink-50 rounded-3xl p-4 flex items-center gap-3 shadow-lg relative">
            <CheckCircle size={28} className="text-white/80 bg-pink-400 p-1 rounded-full" />
            <div>
              <p className="text-lg sm:text-xl font-bold text-pink-600 mb-1">10% OFF</p>
              <p className="text-[10px] sm:text-xs font-bold text-gray-700 uppercase tracking-widest">First booking</p>
            </div>
          </div>

          <div className="min-w-[250px] sm:min-w-[280px] bg-pink-100 rounded-3xl p-4 flex items-center gap-3 shadow-lg relative">
            <Star size={28} className="text-white/80 bg-pink-400 p-1 rounded-full" />
            <div>
              <p className="text-lg sm:text-xl font-bold text-pink-600 mb-1">30% OFF</p>
              <p className="text-[10px] sm:text-xs font-bold text-gray-700 uppercase tracking-widest">Debit Card</p>
            </div>
          </div>
        </div>

        {/* Review Summary */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl sm:text-2xl font-bold">Customer Reviews</h3>
            <button className="text-xs sm:text-sm font-bold text-pink-600 uppercase tracking-widest hover:text-pink-700">Write a review</button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-3xl w-full lg:w-40 h-32 sm:h-40 border shadow-md p-4">
              <span className="text-3xl sm:text-4xl font-bold">4.8</span>
              <div className="flex text-yellow-400 mt-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest">Average</span>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              {ratings.map((r) => (
                <div key={r.stars} className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 w-4">{r.stars}</span>
                  <div className="flex-1 h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden border border-white">
                    <div className="h-full bg-pink-400 rounded-full transition-all" style={{ width: `${r.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-2 border-b pb-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-100">
                      <img src={`https://i.pravatar.cc/100?u=${review.id}`} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">{review.name}</h4>
                      <div className="flex text-yellow-400 mt-1">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill={s <= review.rating ? 'currentColor' : 'none'} className={s <= review.rating ? '' : 'text-gray-200'} />)}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base pl-16 sm:pl-20">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 sm:p-6 bg-white/90 backdrop-blur-lg border-t border-gray-200 z-50">
        <div className="flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-1">
            <span className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Total Price</span>
            <span className="text-2xl sm:text-3xl font-bold text-gray-800">$45.00</span>
          </div>
          <Button
            className="flex-1 h-14 sm:h-16 text-lg font-bold shadow-lg uppercase tracking-widest"
            onClick={() => navigate('/checkout')}
          >
            Book Now
          </Button>
        </div>
      </div>

    </div>
  );
}