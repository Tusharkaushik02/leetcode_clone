import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Problem List', icon: problemListIcon },
        { label: 'Contest', icon: contestIcon },
        { label: 'Contact', icon: contactIcon },
    ]

    return (
        <nav style={{
            ...styles.nav,
            ...(scrolled ? styles.navScrolled : {}),
        }}>
            <div style={styles.container}>
                {/* Logo */}
                <div style={styles.logoSection}>
                    <div style={styles.logoIcon}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-3.85-1.757 5.07 5.07 0 00-3.636 1.568l-4.346 4.394a5.07 5.07 0 00-1.568 3.636 5.07 5.07 0 001.568 3.636l4.346 4.394a5.055 5.055 0 003.636 1.567 5.055 5.055 0 003.636-1.567l2.697-2.607c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039z" fill="#FFA116"/>
                            <path d="M19.748 15.046l-4.346-4.394a5.055 5.055 0 00-3.636-1.567c-.357 0-.706.043-1.046.121l2.097 2.097a2.697 2.697 0 01-.001 3.822l-2.697 2.607c-.515.514-.497 1.365.038 1.9.536.535 1.387.553 1.901.039l2.609-2.636c.476-.476 1.096-.728 1.737-.728a2.56 2.56 0 011.824.757l1.519 1.519a5.07 5.07 0 001.568-3.636 5.07 5.07 0 00-1.567-3.901z" fill="#B3B3B3"/>
                        </svg>
                    </div>
                    <span style={styles.logoText}>LeetCode</span>
                </div>

                {/* Desktop Nav Items */}
                <div style={styles.navLinks}>
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            id={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
                            style={{
                                ...styles.navItem,
                                ...(activeItem === item.label ? styles.navItemActive : {}),
                            }}
                            onMouseEnter={(e) => {
                                Object.assign(e.target.style, styles.navItemHover)
                            }}
                            onMouseLeave={(e) => {
                                if (activeItem !== item.label) {
                                    e.target.style.color = '#eff1f6bf'
                                    e.target.style.background = 'transparent'
                                }
                            }}
                            onClick={() => setActiveItem(item.label)}
                        >
                            <span style={styles.navIcon}>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Login Button */}
                <div style={styles.rightSection}>
                    <button
                        id="nav-login"
                        style={styles.loginBtn}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, #ffa116 0%, #ffbd4f 100%)'
                            e.currentTarget.style.transform = 'translateY(-1px)'
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 161, 22, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, #ffa116 0%, #e89b0e 100%)'
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 2px 12px rgba(255, 161, 22, 0.25)'
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
                            <polyline points="10 17 15 12 10 7"/>
                            <line x1="15" y1="12" x2="3" y2="12"/>
                        </svg>
                        Login
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        id="nav-mobile-toggle"
                        style={styles.hamburger}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <div style={{
                            ...styles.hamburgerLine,
                            transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }} />
                        <div style={{
                            ...styles.hamburgerLine,
                            opacity: mobileOpen ? 0 : 1,
                        }} />
                        <div style={{
                            ...styles.hamburgerLine,
                            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div style={{
                ...styles.mobileMenu,
                maxHeight: mobileOpen ? '400px' : '0',
                opacity: mobileOpen ? 1 : 0,
                padding: mobileOpen ? '16px 0' : '0',
            }}>
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        style={styles.mobileNavItem}
                        onClick={() => {
                            setActiveItem(item.label)
                            setMobileOpen(false)
                        }}
                    >
                        <span style={styles.navIcon}>{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

/* ─── Inline SVG Icons ─── */
const problemListIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
    </svg>
)

const contestIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0012 0V2z"/>
    </svg>
)

const contactIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
    </svg>
)

/* ─── Styles ─── */
const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(26, 26, 26, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    navScrolled: {
        background: 'rgba(18, 18, 18, 0.95)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(255, 161, 22, 0.1)',
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
    },
    logoSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
    },
    logoIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, rgba(255, 161, 22, 0.15) 0%, rgba(255, 161, 22, 0.05) 100%)',
        border: '1px solid rgba(255, 161, 22, 0.2)',
    },
    logoText: {
        fontSize: '20px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.5px',
    },
    navLinks: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        border: 'none',
        background: 'transparent',
        color: '#eff1f6bf',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'all 0.2s ease',
        fontFamily: 'inherit',
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
    },
    navItemHover: {
        color: '#ffffff',
        background: 'rgba(255, 255, 255, 0.06)',
    },
    navItemActive: {
        color: '#ffa116',
        background: 'rgba(255, 161, 22, 0.1)',
    },
    navIcon: {
        display: 'flex',
        alignItems: 'center',
        opacity: 0.8,
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    loginBtn: {
        display: 'flex',
        alignItems: 'center',
        padding: '9px 22px',
        border: 'none',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, #ffa116 0%, #e89b0e 100%)',
        color: '#1a1a1a',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 2px 12px rgba(255, 161, 22, 0.25)',
        fontFamily: 'inherit',
        letterSpacing: '0.02em',
    },
    hamburger: {
        display: 'none',
        flexDirection: 'column',
        gap: '5px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px',
    },
    hamburgerLine: {
        width: '22px',
        height: '2px',
        background: '#eff1f6bf',
        borderRadius: '2px',
        transition: 'all 0.3s ease',
    },
    mobileMenu: {
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '0 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    },
    mobileNavItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 16px',
        border: 'none',
        background: 'transparent',
        color: '#eff1f6bf',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'all 0.2s ease',
        fontFamily: 'inherit',
        textAlign: 'left',
        width: '100%',
    },
}

/* ─── Inject responsive media query ─── */
const styleSheet = document.createElement('style')
styleSheet.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    @media (max-width: 768px) {
        nav > div:first-child > div:nth-child(2) {
            display: none !important;
        }
        button[id="nav-mobile-toggle"] {
            display: flex !important;
        }
    }
`
document.head.appendChild(styleSheet)

export default Navbar