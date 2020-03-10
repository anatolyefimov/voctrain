import React from 'react'

import './Button.css'

function Button({text, className, ...rest}) {
    return (
        <button className = {'Button ' + className } {...rest} >{text}</button>
    )
}

export default Button