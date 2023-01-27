import React, { useState } from 'react'
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom'
import logostore from '../images/logostore.png'
import { Footer } from './Footer';
import aboutusbanner from '../images/aboutusbanner.jpg'


export const AboutUs = (props) => {
    return (
        <>
         <Navbar/>
         <div className="about">
            <h1>Family Business located in Miami FL</h1>
             <p className='parrafo'> We love pets and that is why we are always motivated to provide the best service to our customers and bring happiness to our friends at home, feeling comfortable with our clothes and enjoying our toys.</p>    
          
             <div className="carousel">
      <img src={aboutusbanner} className="d-block w-100" alt="..."/>
    </div>
</div>
          <div className='pie'>
            <Footer/>
          </div>
        </>
    )
}