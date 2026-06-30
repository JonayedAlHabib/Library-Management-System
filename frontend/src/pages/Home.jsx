// Library/frontend/src/pages/Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import { BookCopy, Users, ShieldCheck } from 'lucide-react';
import { homeStyles as s } from '../assets/dummyStyles';

const navItems = [
    { label: "Student Dashboard", href: "/user/dashboard", icon: "dashboard" },
    { label: "Admin Dashboard", href: "/admin/dashboard", icon: "admin" },
];

function Home() {
    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            <Sidebar 
                title="ShelfWise"
                subtitle="Library management portal"
                badge="BEAUTIFUL THEME"
                navItems={navItems}
                accent="user"
            />

            <div className="md:ml-72 pt-8 px-6 max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl p-10 shadow-sm border border-white">
                    <div className="inline-block bg-emerald-700 text-white text-sm font-medium px-5 py-1.5 rounded-full mb-6">
                        LIBRARY MANAGEMENT WEBSITE
                    </div>

                    <h1 className="text-6xl font-semibold leading-tight text-gray-900 max-w-3xl">
                        Manage students, books, returns, and fines in one library dashboard.
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                        This library management portal gives students a focused borrowing dashboard and 
                        gives admins a practical workspace for manual circulation, user records, and overdue tracking.
                    </p>

                    <div className="flex gap-4 mt-10">
                        <a href="/signup" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2">
                            Create Account →
                        </a>
                        <a href="/login" className="border border-gray-300 hover:bg-gray-50 px-8 py-3.5 rounded-full font-medium">
                            Login Now →
                        </a>
                    </div>
                </div>

                {/* Library Workflow Box */}
                <div className="mt-8 bg-emerald-900 text-white p-8 rounded-3xl">
                    <div className="uppercase tracking-widest text-xs mb-2">LIBRARY WORKFLOW</div>
                    <h2 className="text-3xl font-semibold">Separate student and admin dashboards built for daily library operations.</h2>
                    <p className="mt-4 text-emerald-100">Monitor issue activity, keep profile records updated, and track overdue follow-up without leaving the system.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;