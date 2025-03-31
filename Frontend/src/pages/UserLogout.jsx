import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserLogout = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserDataContext)
    const token = localStorage.getItem('token')

    useEffect(() => {
        const logout = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (response.status === 200) {
                    localStorage.removeItem('token')
                    setUser(null)
                    navigate('/login')
                }
            } catch (error) {
                console.error(error)
                navigate('/login')
            }
        }

        logout()
    }, [])

    return <div>Logging out...</div>
}

export default UserLogout
