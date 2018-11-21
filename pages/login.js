import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import { checkIsLoggedIn } from '../api/auth/cognito'
import redirect from '../lib/redirect.js'


class LoginPage extends Component {
  componentDidMount () {
    const { loggedIn } = checkIsLoggedIn()
    if (loggedIn) {
      // If logged in, redirect to the home page
      redirect({}, '/')
    }
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}

export default LoginPage
