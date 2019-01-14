import React, { Component } from 'react'
import SongsTable from '../components/SongsTable'
import { checkLoggedIn } from '../api/auth/cognito'
import RequireAuth from '../hoc/RequireAuth'

class Home extends Component {
  render() {
    return (
      <div>
        <SongsTable />
      </div>
    );
  }
}

export default RequireAuth(Home)
