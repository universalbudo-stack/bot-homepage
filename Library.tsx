// Bank of Technology — Library Page Component
// Paste into Framer > Assets > Code > Library.tsx
// Set this page's slug to: /library

import { useEffect, useState } from "react"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function Library() {
    const [activeSection, setActiveSection] = useState("featured")

    useEffect(() => {
        const fontLink = document.createElement("link")
        fontLink.href =
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
        fontLink.rel = "stylesheet"
        document.head.appendChild(fontLink)

        const style = document.createElement("style")
        style.id = "library-styles"
        style.textContent = LIBRARY_CSS
        document.head.appendChild(style)

        document.documentElement.style.scrollBehavior = "smooth"

        const sectionIds = ["featured", "bio", "robotics", "materials", "neuro", "space"]
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.2, rootMargin: "-100px 0px -60% 0px" }
        )
        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => {
            document.head.removeChild(fontLink)
            const s = document.getElementById("library-styles")
            if (s) document.head.removeChild(s)
            observer.disconnect()
        }
    }, [])

    const catLinks = [
        { href: "#featured", label: "フィーチャー", id: "featured" },
        { href: "#bio", label: "バイオ", id: "bio" },
        { href: "#robotics", label: "ロボティクス", id: "robotics" },
        { href: "#materials", label: "先端材料", id: "materials" },
        { href: "#neuro", label: "神経技術", id: "neuro" },
        { href: "#space", label: "宇宙", id: "space" },
    ]

    return (
        <div className="lib-root">
            {/* NAV */}
            <nav>
                <a href="/" className="nav-logo">
                    Bank of Technology
                </a>
                <a href="/" className="nav-back">
                    ← ホームへ
                </a>
            </nav>

            {/* HERO */}
            <div className="hero">
                <p className="hero-eyebrow">Report Library</p>
                <h1 className="hero-title">
                    技術解析
                    <br />
                    レポート
                </h1>
                <p className="hero-sub">
                    フロンティア技術の現在地を読む。
                    <br />
                    超伝導・量子・バイオ・ロボット・素材・脳・宇宙——28本のレポート。
                </p>
            </div>

            {/* CATEGORY NAV */}
            <div className="cat-nav">
                {catLinks.map((cat) => (
                    <a
                        key={cat.id}
                        href={cat.href}
                        className={"cat-link" + (activeSection === cat.id ? " active" : "")}
                    >
                        {cat.label}
                    </a>
                ))}
            </div>

            {/* FEATURED */}
            <div className="featured" id="featured">
                <p className="section-label">Featured — 技術解析レポートの起点</p>
                <div className="featured-grid">
                    <FeaturedCard
                        href="https://comfy-shortbread-44a429.netlify.app/superconductor-analysis"
                        num="#001 — 超伝導"
                        title="室温超伝導はいつ産業になるか。"
                        keyword="Superconductivity"
                    />
                    <FeaturedCard
                        href="https://comfy-shortbread-44a429.netlify.app/quantum-analysis"
                        num="#002 — 量子技術"
                        title="量子技術は何を変えるのか。"
                        keyword="Quantum Computing"
                    />
                    <FeaturedCard
                        href="https://comfy-shortbread-44a429.netlify.app/energy-analysis"
                        num="#003 — エネルギー"
                        title="エネルギーの次の形。"
                        keyword="Fusion · Battery · Hydrogen"
                    />
                </div>
            </div>

            {/* BIO */}
            <div className="category cat-bio" id="bio">
                <div className="cat-header">
                    <h2 className="cat-title">バイオテクノロジー</h2>
                    <span className="cat-count">5 reports</span>
                    <a href="https://comfy-shortbread-44a429.netlify.app/bio-analysis" className="cat-parent-link">
                        概観レポートを読む →
                    </a>
                </div>
                <div className="report-list">
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/bio-mrna" num="#005-01" title="ワクチンは、生まれ変わった。" keyword="mRNA · LNP · 癌ワクチン" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/bio-crispr" num="#005-02" title="遺伝子は、書き換えられる。" keyword="CRISPR · Casgevy · 塩基編集" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/bio-glp1" num="#005-03" title="肥満は、病気として治せる時代になった。" keyword="GLP-1 · セマグルチド · 心血管" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/bio-synthetic" num="#005-04" title="生命を、プログラムする。" keyword="合成生物学 · DBTL · Spiber" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/bio-protein" num="#005-05" title="タンパク質の謎は解かれた。次は、設計する。" keyword="AlphaFold · RFdiffusion · タンパク質設計" />
                </div>
            </div>

            {/* ROBOTICS */}
            <div className="category cat-robotics" id="robotics">
                <div className="cat-header">
                    <h2 className="cat-title">ロボティクス</h2>
                    <span className="cat-count">5 reports</span>
                    <a href="https://comfy-shortbread-44a429.netlify.app/robotics-analysis" className="cat-parent-link">
                        概観レポートを読む →
                    </a>
                </div>
                <div className="report-list">
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/robotics-humanoid" num="#006-01" title="人型ロボットは、なぜ今なのか。" keyword="ヒューマノイド · Tesla Optimus · Figure" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/robotics-industrial" num="#006-02" title="工場のロボットは、知性を持ちはじめた。" keyword="産業ロボット · コボット · 言語命令制御" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/robotics-embodied-ai" num="#006-03" title="AIが体を持つ。それは何を意味するか。" keyword="Embodied AI · RT-2 · Physical Intelligence" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/robotics-soft" num="#006-04" title="柔らかいロボットは、なぜ難しいのか。" keyword="ソフトロボティクス · 空気圧アクチュエータ · 医療応用" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/robotics-autonomous" num="#006-05" title="自律システムは、いつ「判断」を任せられるか。" keyword="自律走行 · Waymo · L4 · ロングテール問題" />
                </div>
            </div>

            {/* MATERIALS */}
            <div className="category cat-materials" id="materials">
                <div className="cat-header">
                    <h2 className="cat-title">先端材料</h2>
                    <span className="cat-count">5 reports</span>
                    <a href="https://comfy-shortbread-44a429.netlify.app/materials-analysis" className="cat-parent-link">
                        概観レポートを読む →
                    </a>
                </div>
                <div className="report-list">
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/materials-graphene" num="#007-01" title="グラフェンは、なぜ20年間「次の素材」のままなのか。" keyword="グラフェン · 製造スケール · マジックアングル" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/materials-metamaterials" num="#007-02" title="自然界にない物質を、人間は作れる。" keyword="メタマテリアル · 負屈折率 · 音響遮蔽" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/materials-hea" num="#007-03" title="5元素以上の合金が、材料の常識を壊す。" keyword="高エントロピー合金 · HEA · 耐熱・耐放射線" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/materials-mxene" num="#007-04" title="MXeneは、電磁波を遮断する。そして何になるか。" keyword="MXene · EMIシールド · 2次元金属" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/materials-ai-design" num="#007-05" title="AIが新素材を発見する時代が来た。" keyword="GNoME · マテリアルズインフォマティクス · 自律実験" />
                </div>
            </div>

            {/* NEURO */}
            <div className="category cat-neuro" id="neuro">
                <div className="cat-header">
                    <h2 className="cat-title">神経技術</h2>
                    <span className="cat-count">5 reports</span>
                    <a href="https://comfy-shortbread-44a429.netlify.app/neuro-analysis" className="cat-parent-link">
                        概観レポートを読む →
                    </a>
                </div>
                <div className="report-list">
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/neuro-bci" num="#008-01" title="脳とコンピュータは、つながりはじめた。" keyword="BCI · BrainGate · 思考入力 · 90bpm" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/neuro-neuralink" num="#008-02" title="Neuralinkは、脳に電極を刺す。それは正しいか。" keyword="Neuralink · 1024電極 · 神経倫理 · FDA" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/neuro-neuromorphic" num="#008-03" title="脳を模倣したチップは、AIを超えるか。" keyword="ニューロモーフィック · Intel Loihi · 20W vs 500W" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/neuro-organoid" num="#008-04" title="皿の上で、脳細胞がゲームを学んだ。" keyword="脳オルガノイド · DishBrain · バイオコンピューティング" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/neuro-noninvasive" num="#008-05" title="手術なしで、脳を読む。" keyword="EEG · fNIRS · 非侵襲BCI · 島津製作所" />
                </div>
            </div>

            {/* SPACE */}
            <div className="category cat-space" id="space">
                <div className="cat-header">
                    <h2 className="cat-title">宇宙産業</h2>
                    <span className="cat-count">5 reports</span>
                    <a href="https://comfy-shortbread-44a429.netlify.app/space-analysis" className="cat-parent-link">
                        概観レポートを読む →
                    </a>
                </div>
                <div className="report-list">
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/space-launch-cost" num="#009-01" title="宇宙へ行くコストは、100分の1になった。" keyword="打ち上げコスト · SpaceX · Starship · 再使用ロケット" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/space-constellation" num="#009-02" title="6000基の衛星が、空をインターネットに変える。" keyword="Starlink · LEO · 衛星コンステレーション · 地政学" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/space-orbital-manufacturing" num="#009-03" title="宇宙でしか作れないものがある。" keyword="軌道上製造 · ZBLAN · 微小重力 · Axiom Space" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/space-lunar" num="#009-04" title="月は、次の地政学の舞台だ。" keyword="月開発 · Artemis · 水氷 · 米中競争" />
                    <ReportItem href="https://comfy-shortbread-44a429.netlify.app/space-sbsp" num="#009-05" title="太陽は宇宙で発電し、地球に送電できるか。" keyword="SBSP · マイクロ波送電 · エネルギー安全保障 · JAXA" />
                </div>
            </div>

            {/* FOOTER */}
            <footer>
                <span className="footer-logo">Bank of Technology</span>
                <a href="/" className="footer-link">
                    ← ホームへ戻る
                </a>
            </footer>
        </div>
    )
}

