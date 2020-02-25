import React from 'react'
import { Redirect } from 'react-router-dom'

import login from 'api/login'

import './Login.css'


class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            error: false
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({
            error: false,
            success: false
        })
        login({
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                this.props.setUser()

                if (res.status === 200) {
                    this.setState({
                        success: true
                    })

                } else {
                    this.setState({
                        error: true
                    })
                }

            })
        
    }

    render() {
        return (
            <div className='Login'>
                <form className='form' method="POST" onSubmit={this.onSubmit}> 
                    <h1 className='form__header'>Login</h1>
                    <input 
                        className={'form__input'} 
                        type='text'  
                        placeholder='Username' 
                        name='username' value={this.state.username} 
                        onChange={this.onInputChange}
                    /><br />

                    <input 
                        className={'form__input'} 
                        type='password' 
                        placeholder='Password' 
                        name='password' 
                        value={this.state.password} 
                        onChange={this.onInputChange}
                    /><br />
            
                    { this.state.error && <div className='form__error'>Incorrect username or password</div> }
                    
                    <button type='submit'>SIGN IN</button>
                </form>
                { this.state.success && <Redirect to='/dashboard' />}
            </div>
        );
    }
}

export default Login