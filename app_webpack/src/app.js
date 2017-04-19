import React, { Component } from 'react'
import Title from './title'

class App extends Component {
    constructor() {
        super()

        this.state = {
            valor: 'valor inicial'
        }
    }

    render() {
        return (
            <div>
                <Title valor={this.state.valor}></Title>
                <button onClick={() => {
                    this.setState({
                        valor: 'novo valor'
                    })
                }
                }>
                    Mudar valor
                    </button>
            </div>
        )
    }
}

export default App