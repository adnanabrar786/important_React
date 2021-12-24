import React , {useReducer} from 'react'

const ReducerHandle = () => {

    const initialState = 0;


        // action ka jo work hy wo dispatch k andr hota hy
    // state means register hy jo jo kam hogay 
    // action jo kaam kar raha ho wo hoga
    // state ko ruturn karna zarori hy q k current state wohi say aey gi
    const reducer = (state , action) => {
        switch(action) {
            case 'increment' :
                return state + 1 
            case 'decrement' :
                return state - 1
            case 'reset' :
                return initialState
            default :
                 return state  
        }
    }
 

    //  usereducer banaya hy ye state jaisa hy 
//  count mai data show hoga
//  intialize mai shuru mai jo value hogi wo aey gi
    const [count , dispatch] = useReducer(reducer ,initialState )




   // dispatch ka dosray way hy ye look on decrement and reset butoon wahn p first way hy
  const  inc = () => {
        dispatch('increment')
    }

    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={inc}>Inc</button>
            <button onClick={() => dispatch('decrement')}>Dec</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerHandle
