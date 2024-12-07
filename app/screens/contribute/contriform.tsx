// components/ContributionForm.tsx
import React, { useState } from 'react';
// import { Campaign } from '@/types/Campaign';

// const mockCampaigns = [
//   // Same campaigns as in ActiveCampaigns component
// ];

const ContributionForm: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string>('');
  const [contributionType, setContributionType] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement contribution logic
    console.log('Contribution submitted', { selectedCampaign, contributionType, amount });
  };

  return (
    <>
    <form
          onSubmit={handleContribution}
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-black">Make Your Contribution</h2>

          {/* Campaign Selection (hidden if no campaign selected) */}
          {selectedCampaign && (
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Selected Campaign</label>
              <input
                type="text"
                value={
                  mockCampaigns.find(c => c.id === selectedCampaign)?.title || ''
                }
                readOnly
                className="w-full p-2 bg-gray-100 rounded"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-black">Contribution Type</label>
            <select
              value={contributionType}
              onChange={(e) => setContributionType(e.target.value)}
              className="w-full text-black p-2 border rounded"
              required
            >
              <option value="">Select Contribution Type</option>
              <option value="crypto">Cryptocurrency</option>
              <option value="fiat">Fiat Currency</option>
              <option value="goods">Goods</option>
              <option value="services">Services</option>
            </select>
          </div>

          {contributionType === 'goods' ? (
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-black">Goods Description</label>
              <textarea
                value={goodsDescription}
                onChange={(e) => setGoodsDescription(e.target.value)}
                className="w-full p-2 border rounded text-black"
                placeholder="Describe the goods you wish to contribute"
                required
              />
            </div>
          ) : (
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-black">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="w-full p-2 border rounded text-black"
                placeholder="Enter contribution amount"
                min="0"
                step="0.01"
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={!selectedCampaign}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${selectedCampaign
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
              }`}
          >
            Contribute Now
          </button>
        </form>
    </>
  );
};

export default ContributionForm;