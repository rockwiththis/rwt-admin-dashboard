import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import './SingleSong.scss'
import Loading from '../Loading'
import Cookie from 'js-cookie'
import Select from 'react-select';

import fetchSelectState from '../../actions/fetch-select-state';

class SingleSong extends Component {
  constructor(props) {
    super(props)

    const { song } = this.props
    console.log('received song moments', song.moments);
    this.state = {
      fields: {
        songId: song.id,
        songTitle: song.name,
        artistName: song.artist_name,
        description: song.description,
        imageUrl: song.image_url,
        songFileName: song.song_file_name,
        createdAt: song.created_at,
        spotifyLink: song.spotify_link,
        soundcloudLink: song.soundcloud_link,
        soundcloudTrackId: song.soundcloud_track_id,
        youtubeLink: song.youtube_link,
        youtubeTrackId: song.youtube_track_id,
        bpm: song.bpm,
        artistLocation: song.artist_location,
        selectedSubgenres: song.sub_genres.map(({ id, name }) => ({ value: id, label: name })),
        selectedMoments: song.moments.map(({ id, name }) => ({ value: id, label: name })),
        selectedCurator: {
          value: song.curator_id,
          label: `${song.curator_first_name} ${song.curator_last_name}`
        },
        isHidden: song.hidden,
      },
      subgenres: [],
      curators: [],
      moments: [],
      file: null
    }
  }

  fetchAllSubgenres = () =>
    fetchSelectState('subgenres').then(newState => this.setState(newState));

  fetchAllCurators = () =>
    fetchSelectState(
      'curators',
      ({ first_name, last_name }) => `${first_name} ${last_name}`
    ).then(newState => this.setState(newState));

  fetchAllMoments = () =>
    fetchSelectState('moments').then(newState => this.setState(newState));

  componentDidMount() {
    this.fetchAllSubgenres();
    this.fetchAllCurators();
    this.fetchAllMoments();
  }

  handleFieldChange = fieldName => fieldValue =>
    this.setState({
      fields: {
        ...this.state.fields,
        [fieldName]: fieldValue
      }
    });

  handleInputChange = inputName => event =>
    this.handleFieldChange(inputName)(event.target.value);

