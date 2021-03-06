import React, { Component } from 'react';
import Cookie from 'js-cookie'
import Router from 'next/router'

const authenticate = () => {
  const requestParams = {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      sessionKey: Cookie.get('rwt-session-key'),
      username: Cookie.get('rwt-session-username')
    })
  };
  return fetch("http://localhost:9292/api/users/authenticate", requestParams)
    .then(response => response.ok && response.json())
};

export default WrappedComponent => (
    class extends Component {

      constructor(props) {
        super(props);
        this.state = {
          processingAuth: true
        }
      }

      static async getInitialProps({ query }) {
        return query
      }

      componentDidMount() {
        authenticate()
          .then(response => {
            if (response.isAuthenticated) {
              this.setState({ processingAuth: false })
            } else {
              // TODO is this cool w/ next isomorphic model?
              // TODO redirect from signin page to requested one
              // TODO show some message in this case
              Router.push('/signin');
            }
          });
      }

      render() {
        if (this.state.processingAuth) {
          return <p>Authenticating...</p>;
        } else {
          return <WrappedComponent {...this.props} />;
        }
      } 
    }
)
