import React from 'react'
import './Home.css'
import Cards from '../Cards/Cards'
import Header from '../Header/Header'

const listaCardsTemp = [
    {
        title: 'Volvo XC60 T5 RDesign- TOP',
        address: 'Porto Alegre',
        avaliable: '20/12/2023',
        price: 103000,
        image: 'https://img.olx.com.br/images/45/455332547318913.jpg'
    },
    {
        title: 'Volvo XC60 T5 RDesign- TOP',
        address: 'Porto Alegre',
        avaliable: '20/12/2023',
        price: 103000,
        image: 'https://img.olx.com.br/images/45/455332547318913.jpg'
    },
    {
        title: 'Volvo XC60 T5 RDesign- TOP',
        address: 'Porto Alegre',
        avaliable: '20/12/2023',
        price: 103000,
        image: 'https://img.olx.com.br/images/45/455332547318913.jpg'
    },
    {
        title: 'Volvo XC60 T5 RDesign- TOP',
        address: 'Porto Alegre',
        avaliable: '20/12/2023',
        price: 103000,
        image: 'https://img.olx.com.br/images/45/455332547318913.jpg'
    },
    {
        title: 'Volvo XC60 T5 RDesign- TOP',
        address: 'Porto Alegre',
        avaliable: '20/12/2023',
        price: 103000,
        image: 'https://img.olx.com.br/images/45/455332547318913.jpg'
    },
    {
        title: 'Volvo XC60 T5 RDesign- TOP',
        address: 'Porto Alegre',
        avaliable: '20/12/2023',
        price: 103000,
        image: 'https://img.olx.com.br/images/45/455332547318913.jpg'
    },
]

const Home: React.FC = (props: any) => {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }

    return (
        <div className='cardBackground'>
            <Header />
            <div className="container">
                <div className="cards">
                    {listaCardsTemp.map((card, index) => (
                        <Cards
                            key={index}
                            title={card.title}
                            address={card.address}
                            avaliable={card.avaliable}
                            price={formatCurrency(card.price)}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
