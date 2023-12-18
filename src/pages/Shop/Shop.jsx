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
import Accordion from 'react-bootstrap/Accordion';
import { CartProvider, useCart } from "react-use-cart";
import { WishlistProvider, useWishlist } from "react-use-wishlist";
const Shop = () => {
  const [prod, setProd] = useState([])
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const { inWishlist } = useWishlist();
  const [colors, setColors] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=15&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0faf00add0mshd806d32511501edp133b61jsncc44bd5bcc47',
          'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setProd(result.products)
        // console.log(prod);
      } catch (error) {
        console.error(error);
      }
    };

    // const fetchData =async()=>{
    // await  fetch('https://fakestoreapi.com/products')
    //   .then(res=>res.json())     
    //   .then((prod)=> (setProd(prod)))
    // }
    fetchData();
  }, []);
  
  const allColors = [];

 
  // useEffect(() => {
  //   prod.forEach(product => {
  //     if (prod.colors && Array.isArray(prod.colors)) {
  //       prod.colors.forEach(color => {
  //         if (!allColors.includes(color)) {
  //           allColors.push(color);
  //         }
  //       });
  //     }
  //   });
  // }, [])
  
  // console.log(allColors)
  return (
    <div className='mx-auto container d-flex all-shop-f'>
      <div className='filtercol-lg-2 '>
<h3>Filter</h3>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body>
        li1
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Product Type</Accordion.Header>
        <Accordion.Body>
         li2
          </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="2">
        <Accordion.Header>Availability</Accordion.Header>
        <Accordion.Body>
         li2
          </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
      </div>
 <div className='card-and-filter col-lg-10'>
  <div className='col-lg-3'>

  <select id="fruits" name="fruits" className='py-1 px-2'> 
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="banana">Banana</option>
    <option value="grapes">Grapes</option>
    <option value="mango">Mango</option>
  </select>
  </div>
 <div className='d-flex col-lg-12 my-4' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
 <div className='d-flex col-lg-12 my-4' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
  {prod.map((product, index) => (
    <Card className='mx-2 my-2 b-0 card-1' style={{ width: 220 }} key={index}>
      <Card.Img className='b-0 card-product-img' variant="top" src={`https://${product.imageUrl}`} />
      <div className='card-icons'>
              <TiHeartOutline className='i' onClick={()=>{inWishlist(product.id)? alert('Elave edilib !!!'):addWishlistItem(product)}}/>
              <SlBasket className='i' onClick={()=>{addItem(product)}}/>
              <Link className='detail-blog' to={`/proddetail/${product.id}`}> 
              <BsInfoLg className='i'/>
              </Link>

            </div>
      <Card.Body>
        <Card.Title className='blog-card-title'>
          {product.price.current?.text ||null} | {product.price.previous?.text || null}
        </Card.Title>
        <Card.Text>{product.name.slice(0, 50)}...</Card.Text>
      </Card.Body>
    </Card>
  ))}
</div>
 </div>
        </div>
    </div>
  );
};

export default Shop;
