import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const onLogin = (event: any) => {
        event.preventDefault()
        navigate('/', { replace: true })
    }

    return (
        <div className="containerLogin">
            <div className="subContainer">
                <div className="loginBox">
                    <div className="form">
                        <h3>Log in</h3>
                        <form className="formInputs">
                            <input type="email" placeholder="<EMAIL>" />
                            <br />
                            <input type="password" />
                            <button id="submitBtn">
                                <a
                                    onClick={event => onLogin}
                                    href="/"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}
                                >
                                    Submit
                                </a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
