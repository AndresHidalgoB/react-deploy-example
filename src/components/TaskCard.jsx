import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md" key={task.id}>
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-orange-800 px-2 py-1 rounded-md mt-4 hover:bg-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Delete Task
      </button>
    </div>
  );
};
