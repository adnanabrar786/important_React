import React,{useState} from 'react'


const UseStateHook = () => {

    const [count , setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1) }> update useState</button>
        </div>
    )
}

export default UseStateHook
