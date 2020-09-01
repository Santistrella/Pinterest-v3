import React, {Fragment, useState} from "react";
import './BoardPin.css';
import sendButton from './sendButton.png';
import menuButton from './menuButton.png';
import {Link} from "react-router-dom";

export const BoardPin = pin => {
    const [ hover, setHover ] = useState(false);

    return (
        <Fragment>
            <div className="Columns">
                <div className="container">
                    <Link
                        to={`/pins/${pin.id}`}
                        href={pin.id}
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                    >
                    <img className="BoardPin-Image"
                         src={pin.img_url}
                    /></Link>
                        {hover && (
                            <div className="buttons">
                                <button className="onHoverSend">
                                    <img src={sendButton}
                                         className="sendButton"/>
                                </button>
                                <button className="onHoverMenu">
                                    <img src={menuButton}
                                         className="menuButton"/>
                                </button>
                                <button className="onHoverGuardar">
                                    Guardar
                                </button>
                            </div>
                        )}
                </div>
            </div>
        </Fragment>
            );
}