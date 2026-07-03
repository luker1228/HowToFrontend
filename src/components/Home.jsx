import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COURSES = [
  {
    id: 'html',
    title: 'HTML',
    subtitle: '网页的骨架',
    description: '学习标签、结构、语义化，通过 Markdown 类比快速上手。',
    lessons: 11,
    status: 'available',
    tag: '< >',
  },
  {
    id: 'css',
    title: 'CSS',
    subtitle: '网页的外观',
    description: '选择器、盒模型、Flexbox、Grid，让页面变得好看。',
    lessons: 0,
    status: 'coming',
    tag: '{ }',
  },
  {
    id: 'react',
    title: 'React',
    subtitle: '网页的交互',
    description: '组件、状态、事件，构建动态可交互的现代 Web 应用。',
    lessons: 0,
    status: 'coming',
    tag: '( )',
  },
];

const MARQUEE_ITEMS = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Flex', 'Grid',
  'Box Model', 'Semantics', 'Components', 'State', 'Events',
  'HTML', 'CSS', 'JavaScript', 'React', 'Flex', 'Grid',
  'Box Model', 'Semantics', 'Components', 'State', 'Events',
];

const APPROACH_STEPS = [
  {
    num: '01',
    title: '类比学习',
    body: '用你已经熟悉的 Markdown 语法做参照，快速建立 HTML 标签的直觉。',
    detail: '例：# 标题 → <h1>',
  },
  {
    num: '02',
    title: '实时编辑',
    body: '直接在浏览器里修改 HTML，不需要任何环境配置，改动立即可见。',
    detail: '无需安装 · 无需账号',
  },
  {
    num: '03',
    title: '循序渐进',
    body: '从标题到 div 容器，每节课只聚焦一个知识点，不焦虑，不跳跃。',
    detail: '11 节课 · 约 40 分钟',
  },
];

