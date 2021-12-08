import './CorpoCalculadora.css'
import React from 'react';
import Botao from '../Botoes/Botao'
import BotaoDel from '../Botoes/BotaoDel';
import BotaoIgual from '../Botoes/BotaoIgual'
import BotaoReset from '../Botoes/BotaoReset'

const CorpoCalculadora = (props) => {

    return (
        <div className="corpoCalculadora">

            <Botao aoClick={props.aoClick} valor={7} />
            <Botao aoClick={props.aoClick} valor={8} />
            <Botao aoClick={props.aoClick} valor={9} />
            <BotaoDel aoClick={props.aoClick} valor={'del'}/>
            <Botao aoClick={props.aoClick} valor={4} />
            <Botao aoClick={props.aoClick} valor={5} />
            <Botao aoClick={props.aoClick} valor={6} />
            <Botao aoClick={props.aoClick} valor={'+'} />
            <Botao aoClick={props.aoClick} valor={1} />
            <Botao aoClick={props.aoClick} valor={2} />
            <Botao aoClick={props.aoClick} valor={3} />
            <Botao aoClick={props.aoClick} valor={'-'} />
            <Botao aoClick={props.aoClick} valor={'.'} />
            <Botao aoClick={props.aoClick} valor={0} />
            <Botao aoClick={props.aoClick} valor={'/'} />
            <Botao aoClick={props.aoClick} valor={'*'} />

            <div className="botoesGrandes">
                <BotaoIgual aoClick={props.aoClick} valor={'='}/>
                <BotaoReset aoClick={props.aoClick} valor={'RESET'}/>
            </div>
        </div>


    );
}

export default CorpoCalculadora;