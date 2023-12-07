import React from "react";
import ReactDom from "react-dom";
import './Modal.css';

import { IoCloseCircleOutline } from "react-icons/io5";

function Modal({ children, setOpenModal}) {
   
    return ReactDom.createPortal(
        <div className="pageModal">
            <div className="cardModal">
                {children}
                <IoCloseCircleOutline className="closeButton" onClick={() => { setOpenModal(state => !state) }} />
            </div>
        </div>,
        document.getElementById('modal')
    );

}

export { Modal };