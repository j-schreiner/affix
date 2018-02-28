import React from 'react'
import './SearchBar.scss'

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
      this.setState({value: event.target.value});
    }

  render() {
    return <form className = "search-bar">
        <input type="text" placeholder = "search" value={this.state.value} onChange={this.handleChange} />
      </form>
  }

}
