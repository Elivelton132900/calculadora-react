import React from 'react'
import TelaCalculadora from './Components/TelaCalculadora/TelaCalculadora'
import CorpoCalculadora from './Components/CorpoCalculadora/CorpoCalculadora'
import './index.css'
import './responsive.css'

export default class App extends React.Component {

    state = { botaoClicado: [], resultado: '' }

    aoClick = (valor) => {

        if (valor === 'RESET') {
            this.setState({ botaoClicado: [], resultado: '' })
        } else if (valor === 'del') {
            this.setState({
                botaoClicado: this.state.botaoClicado.splice(0, this.state.botaoClicado.length - 1)
            })
        } else if (valor === "=") {
            try {
                this.setState({ botaoClicado: [] })
                this.setState({ resultado: '' })
                let resultadoOp = this.state.botaoClicado.toString()
                resultadoOp = resultadoOp.replaceAll(',', '')
                // eslint-disable-next-line no-eval
                resultadoOp = eval(resultadoOp)
                if(Object.is(resultadoOp, NaN)) {
                    this.setState({ resultado: 'Erro: divisão por 0' })

                } else {
                    this.setState({resultado: resultadoOp})
                }
                resultadoOp = ''
            } catch (err) {
                this.setState({resultado: 'Sua operação é inválida.'})
            }

        } if (this.state.botaoClicado[this.state.botaoClicado.length - 1] === '=' && valor !== "del" && valor !== "RESET") {
            this.setState({ botaoClicado: [valor], resultado: '' })
        } else if (valor !== "del" && valor !== "RESET") {
            this.setState({ botaoClicado: this.state.botaoClicado.concat(valor) })
            
        }

    }

    render() {
        return (
            <div className={`app`}>
                <TelaCalculadora botaoClicado={this.state.botaoClicado} resultado={this.state.resultado} />
                <CorpoCalculadora aoClick={this.aoClick} />
            </div>
        )
    }
}