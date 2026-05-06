import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeOff, Eye, ChevronDown } from 'lucide-react';
import { FaArrowLeft } from 'react-icons/fa'; // Arrow icon
import Header from '../../components/ui/Header';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const countries = [
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
];

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white relative overflow-y-auto hide-scrollbar">
      
      {/* Header with Back Arrow */}
      <div className="flex items-center px-6 py-4">
        <button onClick={() => navigate(-1)} className="p-1">
          <FaArrowLeft className="w-6 h-6 text-black" />
        </button>
        <h1 className="flex-1 text-center text-xl font-bold text-black">Sign up</h1>
        <div className="w-6 h-6" /> {/* Placeholder for center alignment */}
      </div>

      <div className="px-6 pt-4 pb-8 flex flex-col gap-5">
        <h1 className="text-[28px] font-bold text-brand-dark mb-1">Sign up</h1>

        <Input label="Full Name" placeholder="Enter your full name" />
        <Input label="Email" type="email" placeholder="Enter your email" />

        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          rightIcon={
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none">
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          }
        />

        {/* Phone Number with country selector */}
        <div>
          <label className="block text-sm text-brand-dark mb-1.5 ml-1">Phone Number</label>
          <div className="flex gap-3">
            <div className="relative w-[100px]">
              <button
                type="button"
                className="flex items-center justify-between w-full h-full rounded-2xl border border-brand-primary bg-white px-4 py-3.5 text-[15px]"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
              >
                <span className="font-medium text-brand-dark">{selectedCountry.code}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              {isCountryOpen && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-md max-h-60 overflow-auto z-10">
                  {countries.map((c) => (
                    <li
                      key={c.code}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => {
                        setSelectedCountry(c);
                        setIsCountryOpen(false);
                      }}
                    >
                      <span className="text-xl">{c.flag}</span>
                      <span>{c.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Input
              placeholder="+47 0 0000 0000"
              className="flex-1 border-brand-primary focus:border-brand-primary focus:ring-brand-primary"
            />
          </div>
        </div>

        {/* Register button */}
        <div className="mt-6 flex flex-col gap-4">
          <Button onClick={() => navigate('/')}>Register</Button>

          <div className="text-center mt-2">
            <span className="text-[13px] text-gray-500">Already have an account</span>
          </div>

          <Button variant="outline" onClick={() => navigate('/login')}>
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}