import './telaCalculadora.css'
import React from 'react';

const TelaCalculadora = ({botaoClicado, resultado}) => {

    const botoes = botaoClicado.map((botao) => {
        return <div className="numeros">{botao}</div>
    })

    return (
        <div className={`telaCalculadora`}>
            {resultado === '' ? <>{botoes}</> : <div className="numeros">{resultado}</div>}
        </div>
        
    );
}

export default TelaCalculadora;