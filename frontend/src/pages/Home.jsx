import React from 'react';
import Sidebar from '../components/Sidebar';
import { BookMarked, ShieldCheck, Users } from 'lucide-react';
import { homeStyles as s } from '../assets/dummyStyles';

const navItems = [
    { label: "Student Dashboard", href: "/user/dashboard", match: "/user", icon: "dashboard" },
    { label: "Admin Dashboard", href: "/admin/dashboard", match: "/admin", icon: "admin" },
];

const features = [
    { icon: BookMarked, title: "Manual book issuing", text: "Track manual book issues, due dates, returns, and dynamic fine calculations." },
    { icon: Users, title: "Student self-service", text: "Students can review borrowed books, pending fines, and activity." },
    { icon: ShieldCheck, title: "Admin desk controls", text: "Manage students, issues, returns and fine settings." },
];

function Home() {
    const navItemsForSidebar = [
        ...navItems,
        { label: "Login", href: "/login", icon: "dashboard" },
        { label: "Sign Up", href: "/signup", icon: "dashboard" },
    ];

    return (
        <div className={s.layoutContainer}>
            <Sidebar
                title="ShelfWise"
                subtitle="Library Management Portal"
                badge="v1.0"
                navItems={navItemsForSidebar}
                accent="user"
            />

            <div className={s.mainContent}>
                <div className={s.innerContainer}>
                    <div className={s.heroSection}>
                        <div className={s.heroGrid}>
                            <div>
                                <div className={s.heroBadge}>MODERN LIBRARY SYSTEM</div>
                                <h1 className={s.heroTitle}>Manage your library with ease</h1>
                                <p className={s.heroText}>Beautiful, fast and powerful MERN stack library management system.</p>
                                <div className={s.heroButtons}>
                                    <a href="/login" className={s.heroButtonPrimary}>Get Started</a>
                                    <a href="#features" className={s.heroButtonSecondary}>Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="features" className={s.featuresGrid}>
                        {features.map((f, i) => (
                            <div key={i} className={s.featureCard}>
                                <div className={s.featureIconWrapper}>
                                    <f.icon size={28} />
                                </div>
                                <h3 className={s.featureTitle}>{f.title}</h3>
                                <p className={s.featureText}>{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;