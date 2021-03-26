import React, { useState } from 'react'

import './styles.css'

function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    return(
        <div className="search-bar">
            <input
                type="text" 
                placeholder="Buscar"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    )
}


export default SearchBar;