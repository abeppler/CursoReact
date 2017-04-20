import React, {PropTypes} from 'react'

const Title = ({valor}) => {
    return (
        <h1>
            {valor}
        </h1>
    )
}

Title.propTypes = {
    valor: PropTypes.number.isRequired
}

export default Title