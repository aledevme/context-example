import React from 'react'
const InformationFlight = () => {
    return (
        <div></div>
    )
}
const ItemFlight = () => {
    return (
        <div className="shadow p-8">
            <div className="flex justify-between">
                <div>
                    <p className="font-semibold text-gray-400"> 
                        SFO
                    </p>
                    <p className="text-blue-500 font-semibold">
                        13:00
                    </p>
                </div>
                <div className="text-gray-400">
                2 hrs 10 min
                </div>
                <div>
                    <p className="font-semibold text-gray-400"> 
                        SFO
                    </p>
                    <p className="text-blue-500 font-semibold">
                        13:00
                    </p>
                </div>
            </div>
            <div className="flex justify-center text-gray-400 font-normal">
                Non-stop
            </div>
            <div className="w-full bg-gray-200 my-5 h-0.5"/>
            <div className="flex justify-between">
                <div>
                    GE 189
                </div>
                <div className="text-gray-400">
                    Flight info
                </div>
                <div>
                    $803
                </div>
            </div>
        </div>
    )
}

export default ItemFlight