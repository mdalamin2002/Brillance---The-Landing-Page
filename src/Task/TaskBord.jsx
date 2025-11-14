import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function TaskBord() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddTask(newTask) {
    console.log("adding", newTask);

    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && <AddTaskModal onSave={handleAddTask} />}
        <div className="container">
          {/* Search Box  */}
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          {/* Search Box Ends  */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddClick={() => setShowAddModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
