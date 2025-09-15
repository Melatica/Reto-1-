import { Routes, Route, Link } from 'react-router-dom';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetail } from './pages/ProjectDetail';

function App() {
  return (
    <div className="p-4">
      <nav className="mb-4 flex gap-4">
        <Link to="/">Proyectos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
