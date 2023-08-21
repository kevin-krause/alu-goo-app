import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const Cadastro: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        identification: '',
        isCnpj: false
    })

    const [buttonText, setButtonText] = useState('Cadastrar ✨')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleIdentificationChange = (identifier: string) => {
        setFormData(prevData => ({
            ...prevData,
            isCnpj: identifier === 'cnpj',
            identification: ''
        }))
    }

    const handleDocumentTypeChange = (identifier: string) => {
        setFormData(prevData => ({
            ...prevData,
            isCnpj: identifier === 'cnpj',
            identification: '',
            identifier // Add this line to set the selected identifier (cnpj or cpf)
        }))
    }

    const handleMouseOver = () => {
        setButtonText('Pronto para cadastrar 👍')
    }

    const handleMouseOut = () => {
        setButtonText('Cadastrar ✨')
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Form Data:', formData)

        try {
            const userData = {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
                identification: formData.identification
            }

            // requisição para a API de cadastro
            // await fetch('sua_url_da_api', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(userData)
            // })
            onCadastro()
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error)
        }
    }

    const onCadastro = () => {
        navigate('/', { replace: true })
    }

    return (
        <div className="containerCadastro">
            <div className="formCadastro">
                <h3>Cadastro</h3>
                <form className="formInputsCadastro" onSubmit={handleSubmit}>
                    <h5>Nome Completo</h5>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nome Completo"
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
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
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <h5>Documento </h5>
                    <div className="identificationToggle">
                        <button
                            type="button"
                            onClick={() => handleIdentificationChange('cnpj')}
                            className="toggleIdentification"
                        >
                            CNPJ
                        </button>
                        <button
                            type="button"
                            onClick={() => handleIdentificationChange('cpf')}
                            className="toggleIdentification"
                        >
                            CPF
                        </button>
                    </div>
                    <input
                        type="number"
                        className="identification"
                        placeholder={formData.isCnpj ? 'CNPJ' : 'CPF'}
                        value={formData.identification}
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
            </div>
        </div>
    )
}

export default Cadastro
