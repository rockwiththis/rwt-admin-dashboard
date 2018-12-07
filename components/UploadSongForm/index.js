import React, { Component } from 'react'
import './UploadSongForm.scss'


class UploadSongForm extends Component {
  constructor(props) {
  super(props)
  this.state = {
    songTitle: '',
    artistTitle: '',
    youtubeUrl: '',
    yearReleased: '',
  }
}

// componentDidMount() {
//   const user = checkIsLoggedIn()
//   console.log('>>> user', user)
// }

_handleInputChange = (inputName, event) => {
  this.setState({ [inputName]: event.target.value })
}

_handleSubmit = (event) => {
  event.preventDefault();
  const { songTitle, artistTitle, youtubeUrl, yearReleased } = this.state
  // you'll have to make this postSong function
  postSong({ songTitle, artistTitle, youtubeUrl, yearReleased })
  // or just: postSong(this.state);
}

_onKeyPress = (event) => {
  if (event.key === 'Enter') {
    this._handleSubmit(event)
  }
}

render() {
  const inputFields = Object.keys(this.state);
  return (
    <div className={'loginForm__wrapper'} onKeyPress={this._onKeyPress}>
      {'upload song'}
      <form onSubmit={this._handleSubmit}>
        <div className={'loginForm__container'}>
          {inputFields.map((inputKey) => (
            <div key={inputKey}>
              <input
                onChange={() => this._handleInputChange('inputKey')}
                type={'text'}
                placeholder={inputKey}
                className={'loginForm__input'}
              />
            </div>
          ))}
        </div>
        <input
          type={'submit'}
          value={'submit'}
          className={'loginForm__submit-button'}
        />
      </form>
    </div>
  )
}
}


export default UploadSongForm
