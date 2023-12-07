import { DeleteIcon } from '../TodoIcon/DeleteIcon/DeleteIcon';
import './TodoItem.css'
//import { FaTrashAlt } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

function TodoItem(props) {
    return (
        <div className='card'>
            <FaRegCircleCheck
                className={`ui-checkbox ${props.completed ? "ui-checkbox--checked" : ""}`}
                onClick={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed ? "TodoItem-p--complete" : ""}`}>{props.text}</p>
            <DeleteIcon onDelete={props.onDelete}/>
        </div>
    );
}

export { TodoItem };