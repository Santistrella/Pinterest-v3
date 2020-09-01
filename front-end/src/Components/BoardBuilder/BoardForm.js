import React, { Fragment, useState } from "react";
import "./BoardBuilder.css";
import BoardCreated from "./BoardCreated";
import { generateHandleInputChange } from "../../utils/formUtils";

export const BoardForm = () => {
  const initialState = {
    name: "",
    description: "",
    category: "",
    owner: "",
    errorMessage: undefined,
  };

  const [data, setData] = useState(initialState);
  const [created, setCreated] = useState(undefined);

  const handleInputChange = generateHandleInputChange(setData, data);

  const handleFormSubmit = () => {
    fetch("http://localhost/api/boards", {
      method: "post",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        setCreated(resJson);
      });
  };

  return (
    <Fragment>
      <div className="DivContainer">
        <div className="FormContainer">
          <h1>Crea un Tablero</h1>
          <div id="Form">
            <input
              required="yes"
              name="name"
              onChange={(event) => handleInputChange(event)}
              placeholder="Nombre del Tablero"
              value={data.name}
              type="text"
              autocomplete="off"
            />
            <input
              onChange={(event) => handleInputChange(event)}
              value={data.description}
              placeholder="Descripción"
              required="yes"
              type="text"
              name="description"
              autocomplete="off"
            />
            <input
              onChange={(event) => handleInputChange(event)}
              value={data.owner}
              placeholder="Creador"
              required="yes"
              type="text"
              name="owner"
            />
            <input
              onChange={(event) => handleInputChange(event)}
              value={data.category}
              placeholder="Categoría"
              required="yes"
              type="text"
              name="category"
            />
            <button onClick={() => handleFormSubmit()} value="Guardar">
              Submit
            </button>
          </div>
          <div className="showBoardUploaded">
            {created !== undefined ? (
              <BoardCreated
                data={{ name: created.name, img_url: created.img_url }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
