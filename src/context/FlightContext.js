import React, {useState, createContext, useReducer} from 'react'
import {routes} from '../routes/routes'
//creating context provider
const FlightContext = createContext()

const initalState = {
    flights : [],
    screen : 0
}

const reducer = () => {
    
}

//making provider as parent component
const FlightProvider = props => {
    
    const [flights, setFlights] = useState([])
    const [screen, setScreen] = useState(0)
    
    const options = routes
    
    return (
        <FlightContext.Provider 
        value={{
            flights, setFlights, 
            screen, setScreen, 
            options
        }}>
            {props.children}
        </FlightContext.Provider>
    )
}

//export provider context and provider component
export {
    FlightContext,
    FlightProvider
}