import React from 'react'
import './cartProduct.css';
import Image from '../../img/shoe1.png';

function CartProduct({id,title,src,price,freq,increament,decreament}) {
  
  return (
    <div>
      <div className="productShow">
        <div className="cartImg">
            <div className="cartMainImg">
            <img src={src} alt="image" style={{width:"100%"}}/>
            </div>    
        </div>  
        <div className="cartTitle">
            <p>{title}</p>
        </div>
        <div className="cartButton">
            <div className="cartCircle" onClick={()=>{decreament(id-1)}}><span>-</span></div>
            <div className="cartValue"><span>{freq}</span></div>
            <div className="cartCircle" onClick={()=>{increament(id-1)}}><span>+</span></div>

        </div>
        <div className="cartPrice">
            <p>${price}</p>
        </div>
      </div>   
      <hr />
    </div>
  )
}

export default CartProduct
