import { Search, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../lib/utils";
import BottomNav from "../../components/ui/BottomNav";
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

  // SERVICES DATA
  const services = [
    {
      id: 1,
      title: "Hair",
      time: "45 min",
      price: 90,
      image:
        "https://www.image2url.com/r2/default/images/1777877371615-e2fab8d7-2482-4a73-8da2-935c9deb91be.jpg",
    },
    {
      id: 2,
      title: "Massage",
      time: "60 min",
      price: 60,
      image:
        "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg",
    },
    {
      id: 3,
      title: "Nails",
      time: "30 min",
      price: 30,
      image:
        "https://www.image2url.com/r2/default/images/1777877171613-cac80c7b-ecdb-4a53-bf00-92c01b19dcf5.jpg",
    },
    {
      id: 4,
      title: "Eyebrow",
      time: "20 min",
      price: 20,
      image:
        "https://www.image2url.com/r2/default/images/1777877232157-3ab550a7-61c4-496f-bf9b-5e0b39acfffb.jpg",
    },
  ];

  // BANNERS
  const banners = [
    "https://www.image2url.com/r2/default/images/1777877845446-9051849f-ca74-4d55-b133-5f383aaf727e.jpg",
    "https://www.image2url.com/r2/default/images/1777877371615-e2fab8d7-2482-4a73-8da2-935c9deb91be.jpg",
    "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg",
  ];

  // UPCOMING BOOKINGS
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
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-[420px] sm:max-w-[640px] md:max-w-[720px] lg:max-w-[1200px] bg-white min-h-screen pb-24">

        {/* HEADER */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-center relative">
          <h1 className="text-lg font-semibold text-center flex-1">MeTime</h1>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-20"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop greeting */}
          <div className="hidden md:flex items-center gap-3">
            <h2 className="text-xl font-semibold">
              Hello, <span className="text-[#E8AFA7] font-bold">{userName}</span>
            </h2>
          </div>
        </div>

        {/* Collapsible Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed top-0 left-0 w-full h-full bg-black/40 z-10 transition-all duration-300",
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className={cn(
              "absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 space-y-4 transition-transform duration-300",
              menuOpen ? "translate-x-0" : "-translate-x-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Greeting inside menu */}
            <p className="text-gray-700 font-medium mb-4 text-lg">
              Hello, <span className="font-bold text-[#E8AFA7]">{userName}</span>
            </p>

            {/* Menu Items */}
            <button
              onClick={() => navigate("/profile")}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-200 flex items-center gap-2"
            >
              Profile
            </button>
            <button
              onClick={() => navigate("/settings")}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-200 flex items-center gap-2"
            >
              Settings
            </button>
          </div>
        </div>

        {/* SEARCH */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl">
            <Search className="text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search services..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* BANNER SWIPER */}
        <div className="px-6 mb-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
            className="rounded-2xl"
          >
            {banners.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[260px] cursor-pointer"
                  onClick={() => navigate("/salon/1")}
                >
                  <img src={img} className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute inset-0 bg-black/30 rounded-2xl" />
                  <h2 className="absolute left-4 bottom-4 text-white text-lg font-bold">
                    Find the best salon services near you
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CATEGORY */}
        <div className="px-6 mb-6 overflow-x-auto">
          <div className="flex gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition",
                  activeCategory === item
                    ? "bg-[#E8AFA7] text-white"
                    : "bg-gray-100 text-gray-500"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* UPCOMING BOOKINGS */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming</h3>
          {upcomingBookings.length === 0 ? (
            <div className="text-center text-gray-400 text-sm py-6">
              No upcoming bookings
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingBookings.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 bg-gray-100 p-4 rounded-xl items-start sm:items-center cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => navigate("/checkout")}
                >
                  <div className="bg-[#E8AFA7] text-white px-3 py-2 rounded-lg text-center">
                    <p className="text-sm font-bold">{item.date}</p>
                    <p className="text-xs">{item.month}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">with {item.stylist}</p>
                    <p className="text-sm font-medium mt-1">{item.time}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Edit booking " + item.id);
                    }}
                    className="text-sm text-gray-500 hover:text-black mt-2 sm:mt-0"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SERVICES */}
        <div className="px-6 mb-10">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={12}
            breakpoints={{
              0: { slidesPerView: 2.2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4.2 },
            }}
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="cursor-pointer"
                  onClick={() => navigate("/explore")}
                >
                  <img
                    src={item.image}
                    className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-xl"
                  />
                  <h4 className="mt-2 font-medium text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">⏱ {item.time}</p>
                  <p className="font-semibold">${item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* BOTTOM NAVIGATION */}
        <BottomNav />
      </div>
    </div>
  );
}