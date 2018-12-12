import React, { Component } from 'react';
import ReactS3Uploader from 'react-s3-uploader'
import fetch from 'isomorphic-unfetch'
import { FETCH_ALL_SUBGENRES_URL } from '../../api/urls'
import './S3ImageUpload.scss'



class S3ImageUpload extends React.Component {
  constructor(props) {
    super(props)

  }
  state = {

  }

  async componentDidMount() {
    const res = await fetch(FETCH_ALL_SUBGENRES_URL)
    const resJson = await res.json()
    // console.log('>> subgenres!', resJson);

  }



  render() {

    return (
        <div>

        </div>
    );
  }
}


export default S3ImageUpload
