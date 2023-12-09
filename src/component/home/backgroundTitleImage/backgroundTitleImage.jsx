import React, { useState } from 'react';
import './backgroundTitleImage.css';
import Image1 from '../../img/shoe1.png';
import Image2 from '../../img/shoe2.png';
import Image3 from '../../img/shoe3.png';
import Image4 from '../../img/shoe4.png';
import Background from './backgound-component/background';
// import RelatedProductsList from './RelatedProductsList/RelatedProductsList';




function BackgroundTitleImage() {
  const arr = [
      {
        id:1,
        title:"Nike Air Force 1",
        price:250,
        img:Image1
      },
      {
        id:2,
        title:"Nike Air Force 1",
        price:450,
        img:Image2
      },
      {
        id:3,
        title:"Nike Air Force 1",
        price:550,
        img:Image3
      },{
        id:4,
        title:"Nike Air Force 1",
        price:550,
        img:Image4
      }

  ];

  const [trav,Settrav] = useState(arr);



  return (
    <div className='backgroundTitleImage'>
      <div className="products">
        <div className="repel">
            <div className="first-repel"></div>
            <div className="second-repel"></div>
            <div className="third-repel"></div>
            <div className="fourt-repel"></div>            
        </div>
        <div className="titledetails">
            
            <div className="breadcrumb">
                <p style={{color:"#ffff"}}>Home <span style={{color:"#000"}}>/shop</span></p>
            </div>
            <div className="centerText">Shop</div>
            <div className="filter_button"></div>

        </div>
      </div>
        <div className="listedProduct">
           <div className='sublist'>
            {
              trav.map((item)=>{
                  return(
                    <>
                    <Background id={item.id} src={item.img} price={item.price}/>                    
                    </>
                  )
              })
            }
          
           </div> 

           <p className='relatedlist'>Related Products</p>
           <div className='sublist'>
           {
              trav.map((item)=>{
                  return(
                    <>
                    <Background id={item.id} src={item.img} price={item.price}/>                    
                    </>
                  )
              })
            }
           </div>             
            
   <footer style={{marginTop:"20px"}} class="footer"><p>Copyright <span>©</span> 2021 | All Rights Reserved.</p></footer>
        </div>
        
      
    </div>
  )
}

export default BackgroundTitleImage;

{/* */}
