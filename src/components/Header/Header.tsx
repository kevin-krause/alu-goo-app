import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Login from '../Login/LoginButton'
import { FaSearch } from 'react-icons/fa'
import AddItens from '../AddItens/AddItens'

const Header = () => {
    return (
        <div className="containerHeader">
            <div className="mainHeader">
                <div>alu.goo</div>
                <div className="searchbar">
                    <FaSearch className="searchIcon" />
                    <input
                        type="text"
                        placeholder="O que você quer alugar?"
                    ></input>
                </div>
                <AddItens />
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
