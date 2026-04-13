import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
    const [typedText, setTypedText] = useState('')
    const [showCursor, setShowCursor] = useState(true)
    const [activeStat, setActiveStat] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
    const [codeLineIndex, setCodeLineIndex] = useState(0)
    const heroRef = useRef(null)

    const fullText = 'Start your coding journey today.'

    /* ─── Typing animation ─── */
    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.slice(0, i))
                i++
            } else {
                clearInterval(interval)
            }
        }, 55)
        return () => clearInterval(interval)
    }, [])

    /* ─── Blinking cursor ─── */
    useEffect(() => {
        const blink = setInterval(() => setShowCursor(prev => !prev), 530)
        return () => clearInterval(blink)
    }, [])

    /* ─── Entrance animation trigger ─── */
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    /* ─── Animate code lines appearing one by one ─── */
    useEffect(() => {
        if (codeLineIndex < codeLines.length) {
            const timer = setTimeout(() => {
                setCodeLineIndex(prev => prev + 1)
            }, 300 + codeLineIndex * 120)
            return () => clearTimeout(timer)
        }
    }, [codeLineIndex])

    const stats = [
        { value: '3,500+', label: 'Problems', color: '#ffa116' },
        { value: '45M+', label: 'Users', color: '#5cb85c' },
        { value: '100+', label: 'Contests', color: '#46a6ff' },
        { value: '50+', label: 'Languages', color: '#ab7ef6' },
    ]

    const features = [
        {
            icon: featureIconCode,
            title: 'Practice Problems',
            desc: 'Master algorithms with curated challenges from Easy to Hard.',
        },
        {
            icon: featureIconTrophy,
            title: 'Weekly Contests',
            desc: 'Compete globally and climb the leaderboard rankings.',
        },
        {
            icon: featureIconBrain,
            title: 'Learn Patterns',
            desc: 'Build intuition with categorized problem sets and solutions.',
        },
    ]

    return (
        <section ref={heroRef} style={styles.heroSection}>
            {/* Background Effects */}
            <div style={styles.bgGradient1} />
            <div style={styles.bgGradient2} />
            <div style={styles.bgGrid} />

            <div style={{
                ...styles.heroContainer,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
                {/* ─── Left Content ─── */}
                <div style={styles.leftColumn}>
                    {/* Badge */}
                    <div style={styles.badge}>
                        <span style={styles.badgeDot} />
                        <span style={styles.badgeText}>Level up your coding skills</span>
                    </div>

                    {/* Heading */}
                    <h1 style={styles.heading}>
                        A New Way to{' '}
                        <span style={styles.headingHighlight}>Learn</span>,{' '}
                        <span style={styles.headingHighlight2}>Practice</span> &{' '}
                        <span style={styles.headingHighlight3}>Compete</span>
                    </h1>

                    {/* Typed subtitle */}
                    <p style={styles.subtitle}>
                        {typedText}
                        <span style={{
                            ...styles.cursor,
                            opacity: showCursor ? 1 : 0,
                        }}>|</span>
                    </p>

                    <p style={styles.description}>
                        Join millions of developers mastering data structures, algorithms, and system design.
                        From beginner to expert — all in one place.
                    </p>

                    {/* CTA Buttons */}
                    <div style={styles.ctaGroup}>
                        <button
                            id="hero-get-started"
                            style={styles.ctaPrimary}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 161, 22, 0.45)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 161, 22, 0.3)'
                            }}
                        >
                            Get Started — It's Free
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </button>
                        <button
                            id="hero-explore"
                            style={styles.ctaSecondary}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            Explore Problems
                        </button>
                    </div>

                    {/* Stats */}
                    <div style={styles.statsRow}>
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                style={{
                                    ...styles.statItem,
                                    ...(activeStat === i ? { transform: 'translateY(-4px)' } : {}),
                                    transitionDelay: `${i * 80}ms`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? (activeStat === i ? 'translateY(-4px)' : 'translateY(0)')
                                        : 'translateY(20px)',
                                }}
                                onMouseEnter={() => setActiveStat(i)}
                                onMouseLeave={() => setActiveStat(null)}
                            >
                                <span style={{ ...styles.statValue, color: stat.color }}>
                                    {stat.value}
                                </span>
                                <span style={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── Right Column: Code Editor Mock ─── */}
                <div style={{
                    ...styles.rightColumn,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                }}>
                    <div style={styles.editorCard}>
                        {/* Editor Header */}
                        <div style={styles.editorHeader}>
                            <div style={styles.editorDots}>
                                <span style={{ ...styles.dot, background: '#ff5f57' }} />
                                <span style={{ ...styles.dot, background: '#febc2e' }} />
                                <span style={{ ...styles.dot, background: '#28c840' }} />
                            </div>
                            <div style={styles.editorTabs}>
                                <span style={styles.editorTabActive}>two-sum.py</span>
                                <span style={styles.editorTab}>solution.py</span>
                            </div>
                            <div style={styles.editorLang}>Python 3</div>
                        </div>

                        {/* Editor Body */}
                        <div style={styles.editorBody}>
                            {codeLines.map((line, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        ...styles.codeLine,
                                        opacity: idx < codeLineIndex ? 1 : 0,
                                        transform: idx < codeLineIndex ? 'translateX(0)' : 'translateX(-10px)',
                                        transition: `all 0.4s ease ${idx * 60}ms`,
                                    }}
                                >
                                    <span style={styles.lineNumber}>{idx + 1}</span>
                                    <span dangerouslySetInnerHTML={{ __html: line }} />
                                </div>
                            ))}
                        </div>

                        {/* Editor Footer — Difficulty Badge */}
                        <div style={styles.editorFooter}>
                            <div style={styles.difficultySection}>
                                <span style={styles.difficultyBadgeEasy}>Easy</span>
                                <span style={styles.difficultyBadgeMedium}>Medium</span>
                                <span style={styles.difficultyBadgeHard}>Hard</span>
                            </div>
                            <div style={styles.acceptedLabel}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span style={{ color: '#5cb85c', fontSize: '12px', fontWeight: '600' }}>Accepted</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating decoration card */}
                    <div style={styles.floatingCard}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffa116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <div>
                            <div style={{ color: '#fff', fontSize: '13px', fontWeight: '600' }}>Daily Challenge</div>
                            <div style={{ color: '#eff1f6bf', fontSize: '11px', marginTop: '2px' }}>Streak: 42 days 🔥</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Features Section ─── */}
            <div style={{
                ...styles.featuresSection,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
            }}>
                {features.map((feat, i) => (
                    <div
                        key={feat.title}
                        id={`hero-feature-${i}`}
                        style={styles.featureCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)'
                            e.currentTarget.style.borderColor = 'rgba(255, 161, 22, 0.25)'
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
                            e.currentTarget.style.boxShadow = 'none'
                        }}
                    >
                        <div style={styles.featureIcon}>{feat.icon}</div>
                        <h3 style={styles.featureTitle}>{feat.title}</h3>
                        <p style={styles.featureDesc}>{feat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

/* ─── Code Lines for the Editor ─── */
const codeLines = [
    `<span style="color:#c678dd">class</span> <span style="color:#e5c07b">Solution</span>:`,
    `    <span style="color:#c678dd">def</span> <span style="color:#61afef">twoSum</span>(<span style="color:#e06c75">self</span>, <span style="color:#e06c75">nums</span>, <span style="color:#e06c75">target</span>):`,
    `        <span style="color:#e06c75">seen</span> = {}`,
    `        <span style="color:#c678dd">for</span> <span style="color:#e06c75">i</span>, <span style="color:#e06c75">num</span> <span style="color:#c678dd">in</span> <span style="color:#61afef">enumerate</span>(<span style="color:#e06c75">nums</span>):`,
    `            <span style="color:#e06c75">complement</span> = <span style="color:#e06c75">target</span> - <span style="color:#e06c75">num</span>`,
    `            <span style="color:#c678dd">if</span> <span style="color:#e06c75">complement</span> <span style="color:#c678dd">in</span> <span style="color:#e06c75">seen</span>:`,
    `                <span style="color:#c678dd">return</span> [<span style="color:#e06c75">seen</span>[<span style="color:#e06c75">complement</span>], <span style="color:#e06c75">i</span>]`,
    `            <span style="color:#e06c75">seen</span>[<span style="color:#e06c75">num</span>] = <span style="color:#e06c75">i</span>`,
    `        <span style="color:#c678dd">return</span> []`,
    `<span style="color:#5c6370"># Time: O(n) | Space: O(n)</span>`,
]

/* ─── Feature Icons ─── */
const featureIconCode = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffa116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
    </svg>
)
const featureIconTrophy = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffa116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0012 0V2z"/>
    </svg>
)
const featureIconBrain = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffa116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93"/>
        <path d="M8 6a4 4 0 00-4 4c0 2.05 1.52 3.76 3.5 4"/>
        <path d="M16 6a4 4 0 014 4c0 2.05-1.52 3.76-3.5 4"/>
        <path d="M9 18a4 4 0 006 0"/>
        <path d="M12 22v-4"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
)

