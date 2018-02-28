import React from 'react'
import Header from './Header'
import Pin from './Pin'
import Artboard from './Artboard'
import SearchBar from './SearchBar'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      unsplash: ['loading...']
    }
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/search/photos?query=plants&client_id=0201b88f3048a3ee9d3aabde522330adaecc6304b636c8c75e53d9df3f5fa0ae')
    .then(res => res.json())
    .then(res => this.setState({unsplash: res.results[0].urls.raw}))
  }

  // {res.results[0].urls.raw}

  render() {
    return <div>
      <Header>
      <SearchBar />
      </Header>

      <Artboard>
        <Pin />
        <Pin />
        <Pin />
      </Artboard>
    </div>

  }

}
