"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

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
      <div className="grid md:grid-cols-3 gap-6 mx-5">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Donate</h2>
          <p className='text-zinc-600'>Support critical emergency campaigns</p>
          <div 
            // href="/donate" 
            className="mt-4 block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => HandleNavigate('/screens/donate')}
          >
            Contribute Now
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Request Aid</h2>
          <p className='text-zinc-600'>Submit a request for emergency assistance</p>
          <div 
            // href="/request-aid" 
            className="mt-4 block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={() => HandleNavigate('/screens/dashboard')}
          >
            Get Help
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Volunteer</h2>
          <p className='text-zinc-600'>Join our community support efforts</p>
          <div 
            // href="/volunteer" 
            className="mt-4 block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
            onClick={() => HandleNavigate('/screens/verification')}
          >
            Join Now
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