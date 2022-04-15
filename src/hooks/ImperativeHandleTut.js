import React, {useRef} from 'react';
import Button from './Button';

// Imperative Handle hook called whenever we want to call/alter state of a component from outside 

function ImperativeHandleTut() {

    const buttonRef = useRef(null)
    return (
        <div>
            <button onClick={() => buttonRef.current.alterToggle()}>
                Button from Parent
            </button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default ImperativeHandleTut;