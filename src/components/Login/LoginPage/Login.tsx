import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Form Data:', formData)
        onLogin() // Call the onLogin function here
    }

    const onLogin = () => {
        navigate('/', { replace: true })
    }

    return (
        <div className="containerLogin">
            <div className="subContainer">
                <div className="loginBox">
                    <div className="form">
                        <h3>Log in</h3>
                        <form className="formInputs" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <button id="submitBtn" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
