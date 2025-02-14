import './App.css';
import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom';

// ------------------
import Header from './views/Layout/Header';
import Login from './views/LogReg/Login';
import Reg from './views/LogReg/Registration';
import Shop from './views/Shop/Shop';
import Myaccount from './views/Myaccount/Myaccount';
import Contact from './views/Contact/Contact';
import Blog from './views/Blog/Blog';
import Cart from './views/Cart/Cart';
import BackgroundTitleImage from './views/home/backgroundTitleImage/backgroundTitleImage';

function App() {
  return (
   <>
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
