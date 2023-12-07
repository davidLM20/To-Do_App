import React from "react";
import "./TodoForm.css";
import {TodoContext} from "../../TodoContext/TodoContext";
function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label className="TodoForm-label">Escribe la nueva tarea</label>
            <textarea value={newTodoValue} onChange={onChange} className="TodoForm-TextArea" placeholder="Terminar curso de ..." />
            <div className="TodoForm-Buttons">
                {/* <button className="TodoForm-Button--cancel">Cancelar</button> */}
                <button type="submit" className="TodoForm-Button--agregar"  onClick={onSubmit}>Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm };