import React, { Component } from 'react'
import CardGrid from '../components/CardGrid'
import { checkLoggedIn } from '../api/auth/cognito'


const cardsList = [
  {
    title: 'All Songs',
    url: '/songs',
    description: 'View all of the songs that have been uploaded.',
    imageUrl: '/static/album-collage.jpg',
  },
  {
    title: 'Upload Song',
    url: '/upload',
    description: 'Upload a song.',
    imageUrl: '/static/plus-gradient.jpg',
  },
]

class Home extends Component {
  render() {
    return (
      <div>
        <CardGrid cardsList={cardsList} />
      </div>
    );
  }
}

export default Home
