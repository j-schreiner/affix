import React from 'react'
import DomToImage from 'dom-to-image'
import Header from './Header'
import Pin from './Pin'
import Artboard from './Artboard'
import SearchBar from './SearchBar'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.addImage = this.addImage.bind(this)
    this.state = {
      imageURLs: []
    }
  }

  addImage(url) {
    let urls = this.state.imageURLs
    this.setState({imageURLs: [...urls, url]})
  }

  exportToCanvas() {
    var canvas = document.getElementById('affix-artboard')

    DomToImage.toJpeg(canvas)
    .then(function(dataUrl) {
      var link = document.createElement('a');
      link.download = 'affix.jpeg';
      link.href = dataUrl;
      link.click();
    })
  }

  render() {
    return <div>
      <Header>
        <div>
          <SearchBar addImage={this.addImage} />
          <button className="export" onClick={this.exportToCanvas}>export</button>
        </div>
      </Header>

      <Artboard>
        {this.state.imageURLs.map((url, ind) => <Pin url={url} key={ind} />)}
      </Artboard>
    </div>
  }
}
