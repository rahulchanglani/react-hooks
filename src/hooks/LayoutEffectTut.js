import React, { useEffect, useRef, useLayoutEffect } from 'react'

const LayoutEffectTut = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log('calling use layout effect', inputRef.current.value)
    }, []); // called before the stuff is rendered

    useEffect(() => {
        console.log('calling use effect', inputRef.current.value)
        inputRef.current.value = "HELLO"
    }, []); // called before the stuff is rendered

    return <div className='layoutEffect'>
        <input ref={inputRef} type='text' value="RC" />
    </div>
}

export default LayoutEffectTut;