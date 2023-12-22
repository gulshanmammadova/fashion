import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { TiHeartOutline } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import { BsInfoLg } from "react-icons/bs";
import './Shop.css';
import Accordion from 'react-bootstrap/Accordion';
import { CartProvider, useCart } from "react-use-cart";
import { WishlistProvider, useWishlist } from "react-use-wishlist";
import MoonLoader from "react-spinners/MoonLoader";
import Pagination from 'react-bootstrap/Pagination';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blueviolet",
};

const Shop = () => {
   const [prod, setProd] = useState([]);
  const [searchInp, setSearchInp] = useState('Dress');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const { inWishlist } = useWishlist();
  const [colors, setColors] = useState([]);
  const itemsPerPage = 20;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = prod.slice(indexOfFirstItem, indexOfLastItem);
  const [selectedPage, setSelectedPage] = useState(1);
  const [brandNames, setBrandNames] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber)
  };
  useEffect(() => {
    const fetchData = async () => {
      const url =`https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=${searchInp.trim().toLocaleLowerCase()}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=94&offset=0`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c52a484041mshddd82f215dd2c8ep1d64f4jsn566933865edc',
		'X-RapidAPI-Host': 'asos10.p.rapidapi.com'
	}
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  setProd(result.data.products);
  setLoading(false);
  // console.log(result.data.products.brandName)
  // const uniqueBrandNames = [...new Set(result.data.products.map((product) => product.brandName))];
  // setBrandNames(uniqueBrandNames);
} catch (error) {
  console.error(error);
}
     
    };
   
    fetchData();
  }, [searchInp]);


  return (
    <div className='mx-auto container d-flex all-shop-f'>
   
      <div className='card-and-filter col-lg-12'>
    
        <div className='d-flex col-lg-12 my-4' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div className='d-flex col-lg-12 my-4' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {loading ? (
              <MoonLoader
                color='#89BC98'
                loading={loading}
                cssOverride={override}
                size={30}
                margintop={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              currentItems.map((product, index) => (
                <Card className='mx-2 my-2 b-0 card-1' style={{ width: 220 }} key={index}>
                  <Card.Img className='b-0 card-product-img' variant="top" src={`https://${product.imageUrl}`} />
                  <div className='card-icons'>
                    <TiHeartOutline className='i' onClick={() => { inWishlist(product.id) ? alert('Elave edilib !!!') : addWishlistItem(product) }} />
                    <SlBasket className='i' onClick={() => { addItem(product) }} />
                    <Link className='detail-blog' to={`/proddetail/${product.id}`}>
                      <BsInfoLg className='i' />
                    </Link>
                  </div>
                  <Card.Body>
                    <Card.Title className='blog-card-title'>
                    <del style={{fontSize:13}}>{product.price.previous.value !== product.price.current.value ? product.price.previous.text : null}</del>
                    <span className="discounted-price mx-2">
            <span style={{fontSize:23}}>{product.price.current.text}</span>
          </span>
                    </Card.Title>
                    <Card.Text>{product.name.slice(0, 50)}...</Card.Text>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
             <div className='m-10-auto'>
        {Array.from({ length: Math.ceil(prod.length / itemsPerPage) }, (_, index) => (
          <button
            className={selectedPage === index + 1 ? 'pageIndex selected-page' : 'pageIndex'}
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
