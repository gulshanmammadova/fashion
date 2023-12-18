import React from 'react'
import './Basket.css'
import {useCart} from 'react-use-cart'
const Basket = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
      } = useCart();
    
  const calculateItemTotal = (item) => {
    return item.quantity * item.price.current.value;
  };

  const calculateCartTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += calculateItemTotal(item);
    });
    return total;
  };
      if (isEmpty) return <p>Your cart is empty</p>;
  return (

<>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
      {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <p>Total: {calculateCartTotal()} $</p>
    </>
  )
}

export default Basket