import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import ReactTable from 'react-table'
import Link from 'next/link'
import 'react-table/react-table.css'
import { FETCH_ALL_SONGS_URL } from '../../api/urls'
import Moment from 'react-moment'
import Loading from '../Loading'
import './SongsTable.scss'




const columns = [
      {
        expander: true,
        Header: "",
        width: 40,
        Expander: ({ isExpanded, ...rest }) =>
          <div>
            {isExpanded
              ? <span>&#x2299;</span>
              : <span>&#x2295;</span>}
          </div>,
        style: {
          cursor: "pointer",
          fontSize: 25,
          padding: "0",
          textAlign: "center",
          userSelect: "none"
        }
      },
  {
    Header: 'Name',
    accessor: 'name',
    width: 300,
    Cell: (row) => {
      return (<Link href={`/song/${row.original.id}`}>{row.value}</Link>)
    }
  },
  {
    Header: 'Artist',
    accessor: 'artist_name',
    width: 250,
  },
  {
    Header: 'Curator',
    accessor: 'curator_id',
    maxWidth: 150,
  },
  {
    Header: 'Tags',
    accessor: "Tags",
    maxWidth: 400,
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

class SongsTable extends Component {
  state = {
    songsList: [],
  }

  async componentDidMount() {
    const res = await fetch(FETCH_ALL_SONGS_URL)
    const resJson = await res.json()
    this.setState({ songsList: resJson })
  }


  _handleDelete = (song) => {

    const requestParams = {
      method: "DELETE"
    };

    fetch(`http://localhost:9292/api/songs/${song.id}`, requestParams)
      .then(response => {
        if (response.ok) {
          const msg = "Successfully deleted song"
          console.log(msg);
          this.refreshForm(msg)
        } else {
          console.log(`Server error: ${response.statusText}`);
          this.setState({ error: response.statusText });
        }
        return;
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
        return;
      });
  }

  render() {
    const { songsList } = this.state
    const isLoaded = songsList.length > 0
    return (
        <div className="songs-table">
        {isLoaded
          ? (
            <Fragment>
            <div className="songs-table-header">
              <h3>Songs</h3>
              <Link href="/upload">Add Song</Link>
            </div>
            <ReactTable
              data={songsList}
              columns={columns}
              defaultPageSize={16}
              className="-striped -highlight table-container"
              SubComponent={row => {
                    return (
                      <div style={{ padding: "10px 45px" }}>
                      <div className="sub-menu">
                          <ul>
                            <li><Link href={`/song/${row.original.id}`}>edit</Link></li>
                            <li><a target="_blank" href={`http://localhost:3000/songs/${row.original.id}`}>view</a></li>
                          {/*<li className="delete"><button onClick={this._handleDelete(row.original)}>delete</button></li> */}
                          </ul>
                      </div>

                      </div>
                    );
                  }}

            />
            </Fragment>

          )
          : (
            <Loading />
          )}
        </div>
    );
  }
}

export default SongsTable
