import React, { Component } from 'react'
import './UploadSongForm.scss'

const defaultFields = {
  songTitle: '',
  artistTitle: '',
  youtubeUrl: '',
  yearReleased: '',   // This field is not currently in the database
}


class UploadSongForm extends Component {
  constructor(props) {
  super(props)
  this.state = {
    fields: defaultFields
  }
}

// componentDidMount() {
//   const user = checkIsLoggedIn()
//   console.log('>>> user', user)
// }

/* Current write schema
 * const songsWriteSchema = {
 *   name: { required: true },
 *   description: { required: true },
 *   imageUrl: { db: 'image_url', required: true },
 *   curatorId: { db: 'curator_id' },
 *   artistName: { db: 'artist_name', required: true},
 *   spotify: {
 *     required: true, // DB way ... shouldn't we actually at least one / exactly one link type?
 *     fields: {
 *       link: { required: true },
 *     }
 *   },
 *   soundcloud: {
 *     fields: {
 *       link: { required: true },
 *       trackId: { db: 'track_id', required: true },
 *     }
 *   },
 *   youtube: {
 *     fields: {
 *       link: { required: true },
 *       trackId: { db: 'track_id', required: true },
 *     }
 *   },
 *   bpm: { required: true },
 *   artistLocation: { db: 'artist_location', required: true }
 */

_handleInputChange = inputName => event => {
  this.setState({
    fields: {[inputName]: event.target.value }
  });
}

_handleSubmit = (event) => {
  event.preventDefault();

  const request = new Request(
    "http://localhost:9292/api/songs/", {
    method: "POST",
    body: JSON.stringify({
      name: this.state.songTitle,
      artistName: this.state.artistTitle,
      youtube: {
        link: this.state.youtubeUrl
      }
    })
  });

  fetch(request)
    .then(response => {
      if (response.ok) {
        const msg = "Successfully added song"
        console.log(msg);
        refreshForm(msg)
      } else {
        console.log(`Server error: ${response.statusText}`);
        this.setState({ error: response.statusText });
      }
      return;
    })
    .catch(error => {
      console.log(error);
      this.setState({ error: error });
      return;
    });
}

refreshForm = message => {
  this.setState({
    message: message,
    fields: defaultFields
  });
}

_onKeyPress = (event) => {
  if (event.key === 'Enter') {
    this._handleSubmit(event)
  }
}

render() {
  const inputFields = Object.keys(this.state.fields);
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
        {this.state.error && <p className='error'>{this.state.error}</p>}
        {this.state.error && <p className='message'>{this.state.message}</p>}
      </form>
    </div>
  )
}
}


export default UploadSongForm
