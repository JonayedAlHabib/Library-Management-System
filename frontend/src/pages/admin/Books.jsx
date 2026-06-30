import React, { useState } from 'react';
import { adminBooksPageStyles as s } from '../../assets/dummyStyles';
import Sidebar from '../../components/Sidebar';
import { Plus, Search, Trash2 } from 'lucide-react';

const AdminBooks = () => {
    const [searchRoll, setSearchRoll] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [books, setBooks] = useState([]);

    const navItems = [
        { label: "Dashboard", href: "/admin/dashboard", icon: "dashboard" },
        { label: "Books & Issues", href: "/admin/books", icon: "books" },
        { label: "Users", href: "/admin/users", icon: "users" },
        { label: "Fines", href: "/admin/fines", icon: "alerts" },
    ];

    const handleSearchStudent = () => {
        // TODO: Call API later
        console.log("Searching for roll:", searchRoll);
    };

    return (
        <div className="min-h-screen bg-library-paper">
            <Sidebar 
                title="ShelfWise" 
                subtitle="Admin Portal" 
                badge="ADMIN" 
                accent="admin"
                navItems={navItems}
            />

            <div className={s.pageContainer}>
                <div className={s.mainSection}>
                    <div className={s.headerFlex}>
                        <div>
                            <h1 className={s.title}>Issue Books</h1>
                            <p className={s.subtitle}>Search student by roll number and issue books manually</p>
                        </div>
                    </div>

                    {/* Search Student */}
                    <div className={s.matchingContainer}>
                        <div className={s.matchingTitle}>SEARCH STUDENT BY ROLL NUMBER</div>
                        <div className="flex gap-3 mt-3">
                            <input 
                                type="text" 
                                value={searchRoll}
                                onChange={(e) => setSearchRoll(e.target.value)}
                                placeholder="Enter roll number..."
                                className={s.textInput}
                            />
                            <button onClick={handleSearchStudent} className={s.submitButton}>
                                <Search size={18} /> Search
                            </button>
                        </div>
                    </div>

                    {/* Issue Books Form */}
                    {selectedStudent && (
                        <div className={s.innerContainer}>
                            {/* Form to add books - implement as per video */}
                            <button className={s.addBookButton}>
                                <Plus size={18} /> Add Another Book
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminBooks;