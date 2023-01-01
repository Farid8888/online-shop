import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {data,Q,State} from '../types/types'



const initialState:State={
    items:[],
    shopCart:[],
    totalAmount:0,
    totalQuantity:0
}



const ItemsSlice =createSlice({
    name:'Items',
    initialState,
    reducers:{
        fetchItems:(state,action:PayloadAction<data[]>)=>{
           state.items = action.payload
        },
        addItems:(state,action:PayloadAction<Q>)=>{
            const index = state.items.findIndex(item=>item.id === action.payload.items.id)
            const obj = state.items[index]
            const newArr = [...state.items]
            const newObj = {...obj,price:obj.price + action.payload.items.price/action.payload.quantity}
            newArr[index] = newObj
            state.items = newArr
        },
        removeItems:(state,action:PayloadAction<Q>)=>{
            const index = state.items.findIndex(item=>item.id === action.payload.items.id)
            const obj = state.items[index]
            const newArr = [...state.items]
            const newObj = {...obj,price:obj.price - action.payload.items.price/action.payload.quantity}
            newArr[index] = newObj
            state.items = newArr
        },
        addToShopCart:(state,action:PayloadAction<data>)=>{
            state.shopCart = state.shopCart.concat(action.payload)
            state.totalAmount = state.totalAmount + action.payload.price
            state.totalQuantity = state.totalQuantity + 1
        }
    }
})


export const {fetchItems,addItems,addToShopCart,removeItems} = ItemsSlice.actions
export default ItemsSlice.reducer
