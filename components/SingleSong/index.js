import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import './SingleSong.scss'
import Loading from '../Loading'



class SingleSong extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    const {
      song,
    } = this.props

    return (
      <div className="singlesong-container">
          <div className="singlesong-header">
            <h3>Edit Song</h3>
            <Link href="/upload">Update</Link>
          </div>

          <div className="singlesong">
          <div className="left-content">
            <h3>{song.name}</h3>
            <h3>{song.artist_name}</h3>
            <p className="songDescription" dangerouslySetInnerHTML={{ __html: song.description }} />
          </div>
          <div className="right-content">
          <div className="image-container">
            <img src={song.image_url} />
          </div>
          </div>
          </div>
      </div>
    )
  }

}

export default SingleSong
