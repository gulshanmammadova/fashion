import React from 'react'
import './Basket.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';
import UpIcon from '../../components/Up/UpIcon';
import { useEffect } from 'react';
import {useCart} from 'react-use-cart'
const Basket = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,totalItems,
        cardItems,emptyCart
      } = useCart();
    const [cartData, setCartData] = useState([])
  const calculateItemTotal = (item) => {
    return item.quantity * item.price.current.value;
  };
  // useEffect(() => {
  //   setCatrData()
  // }, [])
  const addToMyCard = () => {
    let storedData = JSON.parse(localStorage.getItem('userData')) || [];
    // console.log(storedData)
    const foundUserIndex = storedData.findIndex((x) => x.userData.isActive === 1);

    if (foundUserIndex !== -1) {
      const currentUserBasket = storedData[foundUserIndex].userData.basket || [];
      let myNewestBasket=[...items]
      const updatedBasket = [...currentUserBasket,myNewestBasket ];

      storedData[foundUserIndex].userData.basket = updatedBasket;
      localStorage.setItem('userData', JSON.stringify(storedData));
      emptyCart();
    window.location.href = '/myaccount';
      return;

    }
    window.location.href = '/login';
  };
  const calculateCartTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += calculateItemTotal(item);
    });
    return total;
  };
      if (isEmpty) return <p className='empty-wishlist'>Your cart is empty</p>;
      
  return (

<div className='container-card  my-4'>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
      {items.map((item) => (
          <li key={item.id}>
            {/* <img src={`https://${item.imageUrl}`} alt="" /> */}
            {item.quantity} x {item.name} &mdash;
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <p>Total: {calculateCartTotal().toFixed(2)} $</p>
      <button onClick={()=>addToMyCard()}>Shop Now</button>
      {/* {console.log(items)} */}
  <UpIcon/>

    </div>
  )
}

export default Basket