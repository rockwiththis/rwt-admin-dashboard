import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import ReactTable from "react-table";
import { FETCH_ALL_SONGS_URL } from '../api/urls'
import RequireAuth from '../hoc/RequireAuth'


const columns = [
  {
    Header: 'id',
    accessor: 'id',
    maxWidth: 50,
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
]

class UsersPage extends Component {
  state = {
    usersList: [],
  }

  async componentDidMount() {
    const res = await fetch(FETCH_ALL_SONGS_URL)
    const resJson = await res.json()
    console.log('>> users!', resJson);
    this.setState({ usersList: resJson })
  }

  render() {
    const { usersList } = this.state
    const isLoaded = usersList.length > 0
    return (
      <div>
        {isLoaded
          ? (
            <ReactTable
              data={usersList}
              columns={columns}
              defaultPageSize={20}
              className="-striped -highlight"
            />
          )
          : (
            'loading...'
          )}
      </div>
    );
  }
}

export default RequireAuth(UsersPage)
