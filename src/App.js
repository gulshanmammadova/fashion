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





function App() {
  return (
    <div className="">
    <Header/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='*' element={<Error/>}/>
  <Route path='/singleblog/:id' element={<SingleBlog/>}/>

  
</Routes>
<Footer/>
    </div>
  );
}

export default App;
