import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthHook } from '../hook/useAuthHook';

const AuthProtected = ({ children }) => {
    const { user, loading } = useAuthHook();
    const isGuest = localStorage.getItem('isGuest') === 'true';

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at 20% 20%, #1e1b24 0%, #13141a 50%, #0b0c10 100%)',
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
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

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', zIndex: 1 }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        border: '3px solid rgba(255, 107, 53, 0.15)',
                        borderTop: '3px solid #ff6b35',
                        borderRight: '3px solid #ff6b35',
                        borderRadius: '50%',
                        animation: 'spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
                    }} />
                    <span style={{ fontSize: '15px', color: '#c0c5d5', fontWeight: 600, letterSpacing: '0.5px' }}>
                        Loading IMAX Music AI...
                    </span>
                    <style>{`
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            </div>
        );
    }

    if (!user && !isGuest) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AuthProtected;

 