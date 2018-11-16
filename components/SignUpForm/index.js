import React, { Component } from 'react'
import { signUpNewUser } from '../../api/auth/cognito'


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  _handleFieldChange = (field, event) => {
    this.setState({ [field]: event.target.value })
  }

  _handleClickSubmit = () => {
    const { username, password } = this.state
    signUpNewUser({ username: username, password: password })
  }

  _onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this._handleClickSubmit()
    }
  }

  render() {
    return (
      <div className={'loginForm__wrapper'} onKeyPress={this._onKeyPress}>
        {'SIGN UP'}
        <form onSubmit={this._handleClickSubmit}>
          <input
            onChange={(event) => this._handleFieldChange('username', event)}
            type={'text'}
            placeholder={'Username'}
            className={'signUpFormInput'}
          />
          <input
            onChange={(event) => this._handleFieldChange('email', event)}
            type={'text'}
            placeholder={'Email'}
            className={'signUpFormInput'}
          />
          <input
            onChange={(event) => this._handleFieldChange('password', event)}
            type={'password'}
            placeholder={'Password'}
            className={'signUpFormInput'}
          />
          <input type={'submit'} value={'submit'} />
        </form>
      </div>
    )
  }
}

export default LoginForm
