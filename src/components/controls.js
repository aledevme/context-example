import React, { useContext } from 'react'
import {FlightContext} from '../context/FlightContext'
const Controls = () => {
    const {screen, setScreen, options} = useContext(FlightContext)
    return (
        <div>
            <div className="flex flex-row">
                {
                    options.map((element, index) => <div onClick={()=> setScreen(index)} className={`px-6 cursor-pointer py-3 rounded-tl rounded-tr ${screen === index ? 'bg-blue-800' : ''}`}>
                    {element}
                </div>)
                }
            </div>
        </div>
    )
}

export default Controls