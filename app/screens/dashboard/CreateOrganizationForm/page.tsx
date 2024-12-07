'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, DollarSign, FileText } from 'lucide-react';

const CreateOrganizationForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fundingGoal, setFundingGoal] = useState('');
    const [deadline, setDeadline] = useState('');
    const [category, setCategory] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ title, description, fundingGoal, deadline, category });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-black">Create Organization</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center border border-gray-300 rounded-md p-2 text-black">
                        <FileText className="text-black mr-2" />
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full outline-none text-black"
                            required
                        />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <FileText className="text-black mr-2" />
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full outline-none text-black"
                            required
                        />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <DollarSign className="text-black mr-2" />
                        <input
                            type="number"
                            placeholder="Funding Goal"
                            value={fundingGoal}
                            onChange={(e) => setFundingGoal(e.target.value)}
                            className="w-full outline-none text-black"
                            required
                        />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <Calendar className="text-black mr-2" />
                        <input
                            type="date"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            className="w-full outline-none text-black"
                            required
                        />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <FileText className="text-black mr-2" />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full outline-none text-black"
                            required
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Shelter-and-Housing">Shelter and Housing</option>
                            <option value="Medical-Aid">Medical Aid</option>
                            <option value="Health">Health</option>
                            <option value="Water-and-Sanitation">Water and Sanitation</option>
                            <option value="Clothing-and-Essentials">Clothing and Essentials</option>
                            <option value="Mental-Health-Support">Mental Health Support</option>
                            <option value="Child-and-Family-Support">Child and Family Support</option>
                            <option value="Education-Aid">Education Aid</option>
                            <option value="Animal-Rescue">Animal Rescue</option>
                            <option value="Community-Rebuilding">Community Rebuilding</option>
                            <option value="Energy-and-Utilities">Energy and Utilities</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Create Organization
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateOrganizationForm;