import "../../styles/global.css";

import { Header } from "../Header";
import { TodoInput } from "../TodoInput";
import { TodosList } from "../TodosList";
import { useEffect, useState } from "react";

export function Home() {
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(todos);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "IN_PROGRESS") {
      const inProgressTodos = todos.filter(
        (todo) => todo.status === "IN_PROGRESS"
      );
      setShowTodos(inProgressTodos);
    } else if (filter === "DONE") {
      const finishedTodos = todos.filter((todo) => todo.status === "DONE");
      setShowTodos(finishedTodos);
    } else {
      setShowTodos(todos);
    }
  }, [filter, todos]);

  function createTodoItem(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleToggleChecked(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        return {
          id: todo.id,
          title: todo.title,
          status: todo.status === "IN_PROGRESS" ? "DONE" : "IN_PROGRESS",
        };
      }
    });
    setTodos(newTodos);
  }

  function handleDeleteTodoItem(id) {
    // e.stopPropagation()

    // console.log(todos);

    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredTodos);
  }

  function handleUpdateItemTitle(id, newTitle) {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        const newTodo = { ...todo };
        newTodo.title = newTitle;
        return newTodo;
      }
    });

    console.log(newTodos);

    setTodos(newTodos);
  }

  function showAllTodos() {
    setFilter("ALL");
  }

  function showInProgressTodos() {
    setFilter("IN_PROGRESS");
  }

  function showDoneTodos() {
    setFilter("DONE");
  }

  return (
    <div>
      <Header />
      <TodoInput onCreateTodo={createTodoItem} />
      <TodosList
        showTodos={showTodos}
        todos={todos}
        deleteTodoItem={handleDeleteTodoItem}
        updateTodo={handleUpdateItemTitle}
        toggleChecked={handleToggleChecked}
        showAllTodos={showAllTodos}
        showInProgressTodos={showInProgressTodos}
        showDoneTodos={showDoneTodos}
      />
    </div>
  );
}