function FeaturedCard({ href, num, title, keyword }) {
    return (
        <a href={href} className="featured-card">
            <div className="featured-num">{num}</div>
            <div className="featured-title">{title}</div>
            <div className="featured-keyword">{keyword}</div>
            <div className="card-arrow">→</div>
        </a>
    )
}

function ReportItem({ href, num, title, keyword }) {
    return (
        <a href={href} className="report-item">
            <span className="report-num">{num}</span>
            <div className="report-body">
                <div className="report-title">{title}</div>
                <div className="report-keyword">{keyword}</div>
            </div>
            <span className="report-indicator">→</span>
        </a>
    )
}

const LIBRARY_CSS = `
.lib-root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #000;
  color: #e8e8e8;
  font-weight: 300;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}
.lib-root *, .lib-root *::before, .lib-root *::after {
  box-sizing: border-box; margin: 0; padding: 0;
}
.lib-root nav {
  position: fixed; top: 0; width: 100%;
  padding: 28px 60px;
  display: flex; justify-content: space-between; align-items: center;
  z-index: 100;
  background: linear-gradient(to bottom, rgba(0,0,0,.95) 0%, transparent 100%);
}
.lib-root .nav-logo {
  font-size: 13px; font-weight: 500; letter-spacing: .15em;
  text-transform: uppercase; color: #e8e8e8; text-decoration: none;
}
.lib-root .nav-back {
  font-size: 12px; color: #666; text-decoration: none;
  letter-spacing: .08em; transition: color .2s;
}
.lib-root .nav-back:hover { color: #888; }
.lib-root .hero {
  padding: 160px 60px 80px; border-bottom: 1px solid #111;
}
.lib-root .hero-eyebrow {
  font-size: 11px; font-weight: 500; letter-spacing: .25em;
  text-transform: uppercase; color: #555; margin-bottom: 32px;
}
.lib-root .hero-title {
  font-size: clamp(48px,7vw,88px); font-weight: 300;
  letter-spacing: -.03em; line-height: 1.05; margin-bottom: 32px;
}
.lib-root .hero-sub { font-size: 16px; color: #666; max-width: 480px; line-height: 2; }
.lib-root .cat-nav {
  padding: 32px 60px; border-bottom: 1px solid #111;
  display: flex; position: sticky; top: 80px;
  background: #000; z-index: 50;
}
.lib-root .cat-link {
  font-size: 11px; letter-spacing: .15em; text-transform: uppercase;
  color: #555; text-decoration: none;
  padding: 8px 24px 8px 0; transition: color .2s; white-space: nowrap;
}
.lib-root .cat-link:first-child { padding-left: 0; }
.lib-root .cat-link:hover { color: #888; }
.lib-root .cat-link.active { color: #e8e8e8; }
.lib-root .featured { padding: 80px 60px; border-bottom: 1px solid #111; }
.lib-root .section-label {
  font-size: 10px; font-weight: 500; letter-spacing: .25em;
  text-transform: uppercase; color: #555; margin-bottom: 48px;
}
.lib-root .featured-grid {
  display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: #111;
}
.lib-root .featured-card {
  background: #000; padding: 48px 40px; text-decoration: none;
  display: block; transition: background .2s; position: relative;
}
.lib-root .featured-card:hover { background: #080808; }
.lib-root .featured-card:hover .card-arrow { opacity: 1; transform: translateX(4px); }
.lib-root .featured-num {
  font-size: 10px; letter-spacing: .2em; text-transform: uppercase;
  color: #444; margin-bottom: 24px;
}
.lib-root .featured-title {
  font-size: 22px; font-weight: 300; color: #e8e8e8;
  line-height: 1.4; letter-spacing: -.01em; margin-bottom: 24px;
}
.lib-root .featured-keyword {
  font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #555;
}
.lib-root .card-arrow {
  font-size: 16px; color: #555; position: absolute; bottom: 48px; right: 40px;
  opacity: 0; transition: opacity .2s, transform .2s;
}
.lib-root .category { padding: 80px 60px; border-bottom: 1px solid #111; }
.lib-root .cat-header {
  display: flex; align-items: baseline; gap: 32px; margin-bottom: 48px;
}
.lib-root .cat-title {
  font-size: clamp(28px,3vw,40px); font-weight: 300; letter-spacing: -.02em;
  color: #e8e8e8;
}
.lib-root .cat-count { font-size: 11px; color: #555; letter-spacing: .1em; text-transform: uppercase; }
.lib-root .cat-parent-link {
  font-size: 11px; color: #555; letter-spacing: .1em;
  text-decoration: none; margin-left: auto; transition: color .2s;
}
.lib-root .cat-parent-link:hover { color: #888; }
.lib-root .report-list { display: flex; flex-direction: column; }
.lib-root .report-item {
  display: flex; align-items: baseline;
  padding: 28px 0; border-bottom: 1px solid #0d0d0d;
  text-decoration: none; transition: background .15s; position: relative;
}
.lib-root .report-item:last-child { border-bottom: none; }
.lib-root .report-item:hover .report-title { color: #fff; }
.lib-root .report-item:hover .report-indicator { opacity: 1; transform: translateX(4px); }
.lib-root .report-num {
  font-size: 10px; color: #444; letter-spacing: .15em;
  width: 64px; flex-shrink: 0; padding-top: 3px;
}
.lib-root .report-body { flex: 1; }
.lib-root .report-title {
  font-size: 18px; font-weight: 300; color: #aaa;
  letter-spacing: -.01em; line-height: 1.4; transition: color .2s; margin-bottom: 6px;
}
.lib-root .report-keyword { font-size: 11px; color: #444; letter-spacing: .12em; text-transform: uppercase; }
.lib-root .report-indicator {
  font-size: 14px; color: #555; margin-left: 24px;
  opacity: 0; transition: opacity .2s, transform .2s; flex-shrink: 0; align-self: center;
}
.lib-root footer {
  padding: 48px 60px; border-top: 1px solid #111;
  display: flex; justify-content: space-between; align-items: center;
}
.lib-root .footer-logo {
  font-size: 12px; font-weight: 500; letter-spacing: .15em;
  text-transform: uppercase; color: #555;
}
.lib-root .footer-link {
  font-size: 12px; color: #555; text-decoration: none; transition: color .2s;
}
.lib-root .footer-link:hover { color: #888; }
@media (max-width: 900px) {
  .lib-root nav { padding: 24px; }
  .lib-root .hero { padding: 120px 24px 60px; }
  .lib-root .cat-nav { padding: 24px; overflow-x: auto; }
  .lib-root .featured { padding: 60px 24px; }
  .lib-root .featured-grid { grid-template-columns: 1fr; }
  .lib-root .category { padding: 60px 24px; }
  .lib-root .report-num { width: 48px; }
  .lib-root footer { padding: 40px 24px; flex-direction: column; gap: 12px; text-align: center; }
}
`
