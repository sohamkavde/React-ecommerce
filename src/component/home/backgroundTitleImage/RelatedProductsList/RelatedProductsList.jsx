import React, { useState } from 'react'
import Background from '../backgound-component/background';
import './related.css';
import '../backgroundTitleImage.css';
import UserContext from '../../../UserContext/UserContext';

import Image1 from '../../../img/shoe1.png';
import Image2 from '../../../img/shoe2.png';
import Image3 from '../../../img/shoe3.png';
import Image4 from '../../../img/shoe4.png';
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





function RelatedProductsList() {
  const [trav,Settrav] = useState(arr);
  return (
  
        <div className="related">
            <div className="subRelated">
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

        </div>
    
   
  )
}

export default RelatedProductsList;
