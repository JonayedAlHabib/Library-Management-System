import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Calendar } from 'lucide-react';

const UserDashboard = () => {
    const navItems = [
        { label: "Student Dashboard", href: "/user/dashboard", icon: "dashboard" },
        { label: "Books Page", href: "/user/books", icon: "books" },
        { label: "Edit Profile", href: "/user/profile", icon: "users" },
    ];

    const stats = [
        { icon: "📚", label: "Total Issues", value: "0", desc: "All library records attached to your student account" },
        { icon: "📖", label: "Active Books", value: "0", desc: "Books currently mapped to your profile" },
        { icon: "⚠️", label: "Overdue Books", value: "0", desc: "Needs follow-up before more penalties are added" },
        { icon: "💰", label: "Pending Fine", value: "Rs. 0", desc: "Fine amount still pending on active records" },
        { icon: "✅", label: "Fine Cleared", value: "Rs. 0", desc: "Total fine amount already cleared on your account" },
    ];

    return (
        <div className="min-h-screen bg-library-paper">
            <Sidebar
                title="ShelfWise"
                subtitle="College library access"
                badge="STUDENT SECTION"
                accent="user"
                navItems={navItems}
            />

            <div className="md:ml-72 p-6 lg:p-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <div className="uppercase tracking-[2px] text-xs font-medium text-emerald-700">STUDENT DASHBOARD</div>
                    <h1 className="text-5xl font-semibold mt-2 leading-tight">
                        Hexagon digital Services profile,<br />
                        semester status, and your latest library books.
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-2xl">
                        Your dashboard now keeps the important account summary at the top and shows the most recent issued books directly below for faster access.
                    </p>
                </div>

                {/* Profile + Semester Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm">
                        <h3 className="font-medium text-lg mb-4">STUDENT PROFILE</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="text-sm text-gray-500">Name</div>
                                <div className="font-semibold">Hexagon digital Services</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Student ID</div>
                                <div className="font-semibold">ST-B4DA5910</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Roll Number</div>
                                <div className="font-semibold">RN-1</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Department</div>
                                <div className="font-semibold">IT</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-emerald-900 text-white rounded-3xl p-8 shadow-sm">
                        <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                            <Calendar size={20} /> SEMESTER DETAILS
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white/10 rounded-2xl p-4">
                                <div className="text-sm opacity-75">Stream</div>
                                <div className="font-semibold">C.Sc</div>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-4">
                                <div className="text-sm opacity-75">Academic Year</div>
                                <div className="font-semibold">2nd Year</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                            <div className="text-4xl mb-4">{stat.icon}</div>
                            <div className="text-4xl font-semibold">{stat.value}</div>
                            <div className="font-medium mt-1">{stat.label}</div>
                            <p className="text-xs text-gray-500 mt-3 leading-tight">{stat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Books */}
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-semibold">Recent Books</h2>
                            <p className="text-sm text-gray-500">The latest three records from your books page</p>
                        </div>
                        <button className="text-emerald-700 font-medium">View More →</button>
                    </div>
                    <div className="bg-library-paper border border-dashed border-gray-300 rounded-2xl h-40 flex items-center justify-center text-gray-400">
                        No recent books found for this account.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;