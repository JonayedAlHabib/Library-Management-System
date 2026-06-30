import React from 'react';
import { userBooksPageStyles as s } from '../../assets/dummyStyles';
import Sidebar from '../../components/Sidebar';
import { BookCopy } from 'lucide-react';

const UserBooks = () => {
    const navItems = [
        { label: "Dashboard", href: "/user/dashboard", icon: "dashboard" },
        { label: "My Books", href: "/user/books", icon: "books" },
    ];

    return (
        <div className="min-h-screen bg-library-paper">
            <Sidebar 
                title="ShelfWise" 
                subtitle="Student Portal" 
                badge="STUDENT" 
                accent="user"
                navItems={navItems}
            />

            <div className={s.pageContainer}>
                <div className={s.heroSection}>
                    <h1 className={s.heroTitle}>My Borrowed Books</h1>
                </div>

                <div className={s.mainSection}>
                    {/* Books list will come here */}
                    <p className={s.emptyState}>No books issued yet.</p>
                </div>
            </div>
        </div>
    );
};

export default UserBooks;