import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Keypad from '../../components/ui/Keypad';
import Loader from '../../components/ui/Loader';
import { FaArrowLeft } from "react-icons/fa";

// Country list
const countries = [
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
];

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  // Handle numeric keypad input
  const handleKeyPress = (key) => {
    if (phone.replace(/\D/g, '').length < 11) {
      let newPhone = phone + key;
      let formatted = newPhone.replace(/\D/g, '');
      if (formatted.length > 2) formatted = formatted.slice(0, 2) + ' ' + formatted.slice(2);
      if (formatted.length > 7) formatted = formatted.slice(0, 7) + ' ' + formatted.slice(7);
      setPhone(formatted);
    }
  };

  const handleDelete = () => {
    setPhone((prev) => prev.slice(0, -1).trim());
  };

  const handleContinue = async () => {
    if (phone.replace(/\D/g, '').length >= 10) {
      setIsSubmitting(true);
      try {
        await new Promise((r) => setTimeout(r, 800));
        navigate('/verify', { state: { phoneNumber: selectedCountry.code + ' ' + phone } });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white relative">
      {/* Header with Back Arrow */}
      <div className="flex items-center px-6 py-4">
        <button onClick={() => navigate(-1)} className="p-1">
          <FaArrowLeft className="w-6 h-6 text-black" />
        </button>
        <h1 className="flex-1 text-center text-xl font-bold text-black">MeTime</h1>
        <div className="w-6 h-6" /> {/* Placeholder to center title */}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 sm:px-12 md:px-20 lg:px-32 pt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Log in</h1>
        <p className="text-base sm:text-lg text-gray-500 mb-6">
          Please confirm your country code and enter your phone number.
        </p>

        {/* Country Selector */}
        <div className="relative mb-6">
          <button
            type="button"
            className="flex items-center justify-between w-full p-2 border-b border-gray-200 rounded-md"
            onClick={() => setIsCountryOpen(!isCountryOpen)}
          >
            <div className="flex items-center gap-2 text-base font-medium">
              <span className="text-xl">{selectedCountry.flag}</span>
              <span>{selectedCountry.name}</span>
            </div>
            <span className="text-gray-400">{isCountryOpen ? '▲' : '▼'}</span>
          </button>

          {isCountryOpen && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-md max-h-60 overflow-auto z-10 rounded-md">
              {countries.map((country) => (
                <li
                  key={country.code}
                  className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsCountryOpen(false);
                  }}
                >
                  <span className="text-xl">{country.flag}</span>
                  <span>{country.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Phone Input */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10 pb-2 border-b-2 border-pink-200">
          <span className="text-base font-medium text-black">{selectedCountry.code}</span>
          <span className="text-base font-medium text-black flex-1">
            {phone || <span className="text-gray-300">00 0000 0000</span>}
          </span>
        </div>

        {/* Continue Button */}
        <div className="mt-auto mb-6 sm:mb-8">
          <Button
            onClick={handleContinue}
            disabled={phone.replace(/\D/g, '').length < 10 || isSubmitting}
            className="w-full py-4 bg-pink-200 text-white font-semibold text-lg rounded-xl shadow-lg"
          >
            {isSubmitting && <Loader size="sm" className="mr-2 border-black" />}
            {isSubmitting ? 'Processing...' : 'Continue'}
          </Button>
        </div>
      </div>

      {/* Custom Keypad */}
      <div className="w-full">
        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} />
      </div>
    </div>
  );
}