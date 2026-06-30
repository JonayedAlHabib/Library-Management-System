import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginStyles as s } from '../assets/dummyStyles';
import { Eye, EyeOff, BookCopy } from 'lucide-react';

const Login = () => {
    const [role, setRole] = useState('user');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Dummy login for now (later connect with backend)
        setTimeout(() => {
            if (role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/user/dashboard');
            }
            setLoading(false);
        }, 800);
    };

    return (
        <div className={s.pageContainer}>
            <div className={s.mainCard}>

                {/* Left Side - Info */}
                <div className={s.infoPanel}>
                    <div className="flex items-center gap-3">
                        <BookCopy size={32} />
                        <span className="text-2xl font-bold">ShelfWise</span>
                    </div>
                    <div className={s.roleBadge}>SECURE ACCESS</div>
                    <h1 className={s.infoTitle}>Welcome Back to the Library</h1>
                    <p className={s.infoDescription}>
                        Sign in to access your books, track fines, and manage your library account.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className={s.formPanel}>
                    <div className={s.formInner}>
                        <Link to="/" className={s.backLink}>← Back to Home</Link>
                        <h2 className={s.formTitle}>Sign In</h2>
                        <p className={s.formSubtitle}>Access your library portal</p>

                        <form onSubmit={handleSubmit} className={s.form}>

                            {/* Role Selection */}
                            <div className={s.roleContainer}>
                                <div className={s.roleLabel}>I am a</div>
                                <div className={s.roleGrid}>
                                    <label className={`${s.roleOption} ${role === 'user' ? s.roleOptionSelected : s.roleOptionUnselected}`}>
                                        <input type="radio" className={s.roleRadio} checked={role === 'user'} onChange={() => setRole('user')} />
                                        Student
                                    </label>
                                    <label className={`${s.roleOption} ${role === 'admin' ? s.roleOptionSelected : s.roleOptionUnselected}`}>
                                        <input type="radio" className={s.roleRadio} checked={role === 'admin'} onChange={() => setRole('admin')} />
                                        Admin
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className={s.fieldLabel}>Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={s.input}
                                    required
                                />
                            </div>

                            <div>
                                <label className={s.fieldLabel}>Password</label>
                                <div className={s.passwordWrapper}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={s.passwordInput}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className={s.togglePasswordButton}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" disabled={loading} className={s.submitButton}>
                                {loading ? "Signing in..." : "Sign In"}
                            </button>
                        </form>

                        <div className={s.footerFlex}>
                            <p className={s.footerText}>
                                Don't have an account?{' '}
                                <Link to="/signup" className={s.signupLink}>Create one</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;