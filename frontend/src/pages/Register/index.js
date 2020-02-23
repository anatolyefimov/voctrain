import React from 'react'

import './Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            confirmedPassword: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='Register'>
                <form className='form' method="POST"> 
                    <h1 className='form__header'>Register</h1>
                    <input type='text'  placeholder='Username' name='username' value={this.state.username} onChange={this.onInputChange}/><br />
                    <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.onInputChange}/><br />
                    <input type='password' placeholder='Confirm password' name='confirmedPassword' value={this.state.repeatedPassword} onChange={this.onInputChange}/><br />
                    {/* { this.state.passwordsIsDifferent && <div className='form__error'>Пароли не совпадают</div> } */}
                    {/* { this.state.needChangeUsername && <div className='form__error'>Пользователь с таким именем уже сущесвтует</div> } */}
                    <button type='submit'>Submit</button>
                </form>
                {/* { this.state.succefullRegister && <Redirect to='/login' />} */}
            </div>
        );
    }
}

export default Register