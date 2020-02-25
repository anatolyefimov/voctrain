import React from 'react'

function Dashboard(props) {
    return (
        <div className='Dashboard'>
            { props.user.isLoggedIn ? <h1>Hello, {props.user.data.username}</h1> : <h1>You must be logged in!!!!!!!!!!!!!!!!!!!!!!!!!!</h1> }
        </div>
    )
}

export default Dashboard;