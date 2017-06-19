import React, { Component } from 'react'
import Title from './title'

import * as JiraApi from './Jira/JiraApi'

class App extends Component {
    constructor() {
        super()

        this.state = {
            valor: 'valor inicial'
        }
    }

    acaoDoBotao = () => {       
      
        

        this.setState({
            valor: JiraApi.getBoards()
        }, () => console.log(this.state))
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