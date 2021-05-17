import { createContext, useState } from "react";

export const Context = createContext();

export const GlobalContext = ({children}) => {
    
    const [nickname, setNickname] = useState("");

    const store = {
        nickname : {get: nickname, set: setNickname}
    };

    return (
        <Context.Provider value={store}>{children}</Context.Provider>
    )
}