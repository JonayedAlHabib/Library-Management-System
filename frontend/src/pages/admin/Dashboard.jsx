// Library/frontend/src/pages/admin/Dashboard.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Users, BookCopy, AlertTriangle, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
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

            <div className="md:ml-72 p-6 lg:p-8 max-w-7xl mx-auto">
                <div className="bg-emerald-900 text-white rounded-3xl p-10 mb-10">
                    <div className="uppercase tracking-widest text-xs mb-3">COLLEGE ADMINISTRATION WORKSPACE</div>
                    <h1 className="text-5xl font-semibold leading-tight">
                        Manage issued books, student records, returns, overdue status, and fines.
                    </h1>
                    <p className="mt-4 text-emerald-100 max-w-2xl">
                        The admin area now focuses on visual trend graphs while keeping the existing admin workflow unchanged.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">👥</div>
                            <div>
                                <div className="text-4xl font-semibold">22</div>
                                <div className="text-sm text-gray-500">Total Issued</div>
                                <div className="text-xs text-blue-600">All manual book issue records</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">📖</div>
                            <div>
                                <div className="text-4xl font-semibold">21</div>
                                <div className="text-sm text-gray-500">Currently Borrowed</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl">⚠️</div>
                            <div>
                                <div className="text-4xl font-semibold">14</div>
                                <div className="text-sm text-gray-500">Overdue Books</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl">💰</div>
                            <div>
                                <div className="text-4xl font-semibold">Rs. 0</div>
                                <div className="text-sm text-gray-500">Cleared Fine</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overdue Attention List */}
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-semibold">Overdue Attention List</h2>
                            <p className="text-sm text-gray-500">Top 4 overdue students ranked by total imposed fine</p>
                        </div>
                        <div className="text-rose-500">⚠️</div>
                    </div>

                    {/* Dummy Overdue Cards - Add more as needed */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="border border-gray-200 rounded-2xl p-6">
                            <div className="bg-rose-100 text-rose-700 text-xs px-3 py-1 w-fit rounded">MOST FINE IMPOSED</div>
                            <div className="mt-4 font-semibold">Shruti Hasan</div>
                            <div className="text-sm text-gray-500">22005 | hasanshruti496@gmail.com</div>
                            <div className="mt-6 text-3xl font-semibold text-rose-600">Rs. 28000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;