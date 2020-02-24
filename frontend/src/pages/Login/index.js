import React from 'react'

import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
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

            
                    {/* { this.state.error.alreadyExist && <div className='form__error'>This username is already taken</div> } */}
                    {/* { this.state.error.passwordMismatching && <div className='form__error'>Password mismatching</div> } */}
                    
                    <button type='submit'>SIGN IN</button>
                </form>
            </div>
        );
    }
}

export default Login