import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <form className="bg-slate-700 p-10 mb-4" onSubmit={handleSubmit}>
        <input className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <br />
        <textarea className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="rounded-md bg-lime-500 px-4 py-1 text-white hover:bg-lime-300 ">Guardar</button>
      </form>
    </div>
  );
};
