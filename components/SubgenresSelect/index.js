import React, { Component } from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-unfetch'
import { FETCH_ALL_SUBGENRES_URL } from '../../api/urls'


const placeholderSubgenres = [
  { value: 'Subgenre', label: 'Subgenre' },
];

class SubgenresSelect extends React.Component {
  constructor(props) {
    super(props)

  }
  state = {
    selectedOption: null,
    subgenres:''
  }

  async componentDidMount() {
    const res = await fetch(FETCH_ALL_SUBGENRES_URL)
    const resJson = await res.json()
    // console.log('>> subgenres!', resJson);

    const subgenresArray = []

    resJson.forEach((subgenre, i) => {

        subgenresArray.push({value: subgenre.id, label: subgenre.name})
        // console.log('>> subgenres!', subgenresArray);

      return  subgenresArray

    })
    console.log(subgenresArray);

    this.setState({ subgenres: subgenresArray })
  }




  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption, subgenres } = this.state;
    const isLoaded = subgenres.length > 0
    return (
        <div>
        {isLoaded
          ? (
            <Select
              value={selectedOption}
              isMulti
              onChange={this.handleChange}
              options={subgenres}
            />
          )
          : (
            <Select
              value={selectedOption}
              isMulti
              onChange={this.handleChange}
              options={placeholderSubgenres}
            />
          )}
        </div>
    );
  }
}


export default SubgenresSelect
