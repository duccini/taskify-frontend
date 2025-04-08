import { PlusCircle } from "phosphor-react";

import { v4 as uuidv4 } from "uuid";

import styles from "./styles.module.css";
import { useState } from "react";

export function TodoInput({ onCreateTodo }) {
  const [todo, setTodo] = useState("");

  function handleCreateTodoItem(e) {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title: todo,
      status: "IN_PROGRESS",
    };
    onCreateTodo(newTodo);
    setTodo("");
  }

  return (
    <div className={styles.todoInputContainer}>
      <div>
        <form className={styles.todoInput} onSubmit={handleCreateTodoItem}>
          <input
            type="text"
            value={todo}
            placeholder="Criar uma nova tarefa"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>
            <PlusCircle size={24} />
            CRIAR
          </button>
        </form>
      </div>
    </div>
  );
}
