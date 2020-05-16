import React from 'react';

import styles from './todo.module.css';

const Todo = ({ todo }) => {
  return <div className={todo.completed && styles.completed}>{todo.text}</div>;
};

export default Todo;
