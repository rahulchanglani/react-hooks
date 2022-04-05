import React, { useState } from 'react';

const StateTut = () => {
    const [count, setCount] = useState(0);
    const [textVal, setText] = useState("Hello world");

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    const changeText = (event) => {
        const newText = event.target.value;
        setText(newText);
    };

    return <div>
        {count}
        <br />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <hr></hr>

        {textVal}
        <br />
        <input type='text' onChange={changeText} />
    </div>;
}

export default StateTut;