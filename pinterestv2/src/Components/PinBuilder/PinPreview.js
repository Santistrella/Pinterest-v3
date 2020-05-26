import React from "react";

export const PinPreview = pin => {


    return (
        <div>
            <h1>
                PIN SUBIDO
            </h1>
            <img src={pin.img_url}/>
        </div>
    )
}


export default PinPreview;