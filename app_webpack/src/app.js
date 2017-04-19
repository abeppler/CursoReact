import React from 'react'
import Title from './title'

const App = () => (
    <div>
        <Title valor="Bosta"/>
        <button onClick={() => console.log('clicou')}>
            Clique em mim!
        </button>
    </div>
)

export default App