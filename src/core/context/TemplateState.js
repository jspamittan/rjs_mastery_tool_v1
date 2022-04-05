import { useState, createContext } from 'react';

export const ContentContext = createContext();
export const ContentProvider = (props) => {
     const [contents, setContents] = useState([{
                id:100, 
                ContentNum:"CNT-000000001", 
                ContentName:'Survey 1'
            },
         ]);

    return ( 
        <ContentContext.Provider value={[contents, setContents]} > 
            {props.children}
        </ContentContext.Provider>
    )
    /** */
}