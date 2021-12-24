import React , {useContext} from 'react'
import {LoginContext} from './LoginContext'

const Login = () => {

    const {setuserName , setShowProfile} = useContext(LoginContext);
    
    //    const [Password , setPassword ] = useState("")

    return (
        <>
            <input 
            type="text" 
            placeholder="enter name" 
            onChange={(evenet) => {setuserName(evenet.target.value)}}>

            </input>
            <input 
            type="Password" 
            placeholder="enter Password">

            </input>

            <button onClick={() => {setShowProfile(true)}}>submit</button>
        </>
    )
}

export default Login
