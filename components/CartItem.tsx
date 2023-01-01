import React,{useState} from 'react'
import classes from '../styles/CartItem.module.css'
import Image from 'next/image'
import {Item,data} from '../types/types'
import Rating from './Rating'
import {addItems,removeItems,addToShopCart} from '../store/itemSlice'
import {useAppDispatch} from '../store/store'



const CartItem:React.FC<Item> =(props)=>{
   const dispatch = useAppDispatch()
    const [quantity,setQuantity]= useState(1)
    const [btn,setBtn] = useState(false)
    const count = props.data.rating.count
    let comment
    if(count % 10 === 0){
        comment = 'отзывов'
    }else if(count % 10 === 1){
        comment='отзыв'
    }else if(count % 10 <=4){
        comment = 'отзыва'
    }else if(count % 10 >4){
        comment = 'отзывов'
    }
    const addItem=(items:data)=>{
       setQuantity(prev=>prev + 1)
       dispatch(addItems({items:items,quantity:quantity}))
    }
    const removeItem=(items:data)=>{
        if(quantity>1){
            setQuantity(prev=>prev - 1)
            dispatch(removeItems({items:items,quantity:quantity}))
        }else{
            return
        }
        
     }
     const addToShop=(item:data)=>{
 dispatch(addToShopCart(item))
 setBtn(true)
     }
    return(
       <div className={classes.gridItem}>
        {props.data.rating.count > 300 &&<div style={{display:'flex',justifyContent:'end'}}>
        <div className={classes.label}>
            <p>Хит</p>
        </div>
        </div>}
        <div style={{textAlign:'center'}}>
        <Image alt='image' src={props.data.image} height={130} width={200}/>
        </div>
        <div className={classes.line} style={{marginTop:'30px',fontSize:'0.8rem',color:'rgba(153, 153, 153, 1)'}}>
          <div className={classes.category}>{props.data.category}</div>
          <div className={classes.line}>
           <Rating rating={props.data.rating.rate}/>
           <label style={{marginLeft:'10px'}}>{props.data.rating.count} {comment}</label>
          </div>
        </div>
        <div style={{marginTop:'15px'}}>{props.data.title}</div>
        <div className={classes.priceFlex}><span className={classes.price}>{props.data.price*70} ₽ </span><span>/шт.</span></div>
        {!btn && <div className={classes.btns}>
            <button className={classes.btn1} onClick={()=>addToShop(props.data)} type='button'>В корзину</button>
            <button className={classes.btn2}>
                <span onClick={()=>removeItem(props.data)}>-</span>
                <span style={{margin:'0 7px'}}>{quantity}</span>
                <span onClick={()=>addItem(props.data)}>+</span>
            </button>
        </div>}
        {btn && <div className={classes.cartBtn}> 
            <button type='button'>
                В корзине
            </button>
            </div>}
       </div>
    )
}


export default CartItem