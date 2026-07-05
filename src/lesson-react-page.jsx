import React, { useEffect, useMemo, useState } from "react";

const tocItems = [
  { id: "atlas-why", label: "这章讲什么" },
  { id: "atlas-gallery", label: "组件长相" },
  { id: "atlas-navbar", label: "Navbar" },
  { id: "atlas-sidebar-comp", label: "Sidebar" },
  { id: "atlas-button", label: "Button" },
  { id: "atlas-input", label: "Input" },
  { id: "atlas-select", label: "Select" },
  { id: "atlas-tabs", label: "Tabs" },
  { id: "atlas-table", label: "Table" },
  { id: "atlas-modal", label: "Modal" },
  { id: "atlas-drawer", label: "Drawer" },
  { id: "atlas-pagination", label: "Pagination" },
  { id: "atlas-writing", label: "提示词怎么写" },
];

function CopyButton({ text }) {
  const [label, setLabel] = useState("Copy Prompt");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copied");
      window.setTimeout(() => setLabel("Copy Prompt"), 1200);
    } catch {
      setLabel("Copy failed");
    }
  }

  return (
    <button className="copy-button" type="button" onClick={handleCopy}>
      {label}
    </button>
  );
}

function PreviewTabs({ prompt, children }) {
  const [view, setView] = useState("preview");

  return (
    <div className="atlas-stack">
      <div className="atlas-switch" role="tablist" aria-label="组件查看方式">
        <button className={`atlas-switch-btn${view === "preview" ? " is-active" : ""}`} type="button" onClick={() => setView("preview")}>
          预览
        </button>
        <button className={`atlas-switch-btn${view === "prompt" ? " is-active" : ""}`} type="button" onClick={() => setView("prompt")}>
          提示词
        </button>
      </div>
      <div className={`atlas-view${view === "preview" ? " is-active" : ""}`}>{children}</div>
      <div className={`atlas-view${view === "prompt" ? " is-active" : ""}`}>
        <div className="atlas-prompt-row">
          <div className="atlas-prompt">{prompt}</div>
          <CopyButton text={prompt} />
        </div>
      </div>
    </div>
  );
}

function ComponentSection({ id, category, name, what, terms, uses, prompt, children }) {
  return (
    <section className="lesson-section atlas-item" id={id}>
      <span className="micro-label">{category}</span>
      <PreviewTabs prompt={prompt}>{children}</PreviewTabs>
      <h3 className="atlas-name">{name}</h3>
      <p className="atlas-copy"><strong>这是啥？</strong> {what}</p>
      <p className="atlas-copy"><strong>前端术语：</strong> {terms}</p>
      <p className="atlas-copy"><strong>常用来干嘛：</strong> {uses}</p>
      <div className="atlas-note"><strong>提示词写法：</strong> {prompt}</div>
    </section>
  );
}

function NavbarPreview() {
  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <div className="atlas-navbar-demo">
          <strong className="atlas-navbar-brand">Acme Admin</strong>
          <nav className="atlas-navbar-links" aria-label="主导航">
            <button className="atlas-tab is-active" type="button">控制台</button>
            <button className="atlas-tab" type="button">用户</button>
            <button className="atlas-tab" type="button">订单</button>
          </nav>
          <div className="atlas-navbar-actions">
            <input className="atlas-navbar-search" value="搜索..." readOnly />
            <button className="atlas-btn" type="button">登录</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarPreview() {
  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <div className="atlas-sidebar-demo">
          <strong className="atlas-sidebar-title">管理后台</strong>
          <button className="atlas-sidebar-item is-active" type="button">概览</button>
          <button className="atlas-sidebar-item" type="button">用户管理</button>
          <button className="atlas-sidebar-item" type="button">订单管理</button>
          <button className="atlas-sidebar-item" type="button">系统设置</button>
        </div>
      </div>
    </div>
  );
}

