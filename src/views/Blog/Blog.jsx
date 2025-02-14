import {React,useState} from 'react';
import UserContext from '../../views/UserContext/UserContext'
import '../../css/Blog.css';
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
