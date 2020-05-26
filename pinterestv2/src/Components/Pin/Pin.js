import React from "react";
import './Pin.css';
import {GoBack} from "./GoBack";


export const Pin = pin => {


    return (
        <div className="SinglePinVista">
            <GoBack/>
            <div className="PinContent">
                <div className="PinPhoto">
                    <img src={pin.img_url}
                         className="PinImageUrl"/>
                </div>
                <div className="PinText">
                    <h3>{pin.name}<br/><br/>{pin.title}{pin.description}<br/><br/>0 Comentarios</h3>
                </div>
            </div>


        </div>
            )
}


export default Pin;