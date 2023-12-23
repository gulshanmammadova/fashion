import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import undefinedImg from '../../images/notfound/images.jpg'
import './Profile.css'
const Profile = () => {
  let myBasket = [];
  let storedData = JSON.parse(localStorage.getItem('userData')) || [];
  const foundUserIndex = storedData.findIndex((x) => x.userData.isActive === 1);

  if (foundUserIndex !== -1) {
    myBasket = storedData[foundUserIndex].userData.basket;
  }

  return (
    <div className='container my-4 mx-auto '>
      {myBasket.map((basket, basketNo) => (
        <Accordion key={basketNo} className='accordion-all'>
          <Accordion.Item eventKey={basketNo.toString()}>
            <Accordion.Header>Order: {basketNo+1}</Accordion.Header>
       
           
              <Accordion.Body>
          {/* {console.log(basketItem)} */}
                <Table striped bordered hover>
                <thead>
        <tr>
          <th>#</th>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Product Count</th>
          <th>Product Total Aamount</th>
        </tr>
      </thead>
      <tbody style={{textAlign:'center',alignItems:'center',verticalAlign:'middle'}}>
      {basket.map((basketItem, basketItemNo) => (
        <tr>
          <td>{basketItemNo+1}</td>

          <td>
            <img src={basketItem.imageUrl ? `https://${basketItem.imageUrl}`: undefinedImg} style={{width:100,height:100}} alt="" />
            </td>

          <td>{basketItem.name}</td>
          <td>{basketItem.quantity}</td>
          <td>{(basketItem.price.current.value*basketItem.quantity).toFixed(2)}  $</td>
        </tr>
         ))}
      </tbody>
    </Table>
              </Accordion.Body>
         
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default Profile;
