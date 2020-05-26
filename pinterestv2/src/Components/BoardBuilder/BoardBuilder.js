import React, {Fragment, useState} from 'react';
import "./BoardBuilder.css";

export const BoardBuilder = () => {


    //Formulario
    const initialState = {
        name: "",
        description: "",
        category: "",
        owner: "",
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
        fetch("http://localhost/api/boards", {
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
                    <h1>Crea un Tablero</h1>
                    <div id="Form">
                        <input
                            required="yes"
                            name="name"
                            onChange={(event => handleInputChange(event))}
                            placeholder="Nombre del Tablero"
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
                        <input
                            onChange={(event => handleInputChange(event))}
                            value={data.owner}
                            placeholder="Creador"
                            required="yes"
                            type="text"
                            name="owner"
                        />
                        <input
                            onChange={(event => handleInputChange(event))}
                            value={data.category}
                            placeholder="Categoría"
                            required="yes"
                            type="text"
                            name="category"
                        />
                        <button onClick={() => handleFormSubmit()}
                                value="Guardar"
                        >Submit</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}