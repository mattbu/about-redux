import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams()
    const { toDos } = useSelector(state => state)
    const currentDetail = toDos.find(toDo => toDo.id === parseInt(id))
    return (
        <>
            {
                currentDetail ? 
                <div>
                    <h1>{currentDetail?.text}</h1>
                    <h6>{`created at: ${currentDetail.id}`}</h6>
                </div>
                : null
            }
        </>
    )
}

export default Detail