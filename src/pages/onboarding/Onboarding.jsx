import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const next = () => setStep((prev) => prev + 1);

  const finishOnboarding = () => {
    localStorage.setItem("onboardingSeen", "true");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      {/* 🔥 Responsive container */}
      <div className="w-full max-w-[420px] md:max-w-[720px] lg:max-w-[1024px] h-screen flex flex-col mx-auto">

        {/* 🔥 STEP 1 - Welcome */}
        {step === 0 && (
          <div className="flex flex-col h-full justify-between p-6 text-center">
            <div className="mt-10">
              <img
                src="https://www.image2url.com/r2/default/images/1777875449038-a3747603-e246-4e4b-9fcf-2233e56d30ca.png"
                className="w-full h-[250px] object-contain"
                alt="welcome"
              />
              <h1 className="text-xl font-semibold mt-6">
                Welcome to The Gallery Salon!
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Follow the steps to schedule your next appointment with us.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <button className="text-[#E8AFA7]" onClick={finishOnboarding}>
                Skip
              </button>
              <button
                onClick={next}
                className="bg-[#E8AFA7] text-white px-6 py-2 rounded-lg"
              >
                Start
              </button>
            </div>
          </div>
        )}

        {/* 🔥 STEP 2 - Choose Service */}
        {step === 1 && (
          <div className="flex flex-col h-full px-4 py-6">

            <h2 className="text-center font-semibold text-lg mb-6">
              Please, choose a service:
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1">

              {[
                {
                  name: "Nail",
                  img: "https://www.image2url.com/r2/default/images/1777877171613-cac80c7b-ecdb-4a53-bf00-92c01b19dcf5.jpg",
                },
                {
                  name: "Eyebrows",
                  img: "https://www.image2url.com/r2/default/images/1777877232157-3ab550a7-61c4-496f-bf9b-5e0b39acfffb.jpg",
                },
                {
                  name: "Massage",
                  img: "https://www.image2url.com/r2/default/images/1777877339043-8d3dd7fd-4bf2-4d81-8ffd-2554f3abd45e.jpg",
                },
                {
                  name: "Hair",
                  img: "https://www.image2url.com/r2/default/images/1777877371615-e2fab8d7-2482-4a73-8da2-935c9deb91be.jpg",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  onClick={next}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="w-full h-28 sm:h-32 md:h-36 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="py-2 text-center font-medium text-sm sm:text-base">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={finishOnboarding}
              className="text-[#E8AFA7] text-sm mt-4"
            >
              Skip
            </button>
          </div>
        )}

        {/* 🔥 STEP 3 - Login / Signup */}
        {step === 2 && (
          <div className="flex flex-col justify-center items-center h-full text-center px-6">
            <h1 className="text-xl font-semibold mb-2">Hey there!</h1>
            <p className="text-gray-500 text-sm mb-6">
              Before schedule, please enter your account or create one!
            </p>

            <button
              onClick={() => {
                localStorage.setItem("onboardingSeen", "true");
                navigate("/login");
              }}
              className="bg-[#E8AFA7] text-white w-full py-2 rounded-lg"
            >
              Log In
            </button>

            <button
              onClick={() => {
                localStorage.setItem("onboardingSeen", "true");
                navigate("/signup");
              }}
              className="text-[#E8AFA7] mt-3"
            >
              Create Account
            </button>
          </div>
        )}

        {/* 🔥 STEP 4 - Choose Detailed Service */}
        {step === 3 && (
          <div className="p-4">
            <h2 className="text-center font-semibold mb-4">
              Now, choose one that fit your needs:
            </h2>

            {[
              "Basic Manicure - $30",
              "Basic Pedicure - $35",
              "Gel Manicure - $50",
              "Gel Pedicure - $55",
            ].map((item) => (
              <div
                key={item}
                onClick={next}
                className="p-4 border-b cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {/* 🔥 STEP 5 - Choose Professional */}
        {step === 4 && (
          <div className="p-4">
            <h2 className="text-center font-semibold mb-4">
              Choose a professional
            </h2>

            {["Anna Smith ⭐5.0", "Jordan ⭐4.9", "Paty ⭐4.9"].map((item) => (
              <div
                key={item}
                onClick={finishOnboarding}
                className="p-4 border-b cursor-pointer"
              >
                {item}
              </div>
            ))}

            <button className="text-[#E8AFA7] mt-4">
              I don’t have a preference
            </button>
          </div>
        )}

      </div>
    </div>
  );
}