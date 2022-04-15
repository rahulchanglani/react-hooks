import React, { createContext, useState } from "react";
import User from './User';
import Login from './Login';

// used instead of passing props through layers of components. Context is used which is defined in parent component

export const AppContext = createContext(null)

const ContextTut = () => {
    const [username, setUsername] = useState('')

    return (
        <AppContext.Provider value={{username, setUsername}}>
            <div>
                <Login />
                <User />
            </div>
        </AppContext.Provider>
    )
}

export default ContextTut