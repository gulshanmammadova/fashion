import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Header from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop'
import SingleBlog from './pages/SingleBlog/SingleBlog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Basket from './pages/Basket/Basket';
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import WishList from './pages/WishList/WishList';
import Register from './pages/Registration/Register'
import Login from './pages/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
  
  return (
    <div className="">
      <CartProvider>
      <WishlistProvider>
    <Header/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/myaccount' element={<Profile/>}/>


  <Route path='*' element={<Error/>}/>
  <Route path='/singleblog/:id' element={<SingleBlog/>}/>
  
  <Route path='/proddetail/:id' element={<ProductDetail/>}/>
  <Route path='/basket' element={<Basket/>}/>
  <Route path='/wishlist' element={<WishList/>}/>



  
</Routes>
<Footer/>
</WishlistProvider>
</CartProvider>
    </div>
  );
}

export default App;
