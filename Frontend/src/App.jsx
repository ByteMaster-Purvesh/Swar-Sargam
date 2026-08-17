import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FaceScannerModal from './features/expression/pages/FaceScannerModal';
import LoginPage from './features/expression/pages/LoginPage';
import RegistrationPage from './features/expression/pages/RegistrationPage';
import CustomCursor from './features/CustomCursor';
import {
  BarChart3,
  FileText,
  TrendingUp,
  Wallet,
  ShoppingBag,
  Bell,
  Settings,
  Search,
  Mail,
  ChevronRight,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Camera,
  Sparkles,
  Music,
  Sun,
  Moon,
  ChevronDown,
  User,
  Heart,
  Radio,
  Zap,
  Smile,
  Frown,
  Meh,
  Flame,
  Maximize2
} from 'lucide-react';
import './index.css';

import img1 from './assets/Herosection/1.jpg';
import img2 from './assets/Herosection/2.jpg';
import img3 from './assets/Herosection/3.jpg';
import img4 from './assets/Herosection/4.jpg';
import img5 from './assets/Herosection/5.jpg';
import img6 from './assets/Herosection/6.jpg';
import img7 from './assets/Herosection/7.jpg';
import img8 from './assets/Herosection/8.jpg';
import img9 from './assets/Herosection/9.jpg';
import img10 from './assets/Herosection/10.jpg';

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

// Custom Interactive Fluid Hover Fill Button
function FluidScanButton({ onClick }) {
  const [fluidPos, setFluidPos] = useState({ x: 0, y: 0, hovered: false });
  const buttonRef = React.useRef(null);

  const handleMouseEnter = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setFluidPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      hovered: true
    });
  };

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setFluidPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      hovered: true
    });
  };

  const handleMouseLeave = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setFluidPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      hovered: false
    });
  };

  return (
    <motion.button
      ref={buttonRef}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '12px 24px',
        minHeight: '46px',
        borderRadius: '99px',
        background: 'var(--glass-pill)',
        border: fluidPos.hovered ? '1px solid var(--accent-orange)' : '1px solid var(--glass-border)',
        color: fluidPos.hovered ? '#ffffff' : 'var(--text-primary)',
        fontWeight: 700,
        fontSize: '14px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'color 0.35s ease, border-color 0.35s ease'
      }}
    >
      {/* Fluid expansion layer filling orange color from mouse cursor enter direction */}
      <span
        style={{
          position: 'absolute',
          left: fluidPos.x,
          top: fluidPos.y,
          width: fluidPos.hovered ? '500px' : '0px',
          height: fluidPos.hovered ? '500px' : '0px',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-orange) 0%, #f97316 100%)',
          transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <span style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <Camera size={18} color={fluidPos.hovered ? '#ffffff' : 'var(--accent-orange)'} style={{ transition: 'color 0.35s ease' }} />
        Scan Face & Sync Mood
      </span>
    </motion.button>
  );
}

