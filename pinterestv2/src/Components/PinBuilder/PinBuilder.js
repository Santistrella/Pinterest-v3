import React, {Fragment, useState} from 'react';
import "./PinBuilder.css";

import {FetchBoards} from "./FetchBoards";
import PinPreview from "./PinPreview";
import {UploadImage} from "./UploadImage";

export const PinBuilder = ({boards}) => {


        //Formulario
        const initialState = {
            name: "",
            description: "",
            img_url: "",
            board_id: "2",
            errorMessage: undefined
        };

        const [data, setData] = useState(initialState);
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [created, setCreated] = useState(undefined);

        const handleInputChange = event => {
            setData({
                ...data,
                [event.target.name]: event.target.value
            });
        };


        const handleFormSubmit = () => {
            setIsSubmitting(true)
            fetch("http://localhost/api/pins", {
                method: "post",
                mode: "cors",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res
            }).then(resJson => {
                setCreated(resJson)
                setIsSubmitting(false)
            })
        };


        return (
            <Fragment>
                <div className="DivContainer">
                    <div className='FormContainer'>
                        <h1>Añadir un Pin</h1>
                            <div id="Form">
                                <input
                                    required="yes"
                                    name="name"
                                    onChange={(event => handleInputChange(event))}
                                    placeholder="Agregá un titulo"
                                    value={data.name}
                                    type="text"
                                    autocomplete="off"
                                    style={{fontSize: 30}}
                                />
                                <input
                                    onChange={(event => handleInputChange(event))}
                                    value={data.description}
                                    placeholder="Descripción"
                                    required="yes"
                                    type="text"
                                    name="description"
                                    autocomplete="off"
                                    style={{fontSize: 25}}
                                />
                                <input
                                    onChange={(event => handleInputChange(event))}
                                    value={data.img_url}
                                    placeholder="Agregá la url"
                                    required="yes"
                                    type="text"
                                    name="img_url"
                                    style={{fontSize: 22}}
                                />
                                <label>
                                    Tablero:
                                </label>
                                <select
                                    onChange={(event => handleInputChange(event))}
                                    value={data.board_id}
                                    name="board_id"
                                >{boards.map(board => (<option value={board.id}>{board.name}</option>))}
                                </select>
                                <button onClick={() => handleFormSubmit()}
                                        value="Guardar"
                                >Submit</button>
                            </div>
                        </div>
                    <div className="MyPins">
                        <h1>Editar pin</h1>
                        <p>Para hacer el modo edit, habría que insertar una prop en las rutas para cambiar el tipo de petición al backend</p>
                        <div className="showPinsUploaded">{created !== undefined ? <PinPreview data={{name: created.name, img_url: created.img_url}}/> : null}</div>
                    </div>
                </div>
            </Fragment>
        );
}