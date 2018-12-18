import React, { Component } from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router'

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = fieldName => event => {
    event.preventDefault();

    this.setState({
      [fieldName]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ error: null });

    console.log('signing in');
    const requestParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    };
    fetch("http://localhost:9292/api/users/signin", requestParams)
      .then(rawResponse => {
        rawResponse.json()
          .then(response => {
            if (!!response.sessionKey) {
              console.log("Successfully signed in");
              Cookie.set('rwt-session-key', response.sessionKey);
              Router.push('/');
            } else {
              this.setState({ error: response.error });
            }
            return;
          })
          .catch(() => this.setState({ error: `Server error: ${rawResponse.statusText}` }))
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: "Unexpected error connecting to server" });
        return;
      });
  }

  render() {
    return (
        <div>
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.username}
              onChange={this.handleInputChange('username')}
              placeholder='Username'
            />
            <br />
            <input
              value={this.state.password}
              onChange={this.handleInputChange('password')}
              type='password'
              placeholder='Password'
            />
            <br />
            <input
              type='submit'
              value='Submit'
            />
          </form>
          {this.state.error && <p className='error'>{this.state.error}</p>}
        </div>
    )
  }
}

export default SignIn
