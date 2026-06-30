import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupStyles as s } from '../assets/dummyStyles';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', password: '', confirmPassword: '',
        department: '', stream: '', semester: '', year: '', rollNo: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Dummy signup
        setTimeout(() => {
            alert("Signup successful! Please login.");
            navigate('/login');
            setLoading(false);
        }, 1000);
    };

    return (
        <div className={s.pageContainer}>
            <div className={s.mainCard}>

                {/* Left Side Info */}
                <div className={s.infoPanel}>
                    <div className={s.infoBadge}>NEW MEMBER</div>
                    <h1 className={s.infoTitle}>Join ShelfWise</h1>
                    <p className={s.infoDescription}>Create your library account in few steps</p>
                </div>

                {/* Right Side Form */}
                <div className={s.formPanel}>
                    <div className={s.formInner}>
                        <Link to="/" className={s.backLink}>
                            <ArrowLeft size={16} className="inline" /> Back to Home
                        </Link>

                        <h2 className={s.panelTitle}>Create Account</h2>
                        <p className={s.panelSubtitle}>Step {step} of 3</p>

                        <form onSubmit={handleSubmit} className={s.form}>

                            {step === 1 && (
                                <>
                                    <div>
                                        <label className={s.fieldLabel}>Full Name</label>
                                        <input name="name" value={formData.name} onChange={handleChange} className={s.input} required />
                                    </div>
                                    <div>
                                        <label className={s.fieldLabel}>Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={s.input} required />
                                    </div>
                                    <div>
                                        <label className={s.fieldLabel}>Phone</label>
                                        <input name="phone" value={formData.phone} onChange={handleChange} className={s.input} required />
                                    </div>
                                    <div className={s.twoColumnGrid}>
                                        <div>
                                            <label className={s.fieldLabel}>Password</label>
                                            <div className={s.passwordWrapper}>
                                                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className={s.passwordInput} required />
                                                <button type="button" onClick={() => setShowPassword(!showPassword)} className={s.toggleButton}>
                                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <label className={s.fieldLabel}>Confirm Password</label>
                                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={s.input} required />
                                        </div>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <div className={s.twoColumnGrid}>
                                        <div>
                                            <label className={s.fieldLabel}>Department</label>
                                            <input name="department" value={formData.department} onChange={handleChange} className={s.input} />
                                        </div>
                                        <div>
                                            <label className={s.fieldLabel}>Stream</label>
                                            <input name="stream" value={formData.stream} onChange={handleChange} className={s.input} />
                                        </div>
                                    </div>
                                    <div className={s.twoColumnGrid}>
                                        <div>
                                            <label className={s.fieldLabel}>Semester</label>
                                            <input name="semester" value={formData.semester} onChange={handleChange} className={s.input} />
                                        </div>
                                        <div>
                                            <label className={s.fieldLabel}>Year</label>
                                            <input name="year" value={formData.year} onChange={handleChange} className={s.input} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className={s.fieldLabel}>Roll Number</label>
                                        <input name="rollNo" value={formData.rollNo} onChange={handleChange} className={s.input} />
                                    </div>
                                </>
                            )}

                            {step === 3 && (
                                <div className={s.otpInfoBox}>
                                    <div className={s.otpInfoLabel}>ALMOST DONE</div>
                                    <p className={s.otpInfoText}>
                                        An OTP will be sent to <span className={s.emailHighlight}>{formData.email || "your email"}</span> for verification.
                                    </p>
                                </div>
                            )}

                            <div className={s.buttonGroup}>
                                {step > 1 && (
                                    <button type="button" onClick={handleBack} className={s.backButton}>
                                        Back
                                    </button>
                                )}
                                {step < 3 ? (
                                    <button type="button" onClick={handleNext} className={s.nextButton}>
                                        Next
                                    </button>
                                ) : (
                                    <button type="submit" disabled={loading} className={s.submitButton}>
                                        {loading ? "Creating Account..." : "Create Account"}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;