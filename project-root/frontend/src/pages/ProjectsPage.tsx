import { useState } from "react";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

export function ProjectsPage() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1 className="text-2xl mb-4">Gestión de Proyectos</h1>
      <ProjectForm onCreated={() => setRefresh(!refresh)} />
      {/* ProjectList se vuelve a renderizar gracias a la key */}
      <ProjectList key={refresh.toString()} />
    </div>
  );
}
