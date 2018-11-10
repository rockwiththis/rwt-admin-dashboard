import React from 'react'
import Card from '../Card'

import './CardGrid.scss'


const CardGrid = ({ cardsList }) => {
  return (
    <div className={'cardGrid'}>
      {cardsList.map(({ title, description, imageUrl, url }) => (
        <div className={'cardGrid__card'} key={url}>
          <Card
            title={title}
            description={description}
            imageUrl={imageUrl}
            url={url}
          />
        </div>
      ))}
    </div>
  )
}

export default CardGrid
