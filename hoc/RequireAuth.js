import React, { Component } from 'react';
import Router from 'next/router'

const authenticate = () => (
  fetch("http://localhost:9292/api/users/authenticate", { method: "POST" })
    .then(response => {
      console.log(response);
      return response.ok && response.json()
    })
)

export default WrappedComponent => (
    class extends Component {

      /*
      static async getInitialProps(context) {
        const token = getCookie('rwt-session-key', context.req);
        const pageProps =
          WrappedComponent.getInitialProps &&
          await WrappedComponent.getInitialProps(context);

        return { ...pageProps, token }
      }
      */

      constructor(props) {
        super(props);
        this.state = {
          processingAuth: true
        }
      }

      componentDidMount() {
        authenticate()
          .then(({ isAuthenticated }) => {
            if (isAuthenticated) {
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
