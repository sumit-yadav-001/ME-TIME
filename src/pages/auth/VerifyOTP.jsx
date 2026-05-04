import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Keypad from '../../components/ui/Keypad';
import { cn } from '../../lib/utils';
import { authService } from '../../services/authService';
import { PageLoader } from '../../components/ui/Loader';

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || '47 0 0000 0000';
  const countryCode = '+55';
  
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(20);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleKeyPress = async (key) => {
    if (code.length < 4 && !isVerifying) {
      const newCode = code + key;
      setCode(newCode);
      if (newCode.length === 4) {
        setIsVerifying(true);
        try {
          await authService.login(phoneNumber);
          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        } catch (error) {
          console.error("Login failed", error);
          setCode('');
        } finally {
          setIsVerifying(false);
        }
      }
    }
  };

  const handleDelete = () => {
    setCode((prev) => prev.slice(0, -1));
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {isVerifying && <PageLoader />}
      <Header />
      
      <div className="flex-1 px-6 pt-4 flex flex-col">
        <h1 className="text-[28px] font-bold text-brand-dark mb-3">Enter code</h1>
        <p className="text-brand-text-gray text-[15px] mb-8 leading-relaxed">
          We've sent an SMS with an activation code to your phone <span className="text-brand-dark font-medium">{countryCode} {phoneNumber || '47 0 0000 0000'}</span>
        </p>
        
        <div className="flex items-center gap-4 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              className={cn(
                "w-14 h-14 rounded-xl border flex items-center justify-center text-2xl font-semibold transition-colors",
                code.length === index ? "border-brand-primary" : "border-gray-200 text-brand-dark"
              )}
            >
              {code[index] || ''}
            </div>
          ))}
        </div>
        
        <div className="mt-auto mb-10 text-center">
          <button 
            className={cn(
              "text-[15px] transition-colors",
              timer === 0 ? "text-brand-dark font-medium" : "text-gray-400"
            )}
            disabled={timer > 0}
            onClick={() => setTimer(20)}
          >
            Send code again {timer > 0 && <span className="ml-1">{formatTime(timer)}</span>}
          </button>
        </div>
      </div>
      
      <div className="w-full">
        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} />
      </div>
    </div>
  );
}
