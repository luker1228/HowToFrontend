import React from "react";

/**
 * Frontend track manifest.
 * Single source of truth for the Frontend track's metadata, global-nav
 * curriculum, and the lesson-card catalog shown on the portal.
 *
 * `nav` is the flat curriculum list rendered by <NavDropdown> in the global
 * nav (one level, no nesting). `lessons` carries the rich card data (with SVG
 * previews) for the portal grid.
 */
export const frontendTrack = {
  id: "frontend",
  name: "HowToFrontend",
  href: "lesson-html.html",
  status: "live",
  accent: "var(--accent)",
  icon: "decor/icon-component.svg",
  tagline: "HTML · CSS · JS · 组件 · 布局",
  blurb: "从结构、样式、交互到组件与布局，用 AI 写出看得见的页面。",
  nav: [
    { text: "HTML · 01 结构与标签", href: "lesson-html.html" },
    { text: "HTML · 02 Figma 对比", href: "lesson-html-2.html" },
    { text: "CSS · 01 属性清单", href: "lesson-css.html" },
    { text: "CSS · 02 Figma 对比", href: "lesson-css-2.html" },
    { text: "JavaScript · 交互", href: "lesson-js.html" },
    { text: "组件 · 复用", href: "lesson-react.html" },
    { text: "布局 · 01 骨架", href: "lesson-layout.html" },
    { text: "布局 · 02 排列", href: "lesson-layout-2.html" },
  ],
  lessons: [
    {
      label: "HTML · 01",
      title: "HTML vs Markdown",
      copy: "标签就是给内容套一层含义，和 Markdown 的逻辑完全一样。",
      href: "lesson-html.html",
      preview: (
        <svg viewBox="0 0 318 174" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="20" y="30" width="120" height="114" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <rect x="20" y="30" width="120" height="22" fill="#00A8F8" stroke="#000" strokeWidth="2"/>
          <text x="32" y="46" fontSize="11" fontWeight="700" fill="#000" fontFamily="monospace">&lt;h1&gt;</text>
          <rect x="30" y="62" width="80" height="6" fill="#000"/>
          <rect x="30" y="74" width="60" height="5" fill="#6B6355"/>
          <rect x="30" y="84" width="90" height="5" fill="#6B6355"/>
          <rect x="30" y="94" width="50" height="5" fill="#6B6355"/>
          <rect x="30" y="112" width="70" height="16" fill="#FFDC58" stroke="#000" strokeWidth="2"/>
          <rect x="178" y="30" width="120" height="114" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <rect x="178" y="30" width="120" height="22" fill="#D030A8" stroke="#000" strokeWidth="2"/>
          <text x="190" y="46" fontSize="11" fontWeight="700" fill="#fff" fontFamily="monospace"># MD</text>
          <rect x="188" y="62" width="80" height="6" fill="#000"/>
          <rect x="188" y="74" width="60" height="5" fill="#6B6355"/>
          <rect x="188" y="84" width="90" height="5" fill="#6B6355"/>
          <rect x="188" y="94" width="50" height="5" fill="#6B6355"/>
          <rect x="188" y="112" width="70" height="16" fill="#FFDC58" stroke="#000" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      label: "HTML · 02",
      title: "HTML vs Figma",
      copy: "图层树就是标签树，每一层 div 对应 Figma 里的一个 Frame。",
      href: "lesson-html-2.html",
      preview: (
        <svg viewBox="0 0 318 174" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="30" y="20" width="110" height="134" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          {/* Figma layers */}
          <rect x="38" y="30" width="94" height="14" fill="#00A8F8" stroke="#000" strokeWidth="1.5"/>
          <rect x="46" y="50" width="78" height="12" fill="#fff" stroke="#000" strokeWidth="1.5"/>
          <rect x="54" y="68" width="62" height="10" fill="#fff" stroke="#000" strokeWidth="1.5"/>
          <rect x="54" y="84" width="62" height="10" fill="#fff" stroke="#000" strokeWidth="1.5"/>
          <rect x="46" y="100" width="78" height="12" fill="#fff" stroke="#000" strokeWidth="1.5"/>
          {/* arrow */}
          <line x1="148" y1="87" x2="168" y2="87" stroke="#000" strokeWidth="2.5" strokeLinecap="square"/>
          <polyline points="162,81 168,87 162,93" stroke="#000" strokeWidth="2.5" strokeLinecap="square" fill="none"/>
          {/* HTML tree */}
          <rect x="176" y="20" width="112" height="134" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <text x="184" y="36" fontSize="10" fill="#000" fontFamily="monospace" fontWeight="700">&lt;body&gt;</text>
          <text x="196" y="54" fontSize="10" fill="#00A8F8" fontFamily="monospace">&lt;header&gt;</text>
          <text x="208" y="70" fontSize="10" fill="#6B6355" fontFamily="monospace">&lt;h1&gt;</text>
          <text x="208" y="86" fontSize="10" fill="#6B6355" fontFamily="monospace">&lt;nav&gt;</text>
          <text x="196" y="104" fontSize="10" fill="#00A8F8" fontFamily="monospace">&lt;main&gt;</text>
          <text x="196" y="120" fontSize="10" fill="#6B6355" fontFamily="monospace">&lt;/main&gt;</text>
          <text x="184" y="140" fontSize="10" fill="#000" fontFamily="monospace" fontWeight="700">&lt;/body&gt;</text>
        </svg>
      ),
    },
    {
      label: "CSS · 01",
      title: "CSS 属性清单",
      copy: "字号、颜色、间距、方向——四类属性覆盖 80% 的日常样式需求。",
      href: "lesson-css.html",
      preview: (
        <svg viewBox="0 0 318 174" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="30" y="24" width="258" height="126" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          {/* color swatch row */}
          <rect x="42" y="36" width="22" height="22" fill="#FFDC58" stroke="#000" strokeWidth="2"/>
          <rect x="70" y="36" width="22" height="22" fill="#00A8F8" stroke="#000" strokeWidth="2"/>
          <rect x="98" y="36" width="22" height="22" fill="#D030A8" stroke="#000" strokeWidth="2"/>
          <rect x="126" y="36" width="22" height="22" fill="#00C870" stroke="#000" strokeWidth="2"/>
          <rect x="154" y="36" width="22" height="22" fill="#A088D0" stroke="#000" strokeWidth="2"/>
          {/* font size bars */}
          <rect x="42" y="72" width="200" height="10" fill="#000"/>
          <rect x="42" y="88" width="150" height="8" fill="#000"/>
          <rect x="42" y="102" width="100" height="6" fill="#6B6355"/>
          <rect x="42" y="114" width="70" height="5" fill="#6B6355"/>
          {/* spacing indicator */}
          <rect x="220" y="72" width="4" height="52" fill="#FFDC58" stroke="#000" strokeWidth="1.5"/>
          <rect x="228" y="72" width="40" height="52" fill="none" stroke="#D030A8" strokeWidth="2" strokeDasharray="4 3"/>
          <rect x="232" y="80" width="32" height="36" fill="#fff" stroke="#000" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      label: "CSS · 02",
      title: "CSS vs Figma",
      copy: "属性面板就是 CSS，Figma 的 Inspector 和写样式说的是同一件事。",
      href: "lesson-css-2.html",
      preview: (
        <svg viewBox="0 0 318 174" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Figma inspector panel */}
          <rect x="20" y="20" width="100" height="134" fill="#1E1E1B" stroke="#000" strokeWidth="2"/>
          <rect x="28" y="30" width="84" height="8" fill="#6B6355"/>
          <rect x="28" y="44" width="30" height="6" fill="#FFDC58"/>
          <rect x="64" y="44" width="40" height="6" fill="#6B6355"/>
          <rect x="28" y="56" width="30" height="6" fill="#FFDC58"/>
          <rect x="64" y="56" width="50" height="6" fill="#6B6355"/>
          <rect x="28" y="68" width="30" height="6" fill="#FFDC58"/>
          <rect x="64" y="68" width="35" height="6" fill="#6B6355"/>
          <rect x="28" y="80" width="30" height="6" fill="#FFDC58"/>
          <rect x="64" y="80" width="45" height="6" fill="#6B6355"/>
          {/* equals arrow */}
          <text x="132" y="95" fontSize="28" fill="#000" fontWeight="900">=</text>
          {/* CSS code */}
          <rect x="162" y="20" width="136" height="134" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <text x="170" y="38" fontSize="9" fill="#00A8F8" fontFamily="monospace">.card {"{"}</text>
          <text x="178" y="54" fontSize="9" fill="#000" fontFamily="monospace">font-size: 16px;</text>
          <text x="178" y="68" fontSize="9" fill="#000" fontFamily="monospace">color: #000;</text>
          <text x="178" y="82" fontSize="9" fill="#000" fontFamily="monospace">padding: 24px;</text>
          <text x="178" y="96" fontSize="9" fill="#000" fontFamily="monospace">gap: 12px;</text>
          <text x="170" y="112" fontSize="9" fill="#00A8F8" fontFamily="monospace">{"}"}</text>
        </svg>
      ),
    },
    {
      label: "JavaScript",
      title: "JavaScript：负责交互。",
      copy: "点击、输入、提交——状态变化就是事件驱动，先认识这个循环。",
      href: "lesson-js.html",
      preview: (
        <svg viewBox="0 0 318 174" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* button */}
          <rect x="109" y="22" width="100" height="36" fill="#FFDC58" stroke="#000" strokeWidth="3"/>
          <rect x="127" y="33" width="64" height="9" fill="#000"/>
          {/* arrow down */}
          <line x1="159" y1="60" x2="159" y2="84" stroke="#000" strokeWidth="2.5" strokeLinecap="square"/>
          <polyline points="152,78 159,85 166,78" stroke="#000" strokeWidth="2.5" strokeLinecap="square" fill="none"/>
          {/* event label */}
          <rect x="104" y="88" width="110" height="22" fill="#000"/>
          <rect x="100" y="84" width="110" height="22" fill="#D030A8" stroke="#000" strokeWidth="2"/>
          <text x="114" y="99" fontSize="10" fill="#fff" fontFamily="monospace" fontWeight="700">onClick event</text>
          {/* arrow down */}
          <line x1="159" y1="108" x2="159" y2="126" stroke="#000" strokeWidth="2.5" strokeLinecap="square"/>
          <polyline points="152,120 159,127 166,120" stroke="#000" strokeWidth="2.5" strokeLinecap="square" fill="none"/>
          {/* state change */}
          <rect x="89" y="130" width="140" height="26" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <rect x="97" y="137" width="60" height="6" fill="#000"/>
          <rect x="163" y="137" width="4" height="6" fill="#FFDC58"/>
          <rect x="171" y="137" width="50" height="6" fill="#00C870"/>
        </svg>
      ),
    },
    {
      label: "组件",
      title: "组件：负责复用。",
      copy: "一段 UI 写一次，到处使用——理解 props 和 children，组件就清楚了。",
      href: "lesson-react.html",
      preview: (
        <svg viewBox="0 0 318 174" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* master component */}
          <rect x="109" y="14" width="100" height="50" fill="#00C870" stroke="#000" strokeWidth="3"/>
          <rect x="121" y="24" width="40" height="7" fill="#000"/>
          <rect x="121" y="36" width="60" height="5" fill="#000" opacity="0.4"/>
          <rect x="121" y="46" width="50" height="5" fill="#000" opacity="0.4"/>
          {/* line to instances */}
          <line x1="100" y1="64" x2="70" y2="96" stroke="#000" strokeWidth="2" strokeLinecap="square"/>
          <line x1="159" y1="64" x2="159" y2="96" stroke="#000" strokeWidth="2" strokeLinecap="square"/>
          <line x1="218" y1="64" x2="248" y2="96" stroke="#000" strokeWidth="2" strokeLinecap="square"/>
          {/* instances */}
          {[40, 119, 198].map((x, i) => (
            <g key={i}>
              <rect x={x} y={98} width={80} height={44} fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
              <rect x={x+10} y={108} width={40} height={6} fill="#000"/>
              <rect x={x+10} y={120} width={60} height={4} fill="#6B6355"/>
              <rect x={x+10} y={128} width={50} height={4} fill="#6B6355"/>
            </g>
          ))}
        </svg>
      ),
    },
    {
      label: "布局 · 01",
      title: "布局第一课",
      copy: "Flex 和 Grid 是两把尺子，搞懂主轴方向，排列就不再靠猜。",
      href: "lesson-layout.html",
      preview: (
        <svg viewBox="0 0 318 174" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* flex row demo */}
          <rect x="20" y="22" width="278" height="56" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <rect x="28" y="30" width="60" height="40" fill="#A088D0" stroke="#000" strokeWidth="2"/>
          <rect x="96" y="30" width="60" height="40" fill="#A088D0" stroke="#000" strokeWidth="2"/>
          <rect x="164" y="30" width="60" height="40" fill="#A088D0" stroke="#000" strokeWidth="2"/>
          <rect x="232" y="30" width="58" height="40" fill="#000" stroke="#000" strokeWidth="2"/>
          {/* grid demo */}
          <rect x="20" y="96" width="134" height="60" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <rect x="26" y="102" width="56" height="22" fill="#FFDC58" stroke="#000" strokeWidth="2"/>
          <rect x="88" y="102" width="60" height="22" fill="#FFDC58" stroke="#000" strokeWidth="2"/>
          <rect x="26" y="128" width="122" height="22" fill="#000" stroke="#000" strokeWidth="2"/>
          <rect x="162" y="96" width="136" height="60" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <rect x="168" y="102" width="38" height="52" fill="#00C870" stroke="#000" strokeWidth="2"/>
          <rect x="212" y="102" width="80" height="22" fill="#fff" stroke="#000" strokeWidth="2"/>
          <rect x="212" y="130" width="80" height="22" fill="#fff" stroke="#000" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      label: "布局 · 02",
      title: "布局第二课",
      copy: "常见页面骨架拆解：顶栏、侧边栏、内容区的排列逻辑。",
      href: "lesson-layout-2.html",
      preview: (
        <svg viewBox="0 0 318 174" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* full page skeleton */}
          <rect x="30" y="14" width="258" height="24" fill="#1E1E1B" stroke="#000" strokeWidth="2"/>
          <rect x="38" y="20" width="50" height="12" fill="#FFDC58"/>
          <rect x="200" y="20" width="80" height="12" fill="#6B6355" opacity="0.5"/>
          {/* sidebar + main */}
          <rect x="30" y="44" width="60" height="102" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <rect x="36" y="54" width="48" height="8" fill="#A088D0"/>
          <rect x="36" y="68" width="48" height="6" fill="#6B6355"/>
          <rect x="36" y="80" width="48" height="6" fill="#6B6355"/>
          <rect x="36" y="92" width="48" height="6" fill="#6B6355"/>
          <rect x="36" y="104" width="48" height="6" fill="#6B6355"/>
          <rect x="96" y="44" width="192" height="48" fill="#fff" stroke="#000" strokeWidth="2"/>
          <rect x="104" y="54" width="80" height="10" fill="#000"/>
          <rect x="104" y="70" width="170" height="6" fill="#6B6355"/>
          <rect x="96" y="98" width="92" height="48" fill="#FFDC58" stroke="#000" strokeWidth="2"/>
          <rect x="104" y="108" width="60" height="8" fill="#000"/>
          <rect x="104" y="122" width="76" height="6" fill="#000" opacity="0.4"/>
          <rect x="194" y="98" width="94" height="48" fill="#EFE7D6" stroke="#000" strokeWidth="2"/>
          <rect x="202" y="108" width="60" height="8" fill="#000"/>
          <rect x="202" y="122" width="78" height="6" fill="#6B6355"/>
        </svg>
      ),
    },
  ],
};
