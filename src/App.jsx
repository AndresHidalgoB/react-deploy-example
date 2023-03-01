import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

export const App = () => {
  return (
    <main className="bg-zinc-700 h-screen">
      <div className="container mx-auto p-4">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};
 