import React, { useState } from 'react'; 
 

// Need to fix this component
// import '../home/backgroundTitleImage/backgroundTitleImage.css';
import '../home/backgroundTitleImage/backgroundTitleImage';
import Background from '../home/backgroundTitleImage/backgound-component/background';




import '../../css/Shop.css';
import { useNavigate, useParams } from 'react-router-dom';
import HoverZoom from './HoverImage';
import useFetchProductDetails from '../../models/DataFetch/FetchProductDetails';


function Shop() {
  let {id} = new useParams();
  const arr =  useFetchProductDetails();
  if(!id ){    
    id=1;
  }
  if(arr.length < id){
    alert('Do not change URL');
    id=1;
  }
  const navigator = useNavigate();
  const run = (val) => {
    console.log(val);
    if (localStorage.getItem("Store")) {
      let ele = JSON.parse(localStorage.getItem("Store"));
      if (ele['check']) {
        if (!localStorage.getItem("item")) {
          localStorage.setItem("item", '{}');
        }
        let item = JSON.parse(localStorage.getItem("item"));
        item[val] = 1;
        localStorage.setItem("item", JSON.stringify(item));
        navigator('/Cart');
      } else {
        alert('Sign Up Please !');
      }
    } else {
      alert('Login please');
    }
  };


  const [trav, Settrav] = useState(arr);

  return (
    <>
     
   
    <div className='backgroundTitleImage'>
      <div className="products">
        <div className="repel">
          <div className="first-repel" key="first-repe" ></div>
          <div className="second-repel" key="second-repel"></div>
          <div className="third-repel" key="third-repel"></div>
          <div className="fourt-repel" key="fourt-repel"></div>
        </div>
        <div className="titledetails">
          <div className="breadcrumb" key="breadcrumb">
            <p style={{ color: "#ffff" }}>Home <span style={{ color: "#000" }}>/Product Details</span></p>
          </div>
          <div className="centerText" key="centerText">Product Details</div>
          <div className="filter_button" key="filter_button"></div>
        </div>
      </div>
      <div className="listedProduct">
        <div className='sublist1'>
          <div className="description">
            <div className="wrapper">
              <div className='desctitle'>
                <p>{trav[id-1].title}</p>
                <p  dangerouslySetInnerHTML={{ __html: trav[id-1].description }}></p>
                <button onClick={() => { run(id) }}>Add To Cart</button>
              </div>
              <div className='descimg'>
                <div>
                  <img src={trav[id-1].img} alt={trav[id-1].title} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='relatedlist'>Related Products</p>
        <div className='sublist'>
          {trav.map((item, index) => {
            return (
              <Background id={item.id} src={item.img} price={item.price} index={index} key={index} />
            );
          })}
        </div>
        <footer style={{ marginTop: "20px" }} className="footer">
          <p>Copyright <span>©</span> 2021 | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
    </>
  );
}

export default Shop;
