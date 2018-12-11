import React, { Component } from 'react'
import SongsTable from '../components/SongsTable'
import { checkLoggedIn } from '../api/auth/cognito'


class Home extends Component {
  render() {
    return (
      <div>
        <SongsTable  />
      </div>
    );
  }
}

export default Home
