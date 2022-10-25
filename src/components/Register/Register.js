import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
// import "./Login.css"

const Register = () => {
    const {createUser} = useContext(AuthContext)

    // const [userInfo, setUserInfo] = useState({
    //     email: "",
    //     password: ""
    // });

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        // createUser(userInfo.email, userInfo.password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user)
        // })
        // .catch(error => console.error(error))

        createUser(email, password)
        .then(r => {
            const user = r.user;
            console.log(user)
        })
        .catch(e => console.error(e))
    }

    return (
        <div className='login'>
        <div className="bg-white shadow text-center login-item rounded mt-3 mx-auto position-absolute top-50 start-50 translate-middle">
            <h1 className='text-center'>Register</h1>
            <form onSubmit={handleSubmit} className='mt-5'>
            <input name="name" type="text" placeholder='Name' className='form-control d-inline-block w-100 my-3 border-0 border-bottom text-muted' />
            <input name="email" type="email" placeholder='Email' className='form-control d-inline-block w-100 my-3 border-0 border-bottom text-muted' />
            <input name="password" type="password" placeholder='Password' className='form-control d-inline-block w-100 border-0 border-bottom text-muted' />
            <input type="submit" value="Sign Up" className='bg-none btn-submit mt-4 w-100 border-0 text-white py-2 rounded' />

            </form>
            <p className='mt-5'>Already have an account?
                <Link to="/login" className='fw-bold'> Login</Link>
            </p>
        </div>
    </div>
    );
};

export default Register;