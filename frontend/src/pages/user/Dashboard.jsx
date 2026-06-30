// Library/frontend/src/pages/user/Dashboard.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import { BookCopy, Clock, AlertTriangle } from 'lucide-react';

const UserDashboard = () => {
    const navItems = [
        { label: "Dashboard", href: "/user/dashboard", icon: "dashboard" },
        { label: "Books Page", href: "/user/books", icon: "books" },
        { label: "Edit Profile", href: "/user/profile", icon: "users" },
    ];

    const stats = [
        { label: "Total Issues", value: "1", sub: "All library records attached to your student account" },
        { label: "Active Books", value: "1", sub: "Books currently mapped to your profile" },
        { label: "Overdue Books", value: "0", sub: "Needs follow-up before more penalties are added" },
        { label: "Pending Fine", value: "Rs. 0", sub: "Fine amount still pending on active records" },
        { label: "Fine Cleared", value: "Rs. 0", sub: "Total fine amount already cleared on your account" },
    ];

    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            <Sidebar 
                title="ShelfWise" 
                subtitle="College library access" 
                badge="STUDENT SECTION"
                accent="user"
                navItems={navItems}
            />

            <div className="md:ml-72 p-6 max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-semibold">Student Desk</h1>
                    <p className="text-gray-600 mt-1">Your college library overview</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="text-4xl font-semibold text-emerald-800">{stat.value}</div>
                            <div className="font-medium mt-2">{stat.label}</div>
                            <p className="text-xs text-gray-500 mt-1 leading-tight">{stat.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Books */}
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">Recent Books</span>
                            <p className="text-sm text-gray-500 mt-2">The latest three records from your books page</p>
                        </div>
                        <button className="text-sm font-medium text-emerald-700 hover:underline">View More →</button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-2xl p-6 bg-[#f8f5f0]">
                            <div className="font-mono text-sm mb-4">JAVA-121</div>
                            <div className="font-semibold text-lg">Java Programming</div>
                            <div className="text-xs text-gray-500 mt-6">Issued: 18 Jun 2026</div>
                            <div className="text-xs text-gray-500">Due: 21 Jun 2026</div>
                            <div className="mt-4 inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded text-xs">Borrowed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;