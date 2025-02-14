import React, { useEffect, useRef, useState } from 'react';
import '../../css/Cart.css';
import CartProduct from './cartProduct/cartProduct';
import Image1 from '../../assets/img/shoe1.png';
import Image2 from '../../assets/img/shoe2.png';
import Image3 from '../../assets/img/shoe3.png';
import Image4 from '../../assets/img/shoe4.png';
import { useNavigate } from 'react-router-dom';

const arr = [
  {
    id: 1,
    title: "Nike Air Force 1",
    price: 250,
    img: Image1
  },
  {
    id: 2,
    title: "Nike Air Force 1",
    price: 450,
    img: Image2
  },
  {
    id: 3,
    title: "Nike Air Force 1",
    price: 550,
    img: Image3
  }, {
    id: 4,
    title: "Nike Air Force 1",
    price: 550,
    img: Image4
  }

];
function Cart() {
  const nav = useNavigate();
  const [trav, Settrav] = useState([]);
  const [index, setIndex] = useState([]);
  const [total, SetTotal] = useState(0);
  const refw = useRef(true);

  // promise function
  useEffect(() => {
    if (localStorage.getItem("Store")) {
      const ele = JSON.parse(localStorage.getItem("Store"));
      if(!ele['check']){
        nav('/login');
      }
    }
  });

  useEffect(() => {
    if (refw.current) {
      if (localStorage.getItem('item')) {
        let ele = JSON.parse(localStorage.getItem('item'));
        console.log(ele);
        const ele1 = [];
        const index1 = [];
        let total = 0;
        for (const key in ele) {
          arr.map((item) => {
            if (item.id === parseInt(key)) {
              item['freq'] = ele[key];
              total += ele[key] * item.price;
              ele1.push(item)
            }
          })
        }
        Settrav(ele1);
        SetTotal(total);
        refw.current = false;
      }
    }
  }, []);
  const increament = (i) => {
    let x = [...trav];
    if(x[i].freq<10) {     
  
    x[i].freq++ 
    
    Settrav(x);
    let ele = JSON.parse(localStorage.getItem('item'));
    ele[x[i].id]++;
    localStorage.setItem("item", JSON.stringify(ele));
    // total
    let y = total;
    y += x[i].price;
    SetTotal(y);
  }else{
    alert('You can add 10 copy only');
  }



  }
  const decreament = (i) => {
    let x = [...trav];
    x[i].freq--;
    Settrav(x);
    let ele = JSON.parse(localStorage.getItem('item'));
    ele[x[i].id]--;
    if (x[i].freq === 0) {
      delete ele[x[i].id];
    }
    localStorage.setItem("item", JSON.stringify(ele));
    let y = total;
    y -= x[i].price;
    SetTotal(y);

  }
  return (
    <div className='myaccount-main'>
      <div className="cartaccount">
        <div className="cart-myaccount">
          <div className="titleTextForCart">
            <p>Shoping Cart New</p>
          </div>
        </div>
        {

          trav.map((item, indexval) => {
            return (
              <>
                <CartProduct id={indexval + 1} title={item.title} src={item.img} price={item.price * item.freq} freq={item.freq} increament={increament} decreament={decreament} />
              </>
            )
          }, 0)
        }

        <div className="centerTotal">
          <p><span style={{ fontWeight: "bold" }}>Total</span> ${total}</p>
          <p><span style={{ fontWeight: "bold" }}>Shipping</span> Free Shipping</p>
        </div>
      </div>
    </div>
  )
}

export default Cart;
