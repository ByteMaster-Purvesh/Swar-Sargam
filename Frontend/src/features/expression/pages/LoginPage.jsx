import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Sparkles, UserCheck, ShieldCheck, Zap, Radio } from 'lucide-react';
import CustomCursor from '../../CustomCursor';

export default function LoginPage({ onGuestLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          maxWidth: '860px',
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
                Unlock personalized music powered by MediaPipe AI facial expression scanning.
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

        {/* RIGHT COLUMN: LOGIN FORM */}
        <div style={{
          flex: 1.1,
          padding: '44px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 800 }}>Welcome Back</h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Email Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Email Address
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 16px', borderRadius: '16px',
                background: 'var(--glass-pill)', border: '1px solid var(--glass-border)'
              }}>
                <Mail size={18} color="var(--text-muted)" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none', outline: 'none',
                    color: 'var(--text-primary)', fontSize: '14px', width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Password
                </label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} style={{ fontSize: '11px', color: 'var(--accent-orange)', textDecoration: 'none', fontWeight: 600 }}>
                  Forgot?
                </a>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 16px', borderRadius: '16px',
                background: 'var(--glass-pill)', border: '1px solid var(--glass-border)'
              }}>
                <Lock size={18} color="var(--text-muted)" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    background: 'transparent', border: 'none', outline: 'none',
                    color: 'var(--text-primary)', fontSize: '14px', width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: 'var(--accent-orange)', cursor: 'pointer' }}
              />
              <label htmlFor="remember" style={{ fontSize: '12px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                Remember me on this device
              </label>
            </div>

            {/* Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              style={{
                marginTop: '4px',
                padding: '13px 24px',
                borderRadius: '99px',
                background: 'linear-gradient(135deg, var(--accent-orange) 0%, #f97316 100%)',
                color: '#ffffff',
                fontSize: '14px',
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
              Sign In <ArrowRight size={18} />
            </motion.button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)', fontSize: '12px' }}>
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
              padding: '12px 24px',
              borderRadius: '99px',
              background: 'var(--glass-pill)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.2s ease'
            }}
          >
            <UserCheck size={18} color="var(--accent-orange)" /> Continue as Guest
          </motion.button>

          {/* Registration Link Footer */}
          <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
            Don't have an account?{' '}
            <Link to="/registration" style={{ color: 'var(--accent-orange)', fontWeight: 700, textDecoration: 'none' }}>
              Create Account
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
