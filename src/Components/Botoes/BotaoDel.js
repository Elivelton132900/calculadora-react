import React from "react";

const BotalDel = (props) => {
    return (
        <div className="containerButton">
            <button onClick={() => props.aoClick(props.valor)} className="del botao">{props.valor}</button>
        </div>
    )
}

export default BotalDel