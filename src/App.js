

import AntDesign from './components/ANTDESIGN/AntDesign';
import HandleUseState from './components/HandleUseState'
import HandleUseEffect from './components/HandleUseEffect'
import Map from './components/Map';

import React , {useState} from 'react';
import Login from './components/contextApi/Login';
import Profile from './components/contextApi/Profile'; 
import {LoginContext} from './components/contextApi/LoginContext';
import ContextApp from './components/contextApi/ContextApp'
import Props  from './components/Props';
import HandleUseRef from './components/HandleUseRef';
import ReducerHandle from './components/Reducerhandle';
import Home from './components/reduxStore/Home';

// 0  P p  " "  ; { - ?  :  [ ]

function App() {

 // const [showProfile , setShowProfile ] = useState(false)

//  const [userName , setuserName ] = useState("")

  return(     
    <>
   <Home />
    </>
  )
};

export default App;

