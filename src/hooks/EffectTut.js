import React, {useEffect, useState} from "react";
import axios from 'axios';


const EffectTut = () => {

    const [data, setData] = useState('');
    const [count, setCount] = useState(0);

    
    const btnClick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                setData(response.data[0].email)
                console.log("API WAS CALLED")
            })
    }, []) // add state variables to watch for this hook. It is optional ([]) which will be called everytime on render change

    return <div>
        Heelow
        <p>{data}</p>
        <p>{count}</p>
        <button onClick={btnClick} >Click ++</button>
    </div>
};

export default EffectTut;