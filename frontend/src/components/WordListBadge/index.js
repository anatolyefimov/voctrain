import React from 'react'

import './WordListBage.css'

function WordListBadge(props) {
    return (
        <div className='WordListBage'>
            {props.name}
        </div>
    )
}

export default WordListBadge;