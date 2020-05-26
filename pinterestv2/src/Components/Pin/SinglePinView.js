import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import './SinglePinView.css';
import Pin from "./Pin";

const SinglePinView = () => {



    const [pin, setPin] = useState();
    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost/api/pins/${params.id}`)
            .then(responsePin => responsePin.json())
            .then(pinFromResponse => {
                setPin(pinFromResponse) ;
            });
    }, []);

    return(
        <div className="SinglePinView">
            {pin && <Pin data={pin} {...pin} />}
        </div>
    )
}

export default SinglePinView;