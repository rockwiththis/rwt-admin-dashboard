import React, { Component } from 'react'
import UploadSong from '../components/UploadSong'
import RequireAuth from '../hoc/RequireAuth'

class Upload extends Component {
  render() {
    return (
      <div>
          <UploadSong />
      </div>
    );
  }
}

export default RequireAuth(Upload)
