import React, { Component } from 'react'
import { signIn } from '../../api/auth/cognito'


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  _handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  _handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  _handleClickSubmit = () => {
    console.log(
      '>> LOGIN',
      this.state.username, this.state.password
    )
    const { username, password } = this.state
    signIn(username, password, this._onSuccessfulLogin)
  }

  _onSuccessfulLogin = () => {
    '>> SUCCESSSFULLY LOGGGGED IN!'
  }

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
          <input
            onChange={this._handleUsernameChange}
            type={'text'}
            placeholder={'Username/Email'}
            className={'loginFormInput'}
            autoComplete={'username'}
          />
          <input
            onChange={this._handlePasswordChange}
            type={'password'}
            placeholder={'Password'}
            className={'loginFormInput'}
            autoComplete={'current-password'}
          />
          <input type={'submit'} value={'submit'} />
        </form>
      </div>
    )
  }
}

export default LoginForm
