import React from 'react';
import { useHistory } from "react-router-dom";
import './GoBack.css';
import gobackarrow from './gobackarrow.png';

export const GoBack = () => {
    let history = useHistory();
    return (
        <div className="ButtonsGoBack">
            <button onClick={() => history.goBack()}><img src={gobackarrow} className="goBack"/></button>
            <button onClick={() => history.goBack()}><h3 className="ForYouBack">Para<br/>vos</h3></button>
        </div>
    );
};