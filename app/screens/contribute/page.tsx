// pages/contribute.tsx
'use client'
import React, { useState } from 'react';
// import { Campaign } from '@/types/Campaign';

// Mock campaigns data
const mockCampaigns = [
  {
    id: '1',
    title: 'Flood Relief in Chennai',
    description: 'Urgent support needed for flood-affected families in Chennai',
    region: 'India',
    emergencyType: 'Shelter',
    urgencyLevel: 'High',
    goalAmount: 100,
    raisedAmount: 50,
    contributionTypes: ['Crypto', 'Fiat']
  },
  {
    id: '2',
    title: 'Medical Aid for Ukraine',
    description: 'Providing critical medical supplies and support',
    region: 'Ukraine',
    emergencyType: 'Medical',
    urgencyLevel: 'Critical',
    goalAmount: 200,
    raisedAmount: 75,
    contributionTypes: ['Crypto', 'Goods']
  }
];

const ContributePage: React.FC = () => {
  // State for filters and form
  const [filters, setFilters] = useState({
    region: '',
    emergencyType: '',
    urgencyLevel: ''
  });

  // Contribution form state
  const [selectedCampaign, setSelectedCampaign] = useState<string>('');
  const [contributionType, setContributionType] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [goodsDescription, setGoodsDescription] = useState<string>('');

  // Filter campaigns
  const filteredCampaigns = mockCampaigns.filter(campaign =>
    (!filters.region || campaign.region === filters.region) &&
    (!filters.emergencyType || campaign.emergencyType === filters.emergencyType) &&
    (!filters.urgencyLevel || campaign.urgencyLevel === filters.urgencyLevel)
  );

  // Submission handler
  const handleContribution = (e: React.FormEvent) => {
    e.preventDefault();
    const contributionData = {
      campaignId: selectedCampaign,
      contributionType,
      amount,
      goodsDescription: contributionType === 'goods' ? goodsDescription : undefined
    };

    // TODO: Implement actual contribution logic
    console.log('Contribution Submitted:', contributionData);

    // Reset form
    setSelectedCampaign('');
    setContributionType('');
    setAmount(0);
    setGoodsDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Make a Difference, One Contribution at a Time 🌍
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Support global emergencies with secure, transparent, and impactful donations
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex justify-center space-x-4">
          <select
            className="border rounded p-2 text-black"
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
          >
            <option value="">All Regions</option>
            <option value="India">India</option>
            <option value="Ukraine">Ukraine</option>
          </select>

          <select
            className="border rounded p-2 text-black"
            onChange={(e) => setFilters({ ...filters, emergencyType: e.target.value })}
          >
            <option value="">All Emergency Types</option>
            <option value="Shelter">Shelter</option>
            <option value="Medical">Medical</option>
          </select>

          <select
            className="border rounded p-2 text-black"
            onChange={(e) => setFilters({ ...filters, urgencyLevel: e.target.value })}
          >
            <option value="">All Urgency Levels</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredCampaigns.map(campaign => (
            <div
              key={campaign.id}
              className={`border rounded-lg p-6 shadow-md hover:shadow-xl transition ${selectedCampaign === campaign.id ? 'border-blue-500 border-2' : ''
                }`}
              onClick={() => setSelectedCampaign(campaign.id)}
            >
              <h3 className="text-xl font-bold mb-4 text-black">{campaign.title}</h3>
              <p className="mb-4 text-gray-600">{campaign.description}</p>

              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(campaign.raisedAmount / campaign.goalAmount) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-black">
                  <span>{campaign.raisedAmount} ETH raised</span>
                  <span>Goal: {campaign.goalAmount} ETH</span>
                </div>
              </div>

              <div className="flex space-x-2">
                {campaign.contributionTypes.map(type => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contribution Form */}


        {/* Impact Section */}
        <div className="mt-12 text-center bg-teal-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-black">Your Impact Matters</h3>
          <div className="text-gray-700 max-w-2xl mx-auto space-y-4">
            <ul className="list-disc list-inside">
              <p>🌟 <strong>Every contribution—big or small—makes a powerful impact!</strong></p>
              <p>🌍 Your support helps provide <strong>critical aid to communities in need.</strong></p>
              <p>🔗 With our <strong>transparent blockchain-powered platform</strong>, you can 📊 <strong>track every step of your donation's journey.</strong></p>
            </ul>
            <p className="mt-4">🤝 <strong>Together, we can create change!</strong> 💚</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContributePage;