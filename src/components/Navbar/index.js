import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import emailImg from '../../assets/images/email.svg'
import talkImg from '../../assets/images/balao-de-fala.svg'
import calendarImg from '../../assets/images/calendar.svg'
import allImg from '../../assets/images/check-box.svg'
import starImg from '../../assets/images/star-black.svg'
import notificationOff from '../../assets/images/bell.svg'
import loupe from '../../assets/images/loupe.svg'
import profile from '../../assets/images/profile.svg'

function Navbar(){
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link>
                            <img src={allImg} alt="Todo"/>
                        </Link>
                    </li>
                    
                    <li>
                        <Link>
                            <img src={talkImg} alt="Conversar"/>
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <img src={emailImg} alt="Email"/>
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <img src={calendarImg} alt="Calendário"/>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={starImg} alt="Avaliação"/>
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link>
                            <img src={notificationOff} alt="Notificação Desativada"/>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={loupe} alt="Buscar"/>
                        </Link>
                    </li>
                    <li>
                        <div className="profile">
                            <div className="profile-desc">
                                <span>Maria Elza</span>
                                <p>Cliente VIP</p>
                            </div>
                            <img src={profile} alt="Perfil"/>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;