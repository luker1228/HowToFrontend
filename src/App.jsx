import { useState } from 'react';
import Home from './components/Home';
import LessonNav from './components/LessonNav';
import LessonView from './components/LessonView';
import { lessons } from './data/lessons';
import './App.css';

export default function App() {
  const [course, setCourse] = useState(null); // null = home
  const [activeId, setActiveId] = useState(lessons[0].id);

  if (!course) {
    return <Home onSelect={setCourse} />;
  }

  return (
    <div className="app">
      <LessonNav
        activeId={activeId}
        onSelect={setActiveId}
        onHome={() => setCourse(null)}
      />
      <main className="main-content">
        <LessonView key={activeId} lessonId={activeId} onNavigate={setActiveId} />
      </main>
    </div>
  );
}
