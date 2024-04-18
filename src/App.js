import './App.css';
import Cart from './component/Cart/Cart';
import Shop from './component/Shop/Shop';
import Blog from './component/blog/blog';
import Header from './component/header/header';
import RelatedProductsList from './component/home/backgroundTitleImage/RelatedProductsList/RelatedProductsList';
import BackgroundTitleImage from './component/home/backgroundTitleImage/backgroundTitleImage';
import Login from './component/login/login';
import Reg from './component/login/reg';
import Contact from './component/Contact/Contact';
import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom';
import Myaccount from './component/Myaccount/Myaccount';

function App() {
  return (
   <>
   {/* <Header/> */}
   {/* <BackgroundTitleImage/> */}
   {/* <RelatedProductsList/> */}
   {/* <Login/> */}
   {/* <Reg/> */}
   {/* <Blog/> */}

   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<BackgroundTitleImage/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Shop/:id' element={<Shop/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Reg' element={<Reg/>}/>
          <Route path='/Myaccount' element={<Myaccount/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
