import { ReactComponent as DeleteSVG} from "../../assets/trash.svg"
import "./TodoIcon.css"

const iconTypes = {
    "delete": (color) => <DeleteSVG className="Icon-SVG" fill={color}/>,
}

function TodoIcon ({type, color, onClick}){
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };