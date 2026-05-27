// Bank of Technology — Full Page Component
// Paste this into Framer > Assets > Code > Home_1.tsx

import { addPropertyControls, ControlType } from "framer"
import { useEffect, useState } from "react"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function BankOfTechnology(props) {
    const { contactEmail, formspreeId } = props

    const [showContact, setShowContact] = useState(false)
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState("idle") // idle | sending | done | error

    const openModal = () => { setShowContact(true); setStatus("idle") }
    const closeModal = () => { setShowContact(false); setStatus("idle"); setForm({ name: "", email: "", message: "" }) }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const res = await fetch("https://formspree.io/f/" + formspreeId, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            setStatus(res.ok ? "done" : "error")
        } catch {
            setStatus("error")
        }
    }

    useEffect(() => {
        const fontLink = document.createElement("link")
        fontLink.href =
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
        fontLink.rel = "stylesheet"
        document.head.appendChild(fontLink)

        const style = document.createElement("style")
        style.id = "bot-home-styles"
        style.textContent = BOT_CSS
        document.head.appendChild(style)

        document.documentElement.style.scrollBehavior = "smooth"

        return () => {
            document.head.removeChild(fontLink)
            const s = document.getElementById("bot-home-styles")
            if (s) document.head.removeChild(s)
        }
    }, [])

    // モーダル表示中はスクロール禁止
    useEffect(() => {
        document.body.style.overflow = showContact ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [showContact])

    return (
        <div className="bot-root">
            {/* NAV */}
            <nav>
                <a href="#hero" className="logo">
                    Bank of Technology
                </a>
                <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                    <a href="/library" className="nav-link">
                        Reports
                    </a>
                    <a href="#join" className="nav-link">
                        Join the Vision
                    </a>
                </div>
            </nav>

            {/* HERO */}
            <section id="hero" style={{ position: "relative" }}>
                <div className="container">
                    <p className="hero-eyebrow fade-in">Bank of Technology</p>
                    <h1 className="hero-title fade-in fade-in-delay-1">
                        Technology
                        <br />
                        needs a
                        <br />
                        <em>conductor.</em>
                    </h1>
                    <p className="hero-sub fade-in fade-in-delay-2">
                        分断された技術を結び、
                        <br />
                        まだ存在しない産業を創る。
                        <br />
                        <br />
                        Bank of Technology は、
                        <br />
                        技術文明の新しい編成方法を探求する。
                    </p>
                    <a href="#join" className="btn fade-in fade-in-delay-3">
                        Join the Vision
                    </a>
                </div>
                <div className="scroll-hint fade-in fade-in-delay-4">
                    <span className="scroll-line"></span>
                    <span>Scroll</span>
                </div>
            </section>

            {/* VISION */}
            <section id="vision">
                <div className="container">
                    <p className="section-label">Vision</p>
                    <div className="vision-text">
                        <p className="dim">
                            世界には、
                            <br />
                            優れた技術が無数に存在している。
                        </p>
                        <p className="dim">
                            しかし多くは、
                            <br />
                            研究室、企業、制度、専門領域の壁に閉じ込められ、
                            <br />
                            産業化されないまま消えていく。
                        </p>
                        <p>
                            私たちは、
                            <br />
                            技術を単体で見るのではなく、
                            <br />
                            <strong>"協奏"として再編成する。</strong>
                        </p>
                        <p className="dim">
                            必要なのは、
                            <br />
                            新しい技術そのものではない。
                        </p>
                        <p>
                            技術同士をつなぎ、
                            <br />
                            未来産業へ変換する
                            <br />
                            <strong>「指揮者」の存在だ。</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY */}
            <section id="why">
                <div className="container">
                    <p className="section-label">Why</p>
                    <div className="why-text">
                        <p>
                            AI、ロボティクス、バイオ、
                            <br />
                            量子技術、エネルギー、素材。
                            <br />
                            <br />
                            技術は加速度的に進化している。
                        </p>
                        <p>
                            しかし、
                            <br />
                            それらを統合し、
                            <br />
                            社会実装へ導く<strong>構造は未成熟だ。</strong>
                        </p>
                        <p>
                            Bank of Technology は、
                            <br />
                            <strong>技術集約機能</strong>として、
                            <br />
                            分断された知を接続し、
                            <br />
                            <strong>未来産業の創出を加速させる。</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* JOIN */}
            <section id="join">
                <div className="container">
                    <p className="section-label">Join</p>
                    <div className="join-roles">
                        <span>研究者。</span>
                        <span>エンジニア。</span>
                        <span>事業家。</span>
                        <span>デザイナー。</span>
                        <span>思想家。</span>
                    </div>
                    <p className="join-message">
                        専門領域を超え、
                        <br />
                        未来を共創したい人へ。
                        <br />
                        <br />
                        私たちは、
                        <br />
                        <strong>共鳴する仲間を探しています。</strong>
                    </p>
                    <button className="btn" onClick={openModal}>
                        Contact
                    </button>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <span className="footer-logo">Bank of Technology</span>
                <span className="footer-copy">© 2026 Bank of Technology</span>
            </footer>

            {/* CONTACT MODAL */}
            {showContact && (
                <div
                    className="modal-overlay"
                    onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
                >
                    <div className="modal-box">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <p className="modal-label">Contact</p>

                        {status === "done" ? (
                            <div>
                                <p className="modal-success-title">送信しました。</p>
                                <p className="modal-success-body">
                                    内容を確認次第、ご連絡いたします。
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-field">
                                    <label className="form-label">お名前</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="山田 太郎"
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label">メールアドレス</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder="taro@example.com"
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label">お問い合わせ内容</label>
                                    <textarea
                                        className="form-textarea"
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        placeholder="ご連絡内容をご記入ください。"
                                    />
                                </div>
                                {status === "error" && (
                                    <p className="form-error">送信に失敗しました。もう一度お試しください。</p>
                                )}
                                <button
                                    type="submit"
                                    className="btn"
                                    disabled={status === "sending"}
                                    style={{ width: "100%", opacity: status === "sending" ? 0.5 : 1 }}
                                >
                                    {status === "sending" ? "送信中..." : "送信する"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

addPropertyControls(BankOfTechnology, {
    contactEmail: {
        type: ControlType.String,
        title: "Contact Email",
        defaultValue: "universalbudo@gmail.com",
    },
    formspreeId: {
        type: ControlType.String,
        title: "Formspree ID",
        defaultValue: "mojrpnzp",
    },
})

const BOT_CSS = `
.bot-root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #000000;
  color: #ffffff;
  font-weight: 300;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}

.bot-root *, .bot-root *::before, .bot-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* NAV */
.bot-root nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 28px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%);
}

.bot-root .logo {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
}

.bot-root .nav-link {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #888888;
  text-decoration: none;
  transition: color 0.3s;
}

.bot-root .nav-link:hover { color: #ffffff; }

/* SECTIONS */
.bot-root section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 160px 60px;
}

.bot-root .container {
  max-width: 900px;
  width: 100%;
}

/* HERO */
.bot-root #hero { justify-content: center; }

.bot-root .hero-eyebrow {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #888888;
  margin-bottom: 48px;
}

.bot-root .hero-title {
  font-size: clamp(56px, 8vw, 104px);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 48px;
}

.bot-root .hero-title em {
  font-style: normal;
  color: #888888;
}

.bot-root .hero-sub {
  font-size: 18px;
  font-weight: 300;
  color: #888888;
  line-height: 2;
  max-width: 480px;
  margin-bottom: 64px;
}

.bot-root .btn {
  display: inline-block;
  padding: 16px 40px;
  border: 1px solid rgba(255,255,255,0.3);
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  transition: border-color 0.3s, background 0.3s;
  cursor: pointer;
  background: transparent;
  font-family: 'Inter', sans-serif;
}

.bot-root .btn:hover {
  border-color: #ffffff;
  background: rgba(255,255,255,0.05);
}

.bot-root .btn:disabled {
  cursor: not-allowed;
}

/* SECTION LABEL */
.bot-root .section-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #888888;
  margin-bottom: 72px;
}

/* VISION */
.bot-root #vision { border-top: 1px solid #1a1a1a; }

.bot-root .vision-text {
  font-size: clamp(22px, 2.5vw, 32px);
  font-weight: 300;
  line-height: 2;
  letter-spacing: -0.01em;
}

.bot-root .vision-text p { margin-bottom: 2em; }
.bot-root .vision-text p:last-child { margin-bottom: 0; }
.bot-root .vision-text strong { font-weight: 500; color: #ffffff; }
.bot-root .vision-text .dim { color: #888888; }

/* WHY */
.bot-root #why { border-top: 1px solid #1a1a1a; }

.bot-root .why-text {
  font-size: 20px;
  font-weight: 300;
  line-height: 2;
  color: #888888;
  max-width: 640px;
}

.bot-root .why-text p { margin-bottom: 2em; }
.bot-root .why-text p:last-child { margin-bottom: 0; }
.bot-root .why-text strong { color: #ffffff; font-weight: 400; }

/* JOIN */
.bot-root #join { border-top: 1px solid #1a1a1a; }

.bot-root .join-roles {
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: #888888;
  margin-bottom: 72px;
}

.bot-root .join-roles span { display: block; transition: color 0.3s; }
.bot-root .join-roles span:hover { color: #ffffff; }

.bot-root .join-message {
  font-size: 18px;
  font-weight: 300;
  color: #888888;
  line-height: 2;
  margin-bottom: 64px;
  max-width: 440px;
}

.bot-root .join-message strong { color: #ffffff; font-weight: 400; }

/* FOOTER */
.bot-root footer {
  padding: 48px 60px;
  border-top: 1px solid #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bot-root .footer-logo {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888888;
}

.bot-root .footer-copy { font-size: 12px; color: #666666; }

/* SCROLL INDICATOR */
.bot-root .scroll-hint {
  position: absolute;
  bottom: 48px;
  left: 60px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #666666;
}

.bot-root .scroll-line { width: 40px; height: 1px; background: #333333; }

/* FADE IN */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.bot-root .fade-in { animation: fadeUp 1s ease forwards; }
.bot-root .fade-in-delay-1 { animation-delay: 0.2s; opacity: 0; }
.bot-root .fade-in-delay-2 { animation-delay: 0.5s; opacity: 0; }
.bot-root .fade-in-delay-3 { animation-delay: 0.8s; opacity: 0; }
.bot-root .fade-in-delay-4 { animation-delay: 1.1s; opacity: 0; }

/* CONTACT MODAL */
.bot-root .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.bot-root .modal-box {
  background: #080808;
  border: 1px solid #1a1a1a;
  padding: 64px;
  max-width: 540px;
  width: 100%;
  position: relative;
}

.bot-root .modal-close {
  position: absolute;
  top: 24px;
  right: 28px;
  background: none;
  border: none;
  color: #555;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s;
  font-family: 'Inter', sans-serif;
}

.bot-root .modal-close:hover { color: #888; }

.bot-root .modal-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 48px;
}

.bot-root .modal-success-title {
  font-size: 28px;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
}

.bot-root .modal-success-body {
  font-size: 15px;
  color: #666;
  line-height: 2;
}

.bot-root .form-field { margin-bottom: 32px; }

.bot-root .form-label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 12px;
}

.bot-root .form-input,
.bot-root .form-textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #1a1a1a;
  color: #e8e8e8;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 300;
  padding: 12px 0;
  outline: none;
  transition: border-color 0.2s;
  resize: none;
}

.bot-root .form-input:focus,
.bot-root .form-textarea:focus { border-bottom-color: #444; }

.bot-root .form-input::placeholder,
.bot-root .form-textarea::placeholder { color: #2a2a2a; }

.bot-root .form-error {
  font-size: 13px;
  color: #ff6666;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .bot-root nav { padding: 24px; }
  .bot-root section { padding: 120px 24px; }
  .bot-root footer { padding: 40px 24px; flex-direction: column; gap: 12px; text-align: center; }
  .bot-root .scroll-hint { left: 24px; }
  .bot-root .modal-box { padding: 40px 32px; }
}
`
