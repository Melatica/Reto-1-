import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';

type Task = { id: string; title: string; status: string };

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api.get(`/tasks/project/${id}`).then((res) => setTasks(res.data));
  }, [id]);

  return (
    <div>
      <h2 className="text-xl mb-2">Tareas</h2>
      <ul>
        {tasks.map((t) => (
          <li key={t.id} className="border p-2 mb-2 rounded">
            {t.title} — {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
