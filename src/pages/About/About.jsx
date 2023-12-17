import React from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import img1 from '../../images/about/about1.png'
import img2 from '../../images/about/about2.png'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

import './About.css'
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import blog from '../../data/blog'
import UpIcon from '../../components/Up/UpIcon.jsx';
const About = () => {
  const renderBlogCards = () => {
    const firstThreeBlogs = blog.slice(0, 3);
    return (
      <div className="row">
        {firstThreeBlogs.map((post, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <Card className='card'>
              <Card.Img variant="top" src={post.mainImg} alt={post.title} />
              <Card.Body className='card-body'>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.date}</Card.Text>
                <Link to={`/singleblog/${post.id}`} className="blog-link">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>

    <div className='about-all-page container '>
<div className='about1 row d-flex'>
<div className='col-lg-5'>
  <img src={img1} alt="About1"  className='w-100'/>
</div>
<div className='col-lg-5'>
  <p className='main-title'>About Us</p>
  <p className='little-desc'>We guarantee the highest quality of
the products we sell.
</p>
<p className='about1-text'>
Our company is dedicated to creating unique and comfortable clothing for men and women. Since our establishment in 2010, Fashion's activity has extended from developing designer clothes to training new designers and stylists at our school, participation of our trainees at the world's leading fashion shows and writing articles about fashion.
</p>
</div>

</div>
<div className='about2 row d-flex'>
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
  <img src={img2} alt="About1"  className='w-100'/>
</div>

</div>
<div className='mini-blog'>
  {
    renderBlogCards()
  }
</div>
    </div>
 <UpIcon/>
    </div>

  )
}

export default About