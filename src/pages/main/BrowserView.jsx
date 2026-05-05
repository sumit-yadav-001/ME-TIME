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
      category: "Hair",
      services: [
        { id: 1, title: "Haircut", time: "45 mins", price: 90, image: "https://www.image2url.com/r2/default/images/1777877371615-e2fab8d7-2482-4a73-8da2-935c9deb91be.jpg" },
        { id: 2, title: "Massage", time: "60 mins", price: 60, image: "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg" },
        { id: 3, title: "Nails", time: "30 mins", price: 30, image: "https://www.image2url.com/r2/default/images/1777877171613-cac80c7b-ecdb-4a53-bf00-92c01b19dcf5.jpg" },
        { id: 4, title: "Eyebrow", time: "20 mins", price: 20, image: "https://www.image2url.com/r2/default/images/1777877232157-3ab550a7-61c4-496f-bf9b-5e0b39acfffb.jpg" },
      ],
    },
    {
      id: 2,
      name: "Nail Art Studio",
      location: "Manhattan, New York",
      rating: 4.7,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
      category: "Nails",
      services: [
        { id: 1, title: "Nails", time: "30 mins", price: 30, image: "https://www.image2url.com/r2/default/images/1777877171613-cac80c7b-ecdb-4a53-bf00-92c01b19dcf5.jpg" },
        { id: 2, title: "Massage", time: "60 mins", price: 60, image: "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg" },
      ],
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Search Header */}
      <div className="px-4 sm:px-6 md:px-12 pt-12 pb-6 border-b border-gray-100 flex flex-col gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft size={24} className="text-brand-dark" />
          </button>
          <div className="flex-1">
            <Input 
              placeholder="Search salons, services..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search size={18} className="text-gray-400" />}
              className="bg-brand-gray border-transparent rounded-2xl text-sm sm:text-base md:text-lg"
            />
          </div>
          <button className="bg-brand-primary p-2.5 rounded-xl shadow-lg shadow-brand-primary/20">
            <Filter size={20} className="text-brand-dark" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar py-1">
          {['All', 'Hair', 'Spa', 'Nails', 'Massage'].map((cat) => (
            <button key={cat} className={cn(
              "px-4 py-1.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all whitespace-nowrap",
              cat === 'All' ? "bg-brand-dark text-white" : "bg-brand-gray text-gray-500"
            )}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Salons & Services */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 py-6 flex flex-col gap-8">
        {salons.map((salon) => (
          <div key={salon.id}>
            {/* Salon Card */}
            <div 
              onClick={() => navigate(`/salon/${salon.id}`)}
              className="group cursor-pointer mb-4"
            >
              <div className="relative rounded-[32px] overflow-hidden aspect-[16/10]">
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
                  <span className="text-xs sm:text-sm font-bold text-white">{salon.rating}</span>
                  <span className="text-[10px] sm:text-xs text-white/60">({salon.reviews})</span>
                </div>
              </div>
              <div className="flex justify-between items-start mt-2">
                <div>
                  <h3 className="font-bold text-brand-dark text-base sm:text-lg md:text-xl group-hover:text-brand-primary-hover transition-colors">
                    {salon.name}
                  </h3>
                  <p className="text-brand-text-gray text-xs sm:text-sm md:text-base flex items-center gap-1 mt-1">
                    <MapPin size={12} /> {salon.location}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-brand-primary-hover uppercase tracking-widest">{salon.category}</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-400 mt-1">Starts from $30</span>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {salon.services.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                  <div className="relative w-full aspect-[4/3]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover"/>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    <h4 className="font-bold text-sm sm:text-base md:text-lg text-brand-dark">{service.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{service.time}</p>
                    <p className="font-semibold text-brand-primary text-sm sm:text-base">${service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}