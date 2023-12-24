import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { TiHeartOutline } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import { BsInfoLg } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import { CartProvider, useCart } from "react-use-cart";
import { WishlistProvider, useWishlist } from "react-use-wishlist";
import MoonLoader from "react-spinners/MoonLoader";
import UpIcon from '../../components/Up/UpIcon';
import Pagination from 'react-bootstrap/Pagination';
import './Shop.css';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blueviolet",
};

const Shop = () => {
  const [sortedAscending, setSortedAscending] = useState(false);
  const [sortedDescending, setSortedDescending] = useState(false);

   const [prod, setProd] = useState([]);
  const [searchInp, setSearchInp] = useState('Dress');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const { inWishlist } = useWishlist();
  const [originalProd, setOriginalProd] = useState([]); 
  const [colors, setColors] = useState('');
  const [category, setCategory] = useState('');

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
      const url =`https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=${searchInp.trim().toLocaleLowerCase()}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=282&offset=0`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d7c039792msh52f5470b4237a6dp136b7bjsnddd9c48e087c',
		'X-RapidAPI-Host': 'asos10.p.rapidapi.com'
	}
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  setProd(result.data.products);
  setOriginalProd(result.data.products)
  // console.log(result.data)
  setLoading(false);
  // console.log(originalProd)

  // console.log(result.data.products.brandName)
  // const uniqueBrandNames = [...new Set(result.data.products.map((product) => product.brandName))];
  // setBrandNames(uniqueBrandNames);
} catch (error) {
  console.error(error);
}
     
    };
   
    fetchData();
  }, [searchInp]);
  const FilterAtoZ = () => {
    const sortedProducts = [...prod].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setProd(sortedProducts);
    setSortedAscending(true);
    setSortedDescending(false);
  };

  const FilterZtoA = () => {
    const sortedProducts = [...prod].sort((a, b) => {
      return b.name.localeCompare(a.name);
    });

    setProd(sortedProducts);
    setSortedAscending(false);
    setSortedDescending(true);
  };
  const FilterDiscountedProd = () => {
    const discountedProd = prod.filter(
      (filteredProdByColor) =>
        parseFloat(filteredProdByColor.price.current.value) <
        parseFloat(filteredProdByColor.price.previous.value)
    );
    console.log(discountedProd);
    setProd(discountedProd);
  };
  const filterColor=(color)=>{
    setColors(color)
    let filterByColor=originalProd
    if(color){
       filterByColor=originalProd.filter(filteredProdByColor=>filteredProdByColor.colour.toLowerCase()==color.toLowerCase())
      
    }
    setProd(filterByColor)

  }

  return (
    <div className='mx-auto container  all-shop-f'>
   <div className='filter-accordion column'> 
   <h3 style={{textAlign:'center'}}>Filter</h3>
   <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filter by Alphabet</Accordion.Header>
        <Accordion.Body>
         <button className='filter-btn' onClick={()=>{FilterAtoZ()}}>From A to Z</button>
         <button className='filter-btn' onClick={()=>{FilterZtoA()}}>From Z to A</button>
        
        </Accordion.Body>
      </Accordion.Item>
     
      <Accordion.Item eventKey="1">
        <Accordion.Header>Filter by Color</Accordion.Header>
        <Accordion.Body >
          <button name="" id="" style={{backgroundColor:'black',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('black')}}/>
          {/* <button name="" id="" style={{backgroundColor:'leopard',width:25,height:25}} onClick={()=>{filterInStock('leopard')}}/> */}
          <button name="" id="" style={{backgroundColor:'pink',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('pink')}}/>
          <button name="" id="" style={{backgroundColor:'green',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('green')}}/>
          <button name="" id="" style={{backgroundColor:'gray',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('gray')}}/>
          <button name="" id="" style={{backgroundColor:'blue',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('blue')}}/>
          <button name="" id="" style={{backgroundColor:'red',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('red')}}/>
          <button name="" id="" style={{backgroundColor:'white',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('white')}}/>
          <button name="" id="" style={{backgroundColor:'purple',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('purple')}}/>
          <button name="" id="" style={{backgroundColor:'#EFA2B0',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('Rose')}}/>
           <button name="" id="" style={{backgroundColor:'silver',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('silver')}}/>
          <button name="" id="" style={{backgroundColor:'#DCD0BA',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('Light gold')}}/>
          <button name="" id="" style={{backgroundColor:'orange',width:50,height:30,margin:'0 2px',border:'1px solid #c6c6c6'}} onClick={()=>{filterColor('Orange/Pink')}}/>
       





       
        </Accordion.Body>
        
      </Accordion.Item>
    </Accordion>
    <button className='filter-btn' onClick={()=>{FilterDiscountedProd()}}>Discount product </button>
   </div>
      <div className='card-and-filter col-lg-10'>
    
        <div className=' col-lg-12 my-4' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div className='d-flex col-lg-12 my-4 card-all-on-mobile justify-content-center' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
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
             <div className='m-10-auto index-p  col-12  mx-auto w-25 '>
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
  <UpIcon/>

    </div>
  );
};

export default Shop;
