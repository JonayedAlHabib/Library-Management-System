import React from 'react';
import { userDashboardPageStyles as s } from '../../assets/dummyStyles';
import Sidebar from '../../components/Sidebar';
import { BookCopy } from 'lucide-react';

const UserDashboard = () => {
    const navItems = [
        { label: "Dashboard", href: "/user/dashboard", icon: "dashboard" },
        { label: "My Books", href: "/user/books", icon: "books" },
    ];

    return (
        <div className="relative min-h-screen bg-library-paper">
            <Sidebar 
                title="ShelfWise" 
                subtitle="Student Portal" 
                badge="STUDENT" 
                accent="user"
                navItems={navItems}
            />

            <div className={s.pageContainer}>
                <div className={s.heroSection}>
                    <div className={s.heroGrid}>
                        <div className={s.heroLeft}>
                            <div className={s.heroBadge}>WELCOME BACK</div>
                            <h1 className={s.heroTitle}>Good morning, Student</h1>
                            <p className={s.heroText}>Here's your library activity summary</p>
                        </div>
                    </div>
                </div>

                {/* Stats + Recent Books */}
                <div className={s.statsGrid}>
                    {/* Stat cards here */}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;