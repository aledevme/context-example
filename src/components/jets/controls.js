import React, { useContext } from 'react'
import {JetContext} from '../../context/JetContext'
const Controls = () => {
    const {screen, setScreen} = useContext(JetContext)
    return (
        <div>
            {screen}
        </div>
    )
}

export default Controls