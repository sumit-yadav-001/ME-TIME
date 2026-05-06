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
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 0 }
  ];

  return (
    <div className="relative h-full bg-white overflow-y-auto pb-32 hide-scrollbar">

      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <img
          src="https://www.image2url.com/r2/default/images/1777877607139-d3fa6432-56d2-49b9-bb36-c6c1d55f449c.jpg"
          alt="Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 bg-white/20 backdrop-blur-xl p-2 rounded-full text-white z-20"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="absolute bottom-6 left-4 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">The Gallery Salon</h2>
          <p className="text-sm opacity-90">8502 Preston Rd. Inglewood • $$</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-8 md:px-12 mt-6 flex flex-col gap-8">

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 rounded-2xl">
          {[
            { icon: Phone, label: 'Call' },
            { icon: MessageSquare, label: 'Message' },
            { icon: Navigation, label: 'Directions' },
            { icon: Share2, label: 'Share' }
          ].map((action, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <action.icon size={20} className="text-gray-700" />
              </div>
              <span className="text-sm text-gray-700">{action.label}</span>
            </div>
          ))}
        </div>

        {/* Offers / Promo Cards */}
        <div className="flex gap-3 overflow-x-auto px-1 hide-scrollbar">
          <div className="min-w-[150px] sm:min-w-[215px] bg-white border border-gray-300 rounded-xl p-3 flex items-center gap-2 shadow-sm">
            <CheckCircle size={18} className="text-pink-500" />
            <div className="flex flex-col">
              <p className="font-semibold text-sm">10% OFF</p>
              <p className="text-xs text-gray-500">Use code FREE10</p>
            </div>
          </div>

          <div className="min-w-[150px] sm:min-w-[215px] bg-white border border-gray-300 rounded-xl p-3 flex items-center gap-2 shadow-sm">
            <Star size={18} className="text-pink-500" />
            <div className="flex flex-col">
              <p className="font-semibold text-sm">30% OFF</p>
              <p className="text-xs text-gray-500">Debit Card</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[18px] font-bold text-gray-800">Customer Reviews</h3>
            <button className="text-[16px] font-bold text-pink-600 hover:text-pink-700">Write a review</button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Rating */}
            <div className="w-32 flex flex-col items-center">
              <h2 className="text-3xl font-bold">4.8</h2>
              <div className="flex text-yellow-400 mt-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs text-gray-400 mt-1">27 global ratings</p>
            </div>

            {/* Right Bars */}
            <div className="flex-1 space-y-2">
              {ratings.map((r) => (
                <div key={r.stars} className="flex items-center gap-2">
                  <span className="text-xs w-3">{r.stars}</span>
                  <div className="flex-1 h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden border border-white">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${r.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="flex flex-col gap-6 mt-4">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-2 border-b pb-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-100">
                      <img src={`https://i.pravatar.cc/100?u=${review.id}`} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{review.name}</h4>
                      <div className="flex text-yellow-400 mt-1">
                        {[1,2,3,4,5].map((s) => <Star key={s} size={12} fill={s <= review.rating ? 'currentColor' : 'none'} className={s <= review.rating ? '' : 'text-gray-200'} />)}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">{review.date}</span>
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