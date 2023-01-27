import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../Config/Config'
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom'
import { Footer } from './Footer';


export const YourOrder = ({email, user}) => {
  let cont = 0
  let orders = []
  const [shows, setShows] = useState([]);
  const history = useHistory();
  db.collection('Buyer-info').where("BuyerEmail", "==", email).get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        orders.push(doc.data())


      });
      setShows(orders)
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
    
    return (
      <>
      <Navbar user={user} />
        {shows.length !== 0 && <h1>Your Orders</h1>}
            <div className='products-container'>
                {shows.length === 0 && <div>slow internet...no orders to display</div>}
                {shows.map(order => (
                    <div className='product-card'>

                        <div className='product-name'>
                          <h4> costumer name: {order.BuyerName} </h4> 
                            {console.log(order)}
                        </div>
                        <div className='product-name'>
                        <h4>product price: ${order.BuyerPayment.toFixed(2)}</h4>
                        </div>
                        <div className='product-name'>
                        <h4>  phone: {order.BuyerCell}</h4>
                        </div>
                        <div className='product-name'>
                        <h4>  order status: {order.status}</h4>
                        </div>
                    </div>
                ))}
            </div>



            <Footer/>
      </>
    ) 
  
    
}

