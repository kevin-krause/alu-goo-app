import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Login from '../Login/LoginButton'
import AddItens from '../AddItens/AddItens'

import { FaSearch, FaBoxOpen } from 'react-icons/fa'
import { BsFillTagFill } from 'react-icons/bs'
import { RiServiceFill } from 'react-icons/ri'
import { AiFillHome } from 'react-icons/ai'

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
                <Link to="/">
                    <BsFillTagFill className="iconHeader" />
                    <>Home</>
                </Link>
                <Link to="/">
                    <FaBoxOpen className="iconHeader" />
                    <>Itens</>
                </Link>
                <Link to="/">
                    <RiServiceFill className="iconHeader" />
                    <>Serviços</>
                </Link>
                <Link to="/">
                    <AiFillHome className="iconHeader" />
                    <>Espaços</>
                </Link>
            </div>
        </div>
    )
}

export default Header
