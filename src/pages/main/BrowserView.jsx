import { useState } from 'react';
import { Search, MapPin, Star, Filter, ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import Input from '../../components/ui/Input';

export default function BrowserView() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const salons = [
    {
      id: 1,
      name: "Glow & Co. Salon",
      location: "Downtown, New York",
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
      category: "Hair"
    },
    {
      id: 3,
      name: "Nail Art Studio",
      location: "Manhattan, New York",
      rating: 4.7,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
      category: "Nails"
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Search Header */}
      <div className="px-6 pt-12 pb-6 border-b border-gray-100 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft size={24} className="text-brand-dark" />
          </button>
          <div className="flex-1">
            <Input 
              placeholder="Search salons, services..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search size={18} className="text-gray-400" />}
              className="bg-brand-gray border-transparent rounded-2xl"
            />
          </div>
          <button className="bg-brand-primary p-2.5 rounded-xl shadow-lg shadow-brand-primary/20">
            <Filter size={20} className="text-brand-dark" />
          </button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {['All', 'Hair', 'Spa', 'Nails', 'Massage'].map((cat) => (
            <button key={cat} className={cn(
              "px-4 py-1.5 rounded-full text-xs font-bold transition-all",
              cat === 'All' ? "bg-brand-dark text-white" : "bg-brand-gray text-gray-500"
            )}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-brand-dark">32 Salons near you</h2>
          <button className="text-xs text-brand-primary-hover font-bold flex items-center gap-1">
            <MapPin size={14} /> Map View
          </button>
        </div>

        {salons.map((salon) => (
          <div 
            key={salon.id}
            onClick={() => navigate(`/salon/${salon.id}`)}
            className="group cursor-pointer"
          >
            <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] mb-3">
              <img 
                src={salon.image} 
                alt={salon.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <button className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2.5 rounded-full border border-white/20 text-white hover:bg-brand-primary hover:text-brand-dark transition-all">
                <Heart size={20} />
              </button>
              <div className="absolute bottom-4 left-4 bg-brand-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                <Star size={14} className="text-brand-primary" fill="currentColor" />
                <span className="text-xs font-bold text-white">{salon.rating}</span>
                <span className="text-[10px] text-white/60">({salon.reviews})</span>
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-brand-dark text-lg group-hover:text-brand-primary-hover transition-colors">
                  {salon.name}
                </h3>
                <p className="text-brand-text-gray text-sm flex items-center gap-1 mt-1">
                  <MapPin size={12} /> {salon.location}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-brand-primary-hover uppercase tracking-widest">{salon.category}</span>
                <span className="text-xs font-medium text-gray-400 mt-1">Starts from $30</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
