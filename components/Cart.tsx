import React from 'react'
import CartItem from './CartItem'
import {DATA} from '../types/types'



const Cart:React.FC<DATA>=(props)=> {
  return (
    <>
        {props.data.map(item=>{
            return(
                <CartItem key={item.id} data={item}/>
            )
        })}
    </>
 
  )
}

export default Cart
