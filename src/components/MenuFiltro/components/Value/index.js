import React, { useState } from 'react'

import { Slider } from '@material-ui/core'

import './styles.css'

function Value() {
    const [val, setVal] = useState([30, 40]);
    const updateRange = (event, newVal) => {
        setVal(newVal);
    }
 
    return (
        <div className="values">
            <div className="values-header">
                <h3>Valores</h3>
                <span>{val[0] +" - "+ val[1]}</span>
            </div>
            <Slider
                value={val}
                onChange={updateRange}
            />
        </div>
    )
}

export default Value;

