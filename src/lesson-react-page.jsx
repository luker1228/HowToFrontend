import React, { useEffect, useMemo, useState } from "react";
import { ConfigProvider, Layout, Menu, Button, Input, Select, Tabs, Table, Modal, Drawer, Pagination, Space, Tag, Avatar } from "antd";
import { UserOutlined, ShoppingCartOutlined, SearchOutlined, DashboardOutlined, TeamOutlined, SettingOutlined } from "@ant-design/icons";
import { SiteNav, StepNav, withBase } from "./site-components.jsx";

const { Header, Sider, Content } = Layout;

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
        <Layout style={{ minHeight: 64, borderRadius: 12, overflow: "hidden" }}>
          <Header style={{ display: "flex", alignItems: "center", gap: 24, padding: "0 24px", background: "#fff", borderBottom: "1px solid #eee" }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#ef7627" }}>Acme Admin</div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["dashboard"]}
              style={{ flex: 1, minWidth: 0, borderBottom: "none", background: "transparent" }}
              items={[
                { key: "dashboard", icon: <DashboardOutlined />, label: "控制台" },
                { key: "users", icon: <UserOutlined />, label: "用户" },
                { key: "orders", icon: <ShoppingCartOutlined />, label: "订单" },
              ]}
            />
            <Input prefix={<SearchOutlined />} placeholder="搜索..." style={{ width: 180 }} />
            <Button type="primary">登录</Button>
          </Header>
        </Layout>
      </div>
    </div>
  );
}

function SidebarPreview() {
  return (
    <div className="atlas-demo">
      <div className="atlas-surface">
        <Layout style={{ minHeight: 280, borderRadius: 12, overflow: "hidden", background: "#fff" }}>
          <Sider width={200} style={{ background: "#fff", borderRight: "1px solid #eee" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["overview"]}
              style={{ borderRight: "none", paddingTop: 12 }}
              items={[
                { key: "overview", icon: <DashboardOutlined />, label: "概览" },
                { key: "users", icon: <TeamOutlined />, label: "用户管理" },
                { key: "orders", icon: <ShoppingCartOutlined />, label: "订单管理" },
                { key: "settings", icon: <SettingOutlined />, label: "系统设置" },
              ]}
            />
          </Sider>
          <Content style={{ padding: 24, color: "#999", background: "#fafafa" }}>主内容区</Content>
        </Layout>
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
      <Space wrap>
        <Button type="primary" onClick={() => setMessage(messages.save)}>保存</Button>
        <Button onClick={() => setMessage(messages.cancel)}>取消</Button>
        <Button danger onClick={() => setMessage(messages.delete)}>删除</Button>
      </Space>
      <p className="atlas-feedback">{message}</p>
    </div>
  );
}

function InputPreview() {
  const [value, setValue] = useState("zhangsan@example.com");

  return (
    <div className="atlas-demo">
      <div style={{ maxWidth: 320 }}>
        <label style={{ display: "block", marginBottom: 6, fontSize: 13, color: "#666" }}>用户名</label>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <p className="atlas-feedback">当前输入：<span>{value || "(空)"}</span></p>
      </div>
    </div>
  );
}

function SelectPreview() {
  const [value, setValue] = useState("all");

  return (
    <div className="atlas-demo">
      <div style={{ width: 200 }}>
        <Select
          value={value}
          onChange={setValue}
          style={{ width: "100%" }}
          options={[
            { value: "all", label: "全部角色" },
            { value: "admin", label: "管理员" },
            { value: "user", label: "普通用户" },
            { value: "guest", label: "访客" },
          ]}
        />
        <p className="atlas-feedback">当前选择：<span>{value}</span></p>
      </div>
    </div>
  );
}

function TabsPreview() {
  const [value, setValue] = useState("all");

  return (
    <div className="atlas-demo">
      <Tabs
        activeKey={value}
        onChange={setValue}
        items={[
          { key: "all", label: "全部" },
          { key: "published", label: "已发布" },
          { key: "draft", label: "草稿" },
        ]}
      />
      <p className="atlas-feedback">当前面板：<span>{value}</span></p>
    </div>
  );
}

function TablePreview() {
  const columns = [
    { title: "姓名", dataIndex: "name", key: "name", render: (t, r) => <Space><Avatar size="small" style={{ backgroundColor: "#ef7627" }}>{t[0]}</Avatar>{t}</Space> },
    { title: "角色", dataIndex: "role", key: "role", render: (r) => <Tag color={r === "管理员" ? "orange" : "default"}>{r}</Tag> },
    { title: "状态", dataIndex: "status", key: "status", render: (s) => <Tag color={s === "启用" ? "green" : "red"}>{s}</Tag> },
    { title: "操作", key: "action", render: () => <a>查看</a> },
  ];
  const data = [
    { key: "1", name: "张三", role: "管理员", status: "启用" },
    { key: "2", name: "李四", role: "访客", status: "禁用" },
    { key: "3", name: "王五", role: "普通用户", status: "启用" },
  ];

  return (
    <div className="atlas-demo">
      <Table columns={columns} dataSource={data} pagination={false} size="middle" />
    </div>
  );
}

function ModalPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="atlas-demo">
      <Button type="primary" onClick={() => setOpen(true)}>打开确认框</Button>
      <Modal
        open={open}
        title="确认删除？"
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        okText="确认"
        cancelText="取消"
        okButtonProps={{ danger: true }}
      >
        <p>删除后不可恢复。</p>
      </Modal>
    </div>
  );
}

function DrawerPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="atlas-demo">
      <Button type="primary" onClick={() => setOpen(true)}>打开详情</Button>
      <Drawer
        title="用户详情"
        open={open}
        onClose={() => setOpen(false)}
        width={360}
        extra={<Button onClick={() => setOpen(false)}>关闭</Button>}
      >
        <p style={{ color: "#666", marginBottom: 12 }}>手机号、角色、最后登录时间</p>
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ height: 12, background: "#eee", borderRadius: 6 }} />
          <div style={{ height: 12, background: "#eee", borderRadius: 6, width: "70%" }} />
        </div>
      </Drawer>
    </div>
  );
}

function PaginationPreview() {
  const [page, setPage] = useState(1);

  return (
    <div className="atlas-demo">
      <Pagination current={page} pageSize={5} total={30} onChange={setPage} />
      <p className="atlas-feedback">当前页：<span>{page}</span></p>
    </div>
  );
}

function Toc({ activeId }) {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`lesson-aside lesson-floating-toc${open ? "" : " is-collapsed"}`}>
      <button type="button" className="toc-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        目录
      </button>
      <div className="toc-body">
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
      </div>
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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ef7627",
          borderRadius: 8,
          fontFamily: "inherit",
        },
      }}
    >
      <>
        <header className="site-header">
          <div className="lesson-shell site-header-inner">
            <a className="brand-mark" href={withBase("index.html")}><span>后端前端中心</span><span className="brand-pill">手册</span></a>
            <SiteNav currentPath="lesson-react.html" />
            <StepNav prev={{ href: "lesson-js.html", title: "JavaScript" }} next={{ href: "lesson-layout.html", title: "布局" }} />
          </div>
        </header>
        <main className="lesson-shell">
          <section className="page-hero">
            <h1 className="page-title html2-page-title">
              先认<span className="html2-title-em">组件</span>，<br />
              再会写提示词。
            </h1>
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
    </ConfigProvider>
  );
}
