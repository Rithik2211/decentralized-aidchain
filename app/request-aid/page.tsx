export default function RequestAidPage() {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Request Aid</h1>
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block mb-2 text-black">Location</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded" 
              placeholder="Enter your location"
            />
          </div>
          <div>
            <label className="block mb-2 text-black">Type of Aid Needed</label>
            <select className="w-full p-2 border rounded text-zinc-400">
              <option>Food</option>
              <option>Medical</option>
              <option>Shelter</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-black">Description</label>
            <textarea 
              className="w-full p-2 border rounded" 
              rows={4} 
              placeholder="Describe your current situation"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Submit Aid Request
          </button>
        </form>
      </div>
    )
  }
  