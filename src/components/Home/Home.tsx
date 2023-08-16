import Cards from '../Cards/Cards'
import Header from '../Header/Header'
import './Home.css'

import React from 'react'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="cards">
                    <Cards />
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Home
