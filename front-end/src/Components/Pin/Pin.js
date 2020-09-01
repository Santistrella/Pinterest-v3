import React from "react";
import "./Pin.css";
import { GoBack } from "./GoBack";
import { Link } from "react-router-dom";

export const Pin = (pin) => {
  return (
    <div className="SinglePinVista">
      <GoBack />
      <div className="PinContent">
        <div className="PinPhoto">
          <img src={pin.img_url} className="PinImageUrl" />
        </div>
        <div className="PinText">
          <button>
            <Link to={`/pin-builder/edit/${pin.id}`} id="editButton" />
            Editar Pin
          </button>
          <h3>
            {pin.name}
            <br />
            <br />
            {pin.title}
            {pin.description}
            {pin.author}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Pin;
