// Bank of Technology — Full Page Component
// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"
import { useEffect } from "react"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function BankOfTechnology(props) {
    const { contactEmail, heroTitle, heroSub, ctaLabel } = props

    useEffect(() => {
        const link = document.createElement("link")
        link.href =
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
        link.rel = "stylesheet"
        document.head.appendChild(link)
        return () => document.head.removeChild(link)
    }, [])

    const fadeUp = {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
        },
    }

    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.18 } },
    }

    return (
        <div style={s.page}>
            {/* ── NAV ── */}
            <nav style={s.nav}>
                <span style={s.logo}>Bank of Technology</span>
                <a href="#join" style={s.navLink}>
                    Join the Vision
                </a>
            </nav>

            {/* ── HERO ── */}
            <section id="hero" style={{ ...s.section, minHeight: "100vh", position: "relative" }}>
                <motion.div
                    style={s.container}
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p style={s.eyebrow} variants={fadeUp}>
                        Bank of Technology
                    </motion.p>

                    <motion.h1 style={s.heroTitle} variants={fadeUp}>
                        {heroTitle || (
                            <>
                                Technology
                                <br />
                                needs a
                                <br />
                                <span style={{ color: "#888" }}>conductor.</span>
                            </>
                        )}
                    </motion.h1>

                    <motion.p style={s.heroSub} variants={fadeUp}>
                        {heroSub ||
                            `分断された技術を結び、\nまだ存在しない産業を創る。\n\nBank of Technology は、\n技術文明の新しい編成方法を探求する。`}
                    </motion.p>

                    <motion.a
                        href="#join"
                        style={s.btn}
                        variants={fadeUp}
                        whileHover={{ borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.05)" }}
                    >
                        {ctaLabel || "Join the Vision"}
                    </motion.a>
                </motion.div>

                {/* scroll hint */}
                <div style={s.scrollHint}>
                    <span style={s.scrollLine} />
                    <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444" }}>
                        Scroll
                    </span>
                </div>
            </section>

            {/* ── VISION ── */}
            <section id="vision" style={{ ...s.section, borderTop: "1px solid #1a1a1a" }}>
                <motion.div
                    style={s.container}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p style={s.sectionLabel} variants={fadeUp}>
                        Vision
                    </motion.p>
                    <motion.div style={s.visionText} variants={stagger}>
                        {[
                            { text: "世界には、\n優れた技術が無数に存在している。", dim: true },
                            {
                                text: "しかし多くは、\n研究室、企業、制度、専門領域の壁に閉じ込められ、\n産業化されないまま消えていく。",
                                dim: true,
                            },
                            {
                                text: '私たちは、\n技術を単体で見るのではなく、\n"協奏"として再編成する。',
                                dim: false,
                            },
                            { text: "必要なのは、\n新しい技術そのものではない。", dim: true },
                            {
                                text: "技術同士をつなぎ、\n未来産業へ変換する\n「指揮者」の存在だ。",
                                dim: false,
                            },
                        ].map((block, i) => (
                            <motion.p
                                key={i}
                                style={{
                                    ...s.visionBlock,
                                    color: block.dim ? "#888" : "#fff",
                                    fontWeight: block.dim ? 300 : 400,
                                }}
                                variants={fadeUp}
                            >
                                {block.text.split("\n").map((line, j) => (
                                    <span key={j}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </motion.p>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ── WHY ── */}
            <section id="why" style={{ ...s.section, borderTop: "1px solid #1a1a1a" }}>
                <motion.div
                    style={s.container}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p style={s.sectionLabel} variants={fadeUp}>
                        Why
                    </motion.p>
                    <motion.div style={{ maxWidth: 640 }} variants={stagger}>
                        {[
                            {
                                text: "AI、ロボティクス、バイオ、\n量子技術、エネルギー、素材。\n\n技術は加速度的に進化している。",
                                highlight: [],
                            },
                            {
                                text: "しかし、\nそれらを統合し、\n社会実装へ導く構造は未成熟だ。",
                                highlight: ["構造は未成熟だ。"],
                            },
                            {
                                text: "Bank of Technology は、\n技術集約機能として、\n分断された知を接続し、\n未来産業の創出を加速させる。",
                                highlight: ["技術集約機能として、", "未来産業の創出を加速させる。"],
                            },
                        ].map((block, i) => (
                            <motion.p key={i} style={s.whyBlock} variants={fadeUp}>
                                {block.text.split("\n").map((line, j) => (
                                    <span
                                        key={j}
                                        style={{
                                            color: block.highlight.includes(line) ? "#fff" : "#888",
                                            fontWeight: block.highlight.includes(line) ? 400 : 300,
                                        }}
                                    >
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </motion.p>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ── JOIN ── */}
            <section id="join" style={{ ...s.section, borderTop: "1px solid #1a1a1a" }}>
                <motion.div
                    style={s.container}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p style={s.sectionLabel} variants={fadeUp}>
                        Join
                    </motion.p>
                    <motion.div style={s.joinRoles} variants={stagger}>
                        {["研究者。", "エンジニア。", "事業家。", "デザイナー。", "思想家。"].map(
                            (role) => (
                                <motion.span
                                    key={role}
                                    style={{ display: "block", color: "#888" }}
                                    variants={fadeUp}
                                    whileHover={{ color: "#fff" }}
                                >
                                    {role}
                                </motion.span>
                            )
                        )}
                    </motion.div>
                    <motion.p style={s.joinMessage} variants={fadeUp}>
                        専門領域を超え、
                        <br />
                        未来を共創したい人へ。
                        <br />
                        <br />
                        私たちは、
                        <br />
                        <span style={{ color: "#fff", fontWeight: 400 }}>
                            共鳴する仲間を探しています。
                        </span>
                    </motion.p>
                    <motion.a
                        href={`mailto:${contactEmail || "your@email.com"}`}
                        style={s.btn}
                        variants={fadeUp}
                        whileHover={{ borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.05)" }}
                    >
                        Contact
                    </motion.a>
                </motion.div>
            </section>

            {/* ── FOOTER ── */}
            <footer style={s.footer}>
                <span style={{ ...s.logo, color: "#444" }}>Bank of Technology</span>
                <span style={{ fontSize: 12, color: "#333" }}>© 2026 Bank of Technology</span>
            </footer>
        </div>
    )
}

// ── STYLES ──────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
    page: {
        background: "#000",
        color: "#fff",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: 300,
        lineHeight: 1.8,
        WebkitFontSmoothing: "antialiased",
        width: "100%",
        overflowX: "hidden",
    },
    nav: {
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "28px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)",
    },
    logo: {
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#fff",
        textDecoration: "none",
    },
    navLink: {
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "0.1em",
        color: "#888",
        textDecoration: "none",
    },
    section: {
        display: "flex",
        alignItems: "center",
        padding: "160px 60px",
    },
    container: {
        maxWidth: 900,
        width: "100%",
    },
    eyebrow: {
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: "#888",
        marginBottom: 48,
    },
    heroTitle: {
        fontSize: "clamp(56px, 8vw, 104px)",
        fontWeight: 300,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        marginBottom: 48,
    },
    heroSub: {
        fontSize: 18,
        fontWeight: 300,
        color: "#888",
        lineHeight: 2,
        maxWidth: 480,
        marginBottom: 64,
        whiteSpace: "pre-line",
    },
    btn: {
        display: "inline-block",
        padding: "16px 40px",
        border: "1px solid rgba(255,255,255,0.3)",
        color: "#fff",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.3s, background 0.3s",
    },
    sectionLabel: {
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: "#888",
        marginBottom: 72,
    },
    visionText: {
        display: "flex",
        flexDirection: "column",
        gap: 0,
    },
    visionBlock: {
        fontSize: "clamp(22px, 2.5vw, 32px)",
        lineHeight: 2,
        letterSpacing: "-0.01em",
        marginBottom: "2em",
    },
    whyBlock: {
        fontSize: 20,
        lineHeight: 2,
        marginBottom: "2em",
    },
    joinRoles: {
        fontSize: "clamp(32px, 4vw, 56px)",
        fontWeight: 300,
        lineHeight: 1.4,
        letterSpacing: "-0.02em",
        marginBottom: 72,
        cursor: "default",
    },
    joinMessage: {
        fontSize: 18,
        fontWeight: 300,
        color: "#888",
        lineHeight: 2,
        marginBottom: 64,
        maxWidth: 440,
    },
    footer: {
        padding: "48px 60px",
        borderTop: "1px solid #1a1a1a",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    scrollHint: {
        position: "absolute",
        bottom: 48,
        left: 60,
        display: "flex",
        alignItems: "center",
        gap: 12,
    },
    scrollLine: {
        width: 40,
        height: 1,
        background: "#333",
        display: "block",
    },
}

// ── PROPERTY CONTROLS ────────────────────────────────────

addPropertyControls(BankOfTechnology, {
    heroTitle: {
        title: "Hero Title",
        type: ControlType.String,
        defaultValue: "Technology needs a conductor.",
    },
    heroSub: {
        title: "Hero Subtitle",
        type: ControlType.String,
        defaultValue:
            "分断された技術を結び、\nまだ存在しない産業を創る。\n\nBank of Technology は、\n技術文明の新しい編成方法を探求する。",
        displayTextArea: true,
    },
    ctaLabel: {
        title: "CTA Button",
        type: ControlType.String,
        defaultValue: "Join the Vision",
    },
    contactEmail: {
        title: "Contact Email",
        type: ControlType.String,
        defaultValue: "universalbudo@gmail.com",
    },
})
