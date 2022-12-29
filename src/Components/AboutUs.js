import React, { useState } from 'react'
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom'
import logostore from '../images/logostore.png'
import { Footer } from './Footer';
import dogbanner from '../images/dogbanner.jpg'


export const AboutUs = (props) => {
    return (
        <>
         <Navbar/>
         <div className="about">
            <h1>Family Bussine located in Miami FL</h1>

             <p className='parrafo'> We love pets and that is why we are always motivated to provide the best service to our customers and bring happiness to our friends at home, feeling comfortable with our clothes and enjoying our toys.</p>
            
              <img src={dogbanner} alt=""style={{width:1500, height:450}} />
             
         </div>
          <div className='pie'>
            <Footer/>
        </div>
        </>

    )
}