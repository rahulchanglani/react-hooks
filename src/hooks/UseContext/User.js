import React, { useContext } from "react";
import { AppContext } from "./ContextTut";

const User = () => {

    const {username} = useContext(AppContext)

    return (
        <div>
            <b>User : {username}</b>
        </div>
    )
}

export default User