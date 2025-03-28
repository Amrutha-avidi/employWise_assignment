import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        console.log("login clicked")
        navigate('/home')
    }
    return (
        <div>
            <input type="email" />
            <input type="password" />
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default Login