import React from "react";

const BotaoIgual = (props) => {

    return (
        <div className="containerButtonGrande">
            <button onClick={() => props.aoClick(props.valor)} className="botao igual">{props.valor}</button>
        </div>
    )
}

export default BotaoIgual