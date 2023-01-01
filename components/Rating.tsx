import React from 'react'
import classes from '../styles/Rating.module.css'


type Rate={
    rating:number
}
const  Rating:React.FC<Rate> = (props)=> {
  return (
    <div className={classes.ratingArea}>
	<input type="radio" id="star-5" name="rating" value="5"/>
	<label className={props.rating >4.5 ? classes.lbl : ''} htmlFor="star-5" title="Оценка «5»"></label>	
	<input type="radio" id="star-4" name="rating" value="4"/>
	<label className={props.rating >3.5 ? classes.lbl: ''} htmlFor="star-4" title="Оценка «4»"></label>    
	<input type="radio" id="star-3" name="rating" value="3"/>
	<label className={props.rating >2.5 ? classes.lbl:''} htmlFor="star-3" title="Оценка «3»"></label>  
	<input type="radio" id="star-2" name="rating" value="2"/>
	<label className={props.rating >1.5 ? classes.lbl:''} htmlFor="star-2" title="Оценка «2»"></label>    
	<input type="radio" id="star-1" name="rating" value="1"/>
	<label className={props.rating >0.5 ? classes.lbl:''} htmlFor="star-1" title="Оценка «1»"></label>
</div>
  )
}

export default Rating