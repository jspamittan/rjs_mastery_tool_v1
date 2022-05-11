import { useState, createContext } from 'react'

export const PollContext = createContext();

export const PollProvider = (props) => {
    const [polls, setPolls] = useState([
        {id:'1', name:'TMP-2394391'},
        {id:'2', name:'TMP-1939483'},
    ]);

    return(
        <PollContext.Provider value={[polls, setPolls]}>
            {props.children}
        </PollContext.Provider> 
    )
}
