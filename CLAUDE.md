# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

这是一个**前端可视化教学平台**，用于教别人学习前端开发。核心理念：学习者通过网页界面直接修改 HTML、CSS 或 React 代码，实时看到渲染结果，以此理解前端技术。

目标受众是前端初学者，教学内容应循序渐进，示例简洁明了。

## Technology Stack (planned)

- **前端框架**: React（用于构建教学界面和交互式代码编辑器）
- **样式方案**: CSS / CSS Modules / Tailwind CSS
- **代码编辑**: 浏览器内代码编辑器（如 Monaco Editor / CodeMirror）
- **实时预览**: 在 iframe 或独立渲染区域中实时显示代码效果

## Repository Status

当前仓库为空，尚未有任何提交。首次开发时需要：

1. 使用 Vite 或 Create React App 初始化 React 项目
2. 搭建基础的代码编辑 + 实时预览布局
3. 设计教学内容的组织结构（按主题分类：HTML 基础 → CSS 布局 → React 组件等）

## Architecture Direction

每个教学模块应采用统一的结构：

- **教学内容区**: 知识点说明 + 目标效果展示
- **代码编辑区**: 学习者可直接修改的代码编辑器
- **实时预览区**: 渲染当前代码的视觉效果
- **对比/提示**: 预期效果对比或提示信息

教学内容可以是静态的 Markdown 文件或结构化的 JSON/YAML 配置，便于非开发者添加新课程。
