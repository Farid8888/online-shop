import React from 'react'
import classes from '../styles/Modal.module.css'
import {MODAL} from '../types/types'


const Modal:React.FC<MODAL>=(props)=> {
   
  return (
    <div className={classes.overlay} onClick={props.modalHandler}>
      <div className={classes.backDrop}>
         {props.children}
      </div>
    </div>
  )
}

export default Modal
