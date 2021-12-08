import React from "react";

const Botao = (props) => {

    return (
        <div className="containerButton">
            <button onClick={() => props.aoClick(props.valor)} className="botao">{props.valor}</button>
        </div>
    )
}

export default Botao