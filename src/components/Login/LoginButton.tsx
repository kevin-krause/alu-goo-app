import React from 'react'
import './LoginButton.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Link to="/login" className="login">
            login
        </Link>
    )
}

export default Login
