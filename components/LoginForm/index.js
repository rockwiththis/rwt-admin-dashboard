import React, { Component } from 'react'
import {
  signInUserSDK,
  checkIsLoggedIn,
  signIn,
} from '../../api/auth/cognito'

import './LoginForm.scss'


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    const user = checkIsLoggedIn()
    console.log('>>> user', user)
  }

  _handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  _handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  _handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state
    signInUserSDK({ username, password })
  }

  _onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this._handleSubmit(event)
    }
  }

  render() {
    return (
      <div className={'loginForm__wrapper'} onKeyPress={this._onKeyPress}>
        {'login'}
        <form onSubmit={this._handleSubmit}>
          <div className={'loginForm__container'}>
            <div>
              <input
                onChange={this._handleUsernameChange}
                type={'text'}
                placeholder={'Username/Email'}
                className={'loginForm__input'}
                autoComplete={'username'}
              />
            </div>
            <div>
              <input
                onChange={this._handlePasswordChange}
                type={'password'}
                placeholder={'Password'}
                className={'loginForm__input'}
                autoComplete={'current-password'}
              />
            </div>
          </div>
          <input
            type={'submit'}
            value={'submit'}
            className={'loginForm__submit-button'}
          />
        </form>
      </div>
    )
  }
}

export default LoginForm
