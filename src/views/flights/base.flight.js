import React, { useContext } from 'react'
import {FlightContext} from '../../context/FlightContext'
import Controls from '../../components/controls'
import {views} from '../../routes/routes'


const BaseFlight = () => {
    const {screen} = useContext(FlightContext)
    
    const renderView = (screenIndex) => {
        // switch(screenIndex){
        //     case 0:
        //         return <Flights/>
        //     case 1:
        //         return <AddFlight/>
        //     case 2:
        //         return <SearchFlights/>
        //     case 3:
        //         return <DetailFlight/>
        //     default:
        //         <div>
        //             <p>We didn't found this view</p>
        //         </div>
        // }
        return views[screenIndex]

    }

        
    return <div className="">
        <Controls/>
        {renderView(screen)}
    </div>
}

export default BaseFlight