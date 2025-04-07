import { Check, Trash } from "phosphor-react";
import styles from "./styles.module.css";

export function TodoItem({ id, text, status, deleteTodoItem, toggleChecked }) {
  const commonJsx = (
    <>
      <p>{text}</p>
      <Trash size={24} onClick={() => deleteTodoItem(id)} />
    </>
  );

  return (
    <div className={styles.todoItemContainer}>
      {status === "DONE" ? (
        <div className={`${styles.todoItem} ${styles.todoDone}`}>
          <div
            className={`${styles.radioItem} ${styles.radioItemChecked}`}
            onClick={() => toggleChecked(id)}
          >
            <Check size={20} weight="bold" />
          </div>
          {commonJsx}
        </div>
      ) : (
        <div className={`${styles.todoItem} ${styles.undoneTodo}`}>
          <div
            className={`${styles.radioItem} ${styles.radioItemUnchecked}`}
            onClick={() => toggleChecked(id)}
          ></div>
          {commonJsx}
        </div>
      )}
    </div>
  );
}
