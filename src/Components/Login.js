import React, { useState } from 'react'
import { auth } from '../Config/Config'
import { Link } from 'react-router-dom'
import logostore from '../images/logostore.png'
import { Footer } from './Footer';
import { Navbar } from './Navbar';



export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

    return (
        <>
         <Navbar/>

            <div className='row my-5'>
            <div class="col-sm-3"></div> 
            <br />
            <div class="col-sm-6">
            <h2>Login</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={login}>
             
            
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
                
                
            </form>
            
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            <span>Don't have an account? Register
                <Link to="signup"> Here</Link>
            </span>
           </div>
            <div class="col-sm-3"></div>
            </div>
    
       
        <div className='pie'>
            <Footer/>
        </div>
        </>
    )
}
