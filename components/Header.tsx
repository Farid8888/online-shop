import React from 'react'
import {CgShoppingCart} from 'react-icons/cg'
import classes from '../styles/Header.module.css'
import {useAppSelector} from '../store/store'
import {MODAL} from '../types/types'

type H ={
    modalHandler:()=>void
}
const Header:React.FC<H>=(props)=> {
    const totalQuantity = useAppSelector(state=>state.item.totalQuantity)
  return (
    <div className={classes.header}>
      <h2>Все для комфортной работы</h2>
      <div className={classes.cart} onClick={props.modalHandler}>
       <CgShoppingCart/>
       {totalQuantity !== 0 && <span>{totalQuantity}</span>}
       </div>
      </div>
  )
}

export default Header
