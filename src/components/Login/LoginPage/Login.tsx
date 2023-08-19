import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [buttonText, setButtonText] = useState('Login ✨')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleMouseOver = () => {
        setButtonText('Bom te ver de novo 👋🏽')
    }

    const handleMouseOut = () => {
        setButtonText('Login ✨')
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Form Data:', formData)

        try {
            const userData = {
                email: formData.email,
                password: formData.password
            }

            // Aqui você pode realizar a requisição para a API, por exemplo usando fetch ou axios
            // await fetch('sua_url_da_api', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(userData)
            // })

            // Depois de enviar para a API, você pode redirecionar o usuário para a próxima página
            onLogin()
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error)
        }
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
                            <h5>Email</h5>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <h5>Senha</h5>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <button
                                id="submitBtn"
                                type="submit"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                className="button"
                            >
                                {buttonText}
                            </button>
                        </form>
                        <Link to="/singup" className="createAcountLogin">
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
