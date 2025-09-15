import { useForm } from "react-hook-form";
import api from "../api/axios";

type FormData = {
  name: string;
  description?: string;
  ownerId?: string; // puedes ajustar si quieres relacionar usuario
};

export default function ProjectForm({ onCreated }: { onCreated: () => void }) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await api.post("/projects", data);
      onCreated(); // refresca lista
      reset(); // limpia formulario
    } catch (error) {
      console.error("Error creando proyecto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4 flex gap-2">
      <input
        {...register("name", { required: true })}
        placeholder="Nombre"
        className="border p-2 rounded"
      />
      <input
        {...register("description")}
        placeholder="Descripción"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Crear
      </button>
    </form>
  );
}
