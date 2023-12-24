import React from 'react'
import UpIcon from '../../components/Up/UpIcon';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './HomePage.css'
import homeImg1 from '../../images/home/home-1.png';
import homeImg2 from '../../images/home/home-3.png';
import h from '../../images/home/h.jpg';

import img6 from '../../images/about/about2.png'
import { Link } from 'react-router-dom';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
const HomePage = () => {
  return (
    <div className='home-all'>
      <div className='hpme-custom-slider w-fill-content'>
       <Link to='/shop'>
       <img className='w-100' src="https://petalandpup.com.au/cdn/shop/files/otto-hero-banner.gif?v=1703179303" alt="" />
    
       </Link>
       <div className='d-flex row container mx-auto my-4 py-4 px-2 pe-4 mobile-center' style={{alignItems:'center'}}>
        <div className='col-lg-5 col-md-12 my-4 '>
          <h3 style={{fontStyle:'italic'}} className='new-font'>Hello, summer!</h3>
          <p className='home-p'>The sun's out, and so are the hottest styles you won't want to miss. Your summer wardrobe is sorted with a selection of must-have dresses that will turn heads all season.</p>
        </div>
        <div className='col-lg-7 col-md-12 home-img my-4'><img src={homeImg1} className='w-100' alt="" /></div>

       </div>
       <marquee width="100%" direction="left"  className='marquee'>
         Fashion is an expression of art that reflects our culture and influences our emotions.
</marquee>
       <div className='d-flex row container mx-auto my-4 py-4 px-2 pe-4' style={{alignItems:'center'}}>
        <div className='col-lg-7 col-md-12 home-img my-4'><img src={h} className='w-100' alt="" /></div>
        <div className='col-lg-5 col-md-12 my-4 '>
          <h3 style={{fontStyle:'italic'}} className='new-font'>"The joy of dressing is an art."</h3>
          <p className='home-p'>Fashion is an art that shapes our lifestyle and reflects our personal expression. Our style serves as a reflection of our emotions and thoughts, showcasing our uniqueness. Our choice of attire acts as a language to introduce ourselves to the external world. Each garment is a part of expressing ourselves and a testament to the confidence we hold within.</p>
        </div>

       </div>
         </div>
         <marquee width="100%" direction="left"  className='marquee'>
         Fashion is the armor to survive the reality of everyday life.
</marquee>
<div className='about2 row d-flex container mx-auto my-4 py-4'>
<div className='col-lg-5'>
  <p className='main-title'>Our Story</p>
  <p className='little-desc'>
  Catering to your requirements, handling your needs with care.
</p>
<p className='about2-text'>
Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience.
</p>
<p className='about2-text2'>
Forget about struggling to do everything at once: taking care of the family, running your business, walking your dog, cleaning the house, doing the shopping, etc.
</p>
</div>
<div className='col-lg-5'>
  <img src={img6} alt="About1"  className='w-100'/>
</div>

</div>
<NewsLetter/>
  <UpIcon/>
      
    </div>
  )
}

export default HomePage