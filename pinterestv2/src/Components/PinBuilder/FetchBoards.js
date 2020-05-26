import React, {Fragment, useState} from 'react';
import {PinBuilder} from "./PinBuilder";



export const FetchBoards = (props) => {

    const {data} = props;
    const [hasBoards, setHasBoards] = useState(false);
    const [boards, setBoards] = useState();
    const [isFetching, setIsFetching] = useState(false);

    const fetchBoards = () => {
        setIsFetching(true)
        fetch('http://localhost/api/boards')
            .then(response => response.json())
            .then(response => {
                setBoards(response)
                setIsFetching(false)
                setHasBoards(true)
            })
    }

    if (!hasBoards && !isFetching) {
        fetchBoards();
    }

    return (
        <Fragment>
            {hasBoards &&
           <PinBuilder boards={boards} />}
        </Fragment>
    )
}