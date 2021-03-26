import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import produtoImg from '../../assets/images/produto.svg'
import coracaoImg from '../../assets/images/coracao-favorito.svg'
import buyImg from '../../assets/images/shopping-bag.svg'
import starImg from '../../assets/images/star.svg'

function Card(){
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-content">
                    <div className="card-photo">
                        <img src={produtoImg} alt="Produto"/>
                    </div>
                    <div className="card-especific">
                        <h4>FÓRMULA DE LANÇAMENTO</h4>
                        <p className="card-cite">Por <cite>Érico Rocha</cite></p>
                        <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga et temporibus, ad aperiam officia libero mollitia maiores at totam quam perspiciatis debitis voluptatum perferendis suscipit rerum nulla maxime reprehenderit.</p>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="card-analyse">
                    <div className="stars">
                        <div className="stars-container">
                            <p>3.4 <img src={starImg} alt="estrelas"/></p>
                        </div>
                    </div>
                    <p>R$2500</p>
                    <div className="btn-area">
                        <Link to="#" className="btn-like">
                            <img src={coracaoImg} alt="Like"/> AMEI
                        </Link>
                        <Link to="#" className="btn-buy">
                            <img src={buyImg} alt="Comprar"/> COMPRAR
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;