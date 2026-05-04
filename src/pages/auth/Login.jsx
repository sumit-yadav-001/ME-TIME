import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Keypad from '../../components/ui/Keypad';
import { authService } from '../../services/authService';
import Loader from '../../components/ui/Loader';

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleKeyPress = (key) => {
    if (phone.length < 15) {
      const newPhone = phone + key;
      let formatted = newPhone.replace(/\D/g, '');
      if (formatted.length > 2) formatted = formatted.substring(0, 2) + ' ' + formatted.substring(2);
      if (formatted.length > 7) formatted = formatted.substring(0, 7) + ' ' + formatted.substring(7);
      setPhone(formatted);
    }
  };

  const handleDelete = () => {
    setPhone((prev) => prev.slice(0, -1).trim());
  };

  const handleContinue = async () => {
    if (phone.length >= 10) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(r => setTimeout(r, 800));
        navigate('/verify', { state: { phoneNumber: phone } });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      <Header />
      
      <div className="flex-1 px-6 pt-4 flex flex-col">
        <h1 className="text-[28px] font-bold text-brand-dark mb-3">Log in</h1>
        <p className="text-brand-text-gray text-[15px] mb-8 leading-relaxed">
          Please confirm your country code and enter your phone number.
        </p>
        
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 text-[15px] font-medium">
            <span className="text-xl">🇧🇷</span>
            <span>Brazil</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-10 pb-4 border-b border-brand-primary">
          <span className="text-[17px] font-medium text-brand-dark">+55</span>
          <span className="text-[17px] font-medium text-brand-dark flex-1">
            {phone || <span className="text-gray-300">00 0000 0000</span>}
          </span>
        </div>
        
        <div className="mt-auto mb-8">
          <Button 
            onClick={handleContinue} 
            disabled={phone.length < 10 || isSubmitting}
            className="w-full shadow-[0_8px_20px_-6px_rgba(255,200,200,0.8)]"
          >
            {isSubmitting ? <Loader size="sm" className="mr-2 border-brand-dark" /> : null}
            {isSubmitting ? 'Processing...' : 'Continue'}
          </Button>
        </div>
      </div>
      
      <div className="w-full">
        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} />
      </div>
    </div>
  );
}
