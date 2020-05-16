import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Todo from './todo';
import Form from './form';

const StyledLi = styled.li`
  display: flex;
  align-items: center;
`;

const Todos = () => {
  const [status, setStatus] = useState('loading');
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    let canceled = false;

    if (status !== 'loading') return;

    axios('/api/get-all-todos').then(result => {
      if (canceled === true) return;

      if (result.status !== 200) {
        console.error('Error loading todos!');
        console.error(result);
        setStatus('error');
        return;
      }

      setTodos(result.data.todos);
      setStatus('loaded');
    });

    return () => {
      canceled = true;
    };
  }, [status]);

  const reloadTodos = () => setStatus('loading');

  return (
    <>
      <h2>Your Todos</h2>
      <Form reloadTodos={reloadTodos} />
      <div>
        {todos ? (
          <ul>
            {todos.map(todo => (
              <StyledLi key={todo._id}>
                <Todo todo={todo} reloadTodos={reloadTodos} />
              </StyledLi>
            ))}
          </ul>
        ) : (
          <p>Loading todos...</p>
        )}
      </div>
    </>
  );
};

export default Todos;
