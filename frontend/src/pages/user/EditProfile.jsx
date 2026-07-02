import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserEditProfile = () => {
    const [formData, setFormData] = useState({
        name: "Hexagon digital Services",
        email: "hexagonsservices@gmail.com",
        phone: "8945612300",
        department: "IT",
        stream: "C.Sc",
        semester: "Semester 4",
        year: "2nd Year",
        rollNo: "RN-1"
    });

    const navItems = [
        { label: "Student Dashboard", href: "/user/dashboard", icon: "dashboard" },
        { label: "Books Page", href: "/user/books", icon: "books" },
        { label: "Edit Profile", href: "/user/profile", icon: "users" },
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        alert("✅ Profile saved successfully!");
    };

    return (
        <div className="min-h-screen bg-library-paper">
            <Sidebar 
                title="ShelfWise" 
                subtitle="College library access" 
                badge="STUDENT SECTION"
                accent="user"
                navItems={navItems}
            />

            <div className="md:ml-72 p-6 lg:p-8 max-w-4xl mx-auto">
                <Link to="/user/dashboard" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
                    <ArrowLeft size={18} /> Back to Dashboard
                </Link>

                <div className="bg-white rounded-3xl p-10 shadow-sm">
                    <h1 className="text-3xl font-semibold mb-1">Edit Profile</h1>
                    <p className="text-gray-600 mb-8">Update your student details and save the latest profile information.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                value={formData.email}
                                disabled
                                className="w-full px-5 py-3 bg-gray-100 border border-gray-200 rounded-2xl text-gray-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">Email address cannot be changed.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                            <input
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
                            <input
                                name="stream"
                                value={formData.stream}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
                            <select
                                name="semester"
                                value={formData.semester}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                            >
                                <option>Semester 4</option>
                                <option>Semester 5</option>
                                <option>Semester 6</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                            >
                                <option>2nd Year</option>
                                <option>3rd Year</option>
                                <option>4th Year</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                            <input
                                name="rollNo"
                                value={formData.rollNo}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-10">
                        <button
                            onClick={handleSave}
                            className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3 rounded-2xl font-medium flex items-center gap-2"
                        >
                            <Save size={18} /> Save Profile
                        </button>
                        <button className="border border-gray-300 px-8 py-3 rounded-2xl font-medium">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEditProfile;