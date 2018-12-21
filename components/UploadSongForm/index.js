import React, { Component, Fragment } from 'react'
import Select from 'react-select';
import './UploadSongForm.scss'
import ReactS3Uploader from 'react-s3-uploader'
import redirect from '../../lib/redirect.js'
import Datetime from 'react-datetime'


const defaultFields = {
  songTitle: '',
  artistName: '',
  description: '',
  curatorId: '',
  createdAt: '',
  spotifyLink: '',
  soundcloudLink: '',
  soundcloudTrackId: '',
  youtubeLink: '',
  youtubeTrackId: '',
  bpm: '',
  createdAt:'',
  artistLocation: '',
  selectedSubgenres: []
}

const placeholderSubgenres = [
  { value: 'Subgenre', label: 'Subgenre' },
];

class UploadSongForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: { ...defaultFields },
      subgenres: [],
    }
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

  componentDidMount() {
    this._fetchAllSubgenres();
  }

  // componentDidMount() {
  //   const user = checkIsLoggedIn()
  //   console.log('>>> user', user)
  // }


  _handleInputChange = inputName => event => {

    this.setState({
      fields: {
        ...this.state.fields,
        [inputName]: event.target.value
      }
    });
  }
  _handleDateInputChange = inputName => event => {
    console.log(event._d);

    this.setState({
      fields: {
        ...this.state.fields,
        createdAt: event._d
      }
    });
  }

  _handleSelectedSubgenresChange = selectedSubgenres => {
    console.log(selectedSubgenres);
    this.setState({
      fields: {
        ...this.state.fields,
        selectedSubgenres
      }
    });

    console.log(this.state.fields);
  }

  refreshForm = message => {
    this.setState({
      message: message,
      fields: { ...defaultFields }
    });
  }

  _handleSubmit = (event) => {
    event.preventDefault();

    const description = this.state.fields.description.replace(/\r?\n/g, '<br />')

    const requestParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        name: this.state.fields.songTitle,
        artistName: this.state.fields.artistName,
        description: description,
        imageUrl: this.state.s3ImageUrl,
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
        createdAt: this.state.fields.createdAt,
        artistLocation: this.state.fields.artistLocation,
        subgenreIds: this.state.fields.selectedSubgenres.map(({ value }) => value),
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

  _onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this._handleSubmit(event)
    }
  }

  handleFileUpload = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    this.uploadFile(formData);
  }

  uploadFile = formData => {
    const requestParams = {
      method: "POST",
      body: formData
    };
    fetch("http://localhost:9292/api/s3/upload", requestParams)
      .then(response => {
        if (response.ok) {
          const msg = "Successfully uploaded file";
          response.json().then(data => {
            this.setState({
              s3ImageUrl: data.s3ImageUrl,
              message: msg,
              error: ''
            });
          });
        } else {
          console.log(`Server error: ${response.statusText}`);
          this.setState({ error: response.statusText });
        }
        return;
      })
      .catch(error => {
        console.log(error);
        console.log(error.toString());
        this.setState({ error: error.toString() });
        return;
      });
  }

  render() {

    const { subgenres, selectedSubgenres } = this.state;
    const isLoaded = subgenres.length > 0


    return (
      <div className={'song-container'} onKeyPress={this._onKeyPress}>
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
                        <div className="upload-field curator-id" key='curator-id'>
                        <p className="field-title">Curator id</p>
                          <input
                            value={this.state.fields.curatorId}
                            onChange={this._handleInputChange('curatorId')}
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
                            col="20"
                            className={'upload-song-text-area'}
                            wrap="hard"
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

                        {
                          this.state.subgenres.length > 0 ?
                          <Select
                            value={this.state.selectedSubgenres}
                            isMulti={true}
                            onChange={this._handleSelectedSubgenresChange}
                            options={this.state.subgenres}
                          /> :
                          <Select
                            value={this.state.selectedSubgenres}
                            isMulti={true}
                            onChange={this._handleSelectedSubgenresChange}
                            options={placeholderSubgenres}
                          />
                        }
                        <div className="upload-field createdAt">
                        <p className="field-title">Published at</p>
                          <Datetime
                          value={this.state.fields.createdAt}
                          onChange={this._handleDateInputChange()}
                          />
                        </div>
                        <div className="upload-field image" key='image'>
                        <img className="song-img-preview" src={this.state.s3ImageUrl} />

                          <p className="field-title">Upload Image</p>
                          <input label='upload file' type='file' onChange={this.handleFileUpload} />
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
    )
  }
}

export default UploadSongForm
