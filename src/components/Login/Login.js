import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
import "./Login.css"

const Login = () => {
    const {login} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value

        console.log(email, pass)
    }


    return (
        <div className='login'>
            <div className="bg-white shadow text-center login-item rounded mt-3 mx-auto position-absolute top-50 start-50 translate-middle">
                <h1 className='text-center'>Login</h1>
                <form onSubmit={handleSubmit} className='mt-5'>
                <input name="email" type="email" placeholder='Email' className='form-control d-inline-block w-100 my-3 border-0 border-bottom text-muted' />
                <input name="password" type="password" placeholder='Password' className='form-control d-inline-block w-100 border-0 border-bottom text-muted' />
                <input type="submit" value="Login" className='bg-none btn-submit mt-4 w-100 border-0 text-white py-2 rounded' />
                </form>
                <p className='mt-5'>Don't have an account? 
                    <Link to="/register" className='fw-bold'> Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;