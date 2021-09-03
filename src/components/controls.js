import React, { useContext } from 'react'
import {FlightContext} from '../context/FlightContext'
const Controls = () => {
    const {screen, setScreen} = useContext(FlightContext)
    return (
        <div>
            <div className="flex flex-row">
                <div className="px-6 py-3 rounded-tl rounded-tr bg-blue-800">
                    Flights
                </div>
                <div className="px-6 py-3 rounded-tl rounded-tr bg-blue-800">
                    Add flight
                </div>
                <div className="px-6 py-3 rounded-tl rounded-tr bg-blue-800">
                    Search flight
                </div>
            </div>
        </div>
    )
}

export default Controls