export default function DonatePage() {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Donate</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Active Campaigns</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded">
              <h3 className="font-bold text-lg text-zinc-600 ">Earthquake Relief - Turkey</h3>
              <div className="flex items-center mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{width: '65%'}}
                  ></div>
                </div>
                <span className="text-zinc-600">65%</span>
              </div>
              <p className="mt-2 text-zinc-600">Raised $650,000 of $1,000,000 goal</p>
            </div>
          </div>
        </div>
      </div>
    )
  }