// Library/frontend/src/pages/admin/Books.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Search, Plus, User } from 'lucide-react';

const AdminBooks = () => {
    const [searchRoll, setSearchRoll] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);

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

            <div className="md:ml-72 p-6 lg:p-8 max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl p-10">
                    <h1 className="text-4xl font-semibold mb-2">Issue Book To Student</h1>
                    <p className="text-gray-600">Select a student, add manual book entries with book code, and the active overdue fine rule will be used automatically after the due date.</p>

                    <div className="mt-8 border border-gray-200 rounded-3xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Student Name</label>
                                <div className="relative">
                                    <input type="text" placeholder="Selected student name" className="w-full px-4 py-3 border border-gray-200 rounded-2xl" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Department</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-2xl" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Stream</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-2xl" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium mb-2">Search by Roll Number</label>
                            <div className="flex gap-3">
                                <input 
                                    type="text" 
                                    value={searchRoll}
                                    onChange={(e) => setSearchRoll(e.target.value)}
                                    placeholder="Enter roll number" 
                                    className="flex-1 px-4 py-3 border border-gray-200 rounded-2xl" 
                                />
                                <button className="bg-emerald-800 text-white px-8 rounded-2xl flex items-center gap-2">
                                    <Search size={18} /> Search
                                </button>
                            </div>
                        </div>

                        <div className="mt-10">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold">Manual Book Entries</h3>
                                <button className="bg-black text-white px-6 py-2 rounded-2xl flex items-center gap-2 text-sm">
                                    <Plus size={18} /> Add Book
                                </button>
                            </div>

                            <div className="border border-dashed border-gray-300 rounded-3xl p-8 text-center text-gray-400">
                                Add book name and code. Issue date is set automatically to today.
                            </div>
                        </div>

                        <button className="mt-8 w-full bg-emerald-800 text-white py-4 rounded-2xl font-medium">
                            Issue Manual Books
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBooks;