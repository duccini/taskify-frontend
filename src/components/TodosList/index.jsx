import { FaFilter } from "react-icons/fa";

import clipboard from "../../assets/clipboard.svg";
import styles from "./styles.module.css";
import { TodoItem } from "../TodoItem";

export function TodosList({
  todos,
  showTodos,
  toggleChecked,
  deleteTodoItem,
  showAllTodos,
  showInProgressTodos,
  showDoneTodos,
}) {
  let finishedTodos = 0;
  let inProgressTodos = 0;

  function sumFinishedTodos(todos) {
    const finishedTodosArray = todos.filter((todo) => {
      return todo.status === "DONE";
    });
    finishedTodos = finishedTodosArray.length;
    return finishedTodos;
  }

  function sumInProgressTodos(todos) {
    const inProgressTodosArray = todos.filter((todo) => {
      return todo.status === "IN_PROGRESS";
    });
    inProgressTodos = inProgressTodosArray.length;
    return inProgressTodos;
  }

  return (
    <div className={styles.todosListContainer}>
      <header>
        <div className={styles.allTodos}>
          <h2 onClick={() => showAllTodos()}>
            <span>
              <FaFilter />
            </span>
            Todos
          </h2>
          <div className={styles.counter}>{todos.length}</div>
        </div>

        <div className={styles.inProgressTodos}>
          <h2 onClick={() => showInProgressTodos()}>
            <span>
              <FaFilter />
            </span>
            Pendente
          </h2>
          <div className={styles.counter}>{sumInProgressTodos(todos)}</div>
        </div>

        <div className={styles.fineshedTodos}>
          <h2 onClick={() => showDoneTodos()}>
            <span>
              <FaFilter />
            </span>
            Concluídos
          </h2>
          <div className={styles.counter}>{sumFinishedTodos(todos)}</div>
        </div>
      </header>

      <main>
        {showTodos?.length >= 1 ? (
          <div className={styles.showTodos}>
            {showTodos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  status={todo.status}
                  toggleChecked={toggleChecked}
                  deleteTodoItem={deleteTodoItem}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.hideTodos}>
            <img src={clipboard} alt="Você não tem ToDoList" />
            {todos.length > 0 ? (
              <p>Você não têm TODOs desse tipo.</p>
            ) : (
              <p>Você não criou nenhum TODO ainda.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
