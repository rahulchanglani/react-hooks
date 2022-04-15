import React, {useRef} from "react";

const RefTut = () => {
    const inputRef = useRef(null);

    const btnClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
    }

    const onInputChange = () => {
        inputRef.current.value = inputRef.current.value.toUpperCase();
    }

    return <div>
        <h1>Pedro</h1>
        <input type="text" placeholder="Ex.." onChange={onInputChange} ref={inputRef} />
        <button onClick={btnClick}> Click here </button>
    </div>
};

export default RefTut;