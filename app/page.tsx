"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Heart, HandHelping, Users } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const HandleNavigate = (route : string) => {
    router.push(route)
  }

  return (
    <div className="text-center mt-[40px]">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">
        Decentralized Emergency Aid Platform
      </h1>


<div className="grid md:grid-cols-3 gap-8 mx-5">
      {/* Donate Card */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <Heart color="#2563eb" size={64} className="mb-6"/>
        <h2 className="text-2xl font-semibold text-black mb-4">Donate</h2>
        <p className='text-zinc-600 text-center mb-4'>Support critical emergency campaigns</p>
        <div className="flex flex-col items-center">
          <p className="text-sm text-zinc-500 text-center mb-2">
            • 100% of donations go directly to aid
            • Tax-deductible contributions
            • Transparent fund allocation
          </p>
          <div 
            className="mt-4 block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
            onClick={() => HandleNavigate('/screens/donate')}
          >
            Contribute Now
          </div>
        </div>
      </div>

      {/* Request Aid Card */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <HandHelping color="#16a34a" size={64} className="mb-4"/>
        <h2 className="text-2xl font-semibold text-black mb-4">Request Aid</h2>
        <p className='text-zinc-600 text-center mb-4'>Submit a request for emergency assistance</p>
        <div className="flex flex-col items-center">
          <p className="text-sm text-zinc-500 text-center mb-2">
            • Confidential support
            • Fast response times
            • Comprehensive assistance programs
          </p>
          <div 
            className="mt-4 block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer"
            onClick={() => HandleNavigate('/screens/dashboard')}
          >
            Get Help
          </div>
        </div>
      </div>

      {/* Volunteer Card */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <Users color="#7e22ce" size={64} className="mb-4"/>
        <h2 className="text-2xl font-semibold text-black mb-4">Volunteer</h2>
        <p className='text-zinc-600 text-center mb-4'>Join our community support efforts</p>
        <div className="flex flex-col items-center">
          <p className="text-sm text-zinc-500 text-center mb-2">
            • Make a real community impact
            • Flexible time commitments
            • Training and support provided
          </p>
          <div 
            className="mt-4 block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 cursor-pointer"
            onClick={() => HandleNavigate('/screens/verification')}
          >
            Join Now
          </div>
        </div>
      </div>
    </div>

      {/* <div className="grid md:grid-cols-2 gap-6">
        <CampaignProgressChart />
        <ImpactMetricsChart />
      </div> */}
    </div>
  )
}