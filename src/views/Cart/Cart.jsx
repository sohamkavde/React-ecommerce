import React, { useEffect, useRef, useState } from 'react';
import '../../css/Cart.css';
import CartProduct from './cartProduct/cartProduct';
import Image1 from '../../assets/img/shoe1.png';
import Image2 from '../../assets/img/shoe2.png';
import Image3 from '../../assets/img/shoe3.png';
import Image4 from '../../assets/img/shoe4.png';
import { useNavigate } from 'react-router-dom';
import InvoicePage from './invoice';

const arr = [
  { id: 1, title: "Nike Air Force 1", price: 250, img: Image1 },
  { id: 2, title: "Nike Air Force 1", price: 450, img: Image2 },
  { id: 3, title: "Nike Air Force 1", price: 550, img: Image3 },
  { id: 4, title: "Nike Air Force 1", price: 550, img: Image4 },
];

function Cart() {
  const nav = useNavigate();
  const [trav, Settrav] = useState([]);
  const [total, SetTotal] = useState(0);
  const refw = useRef(true);
  const [billOpen, setBillOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Store")) {
      const ele = JSON.parse(localStorage.getItem("Store"));
      if (!ele['check']) {
        nav('/login');
      }
    }
  }, [nav]);

  useEffect(() => {
    if (refw.current) {
      if (localStorage.getItem('item')) {
        let ele = JSON.parse(localStorage.getItem('item'));
        const ele1 = [];
        let total = 0;
        for (const key in ele) {
          arr.map((item) => {
            if (item.id === parseInt(key)) {
              item['freq'] = ele[key];
              total += ele[key] * item.price;
              ele1.push(item);
            }
          });
        }
        Settrav(ele1);
        SetTotal(total);
        refw.current = false;
      }
    }
  }, []);

  const increament = (i) => {
    let x = [...trav];
    if (x[i].freq < 10) {
      x[i].freq++;
      Settrav(x);
      let ele = JSON.parse(localStorage.getItem('item'));
      ele[x[i].id]++;
      localStorage.setItem("item", JSON.stringify(ele));
      SetTotal(total + x[i].price);
    }    
    else {
      alert('You can add 10 copy only');
    }
  };
  const decreament = (i) => {
    let x = [...trav]; // Copy state array
    let ele = JSON.parse(localStorage.getItem('item')) || {}; // Get stored items
  
    if (x[i].freq > 1) {
      x[i] = { ...x[i], freq: x[i].freq - 1 }; // Correct way to update state
      Settrav(x);
  
      if (ele[x[i].id]) {
        ele[x[i].id]--; // Decrease quantity in localStorage
        if (ele[x[i].id] === 0) {
          delete ele[x[i].id]; // Remove item if quantity is 0
        }
      }
  
      SetTotal(total - x[i].price);
    } else {
      if (window.confirm("Do you want to delete this product?")) {
        const updatedTrav = x.filter((_, index) => index !== i); // Remove item at index
  
        if (ele[x[i].id]) {
          delete ele[x[i].id]; // Delete item from localStorage
        }
  
        Settrav(updatedTrav);
        SetTotal(total - x[i].price);
      }
    }
  
    localStorage.setItem("item", JSON.stringify(ele)); // Update localStorage
  };
  

  const generateBill = () => {
    setBillOpen(true);
  };

   

  const closeBill = () => {
    setBillOpen(false);
  };

  return (
    <div className='myaccount-main'>
      <div style={{ backgroundColor: "white" }}></div>
      <div className="cartaccount">
        <div className="cart-myaccount">
          <div className="titleTextForCart">
            <p>Shopping Cart New</p>
          </div>
        </div>
        {trav.map((item, indexval) => (
          <CartProduct
            key={indexval}
            id={indexval + 1}
            title={item.title}
            src={item.img}
            price={item.price * item.freq}
            freq={item.freq}
            increament={increament}
            decreament={decreament}
          />
        ))}
        <div className="centerTotal">
          <p><span style={{ fontWeight: "bold" }}>Total</span> ${total}</p>
          <p><span style={{ fontWeight: "bold" }}>Shipping</span> Free Shipping</p>
        </div>
        <div className="generateBillButton">
          <button onClick={generateBill}>Generate Bill</button>
        </div>
      </div>

      {billOpen && (
        <div className="bill-modal">
          <div className="bill-content">
            <InvoicePage trav={trav} closeBill={closeBill}/>
            
          </div>
        </div>
      )}
     
    </div>
  );
}

export default Cart;