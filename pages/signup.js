import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm'
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
        <SignUpForm />
      </div>
    )
  }
}

export default LoginPage
