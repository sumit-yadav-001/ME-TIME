import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Back arrow
import { ChevronRight, CreditCard } from 'lucide-react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import BottomSheet from '../../components/ui/BottomSheet';
import { PageLoader } from '../../components/ui/Loader';
import { bookingService } from '../../services/bookingService';

export default function Checkout() {
  const navigate = useNavigate();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState({
    id: '1',
    type: 'card',
    label: '**** 2345',
    last4: '2345',
  });

  const savedPaymentMethods = [
    { id: '1', type: 'card', label: '**** 2345' },
    { id: '2', type: 'applepay', label: 'Apple Pay' },
    { id: '3', type: 'paypal', label: 'PayPal' },
    { id: '4', type: 'cash', label: 'Cash' },
  ];

  const appointment = {
    date: 'Tuesday, 19',
    time: '04:30 PM',
    service: 'Basic pedicure with Paty',
    location: '8502 Preston Rd. Inglewood',
    price: 35,
  };

  const handleSelectPayment = (method) => {
    setPaymentMethod(method);
    setIsPaymentModalOpen(false);
  };

  const handleBook = async () => {
    setIsProcessing(true);
    try {
      await bookingService.confirmBooking({ number: appointment.price });
      navigate('/success');
    } catch (error) {
      alert(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto min-h-screen bg-white">
      {isProcessing && <PageLoader />}

      {/* Header with Back Arrow */}
      <div className="flex items-center px-6 py-4">
        <button onClick={() => navigate(-1)} className="p-1">
          <FaArrowLeft className="w-6 h-6 text-black" />
        </button>
        <h1 className="flex-1 text-center text-xl font-bold text-black">Checkout</h1>
        <div className="w-6 h-6" /> {/* Placeholder for centering */}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 py-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-3 h-3 rounded-full ${s === 3 ? 'bg-[#FDCCC5]' : 'bg-gray-200'}`}
          />
        ))}
      </div>

      {/* Instruction */}
      <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800 px-6">
        Please check the details and confirm your appointment
      </h2>

      {/* Appointment Details */}
      <div className="mt-6 px-6 flex flex-col gap-6">
        <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          {[
            ['Date', `${appointment.date} ${appointment.time}`],
            ['Service', appointment.service],
            ['Location', appointment.location],
            ['Payment', paymentMethod.label],
            ['Total', `$${appointment.price}`],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">{label}</span>
              {label === 'Payment' ? (
                <div className="flex items-center gap-2 font-bold text-gray-800">
                  <CreditCard size={18} /> {value}
                </div>
              ) : label === 'Location' ? (
                <span className="text-gray-800 font-bold underline">{value}</span>
              ) : label === 'Total' ? (
                <span className="text-gray-900 font-extrabold text-lg">{value}</span>
              ) : (
                <span className="text-gray-800 font-bold">{value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Payment Method Selector */}
        <div>
          <h3 className="text-gray-800 font-bold mb-3">Payment Method</h3>
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="w-full flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 hover:border-[#FDCCC5] transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <CreditCard size={20} />
              </div>
              <span className="font-bold text-gray-800">{paymentMethod.label}</span>
            </div>
            <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-800 transition-colors" />
          </button>
        </div>

        {/* Book Button */}
        <Button
          onClick={handleBook}
          className="w-full py-4 sm:py-5 text-lg sm:text-xl font-bold bg-[#FDCCC5] hover:bg-pink-500 rounded-2xl shadow-lg uppercase tracking-widest mt-6"
        >
          Book
        </Button>
      </div>

      {/* Payment Bottom Sheet */}
      <BottomSheet
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title="Add payment method"
      >
        <div className="flex flex-col gap-3 pb-8">
          {savedPaymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => handleSelectPayment(method)}
              className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gray-50 hover:bg-[#FFF0F0] border border-gray-200 transition-all duration-300"
            >
              <span className="font-bold text-gray-800">{method.label}</span>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}