import React, { useContext } from 'react'
import {JetContext} from '../context/JetContext'
import Controls from '../components/jets/controls'
import Jets from './jets'
import AddJet from './add.jet'
const BaseJets = () => {
    const {screen} = useContext(JetContext)
    
    const renderView = (screenIndex) => {
        switch(screenIndex){
            case 0:
                return <Jets/>
            case 1:
                return <AddJet/>
            default:
                <div>
                    <p>We didn't found this view</p>
                </div>
        }
    }
    
    return <div>
        <Controls/>
        {renderView(screen)}
    </div>
}

export default BaseJets