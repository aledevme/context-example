import React from 'react'
import FormFlight from '../../components/flights/form'

const AddFlight = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-row w-full">
                <div className="w-1/2 py-2 px-2">
                    <label>Departure</label>
                    <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                    <label>Hour</label>
                    <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                </div>
                <div className="w-1/2 py-2 px-2">
                    <label>Arrival</label>
                    <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                    <label>Hour</label>
                    <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                </div>
                <div className="w-1/2 py-2 px-2">
                    <label>Airline</label>
                    <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                    <label>Price</label>
                    <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                </div>
            </div>
            <div className="w-full flex flex-col mt-3">
                <div>
                    <div className="flex justify-between px-2">
                        <div className="text-3xl">
                            Stops
                        </div>
                        <button className="bg-blue-700 opacity-80 text-white px-8 rounded">
                            Add
                        </button>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="w-1/2 py-2 px-2">
                            <label>Country</label>
                            <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                        </div>
                        <div className="w-1/2 py-2 px-2">
                            <label>Hour of arrival</label>
                            <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                        </div>
                        <div className="w-1/2 py-2 px-2">
                            <label>Hour of departure</label>
                            <input className="bg-gray-100 px-2 rounded py-1 w-full my-2"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="border-b w-full border-gray-200">
                        <table className="table-auto border-collapse w-full">
                            <thead>
                                <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                                    <th className="px-4 py-2">
                                        Country
                                    </th>
                                    <th className="px-4 py-2">
                                        Hour of arrival
                                    </th>
                                    <th className="px-4 py-2">
                                        Hour of departure
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">
                                <tr className="border-b border-gray-200 py-10">
                                    <td className="px-4 py-4">Hey</td>
                                    <td className="px-4 py-4">Hey</td>
                                    <td className="px-4 py-4">Hey</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default AddFlight