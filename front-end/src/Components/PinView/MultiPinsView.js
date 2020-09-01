import React, { useEffect, useState } from "react";
import { BoardPin } from "../BoardPin/BoardPin";
import "./MultiPinsView.css";

const MultiPinsView = () => {
  const [pins, setPins] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const fetchPins = () => {
    fetch("http://localhost/api/pins")
      .then((response) => response.json())
      .then((response) => {
        setPins(response);
        setIsFetching(false);
      });
  };

  if (isFetching) {
    fetchPins();
  }

  console.log(pins);

  return (
    <div className="PinView">
      {pins && pins.map((pin) => <BoardPin {...pin} />)}
    </div>
  );
};

export default MultiPinsView;
