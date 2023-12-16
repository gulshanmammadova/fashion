import React from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import datas from '../../data/blog';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './Blog.css'
const Blog = () => {
  console.log(datas)
  return (

    <div className='container'>
      <div className='blog-cards-all'>
      <div className='d-flex   col-lg-8' style={{justifyContent:'space-between',flexWrap:'wrap'}}>
      {
        datas.map((blog,index)=>{
          return(<Card className=' mx-2 my-2 b-0 card-1' style={{width:270}} key={index}>
          <Card.Img  className='b-0' variant="top" src={blog.mainImg} />
          <Card.Body>
            <Card.Title className='blog-card-title'>{blog.date} | {blog.author}</Card.Title>
            <Card.Text>
            {blog.title}
            </Card.Text>
            <Link className=' detail-blog' to={`/singleblog/${blog.id}`}> Read More ...</Link>

             </Card.Body>
        </Card>)
        })
}
      </div>
      <div className='filter col-lg-2'></div>

      </div>
    </div>
  )
}

export default Blog