import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Sparkles, UserCheck, ShieldCheck, Zap, Radio } from 'lucide-react';
import CustomCursor from './CustomCursor';

export default function RegistrationPage({ onGuestLogin }) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate('/');
  };

  const handleGuestContinue = () => {
    if (onGuestLogin) onGuestLogin();
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-gradient, radial-gradient(circle at 20% 20%, #1e1b24 0%, #13141a 50%, #0b0c10 100%))',
      color: 'var(--text-primary)',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
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

      {/* LANDSCAPE 2-COLUMN IMAX GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="imax-glass-card"
        style={{
          width: '100%',
          maxWidth: '880px',
          borderRadius: '32px',
          background: 'var(--modal-solid-bg, #111625)',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden'
        }}
      >
        {/* LEFT COLUMN: BRAND & HERO SHOWCASE */}
        <div style={{
          flex: 1,
          padding: '44px 36px',
          background: 'linear-gradient(145deg, rgba(255, 107, 53, 0.12) 0%, rgba(60, 212, 160, 0.08) 100%)',
          borderRight: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          {/* Header Badge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.25), rgba(60, 212, 160, 0.15))',
              border: '1px solid rgba(255, 107, 53, 0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Sparkles size={24} color="var(--accent-orange)" />
            </div>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
                IMAX Music AI
              </h1>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Join thousands of listeners discovering music synced directly with your facial mood.
              </p>
            </div>
          </div>

          {/* Feature Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div style={{ padding: '6px', borderRadius: '10px', background: 'rgba(255, 107, 53, 0.15)' }}>
                <Zap size={16} color="var(--accent-orange)" />
              </div>
              Real-time Facial Blendshape Analysis
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div style={{ padding: '6px', borderRadius: '10px', background: 'rgba(60, 212, 160, 0.15)' }}>
                <Radio size={16} color="var(--accent-cyan)" />
              </div>
              Instant Mood-Based Music Curation
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div style={{ padding: '6px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.15)' }}>
                <ShieldCheck size={16} color="var(--accent-amber)" />
              </div>
              Privacy-First Local Camera Vision Processing
            </div>
          </div>

          {/* Footer Badge */}
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
            © 2026 IMAX Sound Systems • Premium Edition
          </div>
        </div>

        {/* RIGHT COLUMN: REGISTRATION FORM */}
        <div style={{
          flex: 1.15,
          padding: '40px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '18px'
        }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 800 }}>Create Your Account</h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Fill in your details below to set up your account
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Full Name Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Full Name
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 14px', borderRadius: '14px',
                background: 'var(--glass-pill)', border: '1px solid var(--glass-border)'
              }}>
                <User size={16} color="var(--text-muted)" />
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none', outline: 'none',
                    color: 'var(--text-primary)', fontSize: '13px', width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Email Address Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Email Address
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 14px', borderRadius: '14px',
                background: 'var(--glass-pill)', border: '1px solid var(--glass-border)'
              }}>
                <Mail size={16} color="var(--text-muted)" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none', outline: 'none',
                    color: 'var(--text-primary)', fontSize: '13px', width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Password & Confirm Password Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Password
                </label>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 14px', borderRadius: '14px',
                  background: 'var(--glass-pill)', border: '1px solid var(--glass-border)'
                }}>
                  <Lock size={16} color="var(--text-muted)" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      background: 'transparent', border: 'none', outline: 'none',
                      color: 'var(--text-primary)', fontSize: '13px', width: '100%'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Confirm Password
                </label>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 14px', borderRadius: '14px',
                  background: 'var(--glass-pill)', border: '1px solid var(--glass-border)'
                }}>
                  <Lock size={16} color="var(--text-muted)" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      background: 'transparent', border: 'none', outline: 'none',
                      color: 'var(--text-primary)', fontSize: '13px', width: '100%'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Terms Agreement Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
              <input
                type="checkbox"
                id="terms"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                style={{ accentColor: 'var(--accent-orange)', cursor: 'pointer' }}
              />
              <label htmlFor="terms" style={{ fontSize: '11px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                I agree to the Terms of Service & Privacy Policy
              </label>
            </div>

            {/* Create Account Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              style={{
                marginTop: '4px',
                padding: '12px 24px',
                borderRadius: '99px',
                background: 'linear-gradient(135deg, var(--accent-orange) 0%, #f97316 100%)',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(255, 107, 53, 0.35)'
              }}
            >
              Create Account <ArrowRight size={16} />
            </motion.button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)', fontSize: '11px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
            <span>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
          </div>

          {/* Continue as Guest Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGuestContinue}
            style={{
              padding: '11px 24px',
              borderRadius: '99px',
              background: 'var(--glass-pill)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.2s ease'
            }}
          >
            <UserCheck size={16} color="var(--accent-orange)" /> Continue as Guest
          </motion.button>

          {/* Login Link Footer */}
          <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--accent-orange)', fontWeight: 700, textDecoration: 'none' }}>
              Sign In
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
