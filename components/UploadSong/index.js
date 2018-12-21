import React, { Component } from 'react'
import Link from 'next/link'
import './UploadSong.scss'
import UploadSongForm from '../UploadSongForm'



class UploadSong extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div className="upload-song-container">
        <div className="upload-song-header">
          <h3>Upload Song</h3>
        </div>
        <UploadSongForm />
      </div>
    )
  }

}

export default UploadSong
