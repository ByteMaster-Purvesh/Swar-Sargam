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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-solid, #0b0c10)',
                color: '#ffffff',
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        border: '3px solid rgba(255, 107, 53, 0.2)',
                        borderTop: '3px solid #ff6b35',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                    }} />
                    <span style={{ fontSize: '14px', color: '#a0a5b5', fontWeight: 500 }}>
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