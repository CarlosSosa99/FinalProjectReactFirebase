import React, { useContext } from 'react'
import logo from '../images/ecommerce.svg'
import logostore from '../images/logostore.png'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
import { button } from 'bootstrap'
import './styles.css'

export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light">
      <div className="container-fluid">
         <img src={logostore} alt="" style={{width:160,height:160}} href=""/>
        
         {!user &&<> <button className="navbar-toggler" style={{backgroundColor:'#309da4'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon btn"></span>
        </button> </>}
        {!user && <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="" style={{color: '#309da4', fontSize: '1.5rem', }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="login"  style={{color: '#309da4', fontSize: '1.5rem',}}>Login</a>
            </li>
            <li class="nav-item">
             <a className="nav-link" href="signup"  style={{color: '#309da4', fontSize: '1.5rem',}}>Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="AboutUs"  style={{color: '#309da4', fontSize: '1.5rem',}}>About Us</a>
            </li>
          </ul>
        </div> }
        {user &&  <div className='rightside'>
                <span><Link to="/" className='navlink' style={{color:'#309da4'}}>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <span className='no-of-products'>{totalQty}</span>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
      </div> 
    </nav>
    )
}