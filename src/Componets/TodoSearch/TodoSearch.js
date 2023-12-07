import React from 'react';
import './TodoSearch.css'
import { BsSearch } from "react-icons/bs";
import { TodoContext } from '../../TodoContext/TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  
  return (
    <div className='InputContainer'>
      <input className='busqueda' placeholder="Busca una tarea ..." type='search' value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <BsSearch className='searchIcon' />
    </div>
  );
}

export { TodoSearch };