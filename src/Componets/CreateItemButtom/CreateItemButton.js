import React from 'react'
import './CreateItemButtom.css'

function CreateItemButton({setOpenModal}) {

  return (
    <div className='buttomContent'>
      <button className='createbutton' onClick={() => {
        setOpenModal(state => !state);
      }}>
        Nueva Tarea
      </button>
    </div>
  )
}

export { CreateItemButton };