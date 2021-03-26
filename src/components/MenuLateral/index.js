import React from 'react'

import logo from '../../assets/images/logo.png'
import emailImg from '../../assets/images/email.svg'
import talkImg from '../../assets/images/balao-de-fala.svg'
import calendarImg from '../../assets/images/calendar.svg'
import allImg from '../../assets/images/check-box.svg'
import './styles.css'

function MenuLateral(){
    return (
        <div className="menu">
            <div className="menu-container">
                <div className="logo">
                    <img src={logo} alt="Ignição Digital"/>
                    <p>Ignição Digital</p>
                </div>
                <div className="area">
                    <select name="area">
                        <option value="cliente">Área do cliente</option>
                    </select>
                </div>
                <div className="apps">
                    <h4>APPS</h4>
                    <div className="email">
                        <img src={emailImg} alt="Email"/>
                        <p>Email</p>
                    </div>
                    <div className="talk">
                        <img src={talkImg} alt="Conversar"/>
                        <p>Conversar</p>
                    </div>
                    <div className="all">
                        <img src={allImg} alt="Todo"/>
                        <p>Todo</p>
                    </div>
                    <div className="calendar">
                        <img src={calendarImg} alt="Calendário"/>
                        <p>Calendário</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuLateral;