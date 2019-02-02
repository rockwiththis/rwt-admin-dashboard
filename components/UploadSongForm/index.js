import React, { Component, Fragment } from 'react'
import Select from 'react-select';
import './UploadSongForm.scss'
import ReactS3Uploader from 'react-s3-uploader'
import redirect from '../../lib/redirect.js'
import Datetime from 'react-datetime'
import Cookie from 'js-cookie'

import fetchSelectState from '../../actions/fetch-select-state';

const defaultFields = {
  songTitle: '',
  artistName: '',
  description: '',
  createdAt: '',
  spotifyLink: '',
  soundcloudLink: '',
  soundcloudTrackId: '',
  youtubeLink: '',
  youtubeTrackId: '',
  bpm: '',
  createdAt:'',
  artistLocation: '',
  selectedSubgenres: [],
  selectedMoments: [],
  selectedCurator: {}
}

class UploadSongForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: { ...defaultFields },
      subgenres: [],
      curators: []
    }
  }

  fetchAllSubgenres = async () =>
    fetchSelectState('subgenres').then(newState => this.setState(newState));

  fetchAllCurators = async () =>
    fetchSelectState(
      'curators',
      ({ first_name, last_name }) => `${first_name} ${last_name}`
    ).then(newState => this.setState(newState));

  fetchAllMoments = async () =>
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

  handleDateInputChange = inputName => event =>
    this.handleFieldChange(inputName)(event._d);

  refreshForm = message => {
    this.setState({
      message: message,
      fields: { ...defaultFields }
    });
  }

  _handleSubmit = (event) => {
    event.preventDefault();

    const requestParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        name: this.state.fields.songTitle,
        artistName: this.state.fields.artistName,
        description: this.state.fields.description,
        imageUrl: this.state.s3ImageUrl,
        songFileName: this.state.s3SongName,
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
        createdAt: this.state.fields.createdAt,
        artistLocation: this.state.fields.artistLocation,
        subgenreIds: this.state.fields.selectedSubgenres.map(({ value }) => value),
        momentIds: this.state.fields.selectedMoments.map(({ value }) => value),
        sessionKey: Cookie.get('rwt-session-key'),
        username: Cookie.get('rwt-session-username')
      })
    };

    fetch("http://localhost:9292/api/songs", requestParams)
      .then(response => {
        if (response.ok) {
          const msg = "Successfully added song"
          console.log(msg);
          redirect({}, "/")
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

  handleImageFileUpload = event => {
    event.preventDefault();
    this.uploadS3File(event.target.files[0], 'image')
      .then(res => !!res.s3ImageUrl && this.setState({ s3ImageUrl: res.s3ImageUrl }));
  }

  handleSongFileUpload = event => {
    event.preventDefault();
    this.uploadS3File(event.target.files[0], 'song')
      .then(res => !!res.s3SongName && this.setState({ s3SongName: res.s3SongName }));
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
    const { subgenres, selectedSubgenres } = this.state;
    const isLoaded = subgenres.length > 0

    return (
        <div className={'song-container'}>
          <form onSubmit={this._handleSubmit}>
            <div className={'upload-song-form'}>
              <Fragment>

                <div className={'left-content'}>

                  <div className="upload-field song-name" key='songTitle'>
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
                      col="20"
                      className={'upload-song-text-area'}
                      wrap="hard"
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
                      value={this.state.fieldsyoutubeLink}
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
                </div>

                <div className={'right-content'}>

                  <div className="upload-field curator-id" key='curator-id'>
                    <p className="field-title">Curator</p>
                    <Select
                      value={this.state.fields.selectedCurator}
                      onChange={this.handleFieldChange('selectedCurator')}
                      options={this.state.curators}
                    />
                  </div>

                  <p className="field-title">Subgenres</p>
                  <Select
                    value={this.state.selectedSubgenres}
                    isMulti={true}
                    onChange={this.handleFieldChange('selectedSubgenres')}
                    options={this.state.subgenres}
                  />

                  <p className="field-title">Moments</p>
                  <Select
                    value={this.state.selectedMoments}
                    isMulti={true}
                    onChange={this.handleFieldChange('selectedMoments')}
                    options={this.state.moments}
                  />

                  <div className="upload-field createdAt">
                    <p className="field-title">Published at</p>
                    <Datetime
                      value={this.state.fields.createdAt}
                      onChange={this.handleDateInputChange('createdAt')}
                    />
                  </div>

                  <div className="upload-field song" key='song'>
                    <p className="field-title">Upload Song</p>
                    <input
                      label='upload file'
                      type='file'
                      onChange={this.handleSongFileUpload}
                    />
                  </div>

                  <div className="upload-field image" key='image'>
                    <img className="song-img-preview" src={this.state.s3ImageUrl} />
                    <p className="field-title">Upload Image</p>
                    <input
                      label='upload file'
                      type='file'
                      onChange={this.handleImageFileUpload}
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
            </div>
          </form>
        </div>
    )
  }
}

export default UploadSongForm;
