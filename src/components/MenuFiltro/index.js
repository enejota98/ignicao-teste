import React from 'react'

import Price from './components/Price'
import Value from './components/Value'
import Category from './components/Category'
import RatingStar from './components/RatingStar'

import './styles.css'


function MenuFiltro() {
    function handleClearFilters(){
        
    }

    return (
        <div className="menu-filtro">
            <form onSubmit={handleClearFilters} className="menu-filtro-container">
                <Price />
                <div className="line"></div>
                <Value />
                <div className="line"></div>
                <Category />
                <div className="line"></div>
                <RatingStar />

                <button className="btn-submit" type="submit">
                    LIMPAR FILTROS
                </button>
            </form>
        </div>
    )
}

export default MenuFiltro;