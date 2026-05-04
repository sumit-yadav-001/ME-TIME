import { Search, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../lib/utils";
import BottomNav from "../../components/ui/BottomNav";
import { authService } from "../../services/authService";

export default function Home() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  const userName = user?.name?.split(" ")[0] || "Carol";

  const categories = ["Recommended", "Packages", "Professionals"];
  const [activeCategory, setActiveCategory] = useState("Recommended");

  // ✅ SAME AS YOUR ORIGINAL SERVICES
  const services = [
    {
      id: 1,
      title: "Haircut",
      time: "40 min",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Nails",
      time: "30 min",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-[420px] md:max-w-[720px] lg:max-w-[1024px] bg-white min-h-screen pb-24">

        {/* 🔥 HEADER */}
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-center text-lg font-semibold">MeTime</h1>

          <div className="flex items-center gap-3 mt-4">
            <Menu className="w-6 h-6" />

            <h2 className="text-xl font-semibold">
              Hello,{" "}
              <span className="text-[#E8AFA7] font-bold">
                {userName}
              </span>
            </h2>
          </div>
        </div>

        {/* 🔥 SEARCH */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl">
            <Search className="text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* 🔥 BANNER */}
        <div
          className="px-6 mb-6 cursor-pointer"
          onClick={() => navigate("/salon/1")}
        >
          <div className="relative rounded-2xl overflow-hidden h-40">
            <img
              src="https://www.image2url.com/r2/default/images/1777877845446-9051849f-ca74-4d55-b133-5f383aaf727e.jpg"
              alt="banner"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <h2 className="absolute left-4 bottom-4 text-white text-xl font-bold w-[200px] leading-tight">
              Find the best hair stylist for you
            </h2>
          </div>
        </div>

        {/* 🔥 CATEGORY */}
        <div className="px-6 mb-6 overflow-x-auto">
          <div className="flex gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap",
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

        {/* 🔥 UPCOMING */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming</h3>

          <div
            className="flex gap-4 bg-gray-100 p-4 rounded-xl items-center cursor-pointer"
            onClick={() => navigate("/checkout")}
          >
            <div className="bg-[#E8AFA7] text-white px-3 py-2 rounded-lg text-center">
              <p className="text-sm font-bold">19</p>
              <p className="text-xs">Oct</p>
            </div>

            <div className="flex-1">
              <p className="font-semibold">Basic Pedicure</p>
              <p className="text-xs text-gray-500">with Paty</p>
              <p className="text-sm font-medium mt-1">
                Tuesday, 04:30pm
              </p>
            </div>

            <button className="text-sm text-gray-500">Edit</button>
          </div>
        </div>

        {/* 🔥 SERVICES (UNCHANGED STYLE) */}
        <div className="px-6 mb-10">
          <h3 className="text-lg font-semibold mb-4">Services</h3>

          <div className="grid grid-cols-2 gap-4">
            {services.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer"
                onClick={() => navigate("/explore")}
              >
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-28 object-cover"
                  />
                </div>

                <div className="mt-2">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-xs text-gray-500">
                    ⏱ {item.time}
                  </p>
                  <p className="font-semibold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}