// Mock Emotion-Curated Songs Database
const SONGS_BY_EMOTION = {
  Happy: [
    { id: 1, title: 'Build An Amazing Back Workout', artist: 'Sport Series', views: '16.3k views', duration: '13:21 (17.54%)', mood: 'Happy', cover: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80', bpm: 128 },
    { id: 2, title: 'Sunburst Euphoria & Uplifting Beats', artist: 'Aura Sound', views: '28.9k views', duration: '04:15 (92.1%)', mood: 'Happy', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80', bpm: 132 },
    { id: 3, title: 'Electric Joy Horizon (Remix)', artist: 'Cyber Groove', views: '45.1k views', duration: '03:48 (88.4%)', mood: 'Happy', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80', bpm: 124 }
  ],
  Sad: [
    { id: 4, title: 'Echoes of Soft Piano Rain', artist: 'Acoustic Soul', views: '52.1k views', duration: '04:02 (91.0%)', mood: 'Sad', cover: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=400&q=80', bpm: 68 },
    { id: 5, title: 'Nostalgic Synthwave Dusk', artist: 'Retro Glow', views: '29.4k views', duration: '04:50 (85.6%)', mood: 'Sad', cover: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=400&q=80', bpm: 90 }
  ],
  Nature: [
    { id: 6, title: 'Midnight Rain & Mountain Breeze', artist: 'Eco Beats', views: '104.2k views', duration: '03:10 (94.0%)', mood: 'Nature', cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80', bpm: 85 },
    { id: 7, title: 'Forest Canopy Organic Soundscape', artist: 'Cosmo Resonance', views: '18.7k views', duration: '06:45 (81.2%)', mood: 'Nature', cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', bpm: 72 }
  ],
  Energetic: [
    { id: 8, title: 'How to Train the Muscles at Home', artist: 'Sport Series', views: '16.3k views', duration: '17:34 (38.54%)', mood: 'Energetic', cover: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80', bpm: 145 },
    { id: 9, title: 'Cyberpunk Hyperdrive Surge', artist: 'Neon Voltage', views: '92.4k views', duration: '05:12 (96.2%)', mood: 'Energetic', cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80', bpm: 150 },
    { id: 10, title: 'Adrenaline Peak HIIT Session', artist: 'Apex Workout', views: '33.8k views', duration: '22:10 (64.3%)', mood: 'Energetic', cover: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=80', bpm: 140 }
  ]
};

function MainDashboardApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return Boolean(localStorage.getItem('token') || localStorage.getItem('user'));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token') || !!localStorage.getItem('user'));
    };
    window.addEventListener('storage', handleAuthChange);
    return () => window.removeEventListener('storage', handleAuthChange);
  }, []);
  const [theme, setTheme] = useState('dark');
  const [activeNav, setActiveNav] = useState('analytics');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [detectedEmotion, setDetectedEmotion] = useState('Happy');
  const [confidence, setConfidence] = useState(96.8);
  const [scannedFacePhoto, setScannedFacePhoto] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(SONGS_BY_EMOTION['Happy'][0]);
  const [audioProgress, setAudioProgress] = useState(35);
  const [currentTimeSec, setCurrentTimeSec] = useState(65);
  const totalDurationSec = 225; // 03:45 total track length
  const [volume, setVolume] = useState(80);
  const [prevVolume, setPrevVolume] = useState(80);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [audioWavePhase, setAudioWavePhase] = useState(0);
  const [likedSongs, setLikedSongs] = useState({ 1: true, 2: true });
  const [hasNotice, setHasNotice] = useState(true);

  const toggleMute = () => {
    if (Number(volume) > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume || 80);
    }
  };

  // Auto-scroll hero background banner images every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Real-time audio frequency animation frame ticker (only moves smoothly when playing)
  useEffect(() => {
    let animFrame;
    const animateWave = () => {
      if (isPlaying) {
        setAudioWavePhase((prev) => prev + 0.045); // Seamless moderate pace
      }
      animFrame = requestAnimationFrame(animateWave);
    };
    animFrame = requestAnimationFrame(animateWave);
    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying]);

  // Generate dynamic real-time audio frequency wave path based on vocal and sound harmonics
  const generateFrequencyPath = (phase, isPlaying, ampMultiplier = 1, width = 110, height = 34) => {
    const points = [];
    const midY = height / 2;
    const baseAmp = isPlaying ? 10 * ampMultiplier : 0;

    for (let x = 0; x <= width; x += 3) {
      const normX = x / width;
      if (!isPlaying) {
        // Paused state: static smooth curve
        const staticY = midY + Math.sin(normX * Math.PI * 2.5) * 6;
        points.push(`${x},${staticY.toFixed(1)}`);
      } else {
        // Playing state: dynamic moving audio frequency wave synced with playback
        const wave1 = Math.sin(normX * Math.PI * 4 + phase) * baseAmp;
        const wave2 = Math.sin(normX * Math.PI * 7 - phase * 1.6) * (baseAmp * 0.45);
        const y = midY + wave1 + wave2;
        points.push(`${x},${y.toFixed(1)}`);
      }
    }
    return `M ${points.join(' L ')}`;
  };

  // Active audio progress timer effect when playing
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= totalDurationSec) {
            setIsPlaying(false);
            return 0;
          }
          const nextTime = prev + 1;
          setAudioProgress((nextTime / totalDurationSec) * 100);
          return nextTime;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalDurationSec]);

  // Helper to format seconds as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Scrubber adjustment handler
  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setAudioProgress(newProgress);
    setCurrentTimeSec((newProgress / 100) * totalDurationSec);
  };

  // Skip to next track in playlist
  const handleNextTrack = () => {
    const currentIndex = playlist.findIndex((s) => s.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextIndex]);
    setCurrentTimeSec(0);
    setAudioProgress(0);
    setIsPlaying(true);
  };

  // Skip to previous track in playlist
  const handlePrevTrack = () => {
    const currentIndex = playlist.findIndex((s) => s.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrack(playlist[prevIndex]);
    setCurrentTimeSec(0);
    setAudioProgress(0);
    setIsPlaying(true);
  };

  // Trigger Expression Scanner Modal
  const triggerExpressionScan = () => {
    setIsScanning(true);
  };

  // Handle Manual Capture & Mood Selection Callback
  const handleFaceCaptured = ({ image, emotion, confidence }) => {
    setScannedFacePhoto(image);
    setDetectedEmotion(emotion);
    setConfidence(confidence);

    const moodSongs = SONGS_BY_EMOTION[emotion] || SONGS_BY_EMOTION['Happy'];
    setCurrentTrack(moodSongs[0]);
    setIsPlaying(true);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const playlist = SONGS_BY_EMOTION[detectedEmotion] || SONGS_BY_EMOTION['Happy'];

  return (
    <div className="imax-glass-container">
      <CustomCursor theme={theme} />

      {/* LEFT FLOATING NAVIGATION DOCK */}
      <motion.aside
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="left-dock-aside"
        style={{
          width: '76px',
          background: 'var(--glass-pill)',
          backdropFilter: 'blur(30px)',
          borderRadius: '30px',
          border: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          marginRight: '24px',
          zIndex: 10
        }}
      >
        <div className="dock-inner-top" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
          {/* Logo */}
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer 4 Petal Ring */}
              <path
                d="M16 3C13.2 3 11 5.2 11 8C11 9.2 11.4 10.3 12.2 11.2C10.3 11.4 8.5 12.5 7.4 14.2C5.9 16.5 6.3 19.6 8.3 21.4C10.1 23 12.8 23.2 14.8 22C15.2 23.8 16.3 25.4 18 26.3C20.3 27.6 23.3 27 24.9 24.8C26.3 22.8 26.1 20 24.5 18.2C25.7 16.2 25.5 13.5 23.9 11.7C22.1 9.7 19.2 9.3 17 10.6C16.8 9.1 16.7 5.5 16 3Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Four Curved Corner Petal Ornaments */}
              <path d="M16 6C13.8 6 12 7.8 12 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M26 16C26 13.8 24.2 12 22 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M16 26C18.2 26 20 24.2 20 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M6 16C6 18.2 7.8 20 10 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              {/* Solid Center Core Circle */}
              <circle cx="16" cy="16" r="4" fill="currentColor" />
            </svg>
          </div>

          {/* Navigation Icons */}
          <div className="dock-nav-icons" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { id: 'analytics', icon: BarChart3 },
              { id: 'playlist', icon: FileText },
              { id: 'scanner', icon: Camera },
              { id: 'wallet', icon: Wallet },
              { id: 'shop', icon: ShoppingBag }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    border: 'none',
                    background: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s'
                  }}
                >
                  <Icon size={20} />
                  {isActive && (
                    <motion.div
                      layoutId="activeDock"
                      style={{
                        position: 'absolute',
                        left: 0,
                        width: '4px',
                        height: '20px',
                        background: 'var(--accent-orange)',
                        borderRadius: '0 4px 4px 0',
                        boxShadow: 'var(--glow-orange)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Actions: Notifications & Settings */}
        <div className="dock-inner-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setHasNotice(!hasNotice)}
            title={hasNotice ? "New notification pending (Click to mark as read)" : "No new notifications"}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              border: 'none',
              background: hasNotice ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
              color: hasNotice ? 'var(--accent-orange)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: hasNotice ? '0 0 14px rgba(255, 107, 53, 0.3)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <Bell size={20} fill={hasNotice ? 'var(--accent-orange)' : 'none'} color={hasNotice ? 'var(--accent-orange)' : 'var(--text-muted)'} />
          </motion.button>

          <button style={{
            width: '44px', height: '44px', borderRadius: '14px', border: 'none',
            background: 'transparent', color: 'var(--text-muted)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}>
            <Settings size={20} />
          </button>
        </div>
      </motion.aside>

      {/* MAIN MAIN CONTENT CONTAINER */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 16px 16px 16px', width: '100%', minWidth: 0 }}>

        {/* HEADER BAR */}
        <header className="app-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 12px'
        }}>
          <div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              color: 'var(--text-primary)'
            }}>
              Channel Analytics
            </h1>
          </div>

          <div className="header-actions-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)',
                background: 'var(--glass-pill)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={18} color="#e5a93c" /> : <Moon size={18} color="#9d50bb" />}
            </motion.button>

            <button style={{
              width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--glass-border)',
              background: 'var(--glass-pill)', color: 'var(--text-primary)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
            }}>
              <Search size={18} />
            </button>

            {!isLoggedIn ? (
              <Link to="/login" style={{
                padding: '6px 16px', borderRadius: '20px',
                background: 'var(--accent-orange)', border: '1px solid var(--accent-orange)',
                color: '#fff', fontSize: '12px', fontWeight: 700, textDecoration: 'none',
                whiteSpace: 'nowrap', boxShadow: 'var(--glow-orange)', transition: 'all 0.2s ease'
              }}>
                Sign In
              </Link>
            ) : (
              /* Profile Avatar (Visible when logged in) */
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--accent-orange)',
                cursor: 'pointer',
                flexShrink: 0
              }} title="Logged In User Profile">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </header>

        {/* HERO SECTION + TOP RIGHT WIDGETS GRID */}
        <div className="main-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2.4fr) minmax(0, 1.5fr)', gap: '24px', alignItems: 'stretch', width: '100%' }}>

          {/* HERO BANNER CARD WITH CHARACTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="imax-glass-card hero-card-banner"
            style={{
              position: 'relative',
              height: '100%',
              minHeight: '480px',
              overflow: 'hidden',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid var(--glass-border)'
            }}
          >
            {/* Animated Rotating Background Character Image (Sliding right to left from src/assets) */}
            <AnimatePresence initial={false}>
              <motion.img
                key={heroImageIndex}
                src={HERO_IMAGES[heroImageIndex]}
                alt="Popular Solution Character"
                className="hero-bg-img"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: '52%',
                  height: '100%',
                  objectFit: 'cover', 
                  objectPosition: 'center top',
                  borderTopRightRadius: '28px',
                  borderBottomRightRadius: '28px',
                  maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.15) 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.15) 90%, transparent 100%)',
                  filter: 'contrast(105%) brightness(95%)',
                  zIndex: 1
                }}
              />
            </AnimatePresence>

            {/* Top Text Info */}
            <div style={{ zIndex: 2, maxWidth: '440px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'rgba(255, 107, 53, 0.12)',
                border: '1px solid rgba(255, 107, 53, 0.3)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: 'var(--accent-orange)'
              }}>
                <Sparkles size={14} color="var(--accent-orange)" />
                Popular Solution
              </span>
              <h2 style={{
                fontSize: '48px',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '1.5px',
                margin: '16px 0 24px 0',
                color: 'var(--text-primary)'
              }}>
                Optimize <br />
                <span style={{
                  background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--accent-orange) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '1.5px'
                }}>
                  Your Metrics
                </span>
              </h2>

              <div style={{ marginBottom: '24px' }}>
                <FluidScanButton onClick={triggerExpressionScan} />
              </div>
            </div>

            {/* Live MediaPipe Camera & Face Scanner Modal */}
            <FaceScannerModal
              isScanning={isScanning}
              onCapture={handleFaceCaptured}
              onClose={() => setIsScanning(false)}
            />

            {/* OVERLAID STATS GLASS PILL BAR (Exactly matching reference pill format) */}
            <div
              className="imax-glass-pill hero-stats-pill"
              style={{
                zIndex: 3,
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr) 48px',
                padding: '16px 24px',
                gap: '16px',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>76k</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }} /> Users
                </div>
              </div>

              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>1.5m</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899' }} /> Clicks
                </div>
              </div>

              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>$3,6k</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} /> Sales
                </div>
              </div>

              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>47</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f97316' }} /> Items
                </div>
              </div>

              <button className="pill-arrow-btn" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--text-primary)',
                border: 'none',
                color: 'var(--app-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <ChevronRight size={18} />
              </button>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: ACTIVE USERS GRAPH + LATEST SALES PRODUCT CARD */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 0 }}>

            {/* REDESIGNED CURRENTLY PLAYING SONG SHOWCASE CARD */}
            <div
              className="imax-glass-card"
              style={{
                padding: '16px 24px',
                height: '185px',
                minHeight: '185px',
                maxHeight: '185px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Header Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Music size={18} color="var(--accent-orange)" />
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: isPlaying ? '#10b981' : '#646b7c',
                    boxShadow: isPlaying ? '0 0 8px #10b981' : 'none',
                    display: 'inline-block',
                    flexShrink: 0,
                    marginRight: '2px',
                    transition: 'all 0.3s ease'
                  }} title={isPlaying ? 'Live Active' : 'Paused'} />
                  Now Playing Showcase
                </span>
                <span style={{ fontSize: '12px', color: 'var(--accent-orange)', fontWeight: 700 }}>
                  Mood: {detectedEmotion} ({confidence}%)
                </span>
              </div>

              {/* Middle Row: Album Profile Cover + Scrolling Title & Singer Details + Live Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', zIndex: 2, margin: '4px 0' }}>
                {/* Singer / Song Profile Cover Image */}
                <div style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  flexShrink: 0,
                  border: '2px solid var(--accent-orange)',
                  background: 'var(--glass-pill)'
                }}>
                  <img
                    src={currentTrack.cover}
                    alt={currentTrack.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {isPlaying && (
                    <div style={{
                      position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '16px' }}>
                        <div className="eq-bar" />
                        <div className="eq-bar" />
                        <div className="eq-bar" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Song Details & Scrolling Title Marquee */}
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {/* Scrolling Text Marquee for Song Title Only */}
                  <div className="marquee-container">
                    <div className="marquee-content">
                      <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.2px' }}>
                        🎵 {currentTrack.title}
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--accent-orange)', letterSpacing: '0.2px' }}>
                        🎵 {currentTrack.title}
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.2px' }}>
                        🎵 {currentTrack.title}
                      </span>
                    </div>
                  </div>

                  {/* Singer Name & Category Tags */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap', overflow: 'hidden', marginTop: '2px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '130px' }}>
                      Singer: <strong style={{ color: 'var(--text-primary)' }}>{currentTrack.artist}</strong>
                    </span>
                    <span style={{
                      fontSize: '10px',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: 'rgba(255, 107, 53, 0.15)',
                      color: 'var(--accent-orange)',
                      fontWeight: 700,
                      border: '1px solid rgba(255, 107, 53, 0.3)',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}>
                      {currentTrack.bpm} BPM
                    </span>
                    <span style={{
                      fontSize: '10px',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: 'var(--glass-pill)',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                      border: '1px solid var(--glass-border)',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}>
                      {currentTrack.views}
                    </span>
                  </div>
                </div>

                {/* Quick Play Trigger Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: 'none',
                    background: 'var(--text-primary)',
                    color: 'var(--app-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" style={{ marginLeft: '2px' }} />}
                </motion.button>
              </div>

              {/* Bottom Mini Scrubber Progress Line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', zIndex: 2 }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {formatTime(currentTimeSec)}
                </span>
                <div style={{ flex: 1, height: '4px', background: 'var(--glass-border)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${audioProgress}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-orange), var(--accent-cyan))', borderRadius: '2px', transition: 'width 0.3s ease' }} />
                </div>
                <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {formatTime(totalDurationSec)}
                </span>
              </div>
            </div>

            {/* EXPRESSION ANALYTICS & SCANNED PHOTO CARD (Updated layout) */}
            <div
              className="imax-glass-card expression-analytics-card"
              style={{
                padding: '20px',
                display: 'grid',
                gridTemplateColumns: '1fr 1.1fr',
                gap: '16px',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Expression Attributes & Metrics Showcase */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: '14px' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.2px' }}>
                  Expression Analytics
                </div>

                {/* Expression Curve Graph + Percentage Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '4px 0' }}>
                  {/* Dynamic Moving Audio Frequency Line Bar Graph */}
                  <svg width="110" height="34" viewBox="0 0 110 34" fill="none">
                    <path
                      d={generateFrequencyPath(audioWavePhase, isPlaying, 1.2, 110, 34)}
                      fill="none"
                      stroke="var(--accent-orange)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Up Circle Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px 4px 4px',
                    borderRadius: '20px',
                    background: 'var(--glass-pill)',
                    border: '1px solid var(--glass-border)',
                    backdropFilter: 'blur(10px)',
                    color: 'var(--text-primary)',
                    fontSize: '12px',
                    fontWeight: 700
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'var(--glass-border)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ChevronRight size={12} style={{ transform: 'rotate(-90deg)' }} />
                    </div>
                    <span>{confidence > 90 ? '6%' : `${(100 - confidence).toFixed(0)}%`}</span>
                  </div>
                </div>

                {/* Big Orange Percentage Display */}
                <div>
                  <div style={{ fontSize: '44px', fontWeight: 700, color: 'var(--accent-orange)', letterSpacing: '-0.5px', lineHeight: '1.1' }}>
                    {confidence}%
                  </div>
                </div>

                {/* Category / Icon Attribute Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '14px',
                    border: '1px solid var(--glass-border)',
                    background: 'rgba(255, 107, 53, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Smile size={22} color="var(--accent-orange)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Facial Expression
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      Category: {detectedEmotion} ({confidence}%)
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Full-Size Image Showcase Section */}
              <div style={{
                background: 'var(--glass-pill)',
                backdropFilter: 'blur(20px)',
                borderRadius: '26px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                border: '1px solid var(--glass-border)',
                width: '100%',
                height: '100%',
                minHeight: '260px'
              }}>
                <div style={{
                  width: '100%',
                  height: '210px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)'
                }}>
                  <img
                    src={scannedFacePhoto || img7 || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"}
                    alt="Attractive Character Expression"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      borderRadius: '20px'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'var(--glass-pill)',
                    backdropFilter: 'blur(12px)',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    border: '1px solid var(--glass-border)'
                  }}>
                    {detectedEmotion}
                  </div>
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', textAlign: 'center' }}>
                  {detectedEmotion} Character Mood
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: SONG RECOMMENDATIONS & MUSIC PLAYER */}
        <div className="imax-glass-card" style={{ padding: '24px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          <div className="recommendations-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Music size={20} color="var(--accent-orange)" />
                Detected Mood Recommendations ({detectedEmotion})
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Songs dynamically curated based on your live facial expression scan
              </p>
            </div>

            <button style={{
              padding: '6px 14px',
              borderRadius: '16px',
              background: 'var(--glass-pill)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              fontSize: '12px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}>
              Popularity <ChevronDown size={14} />
            </button>
          </div>

          {/* TABLE HEADER & TRACK LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="track-list-header" style={{
              display: 'grid',
              gridTemplateColumns: '2.2fr 1fr 1.8fr 50px',
              padding: '0 16px',
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--text-muted)'
            }}>
              <span>Video / Track</span>
              <span>Views</span>
              <span>Song & Singer Info</span>
              <span style={{ textAlign: 'right' }}>Like</span>
            </div>

            {playlist.map((song, index) => {
              const isCurrent = currentTrack.id === song.id;
              const isLiked = !!likedSongs[song.id];

              return (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
                  whileHover={{ scale: 1.012, y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => { setCurrentTrack(song); setIsPlaying(true); }}
                  className="track-list-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2.2fr 1fr 1.8fr 50px',
                    alignItems: 'center',
                    padding: '14px 20px',
                    borderRadius: '22px',
                    background: isCurrent ? 'rgba(255, 107, 53, 0.15)' : 'var(--glass-pill)',
                    border: isCurrent ? '1px solid var(--accent-orange)' : '1px solid var(--glass-border)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  {/* Track Thumbnail & Details */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      style={{ width: '48px', height: '48px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid var(--glass-border)' }}
                    >
                      <img src={song.cover} alt={song.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {isCurrent && isPlaying ? (
                          <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '16px' }}>
                            <div className="eq-bar" />
                            <div className="eq-bar" />
                            <div className="eq-bar" />
                          </div>
                        ) : (
                          <Play size={16} fill="#fff" color="#fff" />
                        )}
                      </div>
                    </motion.div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>{song.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                        <Play size={10} fill="var(--text-muted)" color="var(--text-muted)" /> {song.artist} • {song.bpm} BPM
                      </div>
                    </div>
                  </div>

                  {/* Views */}
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-amber)' }} />
                    {song.views}
                  </div>

                  {/* Song & Singer Details (Replaced Duration Numbers) */}
                  <div className="singer-details-col" style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0, overflow: 'hidden' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Music size={12} color="var(--accent-orange)" />
                      {song.title}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--accent-orange)', fontWeight: 600 }}>
                      Singer: {song.artist}
                    </span>
                  </div>

                  {/* Interactive Like Button Container */}
                  <div className="like-btn-col" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <motion.button
                      whileHover={{ scale: 1.25, rotate: isLiked ? 0 : [0, -10, 10, 0] }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLikedSongs((prev) => ({ ...prev, [song.id]: !prev[song.id] }));
                      }}
                      style={{
                        background: isLiked ? 'rgba(239, 68, 68, 0.15)' : 'var(--glass-pill)',
                        border: isLiked ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid var(--glass-border)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <Heart size={16} fill={isLiked ? '#ef4444' : 'none'} color={isLiked ? '#ef4444' : 'var(--text-muted)'} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* INTEGRATED FULL MUSIC PLAYER BAR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="imax-glass-pill music-player-bar" 
            style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', marginTop: '8px' }}
          >

            {/* Currently Playing Track Info */}
            <div className="player-track-info" style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '260px' }}>
              <motion.div 
                whileHover={{ scale: 1.08, rotate: 2 }}
                style={{ width: '42px', height: '42px', borderRadius: '10px', overflow: 'hidden' }}
              >
                <img src={currentTrack.cover} alt={currentTrack.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  {currentTrack.title}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--accent-orange)', fontWeight: 600 }}>
                  {currentTrack.artist} ({detectedEmotion} Mood)
                </div>
              </div>
            </div>

            {/* Playback Controls & Timeline Scrubber (Dominant Feature) */}
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', minWidth: 0, width: '100%' }}>
              
              {/* SINGLE INLINE CONTROLS ROW: Volume Icon, Previous, Play/Pause, Next, Like Icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '100%', position: 'relative' }}>
                
                {/* Volume Control: Inline Bar Always in Front of Icon */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="player-volume-box"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.2, color: 'var(--accent-orange)' }}
                    whileTap={{ scale: 0.85 }}
                    onClick={toggleMute}
                    title={Number(volume) === 0 ? "Unmute" : "Mute"}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      padding: '4px',
                      flexShrink: 0,
                      opacity: Number(volume) === 0 ? 0.55 : 1
                    }}
                  >
                    {Number(volume) === 0 ? (
                      <VolumeX size={18} color="var(--text-secondary)" />
                    ) : (
                      <Volume2 size={18} color="var(--text-primary)" />
                    )}
                  </motion.button>

                  {/* Inline Volume Bar (Always in Front of Volume Icon) */}
                  <motion.input
                    whileHover={{ scaleY: 1.2 }}
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="player-inline-volume-slider"
                    title={`Volume: ${volume}%`}
                    style={{
                      width: '42px',
                      height: '4px',
                      accentColor: 'var(--accent-orange)',
                      background: `linear-gradient(to right, var(--accent-orange) ${volume}%, rgba(255,255,255,0.15) ${volume}%)`,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      outline: 'none',
                      flexShrink: 0
                    }}
                  />
                </motion.div>

                {/* Previous Track Button */}
                <motion.button
                  whileHover={{ scale: 1.2, color: 'var(--accent-orange)' }}
                  whileTap={{ scale: 0.85 }}
                  onClick={handlePrevTrack}
                  style={{ border: 'none', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <SkipBack size={20} />
                </motion.button>

                {/* Play / Pause Toggle Button */}
                <motion.button
                  whileHover={{ scale: 1.12, boxShadow: '0 6px 20px rgba(255, 107, 53, 0.35)' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: 'none',
                    background: 'var(--text-primary)', color: 'var(--app-bg)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0
                  }}
                >
                  {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" style={{ marginLeft: '2px' }} />}
                </motion.button>

                {/* Next Track Button */}
                <motion.button
                  whileHover={{ scale: 1.2, color: 'var(--accent-orange)' }}
                  whileTap={{ scale: 0.85 }}
                  onClick={handleNextTrack}
                  style={{ border: 'none', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <SkipForward size={20} />
                </motion.button>

                {/* Like / Heart Icon Button (Active State Enabled) */}
                <motion.button
                  whileHover={{ scale: 1.25, rotate: likedSongs[currentTrack.id] ? 0 : [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  onClick={() => setLikedSongs((prev) => ({ ...prev, [currentTrack.id]: !prev[currentTrack.id] }))}
                  title={likedSongs[currentTrack.id] ? "Liked" : "Like"}
                  style={{
                    border: 'none',
                    background: likedSongs[currentTrack.id] ? 'rgba(255, 107, 53, 0.15)' : 'transparent',
                    color: likedSongs[currentTrack.id] ? 'var(--accent-orange)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    boxShadow: likedSongs[currentTrack.id] ? '0 0 12px rgba(255, 107, 53, 0.4)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Heart size={18} fill={likedSongs[currentTrack.id] ? 'var(--accent-orange)' : 'none'} color={likedSongs[currentTrack.id] ? 'var(--accent-orange)' : 'var(--text-secondary)'} />
                </motion.button>

              </div>

              {/* Dominant Timeline Scrubber Bar */}
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', minWidth: '34px' }}>
                  {formatTime(currentTimeSec)}
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={audioProgress}
                  onChange={handleProgressChange}
                  style={{
                    flex: 1,
                    height: '6px',
                    accentColor: 'var(--accent-orange)',
                    background: `linear-gradient(to right, var(--accent-orange) ${audioProgress}%, rgba(255,255,255,0.1) ${audioProgress}%)`,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                />
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', minWidth: '34px' }}>
                  {formatTime(totalDurationSec)}
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<MainDashboardApp />} />
    </Routes>
  );
}
