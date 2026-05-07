import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPro, setSelectedPro] = useState(null);
  const navigate = useNavigate();

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  // Skip / Finish onboarding
  const finishOnboarding = () => {
    localStorage.setItem("onboardingSeen", "true");
    navigate("/"); // SPA navigation to Home page
  };

  const categories = [
    { name: "Hair", img: "https://www.image2url.com/r2/default/images/1777877371615-e2fab8d7-2482-4a73-8da2-935c9deb91be.jpg" },
    { name: "Massage", img: "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg" },
    { name: "Eyebrows", img: "https://www.image2url.com/r2/default/images/1777877232157-3ab550a7-61c4-496f-bf9b-5e0b39acfffb.jpg" },
    { name: "Nails", img: "https://www.image2url.com/r2/default/images/1777877171613-cac80c7b-ecdb-4a53-bf00-92c01b19dcf5.jpg" },
  ];

  const services = [
    { name: "Basic Manicure", price: "$40", img: "https://www.image2url.com/r2/default/images/1777971307334-3ff7b8fe-7f70-4fcb-a464-51a080053e62.jpg" },
    { name: "Basic Pedicure", price: "$35", img: "https://www.image2url.com/r2/default/images/1777971745930-397a4ffe-d598-420c-8f7d-8992bd56c8d1.png" },
    { name: "Gel Manicure", price: "$50", img: "https://www.image2url.com/r2/default/images/1777971933453-9e5bb04c-a57a-4963-8968-e20332efaaf5.png" },
    { name: "Gel Pedicure", price: "$55", img: "https://www.image2url.com/r2/default/images/1777972029571-bb749d1a-86da-483d-9c66-98c47aac0a82.png" },
    { name: "Acrylic Extensions", price: "$100", img: "https://www.image2url.com/r2/default/images/1777972060026-bad6807c-02e9-4309-80c3-b3e35eadc67b.png" },
  ];

  const professionals = [
    { name: "Anna Smith", role: "Nail designer", rating: "5.0", img: "https://www.image2url.com/r2/default/images/1777972330320-eefd8c19-eeee-4620-9f27-d938994d6265.png" },
    { name: "Jordan Mcmiller", role: "Nail designer", rating: "4.9", img: "https://www.image2url.com/r2/default/images/1777972358647-6293d58c-3a79-4109-acec-0d2e6d40050b.png" },
    { name: "Paty Sinclair", role: "Nail designer", rating: "4.9", img: "https://www.image2url.com/r2/default/images/1777972422361-9bf03c97-714a-4085-ad3f-41d76dac09b9.png" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <div className="p-4 flex items-center justify-between relative">
        {step > 0 ? (
          <button
            onClick={prevStep}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaArrowLeft size={20} />
          </button>
        ) : <div className="w-10 h-10" />}

        {/* Centered MeTime header for steps > 0 */}
        {step > 0 && (
          <h1 className="font-bold text-xl text-gray-800 absolute left-1/2 transform -translate-x-1/2">
            MeTime
          </h1>
        )}

        {step > 0 && <div className="w-10 h-10" />} {/* right placeholder */}
      </div>

      {/* Progress Dots and Steps */}
      <div className="flex-1 flex flex-col max-w-screen-lg md:max-w-4xl mx-auto w-full px-6 pb-10 overflow-y-auto">
        <div className="flex justify-center gap-2 mb-8 mt-2">
          {[0,1,2,3,4,5].map(i => (
            <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i===step ? "w-8 bg-[#FFB6C1]" : "w-2 bg-gray-200"}`} />
          ))}
        </div>

        <div className="flex-1">

          {/* Step 0 - Welcome */}
          {step === 0 && (
            <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl relative">
                <img
                  src="https://www.image2url.com/r2/default/images/1777875449038-a3747603-e246-4e4b-9fcf-2233e56d30ca.png"
                  className="w-full h-full object-cover"
                  alt="Welcome"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                  Welcome to <br/>
                  <span className="text-[#FFB6C1]">The Gallery Salon!</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Follow the steps to schedule your next appointment with us.
                </p>
              </div>

              {/* Buttons: Start + Skip side by side */}
              <div className="flex gap-4 w-full max-w-xs">
                <button
                  onClick={finishOnboarding}
                  className="flex-1 py-4 rounded-2xl border border-pink-200 text-pink-300 font-medium hover:text-pink-400 transition-colors"
                >
                  Skip
                </button>
                <button
                  onClick={nextStep}
                  className="flex-1 bg-[#FFB6C1] hover:bg-[#FFA0B0] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-pink-200 transition-all active:scale-[0.98]"
                >
                  Start
                </button>
              </div>
            </div>
          )}

          {/* Step 1 - Category selection */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Please, choose a service:</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map(cat => (
                  <div key={cat.name} onClick={() => { setSelectedCategory(cat); nextStep(); }} className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                    </div>
                    <div className="py-4 text-center font-bold text-gray-700">{cat.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 - Service selection */}
          {step === 2 && (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Now, choose one that fits your needs:</h2>
              <div className="space-y-4 flex-1">
                {services.map(s => (
                  <div key={s.name} className={`flex items-center justify-between p-4 rounded-3xl cursor-pointer border-2 transition-all duration-300 ${selectedService?.name === s.name ? "border-[#FFB6C1] bg-pink-50/50 shadow-md" : "border-gray-100 bg-white hover:border-pink-200 shadow-sm"}`}>
                    <div className="flex items-center gap-4" onClick={() => setSelectedService(s)}>
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm">
                        <img src={s.img} alt={s.name} className="w-full h-full object-cover"/>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{s.name}</p>
                        <p className="text-[#FFB6C1] font-semibold">{s.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 text-gray-400 cursor-pointer" onClick={() => { setSelectedService(s); nextStep(); }}>
                      <FiArrowRight size={20}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 - Professional selection */}
          {step === 3 && (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Choose a professional and see available slots</h2>
              <div className="space-y-4 flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                {professionals.map(pro => (
                  <div key={pro.name} onClick={() => setSelectedPro(pro)} className={`flex items-center justify-between p-4 rounded-3xl cursor-pointer border-2 transition-all duration-300 ${selectedPro?.name === pro.name ? "border-[#FFB6C1] bg-pink-50/50 shadow-md" : "border-gray-100 bg-white hover:border-pink-200 shadow-sm"}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm border-2 border-white">
                        <img src={pro.img} alt={pro.name} className="w-full h-full object-cover"/>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{pro.name}</p>
                        <p className="text-gray-400 text-sm">{pro.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <span className="text-yellow-500 font-bold text-sm">{pro.rating}</span>
                      <span className="text-yellow-500 text-xs">★</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <button onClick={nextStep} className="w-full bg-[#FFB6C1] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-pink-200 hover:bg-[#FFA0B0] transition-all active:scale-[0.98]">Continue</button>
                <button onClick={nextStep} className="text-gray-400 font-medium hover:text-gray-600 transition-colors py-2">I don’t have a preference</button>
              </div>
            </div>
          )}

          {/* Steps 4 & 5 - Login / Signup */}
          {step >= 4 && (
            <div className="flex flex-col items-center text-center space-y-12 py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FFB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">{step === 4 ? "Hey there!" : "Log in or Sign up"}</h2>
                <p className="text-gray-500 text-lg">{step === 4 ? "Before schedule, please enter your account or create one!" : "Access your account to book your appointment!"}</p>
              </div>
              <div className="w-full space-y-4">
                <button onClick={() => navigate("/login")} className="w-full bg-[#FFB6C1] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-pink-200 hover:bg-[#FFA0B0] transition-all active:scale-[0.98]">Log In</button>
                <button onClick={() => navigate("/signup")} className="w-full bg-white text-[#FFB6C1] border-2 border-[#FFB6C1] py-4 rounded-2xl font-bold text-lg hover:bg-pink-50 transition-all active:scale-[0.98]">Create Account</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}