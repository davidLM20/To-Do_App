import './TodoList.css'

function TodoList({children}){
    return (
      <ul className="listCard">
        {children}
      </ul>
    )
}

export {TodoList};