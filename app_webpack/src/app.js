import React, { Component } from 'react'
import Title from './title'

class App extends Component {
    constructor() {
        super()

        this.state = {
            valor: 'valor inicial'
        }

        this.acaoDoBotao = this.acaoDoBotao.bind(this)
    }

    acaoDoBotao(){
        this.setState({
            valor: 'valoooor'
        })
    }

    render() {
        return (
            <div>
                <Title valor={this.state.valor}></Title>
                <button onClick={this.acaoDoBotao}>
                    Mudar valor
                    </button>
            </div>
        )
    }
}

export default App