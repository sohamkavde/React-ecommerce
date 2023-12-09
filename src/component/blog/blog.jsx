import {React,useState} from 'react';
import UserContext from '../UserContext/UserContext'
import './blog.css';
import RelatedProductsList from '../home/backgroundTitleImage/RelatedProductsList/RelatedProductsList';




function Blog() {
  const [user, setUser] = useState("25%");
  return (
    <UserContext.Provider value={user}>
      <div id='blog'>
        <RelatedProductsList/>      
      </div>
    </UserContext.Provider>
  )
}

export default Blog
