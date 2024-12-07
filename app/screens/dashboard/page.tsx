'use client';
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Organization {
  orgAddress: string;
  name: string;
  description: string;
  category: string;
  reputationScore: number;
  isVerified: boolean;
  imageUrl: string; // Added imageUrl for organization image
}

const ContributionPage: React.FC = () => {
  const router = useRouter();

  const HandleNavigate = (route: string) => {
    router.push(route);
  };

  const handleCreateOrganization = () => {
    // Navigate to the create organization page
    router.push('/screens/dashboard/CreateOrganizationForm'); // Adjust the route as necessary
  };

  const handleReliefGeneration = () => {
    // Navigate to the create organization page
    router.push('/screens/ReliefGenerationForm'); // Adjust the route as necessary
  };

  const organizations: Organization[] = [
    {
      orgAddress: '0x1',
      name: 'ATAA Humanitarian Relief Maldives',
      description: 'Humanitarian action in Syria',
      category: 'Food',
      reputationScore: 85,
      isVerified: true,
      imageUrl: '/ATAA.jpg' // Example image URL
    },
    {
      orgAddress: '0x2',
      name: 'Rotary World Help (RWH)',
      description: "A non-profit organization that collects, sorts, records, and ships medical supplies to third world countries. RWH's only criteria for aid is need.",
      category: 'Medical',
      reputationScore: 90,
      isVerified: true,
      imageUrl: '/Rotary.png' // Example image URL
    },
    {
      orgAddress: '0x3',
      name: 'The Global Shelter Cluster',
      description: 'Offering shelter to those affected by disasters.',
      category: 'Shelter',
      reputationScore: 88,
      isVerified: false,
      imageUrl: '/GSC.png' // Example image URL
    },
  ];

  return (
    <div className="container px-4 py-8 mx-auto flex flex-col justify-center items-center mt-[40px] relative">
      <div className='absolute top-0 left-10' onClick={() => HandleNavigate('')}>
        <ArrowLeft />
      </div>
      <button
        onClick={handleCreateOrganization}
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Create Organization
      </button>
      <h1 className="text-3xl font-bold mb-6 text-white">Organizations for Humanitarian Aid</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map(org => (
          <div key={org.orgAddress} className="bg-white shadow-md rounded-lg p-4">
            <Image src={org.imageUrl} alt={org.name} width={100} height={48} className="object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">{org.name}</h2>
            <p className="text-gray-600">{org.description}</p>
            <p className="text-black">Category: {org.category}</p>
            <p className="text-black">Reputation Score: {org.reputationScore}</p>
            <p className="text-black">Verified: {org.isVerified ? 'Yes' : 'No'}</p>
            <button
              onClick={() => handleReliefGeneration()}
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create Aid
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionPage;