import React, { useState } from 'react'
import Background from '../backgound-component/background';
import './related.css';
import '../backgroundTitleImage.css';

import Image1 from '../../../../assets/img/shoe1.png';
import Image2 from '../../../../assets/img/shoe2.png';
import Image3 from '../../../../assets/img/shoe3.png';
import Image4 from '../../../../assets/img/shoe4.png';


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
              trav.map((item,index)=>{
                  return(
                    <Background id={item.id} src={item.img} price={item.price} key={index} index={index}/>                    
                  )
              })
            }
            </div>

        </div>
    
   
  )
}

export default RelatedProductsList;
