import { useState } from "react";
import SingleTask from "./SingleTask";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, texto: "Clean my room", colorFondo: "#d97706", estaCompletada: false },
    { id: 2, texto: "Decluttering my study room", colorFondo: "#f59e0b", estaCompletada: false },
    { id: 3, texto: "Buy some new stationary", colorFondo: "#fb923c", estaCompletada: false },
    { id: 4, texto: "Spa pedicure and manicure", colorFondo: "#fbbf24", estaCompletada: false },
  ]);

  const toggleTask = (id) => {
    const updated = tasks.map(task =>
      task.id === id
        ? { ...task, estaCompletada: !task.estaCompletada }
        : task
    );
    setTasks(updated);
  };

  return (
    <div>
      {tasks.map(task => (
        <SingleTask
          key={task.id}
          id={task.id}
          texto={task.texto}
          colorFondo={task.colorFondo}
          estaCompletada={task.estaCompletada}
          onToggle={toggleTask}
        />
      ))}
    </div>
  );
}

export default TodoList;