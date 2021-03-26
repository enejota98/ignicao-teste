import React from 'react'
import Rating from '@material-ui/lab/Rating'

import './styles.css'

function RatingStar(){
    return(
        <div className="rating">
            <h3>Avaliação</h3>
            <Rating
                default-value={2}
                size="large"
            />
        </div>
    )
}
export default RatingStar