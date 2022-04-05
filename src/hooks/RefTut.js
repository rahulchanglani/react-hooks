import React, {useRef} from "react";

const RefTut = () => {
    const inputRef = useRef(null);

    const btnClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
    }

    return <div>
        <h1>Pedro</h1>
        <input type="text" placeholder="Ex.." onChange={onChange} ref={inputRef} />
        <button onClick={btnClick}> Click here </button>
    </div>
};

export default RefTut;