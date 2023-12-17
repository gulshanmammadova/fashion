import React, { useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import datas from '../../data/blog';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { TiHeartOutline } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import { BsInfoLg } from "react-icons/bs";
import './Shop.css';

const Shop = () => {
  const [prod, setProd] = useState([])
  useEffect(() => {
    // const fetchData = async () => {
    //   // const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=15&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': '0faf00add0mshd806d32511501edp133b61jsncc44bd5bcc47',
    //       'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    //     }
    //   };
      
    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     setProd(result.products)
    //     // console.log(prod);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    const fetchData =async()=>{
    await  fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())     
      .then((prod)=> (setProd(prod)))
    }
    fetchData();
  }, []); 
  return (
    <div>
  <div className='d-flex col-lg-8' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {prod.map((product, index) => (
            <Card className='mx-2 my-2 b-0 card-1' style={{ width: 270 }} key={index}>
              {/* <Card.Img className='b-0' variant="top" src={product.imageUrl} /> */}
              <Card.Img className='b-0 card-product-img' variant="top" src={product.image} />
            <div className='card-icons'>
              <TiHeartOutline className='i'/>
              <SlBasket className='i'/>
              <BsInfoLg className='i'/>

            </div>
              <Card.Body>
                {/* <Card.Title className='blog-card-title'>{product.price.current.text} | {product.price.previous.text}</Card.Title> */}
                <Card.Title className='blog-card-title'>{product.price} $</Card.Title>
                <Card.Text abbr={product.title}>{product.title.slice(0,50)}...</Card.Text>
                {/* <Card.Text>{product.name}</Card.Text> */}
                {/* <Link className='detail-blog' to={`/singleblog/${blog.id}`}> Read More ...</Link> */}
              </Card.Body>
            </Card>
          ))}
        </div>
    </div>
  );
};

export default Shop;
