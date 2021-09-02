import React, {useState, createContext} from 'react'

//creating context provider
const JetContext = createContext()

//making provider as parent component
const JetProvider = props => {
    const [jets, setJets] = useState([])

    return (
        <JetContext.Provider value={[jets, setJets]}>
            {props.children}
        </JetContext.Provider>
    )
}

//export provider context and provider component
export {
    JetContext,
    JetProvider
}