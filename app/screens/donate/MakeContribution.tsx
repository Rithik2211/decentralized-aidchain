'use client';
import React, { useState } from 'react';

const ContributionPage: React.FC = () => {
  const [contributionAmount, setContributionAmount] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [contributionMethod, setContributionMethod] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMethodDropdownOpen, setIsMethodDropdownOpen] = useState(false);

  const handleContribute = () => {
    console.log('Contributing', {
      amount: contributionAmount,
      project: selectedProject,
      method: contributionMethod
    });
  };

  const projects = [
    { id: '1', name: 'Refugee Food Relief' },
    { id: '2', name: 'Medical Supplies Drive' },
    { id: '3', name: 'Emergency Shelter Program' }
  ];

  const contributionMethods = [
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'fiat', name: 'Bank Transfer' },
    { id: 'stablecoin', name: 'Stablecoin' }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-[40px]">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contribute to Humanitarian Aid</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Make a Contribution</h2>
        
        <div className="space-y-4">
          {/* Project Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left px-4 py-2 border border-gray-300 rounded-md flex justify-between items-center"
            >
              {selectedProject 
                ? projects.find(p => p.id === selectedProject)?.name 
                : 'Select Project'}
              <svg 
                className="w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {projects.map(project => (
                  <div 
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project.id);
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {project.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contribution Amount Input */}
          <input 
            type="number" 
            placeholder="Contribution Amount" 
            value={contributionAmount}
            onChange={(e) => setContributionAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Contribution Method Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsMethodDropdownOpen(!isMethodDropdownOpen)}
              className="w-full text-left px-4 py-2 border border-gray-300 rounded-md flex justify-between items-center"
            >
              {contributionMethod 
                ? contributionMethods.find(m => m.id === contributionMethod)?.name 
                : 'Select Contribution Method'}
              <svg 
                className="w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isMethodDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {contributionMethods.map(method => (
                  <div 
                    key={method.id}
                    onClick={() => {
                      setContributionMethod(method.id);
                      setIsMethodDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {method.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contribute Button */}
          <button 
            onClick={handleContribute} 
            disabled={!selectedProject || !contributionAmount || !contributionMethod}
            className={`w-full py-2 rounded-lg transition-colors ${
              !selectedProject || !contributionAmount || !contributionMethod
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
            }`}
          >
            Contribute Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContributionPage;