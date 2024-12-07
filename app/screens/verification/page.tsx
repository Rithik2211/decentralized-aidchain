'use client';

import React, { useState } from 'react';

const VerificationPage: React.FC = () => {
  const [identificationType, setIdentificationType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [supportDocuments, setSupportDocuments] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSupportDocuments(Array.from(event.target.files));
    }
  };

  const handleVerification = () => {
    // Placeholder for blockchain-based verification logic
    console.log('Verification Submitted', { 
      identificationType, 
      documentNumber, 
      supportDocuments 
    });
  };

  const identificationTypes = [
    { id: 'passport', name: 'Passport' },
    { id: 'nationalId', name: 'National ID' },
    { id: 'refugeeDoc', name: 'Refugee Document' }
  ];

  return (
    <div className="container px-4 py-8 mx-auto flex justify-center mt-[40px]">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Recipient Verification
        </h2>
        
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleVerification();
          }} 
          className="space-y-4"
        >
          <div>
            <label 
              htmlFor="identificationType" 
              className="block text-sm font-medium text-black mb-2"
            >
              Identification Type
            </label>
            <select 
              id="identificationType"
              value={identificationType}
              onChange={(e) => setIdentificationType(e.target.value)}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Identification Type</option>
              {identificationTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label 
              htmlFor="documentNumber" 
              className="block text-sm font-medium text-black mb-2"
            >
              Document Number
            </label>
            <input 
              type="text"
              id="documentNumber"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              placeholder="Enter document number"
              className="w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="supportingDocuments" 
              className="block text-sm font-medium text-black mb-2"
            >
              Upload Supporting Documents
            </label>
            <input 
              type="file"
              id="supportingDocuments"
              multiple
              onChange={handleFileUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white file:px-4 file:py-2 hover:file:bg-blue-600"
            />
            
            {supportDocuments.length > 0 && (
              <div className="mt-2 text-sm text-black">
                Files uploaded: {supportDocuments.length}
              </div>
            )}
          </div>

          <button 
            type="submit"
            disabled={!identificationType || !documentNumber}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Submit Verification
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;