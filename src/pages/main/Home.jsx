import { Search, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { authService } from "../../services/authService";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function Home() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  const userName = user?.name?.split(" ")[0] || "Carol";

  const categories = ["Recommended", "Packages", "Professionals"];
  const [activeCategory, setActiveCategory] = useState("Recommended");
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Haircut",
      time: "45 mins",
      price: 90,
      image:
        "https://www.image2url.com/r2/default/images/1777877371615-e2fab8d7-2482-4a73-8da2-935c9deb91be.jpg",
    },
    {
      id: 2,
      title: "Massage",
      time: "60 mins",
      price: 60,
      image:
        "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg",
    },
    {
      id: 3,
      title: "Nails",
      time: "30 mins",
      price: 30,
      image:
        "https://www.image2url.com/r2/default/images/1777877171613-cac80c7b-ecdb-4a53-bf00-92c01b19dcf5.jpg",
    },
    {
      id: 4,
      title: "Eyebrow",
      time: "20 mins",
      price: 20,
      image:
        "https://www.image2url.com/r2/default/images/1777877232157-3ab550a7-61c4-496f-bf9b-5e0b39acfffb.jpg",
    },
  ];

  const banners = [
    "https://www.image2url.com/r2/default/images/1777877845446-9051849f-ca74-4d55-b133-5f383aaf727e.jpg",
    "https://www.image2url.com/r2/default/images/1778052583714-f2b85af4-64a3-4adb-827e-0331aac936cf.jpg",
    "https://www.image2url.com/r2/default/images/1778052651861-c11cc1ec-220f-4b3d-9ab6-d8f82136a01b.jpg",
    "https://www.image2url.com/r2/default/images/1778052697184-22fc3f76-72c9-47ec-b646-bad07ebbd9c0.jpg",
  ];

  const upcomingBookings = [
    {
      id: 1,
      date: "19",
      month: "Oct",
      title: "Basic Pedicure",
      stylist: "Paty",
      time: "Tuesday, 04:30pm",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center font-['Raleway']">
      <div className="w-full max-w-[1200px] bg-white min-h-screen pb-24 px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pt-6 pb-4 relative">
          {/* Mobile Menu Button */}
          <button className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Greeting */}
          <h2 className="text-xl font-semibold flex-1 ml-2">
            Hello, <span className="text-[#E8AFA7] font-bold">{userName}</span>
          </h2>

          {/* Centered Title */}
         {/* Centered Title */}
<h1 className="text-xl md:text-2xl font-semibold 
               text-center md:absolute md:left-1/2 md:-translate-x-1/2
               mb-4 md:mb-0">
  MeTime
</h1>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl">
            <Search className="text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search services..."
              className="bg-transparent outline-none w-full text-sm md:text-base"
            />
          </div>
        </div>

        {/* Banner Swiper */}
        <div className="mb-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
            className="rounded-2xl bg-white"
          >
            {banners.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => navigate("/salon/1")}
                  className="relative cursor-pointer h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] rounded-2xl overflow-hidden"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover rounded-2xl"
                    alt={`banner-${index}`}
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-2xl" />
                  <h2
                    className="absolute text-white font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[30px] left-4 top-6"
                    style={{ fontFamily: "Raleway", fontWeight: 700 }}
                  >
                    Find the best hair stylist for you.
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Categories */}
        <div className="mb-6 overflow-x-auto hide-scrollbar">
          <div className="flex gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm md:text-base font-medium whitespace-nowrap transition",
                  activeCategory === item ? "bg-[#E8AFA7] text-white" : "bg-gray-100 text-gray-500"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Upcoming</h3>
          <div className="space-y-3">
            {upcomingBookings.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate("/checkout")}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-100 p-4 rounded-xl hover:bg-gray-200 cursor-pointer transition-colors duration-200"
              >
                <div className="flex flex-col items-center justify-center bg-[#E8AFA7] text-white px-3 py-2 rounded-lg flex-shrink-0 w-20 sm:w-24">
                  <p className="text-sm font-bold">{item.date}</p>
                  <p className="text-xs">{item.month}</p>
                </div>
                <div className="flex flex-col flex-1 w-full sm:w-auto">
                  <p className="font-semibold text-sm sm:text-base">{item.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500">with {item.stylist}</p>
                  <p className="text-sm font-medium mt-1">{item.time}</p>
                </div>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-gray-500 hover:text-black mt-2 sm:mt-0 self-start sm:self-auto"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-10">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Services</h3>
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={12}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <div onClick={() => navigate(`/salon/1`)} className="cursor-pointer">
                  <img
                    src={item.image}
                    className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-xl"
                  />
                  <h4 className="mt-2 font-medium text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-500">⏱ {item.time}</p>
                  <p className="font-semibold text-sm md:text-base">${item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}