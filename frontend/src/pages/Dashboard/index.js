import React from 'react'

function Dashboard(props) {
    return (
        <div className='Dashboard'>
            <h1>Hello, {props.user.username}</h1> 
        </div>
    )
}

export default Dashboard;