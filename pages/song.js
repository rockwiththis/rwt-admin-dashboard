import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import ReactTable from 'react-table'
import Link from 'next/link'
import 'react-table/react-table.css'
import { FETCH_ALL_SONGS_URL } from '../api/urls'
import Moment from 'react-moment'
import SingleSong from '../components/SingleSong'
import Loading from '../components/Loading'
import RequireAuth from '../hoc/RequireAuth'


class SongPage extends Component {


  constructor(props) {
    super(props)
    this.state = {
      singleSong: null,
    }
  }

  static async getInitialProps({ query }) {
    const songId = query
    console.log("songId", songId);
    return { songId }

  }


  async componentDidMount() {
    const { songId } = this.props
    const res = await fetch(`http://localhost:9292/api/songs/${songId.id}`)
    const resJson = await res.json()
    console.log('>> single song!', resJson);
    this.setState({ singleSong: resJson })
  }


  render() {
    const song  = this.state.singleSong
    console.log(this.state.singleSong);

    return (
      <div>
        {song
          ? (
            <SingleSong song={song} />
          )
          : (
            <Loading />
          )}

      </div>
    );
  }
}

export default RequireAuth(SongPage)
