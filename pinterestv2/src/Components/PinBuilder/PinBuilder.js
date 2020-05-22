import React, {Fragment, useState} from 'react';
import "./PinBuilder.css";
import Pin from "../Pin/Pin";

export const PinBuilder = (props) => {

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
                                />
                                <input
                                    onChange={(event => handleInputChange(event))}
                                    value={data.description}
                                    placeholder="Descripción"
                                    required="yes"
                                    type="text"
                                    name="description"
                                    autocomplete="off"
                                />

                                <label>
                                    Foto:
                                </label>
                                <input
                                    onChange={(event => handleInputChange(event))}
                                    value={data.img_url}
                                    placeholder="Agregá la url"
                                    required="yes"
                                    type="text"
                                    name="img_url"
                                />
                                <label>
                                    Tablero:
                                </label>
                                <input
                                    onChange={(event => handleInputChange(event))}
                                    value={data.board_id}
                                    name="board_id"
                                    type="text"

                               />
                                <button onClick={() => handleFormSubmit()}
                                        value="Guardar"
                                >Submit</button>
                            </div>
                        </div>
                    <div className="MyPins">
                        <h1>Mis Pins</h1>
                        <h3>Para hacer el modo edit, habría que insertar una prop en las rutas para cambiar el tipo de petición al backend</h3>
                        <div className="showPinsUploaded">{created !== undefined ? <Pin data={{name: created.name, img_url: created.img_url}}/> : null}</div>
                    </div>
                </div>
            </Fragment>
        );
}