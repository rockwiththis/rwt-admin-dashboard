import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default WrappedComponent => (
    class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          processingAuth: true
          isAuthenticated: false,
        }
      }

      render() {
        if (this.state.procesingAuth) {
          return <p>Authenticating...</p>;
        } else if (this.state.isAuthenticated) {
          return <WrappedComponent {...this.props} />;
        } else {
          return <Redirect to={'/signin'} />
        }
      } 
    }
)
