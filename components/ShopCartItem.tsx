import React from 'react'
import classes from '../styles/ShopCartItem.module.css'

type SHOPCART={
    title:string,
    price:number
}

const ShopCartItem:React.FC<SHOPCART>=(props)=> {
  return (
    <div className={classes.cart}>
      <p>{props.title}</p>
      <p>{props.price*70}₽</p>
    </div>
  )
}

export default ShopCartItem
