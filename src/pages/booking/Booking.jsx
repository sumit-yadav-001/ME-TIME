// BookingPage.jsx
import { useState } from "react";
import {
  AiFillStar,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0); // 0 = select date/time, 1 = confirmation, 2 = bookings list
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState(null);

  const professional = {
    name: "Anna Smith",
    role: "Nail Designer",
    rating: 5.0,
    img: "https://www.image2url.com/r2/default/images/1777972330320-eefd8c19-eeee-4620-9f27-d938994d6265.png",
    address: "8502 Preston Rd. Inglewood",
  };

  const dates = ["17 Sun", "18 Mon", "19 Tue", "20 Wed", "21 Thu"];
  const times = ["10:00 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM"];

  const bookings = [
    {
      id: 1,
      salon: "The Gallery Salon",
      professional: "Anna Smith",
      distance: "5.0 Kms",
      services: "Acrylic Extensions 1 x + Gel Manicure 1 x",
      date: "19 Oct 2023",
      price: 150,
      status: "Upcoming",
    },
    {
      id: 2,
      salon: "The Gallery Salon",
      professional: "Anna Smith",
      distance: "5.0 Kms",
      services: "Gel Pedicure 1 x",
      date: "31 Oct 2023",
      price: 55,
      status: "Upcoming",
    },
    {
      id: 3,
      salon: "The Gallery Salon",
      professional: "Anna Smith",
      distance: "5.0 Kms",
      services: "Acrylic Extensions 1 x + Gel Manicure 1 x",
      date: "8 Sep 2023",
      price: 150,
      status: "Past",
    },
    {
      id: 4,
      salon: "The Gallery Salon",
      professional: "Anna Smith",
      distance: "5.0 Kms",
      services: "Basic Pedicure 1 x + Basic Manicure 1 x",
      date: "12 May 2022",
      price: 65,
      status: "Past",
    },
  ];

  const filteredBookings = bookings.filter((b) => b.status === activeTab);

  const openCancelModal = (booking) => {
    setBookingToCancel(booking);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    alert(`Booking ${bookingToCancel?.id} cancelled`);
    setShowCancelModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Header */}
      <div className="flex items-center p-4 bg-white shadow sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="mr-4 text-lg">
          <AiOutlineArrowLeft />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 max-w-6xl mx-auto w-full">

        {/* Step 0: Select date & time */}
        {step === 0 && (
          <div className="space-y-8">

            {/* Profile */}
            <div className="flex flex-col items-center space-y-2">
              <img src={professional.img} alt={professional.name} className="w-28 h-28 rounded-2xl object-cover" />
              <h2 className="font-bold text-xl">{professional.name}</h2>
              <p className="text-gray-500">{professional.role}</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="ml-1 font-semibold">{professional.rating}</span>
              </div>
            </div>

            {/* Select Date */}
            <div className="space-y-2">
              <h3 className="font-bold text-gray-700 text-center">Select date & time</h3>
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`flex-shrink-0 w-16 py-3 rounded-xl border font-bold text-sm text-center ${
                      selectedDate === d
                        ? "border-pink-400 bg-pink-50 text-pink-400"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {d.split(" ")[0]}<br/>
                    <span className="text-xs text-gray-400">{d.split(" ")[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <h3 className="font-bold text-gray-700 text-center">Availability</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-2 px-4 rounded-xl border font-bold text-sm ${
                      selectedTime === t
                        ? "border-pink-400 bg-pink-50 text-pink-400"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Button */}
            <button
              onClick={() => setStep(1)}
              disabled={!selectedDate || !selectedTime}
              className={`w-full mt-6 py-3 rounded-xl font-bold text-white ${
                selectedDate && selectedTime ? "bg-pink-400 hover:bg-pink-500" : "bg-gray-200 cursor-not-allowed"
              }`}
            >
              Book
            </button>
          </div>
        )}

        {/* Step 1: Booking confirmation */}
        {step === 1 && (
          <div className="text-center space-y-6 mt-12">
            <div className="w-32 h-32 mx-auto bg-pink-50 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">❤</div>
            </div>

            <h2 className="font-bold text-lg">
              Thank you for booking <br />
              with <span className="font-extrabold">MeTime</span>
            </h2>

            <p className="text-gray-500">
              Your booking details:
              <br />
              <span className="font-semibold">{selectedDate} {selectedTime}</span>
              <br />
              At {professional.name}
              <br />
              <span className="underline">{professional.address}</span>
            </p>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-xl bg-pink-400 text-white font-bold"
            >
              Keep booking
            </button>
            <button
              onClick={() => navigate("/")}
              className="text-pink-300 font-bold mt-2"
            >
              Main page
            </button>
          </div>
        )}

        {/* Step 2: Bookings list */}
        {step === 2 && (
          <div className="mt-10">

            {/* Tabs */}
            <div className="flex justify-start gap-8 mb-6 border-b border-gray-200">
              {["Past", "Upcoming"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 font-semibold ${
                    activeTab === tab
                      ? "text-pink-400 border-b-2 border-pink-400"
                      : "text-gray-600 hover:text-pink-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Bookings */}
            <div className="flex flex-col divide-y divide-gray-200">
              {filteredBookings.map((b) => (
                <div key={b.id} className="py-4">
                  <p className="font-bold text-gray-800">{b.salon}</p>
                  <p className="text-gray-500 text-sm">
                    with {b.professional} • {b.distance}
                  </p>
                  <p className="text-gray-500 text-sm">{b.services}</p>
                  <p className="text-gray-500 text-sm font-semibold mt-1">
                    {b.date} • ${b.price}
                  </p>
                  {b.status === "Upcoming" && (
                    <button
                      onClick={() => openCancelModal(b)}
                      className="text-red-500 text-sm mt-1 underline"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              ))}
              {filteredBookings.length === 0 && (
                <p className="text-center py-12 text-gray-500">
                  No {activeTab.toLowerCase()} bookings found
                </p>
              )}
            </div>
          </div>
        )}

        {/* Cancel Confirmation Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-sm text-center p-6">
              <div className="text-5xl mb-4">❌</div>
              <p className="font-bold text-lg mb-6">
                Are you sure, you want to <span className="text-red-400">cancel</span> this appointment?
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="text-red-400 font-semibold py-2 px-4"
                >
                  No
                </button>
                <button
                  onClick={confirmCancel}
                  className="bg-red-400 text-white font-bold py-2 px-6 rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}