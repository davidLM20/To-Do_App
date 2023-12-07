import React from 'react';
import './TodoCounterStyle.css';
import { TodoContext } from '../../TodoContext/TodoContext';

function TodoCounter() {
  const {
    loading,
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (loading ? (<h2>Cargando tareas</h2>) :
    completedTodos === totalTodos ? (<h2>Bien Hecho haz completado todas las tareas</h2>) :
      (<h2>Has completado {completedTodos} de {totalTodos} tareas</h2>));
}

export { TodoCounter };