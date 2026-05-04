import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function AddCard() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    exp: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCard = () => {
    if (formData.number.length >= 4) {
      // Simulate adding card and going back
      navigate(-1);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      <Header title="MeTime" />
      
      <div className="px-6 pt-6 pb-8 flex flex-col flex-1">
        <h1 className="text-[28px] font-bold text-brand-dark mb-8">Add Card</h1>
        
        <div className="flex flex-col gap-5 flex-1">
          <Input 
            label="Cardholder name" 
            name="name"
            placeholder="Janet Doe" 
            value={formData.name}
            onChange={handleChange}
          />
          
          <Input 
            label="Card number" 
            name="number"
            placeholder="7834 xxxx xxxx 2345" 
            value={formData.number}
            onChange={handleChange}
            rightIcon={
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full bg-red-500 opacity-80 mix-blend-multiply" />
                <div className="w-5 h-5 rounded-full bg-yellow-400 opacity-80 mix-blend-multiply" />
              </div>
            }
          />
          
          <div className="flex gap-4">
            <div className="flex-1">
              <Input 
                label="Exp. Date" 
                name="exp"
                placeholder="08/11" 
                value={formData.exp}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Input 
                label="CVV" 
                name="cvv"
                placeholder="143" 
                type="password"
                value={formData.cvv}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-8">
          <Button 
            onClick={handleAddCard}
            disabled={!formData.name || !formData.number || !formData.exp || !formData.cvv}
          >
            Add Card
          </Button>
        </div>
      </div>
    </div>
  );
}
