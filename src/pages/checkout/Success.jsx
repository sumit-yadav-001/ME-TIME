import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-20 pb-12 text-center">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle size={48} className="text-brand-green" />
        </div>
        
        <h1 className="text-3xl font-black text-brand-dark mb-4 tracking-tighter">Payment Successful!</h1>
        <p className="text-brand-text-gray text-base mb-12 font-medium">
          Your appointment has been confirmed. You can view it in your bookings.
        </p>
        
        <div className="w-full bg-brand-gray rounded-[32px] p-6 flex items-center gap-4 mb-8 border border-white shadow-inner">
          <div className="bg-white p-3 rounded-2xl shadow-sm">
            <Calendar size={24} className="text-brand-primary" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-brand-text-gray font-black uppercase tracking-widest mb-0.5">Scheduled for</p>
            <p className="text-brand-dark font-bold text-[15px]">Tuesday, 16 Oct · 04:30 PM</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button onClick={() => navigate('/booking')} className="shadow-lg shadow-brand-primary/20">
          View My Bookings
        </Button>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 text-brand-dark font-bold py-2 hover:text-brand-primary-hover transition-colors"
        >
          Go to Home <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
