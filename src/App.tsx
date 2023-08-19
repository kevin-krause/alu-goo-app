import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/LoginPage/Login'
import SignUp from './components/SignUp/SignUp'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/login" Component={Login} />
                <Route path="/singup" Component={SignUp} />
            </Routes>
        </Router>
    )
}

export default App