/* ─── Styles ─── */
const styles = {
    heroSection: {
        position: 'relative',
        minHeight: '100vh',
        background: '#0a0a0a',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: '80px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    bgGradient1: {
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 161, 22, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
    },
    bgGradient2: {
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(70, 166, 255, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
    },
    bgGrid: {
        position: 'absolute',
        inset: 0,
        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
    },
    heroContainer: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
        position: 'relative',
        zIndex: 1,
    },

    /* ─── Left column ─── */
    leftColumn: {
        flex: '1 1 55%',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 16px',
        borderRadius: '100px',
        background: 'rgba(255, 161, 22, 0.08)',
        border: '1px solid rgba(255, 161, 22, 0.18)',
        marginBottom: '28px',
    },
    badgeDot: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: '#ffa116',
        boxShadow: '0 0 8px rgba(255, 161, 22, 0.6)',
    },
    badgeText: {
        color: '#ffa116',
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '0.02em',
    },
    heading: {
        fontSize: '52px',
        fontWeight: '800',
        lineHeight: 1.12,
        color: '#ffffff',
        margin: '0 0 16px 0',
        letterSpacing: '-1.5px',
    },
    headingHighlight: {
        background: 'linear-gradient(135deg, #ffa116 0%, #ffcf70 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    headingHighlight2: {
        background: 'linear-gradient(135deg, #5cb85c 0%, #8ee08e 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    headingHighlight3: {
        background: 'linear-gradient(135deg, #46a6ff 0%, #80c7ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    subtitle: {
        fontSize: '20px',
        color: '#eff1f6bf',
        margin: '0 0 14px 0',
        fontWeight: '400',
        minHeight: '30px',
    },
    cursor: {
        color: '#ffa116',
        fontWeight: '300',
        fontSize: '22px',
        transition: 'opacity 0.1s',
        marginLeft: '2px',
    },
    description: {
        fontSize: '16px',
        color: 'rgba(239, 241, 246, 0.55)',
        lineHeight: 1.7,
        margin: '0 0 32px 0',
        maxWidth: '480px',
    },

    /* CTA */
    ctaGroup: {
        display: 'flex',
        gap: '14px',
        flexWrap: 'wrap',
        marginBottom: '44px',
    },
    ctaPrimary: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '14px 32px',
        border: 'none',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #ffa116 0%, #e89b0e 100%)',
        color: '#1a1a1a',
        fontSize: '15px',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 20px rgba(255, 161, 22, 0.3)',
        fontFamily: 'inherit',
        letterSpacing: '0.01em',
    },
    ctaSecondary: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '14px 28px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.04)',
        color: '#eff1f6',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: 'inherit',
    },

    /* Stats */
    statsRow: {
        display: 'flex',
        gap: '28px',
        flexWrap: 'wrap',
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        cursor: 'default',
        transition: 'all 0.3s ease',
    },
    statValue: {
        fontSize: '26px',
        fontWeight: '800',
        letterSpacing: '-0.5px',
    },
    statLabel: {
        fontSize: '13px',
        color: 'rgba(239, 241, 246, 0.5)',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
    },

    /* ─── Right column / Editor ─── */
    rightColumn: {
        flex: '1 1 45%',
        position: 'relative',
    },
    editorCard: {
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#1e1e2e',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.03) inset',
    },
    editorHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(30, 30, 46, 0.8)',
    },
    editorDots: {
        display: 'flex',
        gap: '7px',
        marginRight: '16px',
    },
    dot: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
    },
    editorTabs: {
        display: 'flex',
        gap: '2px',
        flex: 1,
    },
    editorTabActive: {
        padding: '5px 14px',
        borderRadius: '6px',
        background: 'rgba(255, 161, 22, 0.12)',
        color: '#ffa116',
        fontSize: '12px',
        fontWeight: '600',
    },
    editorTab: {
        padding: '5px 14px',
        borderRadius: '6px',
        color: 'rgba(239, 241, 246, 0.35)',
        fontSize: '12px',
        fontWeight: '500',
    },
    editorLang: {
        fontSize: '11px',
        color: 'rgba(239, 241, 246, 0.35)',
        fontWeight: '500',
        padding: '3px 10px',
        borderRadius: '4px',
        background: 'rgba(255, 255, 255, 0.04)',
    },
    editorBody: {
        padding: '20px 0',
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
        fontSize: '13px',
        lineHeight: 1.85,
        minHeight: '260px',
    },
    codeLine: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingLeft: '16px',
        paddingRight: '16px',
    },
    lineNumber: {
        width: '32px',
        textAlign: 'right',
        color: 'rgba(239, 241, 246, 0.2)',
        marginRight: '16px',
        userSelect: 'none',
        fontSize: '12px',
        flexShrink: 0,
    },
    editorFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(30, 30, 46, 0.6)',
    },
    difficultySection: {
        display: 'flex',
        gap: '6px',
    },
    difficultyBadgeEasy: {
        padding: '3px 10px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '600',
        color: '#5cb85c',
        background: 'rgba(92, 184, 92, 0.12)',
    },
    difficultyBadgeMedium: {
        padding: '3px 10px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '600',
        color: '#ffa116',
        background: 'rgba(255, 161, 22, 0.12)',
    },
    difficultyBadgeHard: {
        padding: '3px 10px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '600',
        color: '#ef4743',
        background: 'rgba(239, 71, 67, 0.12)',
    },
    acceptedLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },

    /* Floating card */
    floatingCard: {
        position: 'absolute',
        bottom: '-20px',
        left: '-30px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 18px',
        borderRadius: '12px',
        background: 'rgba(30, 30, 46, 0.95)',
        border: '1px solid rgba(255, 161, 22, 0.15)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        animation: 'floatCard 3s ease-in-out infinite',
    },

    /* ─── Features section ─── */
    featuresSection: {
        maxWidth: '1280px',
        margin: '80px auto 0',
        padding: '0 24px',
        display: 'flex',
        gap: '20px',
        position: 'relative',
        zIndex: 1,
    },
    featureCard: {
        flex: 1,
        padding: '28px 24px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
    },
    featureIcon: {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: 'rgba(255, 161, 22, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '18px',
    },
    featureTitle: {
        fontSize: '17px',
        fontWeight: '700',
        color: '#ffffff',
        margin: '0 0 10px 0',
    },
    featureDesc: {
        fontSize: '14px',
        color: 'rgba(239, 241, 246, 0.5)',
        lineHeight: 1.65,
        margin: 0,
    },
}

/* ─── Inject keyframe animations & responsive styles ─── */
const heroStyles = document.createElement('style')
heroStyles.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

    @keyframes floatCard {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }

    @media (max-width: 900px) {
        section > div:nth-child(4) {
            flex-direction: column !important;
        }
        section > div:nth-child(4) > div:first-child {
            flex: unset !important;
        }
        section > div:nth-child(4) > div:first-child h1 {
            font-size: 36px !important;
        }
        section > div:nth-child(4) > div:last-child {
            flex: unset !important;
            max-width: 100% !important;
        }
    }

    @media (max-width: 768px) {
        section > div:last-child {
            flex-direction: column !important;
        }
    }
`
document.head.appendChild(heroStyles)

export default Hero