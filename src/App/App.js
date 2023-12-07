import React from 'react'
import { AppUi } from './AppUI';
import { TodoProvider } from '../TodoContext/TodoContext';

import './App.css';


function App() {
  
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
  
}

export default App;
