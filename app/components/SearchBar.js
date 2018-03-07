import React from 'react'
import './SearchBar.scss'

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.setValue = this.setValue.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      value: ''
    }
  }

  getData(e) {
    e.preventDefault()

    fetch('https://api.unsplash.com/search/photos?query=' + this.state.value + '&client_id=0201b88f3048a3ee9d3aabde522330adaecc6304b636c8c75e53d9df3f5fa0ae')
      .then(res => res.json())
      .then(res => res.results[0].urls.regular)
      .then(url => this.props.addImage(url))
      .then(this.state.value = "")
  }

  setValue(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return <form className="search-bar" ref="form" onSubmit={this.getData}>
        <input type="text" placeholder="" value={this.state.value} onChange={this.setValue} />
        <button className="search">search</button>
      </form>
  }

}
