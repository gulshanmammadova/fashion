import React from 'react'

const Profile = () => {
    let myBasket=[];
    let storedData = JSON.parse(localStorage.getItem('userData')) || [] ;
  const foundUserIndex = storedData.findIndex(
      (x) => x.userData.isActive== 1
    );
    if (foundUserIndex !== -1) {
     myBasket=storedData[foundUserIndex].userData.basket;
    } 
  return (
    <div>
{
    // console.log(myBasket)
}

    </div>
  )
}

export default Profile