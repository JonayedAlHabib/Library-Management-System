// Library/frontend/src/pages/admin/Users.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';

const AdminUsers = () => {
    const navItems = [
        { label: "Admin Dashboard", href: "/admin/dashboard", icon: "dashboard" },
        { label: "Books Page", href: "/admin/books", icon: "books" },
        { label: "Users Page", href: "/admin/users", icon: "users" },
        { label: "Fine Page", href: "/admin/fines", icon: "alerts" },
    ];

    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            <Sidebar 
                title="ShelfWise" 
                subtitle="College admin controls" 
                badge="ADMIN SECTION"
                accent="admin"
                navItems={navItems}
            />

            <div className="md:ml-72 p-6 lg:p-8 max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-semibold">Student Accounts and Issued Books</h1>
                        <button className="bg-emerald-800 text-white px-6 py-3 rounded-2xl flex items-center gap-2">
                            Export CSV
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <input 
                            type="text" 
                            placeholder="Search by student name, email, book code..." 
                            className="flex-1 min-w-[300px] px-5 py-3 border border-gray-200 rounded-2xl"
                        />
                        <select className="px-5 py-3 border border-gray-200 rounded-2xl">
                            <option>Overdue Students</option>
                        </select>
                        <select className="px-5 py-3 border border-gray-200 rounded-2xl">
                            <option>Fine High to Low</option>
                        </select>
                    </div>

                    {/* Student Card */}
                    <div className="border border-gray-200 rounded-3xl p-8 mb-6">
                        <div className="flex justify-between">
                            <div>
                                <div className="font-semibold text-xl">Shruti Hasan</div>
                                <div className="text-gray-500">ST-3D5B864F | hasanshruti496@gmail.com</div>
                            </div>
                            <button className="text-emerald-700">View Details →</button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
                            <div>
                                <div className="text-xs text-gray-500">ROLE</div>
                                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm w-fit">Student</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">ACTIVE BOOKS</div>
                                <div className="font-semibold">6</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">TOTAL FINE</div>
                                <div className="font-semibold text-rose-600">Rs. 28000</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">STATUS</div>
                                <div className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm w-fit">Overdue</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">FINE CLEARED</div>
                                <div className="font-semibold">0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;