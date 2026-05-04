import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeOff, Eye, ChevronDown } from 'lucide-react';
import Header from '../../components/ui/Header';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white relative overflow-y-auto hide-scrollbar">
      <Header />
      
      <div className="px-6 pt-4 pb-8 flex flex-col gap-5">
        <h1 className="text-[28px] font-bold text-brand-dark mb-1">Sign up</h1>
        
        <Input 
          label="Full Name" 
          placeholder="Enter your full name" 
        />
        
        <Input 
          label="Email" 
          type="email" 
          placeholder="Enter your email" 
        />
        
        <div className="relative">
          <Input 
            label="Password" 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Enter your password"
            rightIcon={
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            }
          />
        </div>
        
        <div>
          <label className="block text-sm text-brand-dark mb-1.5 ml-1">
            Phone Number
          </label>
          <div className="flex gap-3">
            <div className="relative w-[100px]">
              <select className="appearance-none w-full h-full absolute inset-0 opacity-0 cursor-pointer">
                <option>+55</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <div className="flex items-center justify-between w-full h-full rounded-2xl border border-brand-primary bg-white px-4 py-3.5 text-[15px]">
                <span className="font-medium text-brand-dark">+55</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
            <Input 
              placeholder="+47 0 0000 0000" 
              className="flex-1 border-brand-primary focus:border-brand-primary focus:ring-brand-primary"
            />
          </div>
        </div>
        
        <div className="mt-6 flex flex-col gap-4">
          <Button onClick={() => navigate('/')}>
            Register
          </Button>
          
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
