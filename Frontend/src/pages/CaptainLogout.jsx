import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogout = () => {
    const navigate = useNavigate()
    const { setCaptain } = useContext(CaptainDataContext)
    const token = localStorage.getItem('token')

    useEffect(() => {
        const logout = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (response.status === 200) {
                    localStorage.removeItem('token')
                    setCaptain(null)
                    navigate('/captain-login')
                }
            } catch (error) {
                console.error(error)
                navigate('/captain-login')
            }
        }

        logout()
    }, [])

    return <div>Logging out...</div>
}

export default CaptainLogout
