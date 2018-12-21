import React from 'react'
import UploadSong from '../components/UploadSong'
import RequireAuth from '../hoc/RequireAuth'


const Upload = () => (
  <div>
      <UploadSong />
  </div>
)

export default RequireAuth(Upload)
