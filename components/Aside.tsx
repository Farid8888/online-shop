import React,{useState} from 'react'
import classes from '../styles/Aside.module.css'
import {GrLinkNext} from 'react-icons/gr'
import Image from 'next/image'
import img from '../images/office.webp'
import ima from '../images/img.jpg'
import {DATA} from '../types/types'
import Cart from './Cart' 
import Header from './Header'
import {useAppSelector} from '../store/store'
import Modal from './Modal'
import ShopCart from './ShopCart'

const  Aside:React.FC<DATA>=(props)=> {
  const st = useAppSelector(state=>state.item)
  const [modal,setModal] = useState(false)
  const modalHandler =()=>{
    setModal(prevst=>!prevst)
  }
  return (
    <div className={classes.aside}>
      {modal && <Modal modalHandler={modalHandler}>
        {st.shopCart.length === 0 ? <div className={classes.empty}>Корзина пуста</div> :
         <ShopCart/>}
        </Modal>}
       <Header modalHandler={modalHandler}/>
      <GrLinkNext/>
      <div className={classes.gridFlex}>
      <div className={classes.mainFlex}>
        <div className={classes.sideFlex}>
          <Image src={img} alt='office' height={110} width={150} style={{objectFit:'none'}}/>
          <div className={classes.discount}>
            <div className={classes.innerFlex}>
              <div className={classes.discountHeader}>
                <p>-25%</p>
                </div>
                <div className={classes.white}>на товары для кабинета</div>
                <button className={classes.btn}>Выбрать</button>
            </div>
          </div>
        </div>
        <div className={classes.sideFlex}>
          <div className={classes.disc}>
            <div className={classes.innerFlex}>
                <div className={classes.row}>
                <div className={classes.black}>Скидка 10% на периферию для компьютера</div>
              <div className={`${classes.discountHeader} ${classes.additional}`}>
                <p>-10%</p>
                </div>
                </div>
                <button className={`${classes.btn} ${classes.bl}`}>Выбрать</button>
            </div>
          </div>
          <Image src={ima} alt='exp' height={110} width={170} />
        </div>
      </div>
     <Cart data={st.items}/>
      </div>
    </div>
  )
}

export default Aside