import React from 'react'
import { useWishlist } from "react-use-wishlist";
import UpIcon from '../../components/Up/UpIcon';
import './WishList.css'
const WishList = () => {
    const {
        isWishlistEmpty,
        totalWishlistItems,
        items,
        removeWishlistItem,
      } = useWishlist();
    
      if (isWishlistEmpty) return <p className='empty-wishlist'>Your wishlist is empty</p>;
    
  return (
        <>
      <h1>Wishlist ({totalWishlistItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} &mdash;
            <button onClick={() => removeWishlistItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
  <UpIcon/>

    </>
  )
}

export default WishList