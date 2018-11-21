import React, { Component } from 'react'
import './UploadSongForm.scss'


class UploadSongForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
    }
  }

  _handleFieldChange = (field) => {
    this.setState({ [field]: event.target.value })
  }

  _handleSubmit = (event) => {
    event.preventDefault();

    const { title, author } = this.state
    // this function doesn't exist yet
    // uploadSongPOST({ title, author })
  }

  render() {
    return (
      <div className={'loginForm__wrapper'}>
        {'Upload Song'}
        <form onSubmit={this._handleSubmit}>
          <div className={'loginForm__container'}>
            <div>
              <input
                onChange={() => this._handleFieldChange('title')}
                type={'text'}
                placeholder={'Title'}
                className={'loginForm__input'}
              />
            </div>
            <div>
              <input
                onChange={() => this._handleFieldChange('artist')}
                type={'text'}
                placeholder={'Artist'}
                className={'loginForm__input'}
              />
            </div>
          </div>
          <input
            type={'submit'}
            value={'upload'}
            className={'loginForm__submit-button'}
          />
        </form>
      </div>
    )
  }
}

export default UploadSongForm
