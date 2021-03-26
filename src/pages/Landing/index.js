import React from 'react'
import './styles.css'

import Card from '../../components/Card'
import MenuFiltro from '../../components/MenuFiltro'
import MenuLateral from '../../components/MenuLateral'
import SearchBar from '../../components/SearchBar'
import Navbar from '../../components/Navbar'

function Landing() {
    return(
        <>
            <div className="lateral-position">
                <MenuLateral />
            </div>
            <div className="landing-container">
                <div className="navbar-position">
                    <Navbar />
                </div>
                <div className="content-position">
                    <div className="filter-position">
                        <h4 className="titles">Filtros</h4>
                        <MenuFiltro />
                    </div>
                    <div className="card-position">
                        <h4 className="titles">200 resultados encontrados</h4>
                        <SearchBar />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Landing