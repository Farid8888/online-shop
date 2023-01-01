import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{useEffect} from 'react'
import Aside from '../components/Aside'
import Cart from '../components/Cart'
import { GetServerSideProps } from 'next'
import { data,DATA } from '../types/types'
import {useAppDispatch} from '../store/store'
import {fetchItems} from '../store/itemSlice'


const  Index:React.FC<DATA>=(props)=> {
  const dispatch = useAppDispatch()
  useEffect(()=>{
   dispatch(fetchItems(props.data))
  },[])
  return (
    <div className={styles.centered}>
      <Aside data={props.data}/>
    </div>
  )
}

export default Index


export const getServerSideProps: GetServerSideProps<{ data: data[] }> = async (context) => {
  const res = await fetch('https://fakestoreapi.com/products/category/electronics')
  const data: data[] = await res.json()
console.log(data)
  return {
    props: {
      data:data
    },
  }
}


