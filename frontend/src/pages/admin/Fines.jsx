// Library/frontend/src/pages/admin/Fines.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const AdminFines = () => {
    const [fineAmount, setFineAmount] = useState(500);

    const navItems = [
        { label: "Admin Dashboard", href: "/admin/dashboard", icon: "dashboard" },
        { label: "Books Page", href: "/admin/books", icon: "books" },
        { label: "Users Page", href: "/admin/users", icon: "users" },
        { label: "Fine Page", href: "/admin/fines", icon: "alerts" },
    ];

    return (
        <div className="min-h-screen bg-library-paper">
            <Sidebar 
                title="ShelfWise" 
                subtitle="College admin controls" 
                badge="ADMIN SECTION"
                accent="admin"
                navItems={navItems}
            />

            <div className="md:ml-72 p-6 lg:p-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-10">
                    <h1 className="text-3xl font-semibold mb-2">Fine Settings</h1>
                    <p className="text-blue-600 bg-blue-50 px-4 py-2 rounded-2xl inline-block">
                        Save the overdue fine rule here. After saving, use the edit icon to update it again.
                    </p>

                    <div className="mt-8 border border-gray-200 rounded-3xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">FINE AMOUNT</label>
                                <input 
                                    type="number" 
                                    value={fineAmount} 
                                    onChange={(e) => setFineAmount(e.target.value)}
                                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl text-2xl font-semibold"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">FINE INTERVAL</label>
                                <select className="w-full px-5 py-4 border border-gray-200 rounded-2xl">
                                    <option>Per Day</option>
                                    <option>Per Week</option>
                                </select>
                            </div>
                            <div className="flex items-end">
                                <div className="bg-gray-100 px-6 py-4 rounded-2xl w-full text-center font-medium">
                                    Rs. {fineAmount} per day
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminFines;