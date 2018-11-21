import React, { Component } from 'react'
import CardGrid from '../components/CardGrid'
import { checkLoggedIn } from '../api/auth/cognito'


const cardsList = [
  {
    title: 'Songs',
    url: '/songs',
    description: 'View all of the songs that have been uploaded.',
    imageUrl: '/static/image_card_songs.png',
  },
  {
    title: 'Users',
    url: '/users',
    description: 'View all of the curators.',
    imageUrl: '/static/image_card_users.png',
  },
  {
    title: 'Upload Song',
    url: '/upload',
    description: 'Upload a song.',
    imageUrl: '/static/image_card_upload.png',
  },
]

class Home extends Component {
  render() {
    return (
      <div>
        <CardGrid cardsList={cardsList} />
        <div style={{ marginTop: 50 }}>
          {'TODO:'}
          <ul>
            <li>{'get upload working'}</li>
            <li>{'setup auth wrapper'}</li>
            <li>{'improve songs table'}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home
