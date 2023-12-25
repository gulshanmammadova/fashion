import React, { useState, useEffect } from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Link } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import { useCart } from "react-use-cart";
import MoonLoader from "react-spinners/MoonLoader";
import UpIcon from '../../components/Up/UpIcon';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blueviolet",
};

const ProductDetail = () => {
  let [loading, setLoading] = useState(true);
  const { updateItemQuantity, items } = useCart();
  const [first, setFirst] = useState(1);
  const [thisProd, setThisProd] = useState(null);
  const [imgs, setImgs] = useState([]);
  const { id } = useParams();
  const { inCart } = useCart();

  const { addItem } = useCart();
  useEffect(() => {
    const fetchDataByid = async () => {
      const url = `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':  '0faf00add0mshd806d32511501edp133b61jsncc44bd5bcc47',
          'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setThisProd(result);

        if (result && result.media && result.media.images && result.media.images.length > 0) {
          const imagesArray = result.media.images.map((image) => ({
            original: `https://${image.url}`,
            thumbnail: `https://${image.url}`,
          }));

          setLoading(false);
          setImgs(imagesArray);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataByid();
  }, [id]);

  useEffect(() => {
    const cartProduct = items.find(item => item.id === thisProd?.id);
    if (cartProduct) {
      setFirst(cartProduct.quantity);
    }
  }, [items, thisProd]);

  if (!thisProd) {
    return (
      <div className='White sweet-loading'>
        <MoonLoader
          color='#89BC98'
          loading={loading}
          cssOverride={override}
          size={30}
          margin-top={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className='shop-page'>
      <div className="shop-all">
        <div className="shop-page-info ">
          <div className="shop-bread-crump  mx-auto">
          </div>
          <h1 className="fw-bold text text-light">SHOP</h1>
        </div>
      </div>

      <div className="quick-view container">
        <div className="quick-view-img">
          <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
            <ImageGallery items={imgs} />
          </div>
        </div>
        <div className="quick-view-info">
          <h2>{thisProd.name}</h2>
          <del>{thisProd.price.previous.value !== thisProd.price.current.value ? thisProd.price.previous.text : null}</del>
          <span className="discounted-price mx-2">
            <span>{thisProd.price.current.text}</span>
          </span>
          <div className=' info' >
          <p dangerouslySetInnerHTML={{ __html: thisProd && thisProd.description }}>
          </p>
         </div>
       
          <input
            type="number"
            min="1"
            value={first}
            className='count'
            onChange={(e) => setFirst(parseInt(e.target.value))}
          />
          <button
            className="add-to-cart text-decoration-none"
            onClick={() => inCart(thisProd.id) ? updateItemQuantity(thisProd.id, first) : addItem(thisProd, first) }
          >
            ADD TO CART
          </button>
        
          <p>Aviability:{thisProd.isInStock ? 'In Stock' : 'Out Of Stock'}</p>
      {/* {console.log(thisProd)} */}
        </div>
      </div>
  <UpIcon/>

    </div>
  );
};

export default ProductDetail;
