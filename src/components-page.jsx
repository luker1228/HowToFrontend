import React from "react";
import { CopyButton, PageFrame } from "./site-components.jsx";

const components = [
  ["Card", "Card 卡片", "像接口返回的一条资源摘要，用来展示对象的核心信息。", "请生成一个用户信息卡片，包含头像、用户名、角色、状态标签和操作按钮。卡片需要有边框、圆角和 hover 效果。"],
  ["Button", "Button 按钮", "像一个可触发动作的 RPC 入口，要区分主按钮、次按钮、危险按钮。", "请生成主按钮和次按钮两种样式，并包含默认、hover、disabled 三个状态。"],
  ["Form", "Form 表单", "像收集请求参数的结构体，负责承载输入、校验和提交。", "请生成一个用户创建表单，包含名称、角色、邮箱和提交按钮，并在校验失败时显示错误信息。"],
  ["Input", "Input 输入框", "像可编辑字段，常常伴随 placeholder、错误态、帮助文本和焦点态。", "请生成一个带 label、placeholder、错误提示和帮助文案的输入框组件。"],
  ["Modal", "Modal 弹窗", "像临时阻断当前流程的确认层，适合删除确认、审批确认、关键设置。", "点击删除按钮后弹出一个确认 Modal，包含标题、说明文案、取消按钮和确认按钮。"],
  ["Drawer", "Drawer 抽屉", "像不跳转页面就展开详情接口，适合查看用户详情、配置表单、日志。", "点击表格中的“查看详情”按钮后，从右侧打开一个 Drawer，展示当前用户的详细信息。"],
  ["Navbar", "Navbar 导航栏", "像系统的全局入口，类似 API 网关暴露的一组顶层路径。", "请生成一个顶部导航栏，左侧是 Logo，中间是菜单，右侧是搜索框和登录按钮。"],
  ["Sidebar", "Sidebar 侧边栏", "像后台应用的路由索引，帮助用户在不同模块之间切换。", "请生成一个管理后台左侧 Sidebar，包含分组标题、当前高亮态和折叠态。"],
  ["Table", "Table 表格", "像批量资源视图，适合用户、订单、日志、任务等列表数据。", "请生成一个用户列表 Table，包含头像、姓名、角色、状态、创建时间和操作列。"],
  ["States", "Loading / Empty State", "它们不是装饰，而是页面状态机的一部分。AI 提示词必须明确这些状态。", "表格加载时显示 Loading，空数据时显示 Empty State，错误时显示错误提示条。"],
].map(([label, title, copy, prompt], index) => ({ id: `component-${index + 1}`, label, title, copy, prompt }));

export function ComponentsPage() {
  return (
    <PageFrame title="组件认知页 · 后端同学的前端战术手册">
      <>
        <header className="site-header">
          <div className="container site-header-inner">
            <a className="brand-mark" href="/index.html"><span>后端前端中心</span><span className="brand-pill">组件</span></a>
            <nav className="nav-links">
              <a href="/index.html">首页</a>
              <a href="/lesson-react.html">见多识广</a>
              <a href="/prompts.html">提示词</a>
            </nav>
            <a className="button" href="/prompts.html">打开提示词库 →</a>
          </div>
        </header>
        <main className="container">
          <section className="page-hero">
            <div className="breadcrumb">手册 / 组件 / 前端组件词汇表</div>
            <h1 className="page-title">先认识组件，再学会和 AI 说前端语言。</h1>
            <p className="lede">这页不是组件文档大全，而是给后端同学的组件词汇表。每个卡片都回答五件事：它是什么、解决什么问题、后端怎么理解、常见场景、怎样描述给 AI。</p>
          </section>
          <section className="section">
            <div className="wiki-grid">
              {components.map((item) => (
                <article key={item.id} className="wiki-card">
                  <span className="micro-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="prompt-block" id={item.id}>{item.prompt}</div>
                  <CopyButton text={item.prompt} />
                </article>
              ))}
            </div>
          </section>
        </main>
      </>
    </PageFrame>
  );
}
