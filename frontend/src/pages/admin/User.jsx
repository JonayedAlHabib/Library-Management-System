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
                <div className="bg-white rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-semibold">Student Accounts and Issued Books</h1>
                            <p className="text-gray-600">Filter students by borrowing status...</p>
                        </div>
                        <button className="bg-emerald-800 text-white px-6 py-3 rounded-2xl flex items-center gap-2">
                            Export CSV
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-3xl p-6">
                            <div className="flex justify-between">
                                <div>
                                    <div className="font-semibold">Shruti Hasan</div>
                                    <div className="text-sm text-gray-500">ST-3D5B864F | hasanshruti496@gmail.com</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-emerald-600 font-medium">Rs. 28000</div>
                                    <div className="text-xs text-rose-500">Overdue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;