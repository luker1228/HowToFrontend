import { useState } from 'react';
import { lessons } from '../data/lessons';

export default function LessonView({ lessonId, onNavigate }) {
  const activeIndex = lessons.findIndex((l) => l.id === lessonId);
  const lesson = lessons[activeIndex] || lessons[0];
  const [tab, setTab] = useState('split');
  const [editedHtml, setEditedHtml] = useState(lesson.html);
  const [editedPreview, setEditedPreview] = useState(lesson.preview);

  function handleHtmlChange(value) {
    setEditedHtml(value);
    setEditedPreview(value);
  }

  function handleReset() {
    setEditedHtml(lesson.html);
    setEditedPreview(lesson.preview);
  }

  const isModified = editedHtml !== lesson.html;
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < lessons.length - 1;

  return (
    <div className="lesson-view">
      <div className="lesson-header">
        <div className="lesson-header-meta">
          <span className="lesson-badge">HTML</span>
          <span className="lesson-counter">第 {activeIndex + 1} 节，共 {lessons.length} 节</span>
        </div>
        <h2>{lesson.title}</h2>
        <p className="lesson-desc">{lesson.description}</p>
        <div className="tab-bar">
          <button className={tab === 'split' ? 'active' : ''} onClick={() => setTab('split')}>
            对比视图
          </button>
          <button className={tab === 'preview' ? 'active' : ''} onClick={() => setTab('preview')}>
            渲染效果
          </button>
        </div>
      </div>

      {tab === 'split' ? (
        <div className="split-view">
          <CodePanel label="Markdown" lang="markdown" code={lesson.markdown} readonly />
          <div className="split-divider">
            <div className="split-divider-line" />
            <span className="split-divider-arrow">→</span>
            <div className="split-divider-line" />
          </div>
          <HtmlEditPanel
            code={editedHtml}
            onChange={handleHtmlChange}
            onReset={handleReset}
            isModified={isModified}
          />
        </div>
      ) : null}

      <div className="preview-section">
        <div className="preview-label">
          渲染效果
          {isModified && <span className="preview-live-badge">实时</span>}
        </div>
        <div
          className="preview-frame"
          dangerouslySetInnerHTML={{ __html: editedPreview }}
        />
      </div>

      <div className="lesson-nav-footer">
        <button
          className="lesson-nav-btn"
          disabled={!hasPrev}
          onClick={() => hasPrev && onNavigate(lessons[activeIndex - 1].id)}
        >
          ← {hasPrev ? lessons[activeIndex - 1].title : '上一节'}
        </button>

        <span className="lesson-nav-center">{activeIndex + 1} / {lessons.length}</span>

        <button
          className="lesson-nav-btn lesson-nav-btn--next"
          disabled={!hasNext}
          onClick={() => hasNext && onNavigate(lessons[activeIndex + 1].id)}
        >
          {hasNext ? lessons[activeIndex + 1].title : '已完成'} →
        </button>
      </div>
    </div>
  );
}

function HtmlEditPanel({ code, onChange, onReset, isModified }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="code-panel code-panel--editable">
      <div className="panel-header">
        <span className="panel-label panel-label--html">HTML <span className="editable-badge">可编辑</span></span>
        <div className="panel-actions">
          {isModified && (
            <button className="reset-btn" onClick={onReset}>重置</button>
          )}
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? '已复制!' : '复制'}
          </button>
        </div>
      </div>
      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
}

function CodePanel({ label, lang, code }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const highlighted = highlightCode(code, lang);

  return (
    <div className="code-panel">
      <div className="panel-header">
        <span className="panel-label">{label}</span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? '已复制!' : '复制'}
        </button>
      </div>
      <pre className={`code-block lang-${lang}`}>
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
}

function highlightCode(code, lang) {
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (lang === 'markdown') {
    return escaped
      .replace(/^(#{1,6} .+)$/gm, '<span class="hl-md-heading">$1</span>')
      .replace(/(\*\*[^*]+\*\*)/g, '<span class="hl-md-bold">$1</span>')
      .replace(/(\*[^*]+\*)/g, '<span class="hl-md-italic">$1</span>')
      .replace(/^([-*] .+)$/gm, '<span class="hl-md-list">$1</span>')
      .replace(/^(\d+\. .+)$/gm, '<span class="hl-md-list">$1</span>')
      .replace(/^(&gt; .+)$/gm, '<span class="hl-md-quote">$1</span>')
      .replace(/(`[^`]+`)/g, '<span class="hl-md-code">$1</span>')
      .replace(/(\[.+?\]\(.+?\))/g, '<span class="hl-md-link">$1</span>');
  }

  return escaped;
}
