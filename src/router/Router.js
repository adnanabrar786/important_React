import React , {Routes as MyRoutes , Route} from "react";
import HandleUseState from "../components/HandleUseState"
import  HandleUseEffect from "../components/HandleUseEffect ";


const Router = () => {
    return (
        <>
           <MyRoutes> 
               <Route path = "/" element = {<HandleUseEffect />} />
               <Route path = "/handlestate" element = {<HandleUseState />} />
        </MyRoutes>
        </>
    )
}

export default Router

 
