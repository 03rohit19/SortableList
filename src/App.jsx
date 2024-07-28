import { act, useState } from "react";
import "./App.css";
import Tasks from "./components/Task/Tasks";

//We use DndContext for the things that involve drag and drop we need Dnd tag for it
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Input from "./components/Input/Input";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "Hit the morning workout" },
    { id: 2, title: "Review pull requests" },
    { id: 3, title: "Attend daily stand-up meeting" },
    { id: 4, title: "Implement new feature" },
    { id: 5, title: "Fix bugs from the backlog" },
  ]);

  const addTodo = (title) => {
    setTodo((todo) => [...todo, { id: todo.length + 1, title }]);
  };

  const getTaskPosition = (index) =>
    todo.findIndex((task) => task.id === index);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) return;

    setTodo((todo) => {
      const originalPosition = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over.id);

      return arrayMove(todo, originalPosition, newPosition);
    });
  };

  return (
    <>
      <div className="App">
        <h1>My To-Do List 📝</h1>
        {/* // Using collisionDetection to handle drag-and-drop collisions
        effectively */}
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <Input onSubmit={addTodo} />
          <Tasks todo={todo} />
        </DndContext>
      </div>
    </>
  );
}

export default App;
