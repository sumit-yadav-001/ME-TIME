import { Search, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../lib/utils";
import BottomNav from "../../components/ui/BottomNav";
import { authService } from "../../services/authService";

// ✅ SWIPER IMPORTS
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

  // ✅ SERVICES DATA
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

  // ✅ BANNERS
  const banners = [
    "https://www.image2url.com/r2/default/images/1777877845446-9051849f-ca74-4d55-b133-5f383aaf727e.jpg",
    "https://www.image2url.com/r2/default/images/1777877371615-e2fab8d7-2482-4a73-8da2-935c9deb91be.jpg",
    "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-[420px] md:max-w-[720px] lg:max-w-[1200px] bg-white min-h-screen pb-24">

        {/* HEADER */}
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-center text-lg font-semibold">MeTime</h1>

          <div className="flex items-center gap-3 mt-4">
            <Menu className="w-6 h-6" />
            <h2 className="text-xl font-semibold">
              Hello, <span className="text-[#E8AFA7] font-bold">{userName}</span>
            </h2>
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

        {/* ✅ PRODUCTION LEVEL BANNER SWIPER */}
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
                  className="relative h-[180px] md:h-[220px] lg:h-[260px] cursor-pointer"
                  onClick={() => navigate("/salon/1")}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <h2 className="absolute left-4 bottom-4 text-white text-lg md:text-xl lg:text-2xl font-bold max-w-[70%]">
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

        {/* ✅ UPCOMING WITH LOGIC */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming</h3>

          {/* sample dynamic data */}
          {[
            {
              id: 1,
              date: "19",
              month: "Oct",
              title: "Basic Pedicure",
              stylist: "Paty",
              time: "Tuesday, 04:30pm",
            },
          ].length === 0 ? (
            <div className="text-center text-gray-400 text-sm py-6">
              No upcoming bookings
            </div>
          ) : (
            <div className="space-y-3">
              {[
                {
                  id: 1,
                  date: "19",
                  month: "Oct",
                  title: "Basic Pedicure",
                  stylist: "Paty",
                  time: "Tuesday, 04:30pm",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-gray-100 p-4 rounded-xl items-center cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => navigate("/checkout")}
                >
                  <div className="bg-[#E8AFA7] text-white px-3 py-2 rounded-lg text-center">
                    <p className="text-sm font-bold">{item.date}</p>
                    <p className="text-xs">{item.month}</p>
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      with {item.stylist}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      {item.time}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Edit booking " + item.id);
                    }}
                    className="text-sm text-gray-500 hover:text-black"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SERVICES SWIPER (PRO LEVEL) */}
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
                  className="cursor-pointer group"
                  onClick={() => navigate("/explore")}
                >
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-28 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="mt-2">
                    <h4 className="font-medium text-sm md:text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">⏱ {item.time}</p>
                    <p className="font-semibold text-sm md:text-base">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
