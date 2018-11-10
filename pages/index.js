import React from 'react'
import CardGrid from '../components/CardGrid'


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

const Home = () => {
  return (
    <div>
      <CardGrid cardsList={cardsList} />
    </div>
  );
}

export default Home
