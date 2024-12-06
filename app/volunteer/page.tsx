export default function VolunteerPage() {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Volunteer</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-black">Available Roles</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded">
              <h3 className="font-bold text-black">Logistics Support</h3>
              <p className="text-gray-600">Help coordinate aid distribution</p>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-bold text-black">On-Ground Aid</h3>
              <p className="text-gray-600">Directly assist in emergency zones</p>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-bold text-black">Tech Support</h3>
              <p className="text-gray-600">Support our digital infrastructure</p>
            </div>
          </div>
          <button 
            className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Sign Up as Volunteer
          </button>
        </div>
      </div>
    )
  }