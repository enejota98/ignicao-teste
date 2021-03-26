import React from 'react'

import './styles.css'

function Price(){
    return(
        <div className="prices">
            <h3>Preços</h3>
            <div>
                <input type="radio" id="dez" name="brand" value="dez"/>
                <label htmlFor="dez">R$10</label>
            </div>
            <div>
                <input type="radio" id="dez-cem" name="brand" value="dez-cem"/>
                <label htmlFor="dez">R$10-R$100</label>
            </div>
            <div>
                <input type="radio" id="cem-quinhentos" name="brand" value="cem-quinhentos"/>
                <label htmlFor="dez">R$100-R$500</label>
            </div>
            <div>
                <input type="radio" id="quinhentos" name="brand" value="quinhentos"/>
                <label htmlFor="quinhentos">R$500</label>
            </div>
            <div>
                <input type="radio" id="all" name="brand" value="alls"/>
                <label htmlFor="all">Todos</label>
            </div>
        </div>
    )
}

export default Price