import React  from 'react'

import './styles.css'

function Category() {
    return(
        <div className="categories">
            <h3>Categorias</h3>
            <div className="category">
                <input type="checkbox" name="category"/>
                <span>Érico Rocha</span>
            </div>
            <div className="category">
                <input type="checkbox" name="category"/>
                <span>Desafio 6 em 7</span>
            </div>
            <div className="category">
                <input type="checkbox" name="category"/>
                <span>Fórmula de lançamento</span>
            </div>
            <div className="category">
                <input type="checkbox" name="category"/>
                <span>KlickPages</span>
            </div>
            <div className="category">
                <input type="checkbox" name="category"/>
                <span>Audios</span>
            </div>
        </div>
    )
}

export default Category