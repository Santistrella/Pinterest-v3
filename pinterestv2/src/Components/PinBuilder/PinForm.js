import React, { Fragment, useEffect, useState } from "react";
import "./PinBuilder.css";
import { useHistory, useLocation, useParams } from "react-router-dom";
import PinPreview from "./PinPreview";
import { generateHandleInputChange } from "../../utils/formUtils";

export const PinForm = () => {
  const initialState = {
    name: "",
    description: "",
    img_url: "",
    board_id: "",
    errorMessage: undefined,
  };

  const location = useLocation();
  const params = useParams();
  const [boards, setBoards] = useState([]);
  const [data, setData] = useState(initialState);
  const [created, setCreated] = useState(undefined);
  const history = useHistory();

  const handleInputChange = generateHandleInputChange(setData, data);

  const isEditMode = () => location.pathname.includes("edit");

  useEffect(() => {
    fetch("http://localhost/api/boards")
      .then((response) => response.json())
      .then((response) => {
        setBoards(response);
      });
    if (isEditMode()) {
      fetch(`http://localhost/api/pins/${params.id}`)
        .then((responsePin) => responsePin.json())
        .then((pinFromResponse) => {
          setData(pinFromResponse);
        });
    }
  }, []);

  const handleFormSubmit = () => {
    let ruta = "http://localhost/api/pins";
    let metodo = "post";

    if (isEditMode()) {
      ruta = ruta + `/${params.id}`;
      metodo = "put";
    }

    fetch(ruta, {
      method: metodo,
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
        history.push("/pins/" + resJson.id);
        setCreated(resJson);
      });
  };

  return (
    <Fragment>
      <div className="DivContainer">
        <div className="FormContainer">
          <h1>Añadir un Pin</h1>
          <div id="Form">
            <input
              required="yes"
              name="name"
              onChange={(event) => handleInputChange(event)}
              placeholder="Agregá un titulo"
              value={data.name}
              type="text"
              autoComplete="off"
              style={{ fontSize: 30 }}
            />
            <input
              onChange={(event) => handleInputChange(event)}
              value={data.description}
              placeholder="Descripción"
              required="yes"
              type="text"
              name="description"
              autocomplete="off"
              style={{ fontSize: 25 }}
            />
            <input
              onChange={(event) => handleInputChange(event)}
              value={data.img_url}
              placeholder="Agregá la url"
              required="yes"
              type="text"
              name="img_url"
              style={{ fontSize: 22 }}
            />
            <label>Tablero:</label>
            <select
              onChange={(event) => handleInputChange(event)}
              value={data.board_id}
              name="board_id"
            >
              {boards.map((board) => (
                <option value={board.id}>{board.name}</option>
              ))}
            </select>
            <button onClick={() => handleFormSubmit()} value="Guardar">
              Submit
            </button>
          </div>
          <div className="showPinsUploaded">
            {created !== undefined ? (
              <PinPreview
                data={{ name: created.name, img_url: created.img_url }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
