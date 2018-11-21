import React, { Component } from 'react'
import {
  ignInUserSDK,
  checkIsLoggedIn,
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

  _handleClickSubmit = () => {
    const { username, password } = this.state
    signInUserSDK({ username, password })
  }

  // _onSuccessfulLogin = (data) => {
  //   console.log(
  //     '>> SUCCESSSFULLY LOGGGGED IN!',
  //     data
  //   )
  // }

  _onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this._handleClickSubmit()
    }
  }

  render() {
    return (
      <div className={'loginForm__wrapper'} onKeyPress={this._onKeyPress}>
        {'login'}
        <form onSubmit={this._handleClickSubmit}>
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
