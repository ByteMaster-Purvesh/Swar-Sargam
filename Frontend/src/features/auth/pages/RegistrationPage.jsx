import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Sparkles, ShieldCheck, Zap, Radio } from 'lucide-react';
import CustomCursor from '../../CustomCursor';
import { useAuthHook } from '../hook/useAuthHook';

export default function RegistrationPage({ onGuestLogin }) {
  const navigate = useNavigate();
  const { handleRegister, loading } = useAuthHook();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match!");
      return;
    }
    setErrorMsg('');
    try {
      const uName = fullName.trim() || email.split('@')[0];
      await handleRegister({ username: uName, email, password });
      navigate('/');
    } catch (err) {
      setErrorMsg(err?.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  const handleGuestContinue = () => {
    if (onGuestLogin) onGuestLogin();
    localStorage.setItem('isGuest', 'true');
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 20% 20%, #1e1b24 0%, #13141a 50%, #0b0c10 100%)',
      color: '#ffffff',
      padding: '16px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <style>{`
        .auth-input-field:-webkit-autofill,
        .auth-input-field:-webkit-autofill:hover, 
        .auth-input-field:-webkit-autofill:focus, 
        .auth-input-field:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 1000px #181c27 inset !important;
            -webkit-text-fill-color: #ffffff !important;
            caret-color: #ffffff;
            transition: background-color 50000s ease-in-out 0s;
        }
        .auth-card-container {
            width: 100%;
            max-width: 880px;
            border-radius: 32px;
            background: #111625;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
            display: flex;
            flex-direction: row;
            overflow: hidden;
            max-height: 92vh;
            position: relative;
            z-index: 2;
        }
        .auth-left-brand-col {
            flex: 1;
            padding: 40px 32px;
            background: linear-gradient(145deg, rgba(255, 107, 53, 0.12) 0%, rgba(60, 212, 160, 0.08) 100%);
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
        }
        .auth-right-form-col {
            flex: 1.15;
            padding: 40px 32px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 12px;
            overflow-y: auto;
        }
        .auth-card-scroll::-webkit-scrollbar {
            width: 4px;
        }
        .auth-card-scroll::-webkit-scrollbar-thumb {
            background: rgba(255, 107, 53, 0.3);
            border-radius: 4px;
        }

        /* RESPONSIVE BREAKPOINT FOR MOBILE SCREEN PROPORTION */
        @media (max-width: 768px) {
            .auth-card-container {
                flex-direction: column !important;
                max-width: 440px !important;
                max-height: 94vh !important;
                border-radius: 24px !important;
                overflow-y: auto !important;
            }
            .auth-left-brand-col {
                padding: 14px 20px !important;
                border-right: none !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
                gap: 0px !important;
                align-items: center !important;
                justify-content: center !important;
            }
            .auth-brand-badge {
                flex-direction: row !important;
                align-items: center !important;
                gap: 10px !important;
            }
            .auth-brand-logo-icon {
                width: 34px !important;
                height: 34px !important;
                border-radius: 10px !important;
            }
            .auth-brand-title {
                font-size: 18px !important;
                margin: 0 !important;
            }
            .auth-brand-subtitle {
                display: none !important;
            }
            .auth-left-features-list {
                display: none !important;
            }
            .auth-right-form-col {
                padding: 16px 20px 24px 20px !important;
                justify-content: flex-start !important;
                gap: 12px !important;
            }
        }
      `}</style>

      <CustomCursor theme="dark" />

      {/* Ambient Background Glow Orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '15%', width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.18) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '15%', width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(60, 212, 160, 0.15) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none'
      }} />

      {/* DYNAMIC CARD CONTAINER (Horizontal on desktop, Vertical on mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="auth-card-container auth-card-scroll"
      >
        {/* LEFT COLUMN: BRAND & HERO SHOWCASE */}
        <div className="auth-left-brand-col">
          {/* Header Badge */}
          <div className="auth-brand-badge" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="auth-brand-logo-icon" style={{
              width: '46px', height: '46px', borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.25), rgba(60, 212, 160, 0.15))',
              border: '1px solid rgba(255, 107, 53, 0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              <Sparkles size={22} color="#ff6b35" />
            </div>
            <div>
              <h1 className="auth-brand-title" style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '6px', color: '#ffffff' }}>
                IMAX Music AI
              </h1>
              <p className="auth-brand-subtitle" style={{ fontSize: '13px', color: '#a0a5b5', lineHeight: '1.5', margin: 0 }}>
                Unlock personalized music powered by MediaPipe AI facial expression scanning.
              </p>
            </div>
          </div>

          {/* Feature Showcase Pills (Hidden on mobile) */}
          <div className="auth-left-features-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 14px', borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '10px',
                background: 'rgba(255, 107, 53, 0.2)', display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }}>
                <Zap size={18} color="#ff6b35" />
              </div>
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, margin: 0 }}>Real-Time Facial Blendshape</h4>
                <p style={{ fontSize: '11px', color: '#a0a5b5', margin: '2px 0 0 0' }}>40+ facial mesh landmark vectors</p>
              </div>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 14px', borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '10px',
                background: 'rgba(60, 212, 160, 0.2)', display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }}>
                <Radio size={18} color="#3cd4a0" />
              </div>
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, margin: 0 }}>Instant Mood Curation</h4>
                <p style={{ fontSize: '11px', color: '#a0a5b5', margin: '2px 0 0 0' }}>Adaptive dynamic playlists</p>
              </div>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 14px', borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '10px',
                background: 'rgba(59, 130, 246, 0.2)', display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }}>
                <ShieldCheck size={18} color="#3b82f6" />
              </div>
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, margin: 0 }}>Privacy First Camera</h4>
                <p style={{ fontSize: '11px', color: '#a0a5b5', margin: '2px 0 0 0' }}>100% on-device vision processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REGISTRATION FORM */}
        <div className="auth-right-form-col">
          <div className="auth-form-header">
            <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 4px 0', color: '#ffffff' }}>Create Your Account</h2>
            <p style={{ fontSize: '12px', color: '#a0a5b5', margin: 0 }}>
              Fill in your details below to set up your account
            </p>
          </div>

          {/* ERROR BANNER */}
          {errorMsg && (
            <div style={{
              padding: '10px 14px', borderRadius: '12px',
              background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171', fontSize: '12px', fontWeight: 600,
              textAlign: 'center'
            }}>
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Full Name Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#c0c5d5' }}>
                Full Name
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '11px 14px', borderRadius: '14px',
                background: '#181c27', border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <User size={18} color="#707585" />
                <input
                  className="auth-input-field"
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none', outline: 'none',
                    color: '#ffffff', fontSize: '14px', width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Email Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#c0c5d5' }}>
                Email Address
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '11px 14px', borderRadius: '14px',
                background: '#181c27', border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <Mail size={18} color="#707585" />
                <input
                  className="auth-input-field"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none', outline: 'none',
                    color: '#ffffff', fontSize: '14px', width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#c0c5d5' }}>
                Password
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '11px 14px', borderRadius: '14px',
                background: '#181c27', border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <Lock size={18} color="#707585" />
                <input
                  className="auth-input-field"
                  type="password"
                  required
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none', outline: 'none',
                    color: '#ffffff', fontSize: '14px', width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#c0c5d5' }}>
                Confirm Password
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '11px 14px', borderRadius: '14px',
                background: '#181c27', border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <Lock size={18} color="#707585" />
                <input
                  className="auth-input-field"
                  type="password"
                  required
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none', outline: 'none',
                    color: '#ffffff', fontSize: '14px', width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '2px 0' }}>
              <input
                type="checkbox"
                id="terms"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                style={{ accentColor: '#ff6b35', width: '15px', height: '15px', cursor: 'pointer' }}
              />
              <label htmlFor="terms" style={{ fontSize: '12px', color: '#a0a5b5', cursor: 'pointer' }}>
                I agree to the Terms & Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading || !agreedTerms}
              style={{
                marginTop: '4px',
                padding: '12px',
                borderRadius: '16px',
                border: 'none',
                background: 'linear-gradient(135deg, #ff6b35 0%, #f97316 100%)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 800,
                cursor: (loading || !agreedTerms) ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(255, 107, 53, 0.35)',
                opacity: (loading || !agreedTerms) ? 0.7 : 1
              }}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
              {!loading && <ArrowRight size={18} />}
            </motion.button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '10px 0 6px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
            <span style={{ fontSize: '11px', color: '#707585', fontWeight: 600 }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
          </div>

          {/* Guest Continue Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleGuestContinue}
            style={{
              padding: '10px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#181c27',
              color: '#c0c5d5',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <User size={16} color="#ff6b35" />
            Continue as Guest
          </motion.button>

          {/* Switch Link */}
          <div style={{
            marginTop: '10px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#a0a5b5'
          }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#ff6b35', fontWeight: 700, textDecoration: 'none' }}>
              Sign In
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
