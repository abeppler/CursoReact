import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()

        this.state = {
            valor: 'valor inicial'
        }
    }

    render(){
        return (
            <div>
                <span>
                    {this.state.valor}

                    <button onClick={() => {
                        this.setState({
                            valor: 'novo valor'
                        })
                        }                        
                    }>
                    Mudar valor
                    </button>
                </span>
            </div>
        )
    }
}

export default App