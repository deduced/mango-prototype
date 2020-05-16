import React from 'react';
import axios from 'axios';
import styles from './todo.module.css';

const Todo = ({ todo, reloadTodos }) => {
  const toggleCompleted = async () => {
    await axios.post('/api/toggle-completed', {
      id: todo._id,
      text: todo.text,
      completed: !todo.completed,
    });

    reloadTodos();
  };

  const handleDelete = async () => {
    await axios.post('/api/delete-todo', {
      id: todo._id,
    });

    reloadTodos();
  };

  return (
    <>
      <label className={styles.label} htmlFor={`todo-toggle-${todo._id}`}>
        Mark Complete
      </label>
      <input
        className={styles.toggle}
        id={`todo-toggle-${todo._id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <div className={todo.completed ? styles.completed : undefined}>
        {todo.text}
      </div>
      <label htmlFor={`todo-delete-${todo._id}`} className={styles.label}>
        delete
      </label>
      <button className={styles.delete} onClick={handleDelete}>
        <span aria-label="delete" role="img" title="delete this todo">
          ❌
        </span>
      </button>
    </>
  );
};

export default Todo;
