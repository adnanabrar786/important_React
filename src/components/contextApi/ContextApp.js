import React, { useState } from 'react'
import { LoginContext } from './LoginContext'
import Login from './Login'
import Profile from './Profile'

const ContextApp = () => {

    const [ShowProfile, setShowProfile] = useState(false)
    
    const [userName, setuserName] = useState("")

    return (
        <>

         <LoginContext.Provider value={{userName , setuserName , setShowProfile}}>
             {ShowProfile ?  <Profile />  : <Login />}
         </LoginContext.Provider>   

        </>
    )
}

export default ContextApp
