import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Apple, DollarSign, Calendar, Clock, MapPin } from 'lucide-react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import BottomSheet from '../../components/ui/BottomSheet';
import { PageLoader } from '../../components/ui/Loader';
import { bookingService } from '../../services/bookingService';

export default function Checkout() {
  const navigate = useNavigate();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [paymentMethod, setPaymentMethod] = useState({ id: '1', type: 'card', label: 'Mastercard ** 4510', brand: 'mastercard', last4: '4510' });
  const [savedPaymentMethods] = useState([
    { id: '1', type: 'card', label: 'Mastercard ** 4510', brand: 'mastercard', last4: '4510' },
    { id: '2', type: 'applepay', label: 'Apple Pay' },
    { id: '3', type: 'cash', label: 'Pay at Salon' }
  ]);

  const appointment = {
    date: 'Tuesday, 16 Oct',
    time: '04:30 PM',
    service: 'Sleek Pedicure',
    location: '123 Beauty Lane, NY',
    price: 45
  };

  const handleSelectPayment = (method) => {
    setPaymentMethod(method);
    setIsPaymentModalOpen(false);
  };

  const handleBook = async () => {
    setIsProcessing(true);
    try {
      await bookingService.confirmBooking({ number: '4510' });
      navigate('/success');
    } catch (error) {
      alert(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {isProcessing && <PageLoader />}
      <Header title="Checkout" />
      
      {/* Progress Dots */}
      <div className="flex justify-center gap-2 py-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`w-2 h-2 rounded-full ${s === 3 ? 'bg-brand-primary' : 'bg-gray-200'}`} />
        ))}
      </div>

      <div className="flex-1 px-6 pt-6 flex flex-col overflow-y-auto hide-scrollbar">
        <h2 className="text-xl font-bold text-brand-dark mb-8">Review details</h2>

        {/* Appointment Details Card */}
        <div className="bg-brand-gray rounded-[32px] p-6 mb-8 shadow-inner border border-white">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm">
                <Calendar size={20} className="text-brand-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black text-brand-text-gray uppercase tracking-widest">Date</p>
                <p className="text-brand-dark font-bold">{appointment.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm">
                <Clock size={20} className="text-brand-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black text-brand-text-gray uppercase tracking-widest">Time</p>
                <p className="text-brand-dark font-bold">{appointment.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm">
                <MapPin size={20} className="text-brand-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black text-brand-text-gray uppercase tracking-widest">Location</p>
                <p className="text-brand-dark font-bold truncate">{appointment.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method Selector */}
        <div className="mb-10">
          <h3 className="text-base font-bold text-brand-dark mb-4 pl-1">Payment Method</h3>
          <button 
            onClick={() => setIsPaymentModalOpen(true)}
            className="w-full flex items-center justify-between bg-white p-5 rounded-[24px] border border-brand-gray hover:border-brand-primary transition-all duration-300 group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-brand-gray p-3 rounded-xl">
                <CreditCard size={20} className="text-brand-dark" />
              </div>
              <span className="font-bold text-brand-dark">{paymentMethod.label}</span>
            </div>
            <ChevronRight size={18} className="text-gray-300 group-hover:text-brand-dark transition-colors" />
          </button>
        </div>

        {/* Price Breakdown */}
        <div className="mt-auto pt-6 border-t border-brand-gray mb-10">
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-brand-text-gray font-bold text-sm">Service Fee</span>
            <span className="text-brand-dark font-bold text-sm">$45.00</span>
          </div>
          <div className="flex justify-between items-center mb-6 px-1">
            <span className="text-brand-text-gray font-bold text-sm">Discount</span>
            <span className="text-brand-green font-bold text-sm">-$0.00</span>
          </div>
          <div className="flex justify-between items-center px-1">
            <span className="text-xl font-black text-brand-dark tracking-tight">Total</span>
            <span className="text-2xl font-black text-brand-primary tracking-tighter">$45.00</span>
          </div>
        </div>

        <Button 
          onClick={handleBook} 
          className="w-full h-16 text-lg font-black shadow-2xl shadow-brand-primary/30 uppercase tracking-widest mb-8"
        >
          Confirm & Pay
        </Button>
      </div>

      <BottomSheet 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)}
        title="Select Payment Method"
      >
        <div className="flex flex-col gap-3 pb-8">
          {savedPaymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => handleSelectPayment(method)}
              className="flex items-center justify-between p-5 rounded-2xl bg-brand-gray hover:bg-brand-primary/10 border border-transparent hover:border-brand-primary transition-all duration-300"
            >
              <span className="font-bold text-brand-dark">{method.label}</span>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                paymentMethod.id === method.id ? 'border-brand-primary bg-brand-primary' : 'border-gray-300'
              }`}>
                {paymentMethod.id === method.id && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
            </button>
          ))}
          <button 
            onClick={() => navigate('/add-card')}
            className="mt-4 p-5 rounded-2xl border-2 border-dashed border-gray-200 text-brand-text-gray font-bold text-center hover:border-brand-primary hover:text-brand-primary transition-all"
          >
            + Add New Card
          </button>
        </div>
      </BottomSheet>
    </div>
  );
}
