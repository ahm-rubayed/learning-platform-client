import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='login'>
            <div className="bg-white shadow text-center login-item rounded mt-3 mx-auto position-absolute top-50 start-50 translate-middle">
                <h1 className='text-center'>Login</h1>
                <form className='mt-5'>
                <input type="email" placeholder='Email' className='form-control d-inline-block w-100 my-3 border-0 border-bottom text-muted' />
                <input type="password" placeholder='Password' className='form-control d-inline-block w-100 border-0 border-bottom text-muted' />
               <Button className='btn-submit mt-4 w-100'>
                <Link className='text-decoration-none text-white text-uppercasen'>Login</Link>
               </Button>
                </form>
                <p className='mt-5'>Don't have an account? 
                    <Link to="/register" className='fw-bold'> Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;