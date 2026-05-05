import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    label: '7236 xxxx xxxx 2345',
    last4: '2345',
  });

  const savedPaymentMethods = [
    { id: '1', type: 'card', label: '7236 xxxx xxxx 2345' },
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

      {/* Header */}
      <Header title="Checkout" />

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 py-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full ${s === 3 ? 'bg-[#FDCCC5]' : 'bg-gray-200'}`}
          />
        ))}
      </div>

      {/* Appointment Details */}
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col gap-6 overflow-y-auto hide-scrollbar">
        <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800 mb-6">
          Please check the details and confirm your appointment
        </h2>

        <div className="bg-white rounded-2xl p-6 shadow-inner border border-gray-100 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <span className="text-gray-500 font-medium">Date</span>
            <span className="text-gray-800 font-bold text-right">{appointment.date} {appointment.time}</span>

            <span className="text-gray-500 font-medium">Service</span>
            <span className="text-gray-800 font-bold text-right">{appointment.service}</span>

            <span className="text-gray-500 font-medium">Location</span>
            <span className="text-gray-800 font-bold text-right underline">{appointment.location}</span>

            <span className="text-gray-500 font-medium">Payment</span>
            <span className="text-gray-800 font-bold text-right flex items-center justify-end gap-2">
              <CreditCard size={18} />
              {paymentMethod.label}
            </span>

            <span className="text-gray-500 font-medium text-lg">Total</span>
            <span className="text-gray-900 font-black text-lg text-right">${appointment.price}</span>
          </div>
        </div>

        {/* Payment Method Selector */}
        <div className="mb-10">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 pl-1">Payment Method</h3>
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="w-full flex items-center justify-between bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 hover:border-[#FDCCC5] transition-all duration-300 group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <CreditCard size={20} />
              </div>
              <span className="font-bold text-gray-800">{paymentMethod.label}</span>
            </div>
            <ChevronRight
              size={18}
              className="text-gray-300 group-hover:text-gray-800 transition-colors"
            />
          </button>
        </div>

        {/* Book Button */}
        <Button
          onClick={handleBook}
          className="w-full py-4 sm:py-5 text-lg sm:text-xl font-bold bg-[#FDCCC5] hover:bg-pink-500 rounded-2xl shadow-lg uppercase tracking-widest"
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
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod.id === method.id ? 'border-[#FDCCC5] bg-[#FDCCC5]' : 'border-gray-300'
                }`}
              >
                {paymentMethod.id === method.id && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
            </button>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}