import Cards from '../Cards/Cards'
import Header from '../Header/Header'
import './Home.css'

import React from 'react'

const listaCardsTemp = [
    {
        title: 'JBL',
        address: 'Porto Alegre',
        avaliable: '20/12/2023',
        price: 23,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAq5Ub4PE6SNBIdWgp6eK0vCKAmebMvHT_A&usqp=CAU'
    },
    {
        title: 'JBL',
        address: 'Flamengo',
        avaliable: '16/08/2023',
        price: 100.5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMF8ahYLzCNFcRWw9GCP4oN46RXJVoO6P0A&usqp=CAU'
    }
]

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="cards">
                    {listaCardsTemp.map((card, index) => (
                        <Cards
                            key={index}
                            title={card.title}
                            address={card.address}
                            avaliable={card.avaliable}
                            price={card.price}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
