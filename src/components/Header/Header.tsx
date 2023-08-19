import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Login from '../Login/LoginButton'

const Header = () => {
    return (
        <div className="container">
            <div className="mainHeader">
                <div>alu.goo</div>
                <div className="searchbar">
                    <img src="/" alt="🔍" />
                    <input type="text"></input>
                </div>
                <button className="button">Anuncie seus itens</button>
                <Login />
            </div>

            <div className="cabecalho">
                <Link to="/">Home</Link>
                <a href="/">Booking and Checkout</a>
                <a href="/">Listing Page</a>
                <a href="/">Wishlist</a>
            </div>
        </div>
    )
}

export default Header
