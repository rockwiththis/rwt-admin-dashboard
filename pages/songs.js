import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { FETCH_ALL_SONGS_URL } from '../api/urls'


const columns = [
  {
    Header: 'id',
    accessor: 'id',
    maxWidth: 50,
  },
  {
    Header: 'Name',
    accessor: 'name',
    // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
  {
    Header: 'Artist',
    accessor: 'artist_name',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'image',
    accessor: 'image_url',
  },
  {
    Header: 'BPM',
    accessor: 'bpm',
    maxWidth: 50,
  },
  {
    Header: 'Created At',
    accessor: 'created_at',
    maxWidth: 150,
  },
]

class SongsPage extends Component {
  state = {
    songsList: [],
  }

  async componentDidMount() {
    const res = await fetch(FETCH_ALL_SONGS_URL)
    const resJson = await res.json()
    console.log('>> songs!', resJson);
    this.setState({ songsList: resJson })
  }

  render() {
    const { songsList } = this.state
    console.log("songsList", songsList);
    const isLoaded = songsList.length > 0
    return (
      <div>
        {isLoaded
          ? (
            <ReactTable
              data={songsList}
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

export default SongsPage
