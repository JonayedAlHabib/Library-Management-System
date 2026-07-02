import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { BookCopy, Search } from 'lucide-react';

const UserBooks = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');

    const navItems = [
        { label: "Student Dashboard", href: "/user/dashboard", icon: "dashboard" },
        { label: "Books Page", href: "/user/books", icon: "books" },
        { label: "Edit Profile", href: "/user/profile", icon: "users" },
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
                <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
                    <div className="uppercase tracking-[2px] text-xs font-medium text-emerald-700 mb-2">STUDENT BOOKS PAGE</div>
                    <h1 className="text-4xl font-semibold">Book cards with richer content and cleaner grouped details.</h1>
                    <p className="text-gray-600 mt-3 max-w-2xl">
                        Each card now uses a clearer top summary, status badge, context chips, and a better medium-card layout.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-6">My Issued Books</h2>

                    {/* Search & Filter */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by book name, code, borrower, or author"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                            />
                        </div>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none"
                        >
                            <option>All Status</option>
                            <option>Borrowed</option>
                            <option>Overdue</option>
                            <option>Returned</option>
                        </select>
                    </div>

                    {/* Empty State */}
                    <div className="bg-library-paper border border-dashed border-gray-300 rounded-3xl h-80 flex flex-col items-center justify-center text-center">
                        <BookCopy size={48} className="text-gray-300 mb-4" />
                        <p className="text-gray-500">No issued books matched your search.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBooks;