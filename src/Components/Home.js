import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Footer } from './Footer';
import { Order } from './ListOrder';
import { Link } from 'react-router-dom'
import Typed from 'react-typed'
import {Banner} from './Banner';

export const Home = ({ user, rol }) => {


    const history = useHistory();
    
    if(rol==='admin'){
        return(
            <div>
            <Navbar user={user} />

            <Order/>
            </div>
        )
    }
    else{
        return (
            <div className='wrapper'>
                <Navbar user={user} />
                <div className='row'>
                    <div className='col-10'>

                    </div>
                    <div className='col-2'>
                    <span><Link to="yourorder" className='navlink' style={{color: '#309da4', fontSize: '1rem',}}>Your Orders</Link></span>
                    </div>
                </div>
                <Typed
          className='typed-text'
          strings={[
            'Pets lover',
            'Trustly service',
            'Best Quality',
            'Guarantee for our customers',
            
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
                 <Banner/>
                <Products />
                <Footer/>
            </div>
        )
    }


}
