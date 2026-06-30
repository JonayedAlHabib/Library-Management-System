import React, { useEffect, useState } from 'react';
import { adminDashboardStyles as s } from '../../assets/dummyStyles';
import Sidebar from '../../components/Sidebar';
import { BookCopy, Users, AlertTriangle } from 'lucide-react';

const AdminDashboard = () => {
    const [stats, setStats] = useState({});
    const [overdue, setOverdue] = useState([]);

    // TODO: Fetch from API later
    useEffect(() => {
        // Dummy data for now
        setStats({
            totalBooks: 245,
            issued: 87,
            overdue: 12,
            students: 156
        });
    }, []);

    const navItems = [
        { label: "Dashboard", href: "/admin/dashboard", icon: "dashboard" },
        { label: "Books & Issues", href: "/admin/books", icon: "books" },
        { label: "Users", href: "/admin/users", icon: "users" },
        { label: "Fines", href: "/admin/fines", icon: "alerts" },
    ];

    return (
        <div className="relative min-h-screen bg-library-paper">
            <Sidebar 
                title="ShelfWise" 
                subtitle="Admin Portal" 
                badge="ADMIN" 
                accent="admin"
                navItems={navItems}
            />

            <div className={s.container}>
                {/* Hero */}
                <div className={s.heroSection}>
                    <div className={s.heroInner}>
                        <div>
                            <div className={s.badge}>OVERVIEW</div>
                            <h1 className={s.heading}>Library at a Glance</h1>
                            <p className={s.heroParagraph}>Real-time stats and overdue alerts</p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className={s.statsGrid}>
                    <div className={s.statCard}>
                        <div className={s.statIcon}><BookCopy size={28} /></div>
                        <div className={s.statLabel}>Total Books</div>
                        <div className={s.statValue}>{stats.totalBooks}</div>
                    </div>
                    {/* Add more stat cards similarly */}
                </div>

                {/* Overdue Section */}
                <div className={s.overdueSection}>
                    <div className={s.overdueHeader}>
                        <div>
                            <h2 className={s.overdueTitle}>Overdue Books</h2>
                            <p className={s.overdueSubtitle}>Immediate attention needed</p>
                        </div>
                        <div className={s.alertIcon}><AlertTriangle size={28} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;