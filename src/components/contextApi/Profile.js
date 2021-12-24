import React , {useContext} from 'react'
import {LoginContext} from './LoginContext'


const Profile = () => {

const {userName} =  useContext(LoginContext)
    
    return (
        <>

            <h1>Profile</h1>

            <h1>username : {userName}</h1>



        </>
    )
}

export default Profile
