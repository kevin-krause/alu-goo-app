import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        identification: ''
    })

    const [isCnpj, setIsCnpj] = useState(false)
    const [buttonText, setButtonText] = useState('Cadastrar ✨')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
        console.log(value)
    }

    const handleIdentificationChange = (identifier: string) => {
        setIsCnpj(identifier === 'cnpj')
        setFormData(prevData => ({
            ...prevData,
            identification: ''
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
            // ... (rest of the code)
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error)
        }
    }

    const onCadastro = () => {
        navigate('/', { replace: true })
        console.log('Form Data:', formData)
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
                        // placeholder="Nome Completo"
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
                    <h5>Email</h5>
                    <input
                        type="email"
                        name="email"
                        // placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <h5>Senha</h5>
                    <input
                        type="password"
                        name="password"
                        // placeholder="Senha"
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
                        onChange={event => {
                            const { value } = event.target
                            // Remove non-numeric characters
                            const cleanedValue = value.replace(/\D/g, '')
                            setFormData(prevData => ({
                                ...prevData,
                                identification: cleanedValue
                            }))
                        }}
                    />
                    <button
                        id="submitBtn"
                        type="submit"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        className="button"
                        onClick={onCadastro}
                    >
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
