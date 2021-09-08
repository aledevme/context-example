import React, { useContext } from 'react'
import {FlightContext} from '../context/FlightContext'
const Controls = () => {
    const {screen, setScreen, options} = useContext(FlightContext)
    return (
        <div>
            <div className="flex flex-row my-5">
                {
                    options.map((element, index) => <div 
                    onClick={()=> setScreen(index)} 
                    key={index}
                    className={`px-6 cursor-pointer py-3 rounded-tl rounded-tr 
                    ${screen === index ? 'bg-blue-800' : ''}
                    ${screen === index ? 'text-white' : 'text-black'}
                    `}>
                    {element}
                </div>)
                }
            </div>
        </div>
    )
}

export default Controls