export default function Home({ onSelect }) {
  const cardsRef = useRef([]);
  const heroMockupRef = useRef(null);
  const approachRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card stacking entrance
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 60, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });

      // Hero mockup fade + lift
      if (heroMockupRef.current) {
        gsap.fromTo(
          heroMockupRef.current,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: 'power2.out', delay: 0.35 }
        );
      }

      // Approach row stagger
      approachRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.55,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-x-hidden w-full max-w-full font-body bg-canvas-cream min-h-screen">

      {/* ── Floating nav ── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-7 py-3 rounded-pill bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-hairline">
        <span className="text-aubergine font-display font-bold text-base tracking-display-md">HowToFrontend</span>
        <span className="hidden md:flex gap-6 text-sm text-ink-mute font-medium">
          <a href="#courses" className="hover:text-ink transition-colors">课程</a>
          <a href="#approach" className="hover:text-ink transition-colors">方法论</a>
        </span>
        <button
          className="ml-2 bg-aubergine text-white text-sm font-bold px-7 py-2.5 rounded-pill hover:bg-aubergine-press transition-colors shadow-[0_5px_20px_rgba(0,0,0,0.10)]"
          onClick={() => onSelect('html')}
        >
          开始学习
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        {/* Pastel-mesh backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[60%] h-[70%] rounded-full bg-gradient-peach opacity-60 blur-[120px] -translate-x-1/4 -translate-y-1/4" />
          <div className="absolute top-1/4 right-0 w-[50%] h-[60%] rounded-full bg-gradient-lavender opacity-50 blur-[100px] translate-x-1/4" />
          <div className="absolute bottom-0 left-1/3 w-[40%] h-[50%] rounded-full bg-gradient-green opacity-40 blur-[90px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[55%_45%] items-center gap-12">
          {/* Text */}
          <div>
            <p className="text-xs font-bold tracking-micro uppercase text-aubergine mb-6">前端可视化教学平台</p>
            <h1
              className="font-display font-extrabold text-ink leading-[1.08]"
              style={{ fontSize: 'clamp(2.8rem, 4.5vw, 5rem)', letterSpacing: '-0.048em' }}
            >
              从零构建，<br />边看边学前端
            </h1>
            <p className="mt-7 text-ink-mute text-lg leading-relaxed max-w-md">
              通过 Markdown 类比理解 HTML，在浏览器里直接修改代码，
              即时看到渲染效果——真正掌握每一个标签的含义。
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                className="bg-aubergine text-white font-bold text-base px-8 py-4 rounded-pill shadow-[0_5px_20px_rgba(0,0,0,0.12)] hover:bg-aubergine-press transition-colors"
                onClick={() => onSelect('html')}
              >
                立刻开始 HTML
              </button>
              <a
                href="#approach"
                className="bg-canvas-lavender text-ink font-bold text-base px-8 py-4 rounded-pill border border-hairline hover:bg-white transition-colors"
              >
                了解教学方法
              </a>
            </div>
          </div>

          {/* Inline product mockup — no placeholder image */}
          <div ref={heroMockupRef} className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-[0_0_48px_rgba(0,0,0,0.13)] bg-[#141620] border border-white/8">
              {/* Mock title bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1a1d27] border-b border-white/8">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] text-[#64748b] font-mono">标题 · HowToFrontend</span>
              </div>

              {/* Mock split editor */}
              <div className="grid grid-cols-2 gap-0 divide-x divide-white/8">
                {/* Markdown side */}
                <div className="p-5">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#1264a3] mb-3">Markdown</div>
                  <div className="font-mono text-[12px] leading-7 space-y-0.5">
                    <p><span className="text-[#60a5fa] font-bold"># 一级标题</span></p>
                    <p><span className="text-[#60a5fa]">## 二级标题</span></p>
                    <p><span className="text-[#60a5fa]">### 三级标题</span></p>
                  </div>
                </div>
                {/* HTML side */}
                <div className="p-5">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#f97316] mb-3">
                    HTML <span className="text-[9px] font-medium normal-case tracking-normal text-[#f97316]/60 ml-1">可编辑</span>
                  </div>
                  <div className="font-mono text-[12px] leading-7 space-y-0.5 text-[#e2e8f0]">
                    <p><span className="text-[#f97316]">&lt;h1&gt;</span>一级标题<span className="text-[#f97316]">&lt;/h1&gt;</span></p>
                    <p><span className="text-[#f97316]">&lt;h2&gt;</span>二级标题<span className="text-[#f97316]">&lt;/h2&gt;</span></p>
                    <p><span className="text-[#f97316]">&lt;h3&gt;</span>三级标题<span className="text-[#f97316]">&lt;/h3&gt;</span></p>
                  </div>
                </div>
              </div>

              {/* Mock preview bar */}
              <div className="border-t border-white/8">
                <div className="px-5 py-2 bg-[#1a1d27] border-b border-white/8 flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#4ade80]">渲染效果</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20">实时</span>
                </div>
                <div className="px-5 py-4 bg-white">
                  <h1 style={{ fontSize: '1.5em', fontWeight: 700, color: '#1d1d1d', marginBottom: 4 }}>一级标题</h1>
                  <h2 style={{ fontSize: '1.15em', fontWeight: 600, color: '#1d1d1d', marginBottom: 3 }}>二级标题</h2>
                  <h3 style={{ fontSize: '0.95em', fontWeight: 600, color: '#1d1d1d' }}>三级标题</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-6 border-y border-hairline bg-white overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-12">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="text-sm font-bold tracking-micro uppercase text-ink-mute shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── COURSES — Bento Grid ── */}
      <section id="courses" className="py-32 md:py-48 px-8 max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-micro uppercase text-aubergine mb-4">学习路径</p>
        <h2
          className="font-display font-bold text-ink mb-16"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', letterSpacing: '-0.032em', maxWidth: '28ch' }}
        >
          三步掌握前端开发核心
        </h2>

        <div className="grid grid-cols-3 auto-rows-[280px] gap-5">
          {/* HTML — featured large card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group bg-aubergine"
            onClick={() => onSelect('html')}
          >
            {/* Aubergine atmospheric blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-aubergine-press/50 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-aubergine-tint/40 blur-[60px] pointer-events-none" />

            <div className="absolute inset-0 p-10 flex flex-col justify-between relative z-10">
              <div className="self-start bg-white/15 backdrop-blur-sm text-white font-mono font-bold text-2xl px-4 py-2 rounded-xl">
                {COURSES[0].tag}
              </div>
              <div>
                <div className="text-aubergine-mute text-sm font-semibold mb-2">{COURSES[0].subtitle}</div>
                <h3 className="text-white font-display font-bold text-5xl tracking-display-md mb-3">{COURSES[0].title}</h3>
                <p className="text-aubergine-mute text-sm leading-relaxed max-w-sm mb-6">{COURSES[0].description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-aubergine-mute text-xs">{COURSES[0].lessons} 节课</span>
                  <span className="bg-white text-aubergine font-bold text-sm px-6 py-2.5 rounded-pill group-hover:bg-canvas-lavender transition-colors">
                    开始学习 →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CSS */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden bg-canvas-lavender border border-hairline"
          >
            <div className="p-8 h-full flex flex-col justify-between">
              <div className="font-mono font-bold text-2xl text-ink-mute">{COURSES[1].tag}</div>
              <div>
                <div className="text-xs font-bold tracking-micro uppercase text-ink-mute mb-2">{COURSES[1].subtitle}</div>
                <h3 className="font-display font-bold text-3xl text-ink tracking-display-md mb-1">{COURSES[1].title}</h3>
                <p className="text-ink-mute text-xs leading-relaxed mt-2">{COURSES[1].description}</p>
                <div className="mt-4 inline-block bg-canvas-cream text-ink-mute font-bold text-xs px-4 py-1.5 rounded-pill border border-hairline">
                  即将推出
                </div>
              </div>
            </div>
          </div>

          {/* React */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden bg-canvas-cream border border-hairline"
          >
            <div className="p-8 h-full flex flex-col justify-between">
              <div className="font-mono font-bold text-2xl text-ink-mute">{COURSES[2].tag}</div>
              <div>
                <div className="text-xs font-bold tracking-micro uppercase text-ink-mute mb-2">{COURSES[2].subtitle}</div>
                <h3 className="font-display font-bold text-3xl text-ink tracking-display-md mb-1">{COURSES[2].title}</h3>
                <p className="text-ink-mute text-xs leading-relaxed mt-2">{COURSES[2].description}</p>
                <div className="mt-4 inline-block bg-white text-ink-mute font-bold text-xs px-4 py-1.5 rounded-pill border border-hairline">
                  即将推出
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH — Editorial numbered rows ── */}
      <section id="approach" className="py-32 md:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs font-bold tracking-micro uppercase text-aubergine mb-4">教学方法论</p>
          <h2
            className="font-display font-bold text-ink mb-20"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', letterSpacing: '-0.032em', maxWidth: '24ch' }}
          >
            看见，理解，自己动手
          </h2>

          <div className="space-y-0">
            {APPROACH_STEPS.map((step, i) => (
              <div
                key={i}
                ref={(el) => (approachRefs.current[i] = el)}
                className="flex items-start gap-12 py-12 border-b border-hairline last:border-b-0"
              >
                <div
                  className="font-display font-extrabold text-aubergine shrink-0 w-20 text-right"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {step.num}
                </div>
                <div className="flex-1 pt-1">
                  <h3
                    className="font-display font-bold text-ink mb-3"
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', letterSpacing: '-0.02em' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-ink-mute text-base leading-relaxed max-w-xl">{step.body}</p>
                </div>
                <div className="shrink-0 pt-2 hidden md:flex items-center">
                  <span className="font-mono text-xs text-ink-mute bg-canvas-lavender border border-hairline px-4 py-2 rounded-pill whitespace-nowrap">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <footer className="bg-aubergine relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-aubergine-press/50 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-aubergine-tint/40 blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-28 pb-20">
          <div className="text-center mb-24">
            <p className="text-xs font-bold tracking-micro uppercase text-aubergine-mute mb-6">现在就开始</p>
            <h2
              className="font-display font-extrabold text-white mb-8"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', letterSpacing: '-0.048em', lineHeight: 1.05 }}
            >
              学前端，从第一行<br />HTML 开始
            </h2>
            <p className="text-aubergine-mute text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              无需安装，无需账号，打开浏览器即可开始你的第一节课。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="bg-white text-aubergine font-bold text-base px-10 py-4 rounded-pill shadow-[0_5px_20px_rgba(0,0,0,0.15)] hover:bg-canvas-lavender transition-colors"
                onClick={() => onSelect('html')}
              >
                开始第一节课
              </button>
              <a
                href="#courses"
                className="border-2 border-white text-white font-bold text-base px-10 py-4 rounded-pill hover:bg-white/10 transition-colors"
              >
                查看课程大纲
              </a>
            </div>
          </div>

          <div className="border-t border-aubergine-tint pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display font-bold text-white text-lg tracking-display-md">HowToFrontend</span>
            <div className="flex gap-8 text-sm text-aubergine-mute">
              <a href="#courses" className="hover:text-white transition-colors">课程</a>
              <a href="#approach" className="hover:text-white transition-colors">方法论</a>
            </div>
            <span className="text-xs text-aubergine-mute">MIT License · 开源教学</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
