import React from 'react'
import {useAppSelector} from '../store/store'
import ShopCartItem from './ShopCartItem'
import classes from '../styles/ShopCart.module.css'
import {MdCancel} from 'react-icons/md'



const ShopCart=()=> {
    const items = useAppSelector(state=>state.item.shopCart)
    const total = useAppSelector(state=>state.item.totalAmount)
  return (
    <div className={classes.main}>
        <div className={classes.icon} >
          <MdCancel/>
        </div>
    <div className={classes.cart}>
     {items.map(item=>{
        return <ShopCartItem key={item.id} title={item.title} price={item.price}/>
     })}
    </div>
    <div className={classes.total}>
     <p>Итого:{total} ₽ </p>
     </div>
    </div>
  )
}

export default ShopCart
