'use client'
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface ReliefFormData {
  title: string;
  description: string;
  fundingGoal: number;
  deadline: string;
}

const ReliefGenerationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReliefFormData>({
    title: '',
    description: '',
    fundingGoal: 0,
    deadline: ''
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'fundingGoal' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submission logic (e.g., blockchain transaction, API call)
    console.log('Relief Generation Form Submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 relative">
    <div className='absolute top-10 left-10 z-10 text-black' onClick={() => router.push('/screens/dashboard')}>
        <ArrowLeft />
    </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Aid Relief Generation 🌍 
          </h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-black mb-1">
                Relief Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter relief initiative title"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-black mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Describe the emergency aid relief initiative"
              />
            </div>

            <div>
              <label htmlFor="fundingGoal" className="block text-sm font-medium text-black mb-1">
                Funding Goal (USD)
              </label>
              <input
                type="number"
                id="fundingGoal"
                name="fundingGoal"
                value={formData.fundingGoal}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter total funding required"
              />
            </div>

            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-black mb-1">
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 
                rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-opacity-50 text-black"
              >
                Generate Relief Initiative
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReliefGenerationForm;