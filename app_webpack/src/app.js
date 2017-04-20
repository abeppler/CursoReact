import React, { Component } from 'react'
import Title from './title'

class App extends Component {
    constructor() {
        super()

        this.state = {
            valor: 'valor inicial'
        }
    }

    acaoDoBotao = () => {
        this.setState({
            valor: null
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