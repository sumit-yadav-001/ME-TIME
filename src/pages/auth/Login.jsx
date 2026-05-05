import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Keypad from '../../components/ui/Keypad';
import Loader from '../../components/ui/Loader';

// Country list
const countries = [
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  // Add more countries as needed
];

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

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
    <div className="flex flex-col h-screen bg-white">
      <Header />

      <div className="flex-1 flex flex-col px-6 sm:px-12 md:px-20 lg:px-32 pt-6">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-2 sm:mb-3">
          Log in
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-brand-text-gray mb-6 sm:mb-8 leading-relaxed">
          Please confirm your country code and enter your phone number.
        </p>

        {/* Country selector */}
        <div className="relative mb-6 sm:mb-8">
          <button
            type="button"
            className="flex items-center justify-between w-full p-2 border-b border-gray-200"
            onClick={() => setIsCountryOpen(!isCountryOpen)}
          >
            <div className="flex items-center gap-2 text-[15px] font-medium">
              <span className="text-xl sm:text-2xl">{selectedCountry.flag}</span>
              <span>{selectedCountry.name}</span>
            </div>
            <span className="text-gray-400">{isCountryOpen ? '▲' : '▼'}</span>
          </button>

          {isCountryOpen && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-md max-h-60 overflow-auto z-10">
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

        {/* Phone input */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10 pb-2 border-b-2 border-brand-primary">
          <span className="text-sm sm:text-base md:text-lg font-medium text-brand-dark">
            {selectedCountry.code}
          </span>
          <span className="text-sm sm:text-base md:text-lg font-medium text-brand-dark flex-1">
            {phone || <span className="text-gray-300">00 0000 0000</span>}
          </span>
        </div>

        {/* Continue button */}
        <div className="mt-auto mb-6 sm:mb-8">
          <Button
            onClick={handleContinue}
            disabled={phone.replace(/\D/g, '').length < 10 || isSubmitting}
            className="w-full shadow-[0_8px_20px_-6px_rgba(255,200,200,0.8)] text-sm sm:text-base md:text-lg"
          >
            {isSubmitting && <Loader size="sm" className="mr-2 border-brand-dark" />}
            {isSubmitting ? 'Processing...' : 'Continue'}
          </Button>
        </div>
      </div>

      {/* Keypad */}
      <div className="w-full">
        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} />
      </div>
    </div>
  );
}