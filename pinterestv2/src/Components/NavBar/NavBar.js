import React, {Fragment} from 'react';
import './NavBar.css';
import pinterestlogo from './pinterestlogo.png';
import BellButton from './BellButton.png';
import AccountButton from './AccountButton.png';
import MessageButton from './MessageButton.png';
import dropdownButton from './dropdownButton.png';
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return <Fragment>
        <nav className="NavBar">
                <a href={'/'}><img src={pinterestlogo} className="Pin-Logo"/></a>
                <NavLink to={'/'} exact activeClassName="active" className="IndexButtons">Inicio</NavLink>
                <NavLink to={'/siguiendo'} activeClassName="active" className="IndexButtons">Siguiendo</NavLink>
                <input type="text" placeholder="🔎    Buscar" className="SearchBar"/>
                <a href={'/'}  >
                    <div className="dropdown">
                        <button><img src={dropdownButton} className="Buttons"/></button>
                        <div className="dropdown-content">
                            <a href={'/pin-builder/'}>Subir un pin</a>
                            <a href={'/create-board/'}>Crear un tablero</a>
                            <a href="#">Mejorá tu feed de Inicio</a>
                            <a href="#">Configuración</a>
                            <a href="#">Condiciones y privacidad</a>
                            <a href="#">Salir</a>
                        </div>
                    </div>
                </a>
                <a href={'/notifs'}><button><img src={BellButton} className="Buttons"/></button></a>
                <a href={'/messages'}><button><img src={MessageButton} className="Buttons"/></button></a>
                <a href={'/account'}><button><img src={AccountButton} className="Buttons"/></button></a>

        </nav>
    </Fragment>
}
