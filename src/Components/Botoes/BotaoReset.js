import React from "react";

const BotaoReset = (props) => {

    return (
        <div className="containerButtonGrande">
            <button onClick={() => props.aoClick(props.valor)}className="botao reset">{props.valor}</button>
        </div>
    )
}

export default BotaoReset

