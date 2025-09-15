import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

type Project = {
  id: string;
  name: string;
  description?: string;
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Error cargando proyectos:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Proyectos</h2>
      {projects.length === 0 ? (
        <p>No hay proyectos aún.</p>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p.id} className="border p-2 mb-2 rounded">
              <Link to={`/projects/${p.id}`} className="text-blue-600">
                {p.name}
              </Link>
              {p.description && (
                <p className="text-gray-600 text-sm">{p.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