  handleIsHiddenChange = event =>
    this.handleFieldChange('isHidden')(event.target.checked);

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
        songFileName: this.state.fields.songFileName,
        curatorId: this.state.fields.selectedCurator.value,
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
        subgenreIds: this.state.fields.selectedSubgenres.map(({ value }) => value),
        momentIds: this.state.fields.selectedMoments.map(({ value }) => value),
        hidden: this.state.fields.isHidden,
        moments: this.state.fields.moments,
        sessionKey: Cookie.get('rwt-session-key'),
        username: Cookie.get('rwt-session-username')
      })
    };

    fetch(`http://localhost:9292/api/songs/${this.state.fields.songId}`, requestParams)
      .then(response => {
        if (response.ok) {
          const msg = "Successfully edited song"
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

  handleImageFileUpload = event => {
    event.preventDefault();
    this.uploadS3File(event.target.files[0], 'image')
      .then(res => (
          !!res.s3ImageUrl &&
          this.setState({
            fields: {
              ...this.state.fields,
              imageUrl: res.s3ImageUrl
            }
          })
      ));
  }

  handleSongFileUpload = event => {
    event.preventDefault();
    this.uploadS3File(event.target.files[0], 'song')
      .then(res => (
          !!res.s3SongName &&
          this.setState({
            fields: {
              ...this.state.fields,
              songFileName: res.s3SongName
            }
          })
      ));
  }

  uploadS3File = (fileData, type) => {

    const formData = new FormData();
    formData.append('file', fileData);
    formData.append('fileName', fileData.name);

    const requestParams = {
      method: 'POST',
      body: formData
    };

    return fetch('http://localhost:9292/api/s3/upload/' + type, requestParams)
      .then(response => {
        if (response.ok) {
          return response.json().then(data => {
            console.log(data);
            this.setState({
              message: `Successfully uploaded ${type}`,
              error: ''
            });
            return data
          });
        } else {
          console.log(`Server error: ${response.statusText}`);
          this.setState({ error: response.statusText });
          return null;
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.toString());
        this.setState({ error: error.toString() });
        return null;
      });
  }

  render() {
    const { song } = this.props;

    return (
        <div className="singlesong-container">
          <div className="singlesong-header">
            <h3>Edit Song</h3>
          </div>

          <div className="singlesong">

            <form onSubmit={this._handleSubmit}>
              <div className="upload-song-form">
                <Fragment>

                  <div className="left-content">

                    <div className="upload-field song-name" key="songTitle">
                    <p className="field-title">Song Name</p>
                      <input
                        value={this.state.fields.songTitle}
                        onChange={this.handleInputChange('songTitle')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>

                    <div className="upload-field artist-title" key='artistName'>
                    <p className="field-title">Artist Name</p>
                      <input
                        value={this.state.fields.artistName}
                        onChange={this.handleInputChange('artistName')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>

                    <div className="upload-field song-description" key='description'>
                    <p className="field-title">Write Up</p>
                      <textarea
                        value={this.state.fields.description}
                        onChange={this.handleInputChange('description')}
                        type={'text-area'}
                        placeholder="..."
                        className={'upload-song-text-area'}
                      />
                    </div>

                    <div className="upload-field spotify-link" key='spotifyLink'>
                    <p className="field-title">Spotify Link</p>
                      <input
                        value={this.state.fields.spotifyLink}
                        onChange={this.handleInputChange('spotifyLink')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>

                    <div className="upload-field soundcloud-link" key='soundcloudLink'>
                    <p className="field-title">SoundCloud Link</p>
                      <input
                        value={this.state.fields.soundcloudLink}
                        onChange={this.handleInputChange('soundcloudLink')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>

                    <div className="upload-field soundcloud-track-id" key='soundcloudTrackId'>
                      <p className="field-title">SoundCloud Track id</p>
                      <input
                        value={this.state.fields.soundcloudTrackId}
                        onChange={this.handleInputChange('soundcloudTrackId')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>


                    <div className="upload-field youtube-link" key='youtubeLink'>
                      <p className="field-title">Youtube Link</p>
                      <input
                        value={this.state.fields.youtubeLink}
                        onChange={this.handleInputChange('youtubeLink')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>

                    <div className="upload-field youtube-track-id" key='youtubeTrackId'>
                      <p className="field-title">Youtube Track id</p>
                      <input
                        value={this.state.fields.youtubeTrackId}
                        onChange={this.handleInputChange('youtubeTrackId')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>

                    <div className="upload-field bpm" key='bpm'>
                      <p className="field-title">BPM</p>
                      <input
                        value={this.state.fields.bpm}
                        onChange={this.handleInputChange('bpm')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>

                    <div className="upload-field artist-location" key='artistLocation'>
                      <p className="field-title">Artist Location</p>
                      <input
                        value={this.state.fields.artistLocation}
                        onChange={this.handleInputChange('artistLocation')}
                        type={'text'}
                        placeholder=""
                        className={'upload-song-input'}
                      />
                    </div>

                    { /* TODO make this less fugly */ }
                    <p className="field-title">Is Hidden</p>
                    <input
                      name="Is Hidden"
                      type="checkbox"
                      checked={this.state.fields.isHidden}
                      onChange={this.handleIsHiddenChange}
                    />
                  </div>

                  <div className="right-content">

                    <p className="field-title">Curator</p>
                    <Select
                      value={this.state.fields.selectedCurator}
                      onChange={this.handleFieldChange('selectedCurator')}
                      options={this.state.curators}
                    />

                    <p className="field-title">Subgenres</p>
                    <Select
                      value={this.state.fields.selectedSubgenres}
                      isMulti={true}
                      onChange={this.handleFieldChange('selectedSubgenres')}
                      options={this.state.subgenres}
                    />

                    <p className="field-title">Moments</p>
                    <Select
                      value={this.state.fields.selectedMoments}
                      isMulti={true}
                      onChange={this.handleFieldChange('selectedMoments')}
                      options={this.state.moments}
                    />

                    <div className="upload-field song" key='song'>
                      <p className="field-title">Song File</p>
                      <input
                        value={this.state.fields.songFileName}
                        type="text"
                        className="upload-song-input"
                        disabled={true}
                      />
                      <input
                        label='upload file'
                        type='file'
                        onChange={this.handleSongFileUpload}
                      />
                    </div>

                    <div className="upload-field image" key='image'>
                      <p className="field-title">Image</p>
                      <input
                        value={this.state.fields.imageUrl}
                        type="text"
                        className="upload-song-input"
                        disabled={true}
                      />
                      <input
                        label='upload file'
                        type='file'
                        onChange={this.handleImageFileUpload}
                      />
                      <img className="song-img-preview" src={this.state.fields.imageUrl} />
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
              </div>
            </form>

          </div>
        </div>
    )
  }

}

export default SingleSong
