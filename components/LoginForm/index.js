import React from 'react'


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  _handleInputChange = ({ username, password }) => {
    if (username) this.setState({ username: username })
    if (password) this.setState({ password: password })
  }

  _handleClickSearch = () => {
    console.log('>> LOGIN', username, password)
  }

  _onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this._handleClickSearch()
    }
  }

  render() {
    return (
      <div onKeyPress={this._onKeyPress}>
        {'login'}
        <input
          onChange={(username) => this._handleInputChange({ username: username })}
          type={'text'}
          placeholder={'Username/Email'}
          className={'loginFormInput'}
        />
        <input
          onChange={(password) => this._handleInputChange({ password: password })}
          type={'password'}
          placeholder={'Password'}
          className={'loginFormInput'}
        />
        <button>
          {'Log In'}
        </button>
      </div>
    )
  }
}

export default LoginForm
