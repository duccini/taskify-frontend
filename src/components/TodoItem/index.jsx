import { useState } from "react";
import { Check, Trash, Pencil } from "phosphor-react";
import styles from "./styles.module.css";

export function TodoItem({
  id,
  title,
  status,
  deleteTodoItem,
  updateTodo,
  toggleChecked,
}) {
  const [updateTitle, setUpdateTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const commonJsx = (
    <>
      <p>{title}</p>
      <div className={styles.icons}>
        <Pencil size={24} onClick={() => setUpdateTitle(true)} />
        <Trash size={24} onClick={() => deleteTodoItem(id)} />
      </div>
    </>
  );

  const updateTitleJsx = (
    <form className={styles.newTitleForm}>
      <input
        type="text"
        value={newTitle}
        placeholder="Novo título"
        onChange={(e) => setNewTitle(e.target.value)}
        className={styles.newTitleInput}
      />
      <div className={styles.newTitleButton}>
        <button
          type="button"
          className={styles.buttonConfirm}
          onClick={() => handleUpdateItemTitle(id, newTitle)}
        >
          Salvar
        </button>
        <button
          type="button"
          className={styles.buttonCancel}
          onClick={cancelUpdateItemTitle}
        >
          Cancelar
        </button>
      </div>
    </form>
  );

  function handleUpdateItemTitle(id, title) {
    updateTodo(id, title);
    setUpdateTitle(false);
  }

  function cancelUpdateItemTitle() {
    setUpdateTitle(false);
  }

  return (
    <div className={styles.todoItemContainer}>
      {updateTitle ? (
        updateTitleJsx
      ) : status === "DONE" ? (
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
