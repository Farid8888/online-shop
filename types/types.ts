
export type Rate ={
    rate:number,
    count:number
}


export type data = {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:Rate
    }

   export type DATA={
        data:data[],
      }  

  
export type Item ={
    key:any,
    data:data,
}






export type State={
    items:data[] | any[],
    shopCart:data[] | any[],
    totalAmount:number,
    totalQuantity:number
}

export type Q={
    quantity:number,
    items:data
}

export type MODAL ={
    modalHandler:()=>void,
    children:React.ReactNode
}