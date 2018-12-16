import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import './SingleSong.scss'
import Loading from '../Loading'
import Select from 'react-select';



class SingleSong extends Component {
  constructor(props) {
    super(props)

    const {
      song,
    } = this.props


    this.state = {
      fields: {
        songId: song.id,
        songTitle: song.name,
        artistName: song.artist_name,
        description: song.description,
        imageUrl: song.image_url,
        curatorId: song.curator_id,
        createdAt: song.created_at,
        spotifyLink: song.spotify_link,
        soundcloudLink: song.soundcloud_link,
        soundcloudTrackId: song.soundcloud_track_id,
        youtubeLink: song.youtube_link,
        youtubeTrackId: song.youtube_track_id,
        bpm: song.bpm,
        artistLocation: song.artist_location,
        subgenreIds: song.sub_genres.map(({ id, name }) => ({ value: id, label: name })),
        selectedSubgenres: song.sub_genres.map(({ id, name }) => ({ value: id, label: name }))
      },
      subgenres: [],
      file: null
    }
  }


  componentDidMount() {
    this._fetchAllSubgenres();
    console.log("this.state.selectedSubgenres", this.state.fields.selectedSubgenres);
    console.log("this.state", this.state);
  }


  _fetchAllSubgenres = () => {

    const requestParams = {
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }

    // TODO write a little library to standardize some of this stuff
    // (especially the urls, as these will not work in production
    fetch("http://localhost:9292/api/subgenres", requestParams)
      .then(response => response.json())
      .then(subgenres => (
          this.setState({
            subgenres: subgenres.map(({ id, name }) => ({ value: id, label: name }))
          })
      ))
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
        return;
      });
  };



  _handleInputChange = inputName => event => {
  this.setState({
    fields: {
      ...this.state.fields,
      [inputName]: event.target.value
    }
  });
}

_handleSelectedSubgenresChange = selectedSubgenres => {
  this.setState({
    fields: {
      ...this.state.fields,
      selectedSubgenres
    }
  });
}

// refreshForm = message => {
//   this.setState({
//     message: message,
//     fields: { ...defaultFields }
//   });
// }

_handleSubmit = (event) => {
  event.preventDefault();

  const requestParams = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      name: this.state.fields.songTitle,
      artistName: this.state.fields.artistName,
      description: this.state.fields.description,
      imageUrl: this.state.fields.imageUrl,
      curatorId: this.state.fields.curatorId,
      spotify: {
        link: this.state.fields.spotifyLink
      },
      soundcloud: {
        link: this.state.fields.soundcloudLink,
        trackId: this.state.fields.soundcloudTrackId
      },
      youtube: {
        link: this.state.fields.youtubeLink,
        trackId: this.state.fields.youtubeTrackId
      },
      bpm: this.state.fields.bpm,
      artistLocation: this.state.fields.artistLocation,
      subgenreIds: this.state.fields.selectedSubgenres.map(({ value }) => value)
    })
  };

  fetch(`http://localhost:9292/api/songs/${this.state.songId}`, requestParams)
    .then(response => {
      if (response.ok) {
        const msg = "Successfully added song"
        console.log(msg);
        window.location.reload()
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

_onKeyPress = (event) => {
  if (event.key === 'Enter') {
    this._handleSubmit(event)
  }
}

  render() {

    const {
      song,
    } = this.props

console.log("song", this.state);
    return (
      <div className="singlesong-container">
          <div className="singlesong-header">
            <h3>Edit Song</h3>
          </div>

          <div className="singlesong">

          <form onSubmit={this._handleSubmit}>
              <div className={'upload-song-form'}>
                {
                  <Fragment>
                        <div className={'left-content'}>
                            <div className="upload-field song-name" key='songTitle'>
                            <p className="field-title">Song Name</p>
                              <input
                                value={this.state.fields.songTitle}
                                onChange={this._handleInputChange('songTitle')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>

                            <div className="upload-field artist-title" key='artistName'>
                            <p className="field-title">Artist Name</p>
                              <input
                                value={this.state.fields.artistName}
                                onChange={this._handleInputChange('artistName')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>

                            <div className="upload-field song-description" key='description'>
                            <p className="field-title">Write Up</p>
                              <textarea
                                value={this.state.fields.description}
                                onChange={this._handleInputChange('description')}
                                type={'text-area'}
                                placeholder="..."
                                className={'upload-song-text-area'}
                              />
                            </div>

                            <div className="upload-field spotify-link" key='spotifyLink'>
                            <p className="field-title">Spotify Link</p>
                              <input
                                value={this.state.fields.spotifyLink}
                                onChange={this._handleInputChange('spotifyLink')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>

                            <div className="upload-field soundcloud-link" key='soundcloudLink'>
                            <p className="field-title">SoundCloud Link</p>
                              <input
                                value={this.state.fields.soundcloudLink}
                                onChange={this._handleInputChange('soundcloudLink')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>
                            <div className="upload-field soundcloud-track-id" key='soundcloudTrackId'>
                            <p className="field-title">SoundCloud Track id</p>
                              <input
                                value={this.state.fields.soundcloudTrackId}
                                onChange={this._handleInputChange('soundcloudTrackId')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>


                            <div className="upload-field youtube-link" key='youtubeLink'>
                            <p className="field-title">Youtube Link</p>
                              <input
                                value={this.state.fieldsyoutubeLink}
                                onChange={this._handleInputChange('youtubeLink')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>
                            <div className="upload-field youtube-track-id" key='youtubeTrackId'>
                            <p className="field-title">Youtube Track id</p>
                              <input
                                value={this.state.fields.youtubeTrackId}
                                onChange={this._handleInputChange('youtubeTrackId')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>
                            <div className="upload-field bpm" key='bpm'>
                            <p className="field-title">BPM</p>
                              <input
                                value={this.state.fields.bpm}
                                onChange={this._handleInputChange('bpm')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>

                            <div className="upload-field artist-location" key='artistLocation'>
                            <p className="field-title">Artist Location</p>
                              <input
                                value={this.state.fields.artistLocation}
                                onChange={this._handleInputChange('artistLocation')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>
                          </div>

                          <div className={'right-content'}>

                            <p className="field-title">Subgenres</p>


                              <Select
                                value={this.state.fields.selectedSubgenres}
                                isMulti={true}
                                onChange={this._handleSelectedSubgenresChange}
                                options={this.state.subgenres}
                              />



                            <div className="upload-field imageUrl" key='imageUrl'>
                            <p className="field-title">Image Url</p>
                              <input
                                value={this.state.fields.imageUrl}
                                onChange={this._handleInputChange('imageUrl')}
                                type={'text'}
                                placeholder=""
                                className={'upload-song-input'}
                              />
                            </div>

                            <input
                              type={'submit'}
                              value={'submit'}
                              className={'uploadForm__submit-button'}
                            />

                            <br />
                            {this.state.error && <p className='error'>{this.state.error}</p>}
                            {this.state.message && <p className='message'>{this.state.message}</p>}
                          </div>
                  </Fragment>
                }
              </div>
            </form>
          </div>
      </div>
    )
  }

}

export default SingleSong
