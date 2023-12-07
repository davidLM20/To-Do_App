
import { TodoCounter } from '../Componets/TodoCounter/TodoCounter';
import { TodoSearch } from '../Componets/TodoSearch/TodoSearch';
import { TodoList } from '../Componets/TodoList/TodoList';
import { TodoItem } from '../Componets/TodoItem/TodoItem';
import { TodosLoading } from '../Componets/TodosLoading/TodosLoading';
import { TodosErrors } from '../Componets/TodosErrors/TodosErrors';
import { EmptyTodos } from '../Componets/EmptyTodos/EmptyTodos';
import React from 'react';

import { TodoContext } from '../TodoContext/TodoContext';

import { CreateItemButton } from '../Componets/CreateItemButtom/CreateItemButton';
import { Modal } from '../Componets/Modal/Modal';
import { TodoForm } from '../Componets/TodoForm/TodoForm';

function AppUi() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <div className='contenido'>
        <h1 >TODO-LIST</h1>
        <div className="divider"></div>
        <TodoSearch />
        <TodoCounter />
        <CreateItemButton 
          setOpenModal={setOpenModal}
        />
        {openModal && (
          <Modal setOpenModal={setOpenModal}>
              <TodoForm/>
          </Modal>
        )}

        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosErrors />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>

    </>
  );
}

export { AppUi };