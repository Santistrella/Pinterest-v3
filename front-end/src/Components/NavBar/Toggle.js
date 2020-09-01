import React, { useState } from 'react'
import {dropdownButton} from './dropdownButton.png';

export const Toggle = () => {

    const [ open, setOpen ] = useState(false)

    return (
        <div>
            <button
                aria-expanded={open === true ? "true" : "false"}
                className={open === true ? "active" : ""}
                onClick={ () => setOpen(!open) }>
                Toggle
            </button>
            <ul className={open ? "show" : ""}>
                <li>
                    <a>Inicio</a>
                </li>
            </ul>
        </div>
    )
}