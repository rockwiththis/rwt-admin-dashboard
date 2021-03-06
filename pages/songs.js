import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import ReactTable from 'react-table'
import Link from 'next/link'
import 'react-table/react-table.css'
import { FETCH_ALL_SONGS_URL } from '../api/urls'
import Moment from 'react-moment'
import RequireAuth from '../hoc/RequireAuth'


const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: (row) => {
      console.log('row: ', row)
      return (<Link href={`/song/${row.original.id}`}>{row.value}</Link>)
    }
  },
  {
    Header: 'Artist',
    accessor: 'artist_name',
  },
  {
    Header: 'Curator',
    accessor: 'curator_id',
    maxWidth: 150,
  },
  {
    Header: 'Tags',
    accessor: "Tags",
    maxWidth: 200,
    Cell: (row) => {
      const subgenreList = row.original.sub_genres.map(subgenre =>
        <span className="tag-wrapper"><Link href={`/subgenre/${subgenre.id}`}>{subgenre.name}</Link>,</span>
      )

      return (<div>{subgenreList}</div>)
    }
  },
  {
    Header: 'Date',
    accessor: 'created_at',
    maxWidth: 100,
    Cell: (row) => {
      return (<Moment format="M/d/YY" date={row.value} />)
    }
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
        <div className="songs-container">
        {isLoaded
          ? (
            <ReactTable
              data={songsList}
              columns={columns}
              defaultPageSize={16}
              className="-striped -highlight table-container"
            />
          )
          : (
            'loading...'
          )}
        </div>

      </div>
    );
  }
}

export default RequireAuth(SongsPage)
