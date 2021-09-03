import React, {useState, createContext} from 'react'
import routes from '../routes/routes'
//creating context provider
const FlightContext = createContext()

//making provider as parent component
const FlightProvider = props => {
    
    const [flights, setFlights] = useState([])
    const [screen, setScreen] = useState(0)
    
    const options = routes
    
    return (
        <FlightContext.Provider value={{flights, setFlights, screen, setScreen, options}}>
            {props.children}
        </FlightContext.Provider>
    )
}

//export provider context and provider component
export {
    FlightContext,
    FlightProvider
}