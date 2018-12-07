import React from 'react'
import Link from 'next/link'

import './Card.scss'


const Card = ({ title, description, imageUrl, buttonText, url }) => {
  return (
    <Link href={url}>
      <div className={'card'}>
        <div className={'card__image'}>
          <img src={imageUrl} alt={title}  />
        </div>
        <div className={'card__content'}>
          <div className={'card__content__text'}>
            <div className={'card__content__text__title'}>
              {title}
            </div>
            <div className={'card__content__text__description'}>
              {description}
            </div>
            {buttonText && (
              <div className={'card__content__text__button'}>
                {buttonText}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
