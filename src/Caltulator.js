import React from 'react'
import Buttons from './Buttons'

export default function Caltulator() {
    return (
        <div className="cal-container">
            <div className="cal-buttons">
                <input class="input-number" type="text" placeholder="Enter number(s)"/>
                <Buttons></Buttons>
            </div>  
        </div>
    )
}