function ButtonPreview() {
  const [message, setMessage] = useState("点击一个按钮试试。");
  const messages = useMemo(
    () => ({
      save: "你点击了主按钮，通常会触发提交或保存。",
      cancel: "你点击了次按钮，通常会回退当前操作。",
      delete: "你点击了危险按钮，通常要再弹一次确认。",
    }),
    []
  );

  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <div className="atlas-button-row">
          <button className="atlas-btn atlas-btn-primary" type="button" onClick={() => setMessage(messages.save)}>保存</button>
          <button className="atlas-btn" type="button" onClick={() => setMessage(messages.cancel)}>取消</button>
          <button className="atlas-btn atlas-btn-danger" type="button" onClick={() => setMessage(messages.delete)}>删除</button>
        </div>
        <p className="atlas-feedback">{message}</p>
      </div>
    </div>
  );
}

function InputPreview() {
  const [value, setValue] = useState("zhangsan@example.com");

  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <label className="atlas-field">
          <span>用户名</span>
          <input className="atlas-input" value={value} onChange={(event) => setValue(event.target.value)} />
        </label>
        <p className="atlas-feedback">当前输入：<span>{value || "(空)"}</span></p>
      </div>
    </div>
  );
}

function SelectPreview() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("全部角色");
  const options = ["管理员", "普通用户", "访客"];

  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <div className="atlas-select-demo">
          <button className="atlas-select" type="button" onClick={() => setOpen((current) => !current)}>
            <span>{value}</span>
            <span>▾</span>
          </button>
          {open ? (
            <div className="atlas-menu">
              {options.map((option) => (
                <button
                  key={option}
                  className="atlas-menu-item"
                  type="button"
                  onClick={() => {
                    setValue(option);
                    setOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function TabsPreview() {
  const [value, setValue] = useState("全部");
  const options = ["全部", "已发布", "草稿"];

  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <div className="atlas-tabs">
          {options.map((option) => (
            <button
              key={option}
              className={`atlas-tab${value === option ? " is-active" : ""}`}
              type="button"
              onClick={() => setValue(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="atlas-feedback">当前面板：<span>{value}</span></p>
      </div>
    </div>
  );
}

function TablePreview() {
  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <table className="atlas-table">
          <thead>
            <tr><th>姓名</th><th>角色</th><th>状态</th></tr>
          </thead>
          <tbody>
            <tr><td>张三</td><td>管理员</td><td>启用</td></tr>
            <tr><td>李四</td><td>访客</td><td>禁用</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ModalPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="atlas-demo">
      <div className="atlas-surface atlas-overlay-demo">
        <button className="atlas-btn atlas-btn-primary" type="button" onClick={() => setOpen(true)}>打开确认框</button>
        {open ? (
          <div className="atlas-modal">
            <strong>确认删除？</strong>
            <p>删除后不可恢复。</p>
            <div className="atlas-button-row">
              <button className="atlas-btn" type="button" onClick={() => setOpen(false)}>取消</button>
              <button className="atlas-btn atlas-btn-danger" type="button" onClick={() => setOpen(false)}>确认</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DrawerPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="atlas-demo">
      <div className="atlas-surface atlas-overlay-demo">
        <button className="atlas-btn atlas-btn-primary" type="button" onClick={() => setOpen(true)}>打开详情</button>
        {open ? (
          <div className="atlas-drawer">
            <strong>用户详情</strong>
            <p>手机号、角色、最后登录时间</p>
            <div className="atlas-line"></div>
            <div className="atlas-line short"></div>
            <button className="atlas-btn" type="button" onClick={() => setOpen(false)}>关闭</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PaginationPreview() {
  const [page, setPage] = useState(1);
  const pages = [1, 2, 3];

  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <div className="atlas-pagination">
          <button className="atlas-page" type="button" onClick={() => setPage((current) => Math.max(1, current - 1))}>‹</button>
          {pages.map((item) => (
            <button
              key={item}
              className={`atlas-page${page === item ? " is-active" : ""}`}
              type="button"
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          ))}
          <button className="atlas-page" type="button" onClick={() => setPage((current) => Math.min(pages.length, current + 1))}>›</button>
        </div>
        <p className="atlas-feedback">当前页：<span>{page}</span></p>
      </div>
    </div>
  );
}

function Toc({ activeId }) {
  return (
    <aside className="lesson-aside">
      <span className="micro-label">章节目录</span>
      <ul className="toc-list">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={activeId === item.id ? "is-active" : ""}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function LessonReactApp() {
  const [activeId, setActiveId] = useState(tocItems[0].id);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".lesson-prose .lesson-section[id]"));
    if (!sections.length) return undefined;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = tocItems[0].id;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        setActiveId(bestId);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="lesson-shell site-header-inner">
          <a className="brand-mark" href="/index.html"><span>后端前端中心</span><span className="brand-pill">指南</span></a>
          <nav className="nav-links">
            <a href="/lesson-js.html">JavaScript</a>
            <a href="/components.html">组件</a>
            <a href="/prompts.html">提示词</a>
          </nav>
          <a className="button" href="/components.html">下一页：组件词典 →</a>
        </div>
      </header>
      <main className="lesson-shell">
        <section className="page-hero">
          <nav className="breadcrumb">
            <a href="/index.html">首页</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/lesson-html.html">HTML 课</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/lesson-css.html">CSS 课</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/lesson-js.html">JavaScript 课</a>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">见多识广</span>
          </nav>
          <h1 className="page-title">见多识广：先认组件，再会写提示词。</h1>
          <p className="lede">这章不讲框架，也不讲实现细节。目标只有一个：让后端程序员看到一个界面块时，知道它叫什么、常用来干嘛、写提示词时该怎么叫它。</p>
          <div className="meta-row">
            <span className="meta-chip">分类：组件认知</span>
            <span className="meta-chip">难度：Beginner</span>
            <span className="meta-chip">预计阅读：10 min</span>
            <span className="meta-chip">产物：组件词汇表</span>
          </div>
        </section>

        <section className="lesson-layout">
          <article className="lesson-prose">
            <section className="lesson-section" id="atlas-why">
              <h2>这章讲什么</h2>
              <p>很多后端同学不是不会提需求，而是不知道前端那个东西叫什么。你说“右边滑出来那层”，前端叫 <code>Drawer</code>；你说“中间弹出来确认那层”，前端叫 <code>Modal</code>；你说“上面能切换几个页签”，前端叫 <code>Tabs</code>。把这些词补上，提示词质量会立刻提高。</p>
            </section>

            <section className="lesson-section" id="atlas-gallery">
              <h2>组件长相</h2>
              <p>这一页的读法很简单：先看长相，再记名字，最后记住它一般在什么场景下出现。你以后写提示词，直接用这些词。</p>
            </section>

            <ComponentSection
              id="atlas-navbar"
              category="Navigation"
              name="Navbar"
              what="顶部导航栏。通常横着放在页面最上面。"
              terms="顶部导航、主导航、品牌区、右侧操作区。"
              uses="放 Logo、一级菜单、搜索、登录入口、头像菜单。"
              prompt="页面顶部放一个 Navbar，左侧是 Logo，中间是导航，右侧是搜索和用户头像。"
            >
              <NavbarPreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-sidebar-comp"
              category="Navigation"
              name="Sidebar"
              what="侧边栏。通常竖着放在页面左边，用来切换主功能区。"
              terms="侧边导航、菜单组、当前高亮项、折叠态。"
              uses="管理后台导航、工作台入口、系统菜单切换。"
              prompt="左侧放一个 Sidebar，支持当前菜单高亮，适合后台系统。"
            >
              <SidebarPreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-button"
              category="Action"
              name="Button"
              what="按钮。页面里最常见的动作触发器。"
              terms="主按钮、次按钮、危险按钮。"
              uses="提交表单、保存修改、删除数据、打开弹窗。"
              prompt="右上角放一个主按钮“新建用户”，旁边放次按钮“导出”。"
            >
              <ButtonPreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-input"
              category="Input"
              name="Input"
              what="输入框。用户往里面填文字。"
              terms="输入框、占位文案、错误态、禁用态。"
              uses="搜索、录入名称、输入邮箱、填写参数。"
              prompt="顶部放一个搜索输入框，placeholder 是“搜索用户名 / 手机号”。"
            >
              <InputPreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-select"
              category="Select"
              name="Select"
              what="选择器。点一下展开选项，再选一个值。"
              terms="下拉选择器、单选、多选、默认项。"
              uses="筛选角色、切换状态、选时间范围、选部门。"
              prompt="表格上方放一个角色 Select，可选“全部 / 管理员 / 普通用户 / 访客”。"
            >
              <SelectPreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-tabs"
              category="Navigation"
              name="Tabs"
              what="标签页。几块内容之间的平级切换。"
              terms="标签页、当前激活项、切换面板。"
              uses="切换分类、切换状态、切换不同内容视图。"
              prompt="列表上方加 Tabs，支持“全部 / 进行中 / 已完成”切换。"
            >
              <TabsPreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-table"
              category="Data"
              name="Table"
              what="表格。后台系统里最常见的数据展示方式。"
              terms="列、行、操作列、表头、分页、筛选。"
              uses="用户列表、订单列表、任务列表、日志列表。"
              prompt="主内容区放一个用户 Table，列有姓名、角色、状态、创建时间、操作。"
            >
              <TablePreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-modal"
              category="Feedback"
              name="Modal"
              what="弹窗。内容浮在页面中间，通常要先处理它。"
              terms="弹窗、确认框、遮罩层、关闭按钮。"
              uses="删除确认、二次确认、关键设置、补充说明。"
              prompt="点击删除按钮后弹出确认 Modal，包含标题、说明、取消和确认按钮。"
            >
              <ModalPreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-drawer"
              category="Overlay"
              name="Drawer"
              what="抽屉。从侧边滑出来的一层，常见于右侧。"
              terms="右侧抽屉、侧滑层、详情面板。"
              uses="看详情、改资料、补表单，不想跳页面时很常见。"
              prompt="点击表格行后，从右侧打开一个 Drawer 展示用户详情。"
            >
              <DrawerPreview />
            </ComponentSection>

            <ComponentSection
              id="atlas-pagination"
              category="Paging"
              name="Pagination"
              what="分页器。数据太多时，用它切到下一页。"
              terms="分页器、当前页、上一页、下一页、总条数。"
              uses="表格翻页、文章列表翻页、搜索结果翻页。"
              prompt="表格底部加 Pagination，显示当前页、总条数和上一页下一页。"
            >
              <PaginationPreview />
            </ComponentSection>

            <section className="lesson-section" id="atlas-writing">
              <h2>提示词怎么写</h2>
              <div className="callout-card">
                <strong>错误写法：</strong>
                <p>右边出来一个东西，中间弹一个框，上面再放几个切换按钮。</p>
              </div>
              <div className="callout-card analogy">
                <strong>更好的写法：</strong>
                <p>右侧打开一个 <code>Drawer</code> 展示详情；删除时弹出 <code>Modal</code> 确认；列表上方放 <code>Tabs</code> 切换状态；主内容区用 <code>Table</code> 展示数据，底部带 <code>Pagination</code>。</p>
              </div>
              <p>当你能把这些词写出来，AI 生成页面的命中率会高很多，因为你和它说的是前端常用词，而不是模糊描述。</p>
            </section>
          </article>

          <Toc activeId={activeId} />
        </section>
      </main>
    </>
  );
}
