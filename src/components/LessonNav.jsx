import { lessons } from '../data/lessons';

export default function LessonNav({ activeId, onSelect, onHome }) {
  const activeIndex = lessons.findIndex((l) => l.id === activeId);
  const progress = ((activeIndex + 1) / lessons.length) * 100;

  return (
    <nav className="lesson-nav">
      <button className="nav-back" onClick={onHome}>← 返回首页</button>

      <div className="nav-identity">
        <div className="nav-title">HTML 教学</div>
        <div className="nav-subtitle">通过 Markdown 类比学习</div>
      </div>

      <div className="nav-progress-bar-wrap">
        <div className="nav-progress-track">
          <div className="nav-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="nav-progress-label">{activeIndex + 1} / {lessons.length} 节</div>
      </div>

      <hr className="nav-divider" />

      <div className="nav-list-scroll">
        <ul>
          {lessons.map((lesson, i) => (
            <li
              key={lesson.id}
              className={activeId === lesson.id ? 'active' : ''}
              onClick={() => onSelect(lesson.id)}
            >
              <span className="lesson-num">{i + 1}</span>
              {lesson.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
