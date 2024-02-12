import React from 'react'
import { coffee } from '../Data'
const Product = () => {
  return (
    <>
    <section className='products' id='products'>
        <h1 className='heading'>
            Our <span>Products</span>
        </h1>
     <div className="box-container">
        {
            coffee.map((item,index)=>
          (
    <div className="box" key={index}>
        <div className="icons">
        <div className="fas fa-shopping-cart"></div>
        <div className="fas fa-heart"></div>
        <div className="fas fa-eye"></div>
        </div>
        <div className="images">
            <img src={item.img} alt=''/>
        </div>
        <div className="container">
            <h1>fresh coffee</h1>
            <div className="stars">
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star-half-alt'/>
            </div>
            <div className="price">
                $15.99 <span>$20.99</span>
            </div>
            </div>
    </div>
          )  
            
            )
        }
     </div>
</section>
</>
    
  )
}

export default Product
