'use client';
import React, { useState, useEffect } from 'react';

interface AidProject {
  id: string;
  name: string;
  description: string;
  totalFundingNeeded: number;
  currentFunding: number;
  status: 'ongoing' | 'completed' | 'pending';
}

const mockProjects: AidProject[] = [
  {
    id: '1',
    name: 'Refugee Food Relief',
    description: 'Providing meals to displaced families',
    totalFundingNeeded: 100000,
    currentFunding: 45000,
    status: 'ongoing'
  },
  {
    id: '2',
    name: 'Medical Supplies Drive',
    description: 'Emergency medical support in conflict zones',
    totalFundingNeeded: 75000,
    currentFunding: 30000,
    status: 'ongoing'
  }
];

const DashboardPage: React.FC = () => {
  const [aidProjects, setAidProjects] = useState<AidProject[]>([]);
  const [totalImpact, setTotalImpact] = useState({
    fundingRaised: 0,
    projectsSupported: 0,
    peopleHelped: 0
  });

  useEffect(() => {
    setAidProjects(mockProjects);
    setTotalImpact({
      fundingRaised: 75000,
      projectsSupported: mockProjects.length,
      peopleHelped: 5000
    });
  }, []);

  const calculateProgressPercentage = (current: number, total: number) => {
    return (current / total) * 100;
  };

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white mx-5">AidChain Dashboard</h1>
      
      {/* Impact Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mx-5">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Total Funding Raised</h2>
          <p className="text-2xl font-bold text-blue-600">
            ${totalImpact.fundingRaised.toLocaleString()}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Projects Supported</h2>
          <p className="text-2xl font-bold text-green-600">
            {totalImpact.projectsSupported}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">People Helped</h2>
          <p className="text-2xl font-bold text-purple-600">
            {totalImpact.peopleHelped.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Active Aid Projects */}
      <h2 className="text-2xl font-semibold mb-4 mx-5 text-blue-600">Active Aid Campaigns</h2>
      <div className="space-y-4 mx-5">
        {aidProjects.map(project => (
          <div 
            key={project.id} 
            className="bg-white shadow-md rounded-lg p-6 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
              <span 
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'ongoing' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className='border border-gray-500 rounded-lg p-3 my-3'>
              <p className="font-bold text-lg text-zinc-600 mb-2">{project.description}</p>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{
                      width: `${calculateProgressPercentage(
                        project.currentFunding, 
                        project.totalFundingNeeded
                      )}%`
                    }}
                  >
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>
                    Raised: ${project.currentFunding.toLocaleString()}
                  </span>
                  <span>
                    Goal: ${project.totalFundingNeeded.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            
            <button 
              className="w-auto bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contribute
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;