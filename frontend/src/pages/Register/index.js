import React from 'react'
import { Redirect } from 'react-router-dom'

import register from 'api/register'

import './Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            confirmedPassword: '',
            succefullRegister: false,
            error: {
                passwordMismatching: false,
                alreadyExist: false
            }

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
        this.setState({ error:{ alreadyExist: false, passwordMismatching: false}, succefullRegister: false })
        
        if (this.state.password !== this.state.confirmedPassword) {
            this.setState({
                error:{ passwordMismatching: true} 
            })
            return;
        }
        register({
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                if (res.status === 409) {
                    this.setState({ error:{ alreadyExist: true} })
                } else {
                    this.setState({succefullRegister: true})
                }
            })

    }

    render() {
        return (
            <div className='Register'>
                <form className='form' method="POST" onSubmit={this.onSubmit}> 
                    <h1 className='form__header'>Register</h1>
                    <input 
                        className={'form__input' + (this.state.error.alreadyExist ? ' form__input_error' : '')} 
                        type='text'  
                        placeholder='Username' 
                        name='username' value={this.state.username} 
                        onChange={this.onInputChange}
                    /><br />

                    <input 
                        className={'form__input' + (this.state.error.passwordMismatching ? ' form__input_error' : '')} 
                        type='password' 
                        placeholder='Password' 
                        name='password' 
                        value={this.state.password} 
                        onChange={this.onInputChange}
                    /><br />

                    <input 
                        className={'form__input' +(this.state.error.passwordMismatching ? ' form__input_error' : '')} 
                        type='password' 
                        placeholder='Confirm password'
                        name='confirmedPassword' 
                        value={this.state.confirmedPassword} 
                        onChange={this.onInputChange}
                    /><br />
                    { this.state.error.alreadyExist && <div className='form__error'>This username is already taken</div> }
                    { this.state.error.passwordMismatching && <div className='form__error'>Password mismatching</div> }
                    
                    <button type='submit'>SUBMIT</button>
                </form>
                { this.state.succefullRegister && <Redirect to='/login' />}
            </div>
        );
    }
}

export default Register