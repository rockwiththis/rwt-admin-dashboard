import React, { Component } from 'react'
import Link from 'next/link'
import './UploadSong.scss'
import UploadSongForm from '../UploadSongForm'



class UploadSong extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    const {
      song,
    } = this.props

    return (
      <div className="upload-song-container">
      <div className="upload-song-header">
        <h3>Upload Song</h3>
        {/*<Link href="/upload">Publish</Link> */}
      </div>
      <UploadSongForm />


      </div>
    )
  }

}

export default UploadSong
