import React from 'react'
import domtoimage from 'dom-to-image'
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
    // var canvas = document.createElement('canvas');
    var canvas = document.getElementById('affix-artboard')
    var test = document.getElementById('blueBox')

    domtoimage.toJpeg(canvas)
    .then(function(dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
    })


    // var context = canvas.getContext('2d');
    //
    // domvas.toImage(document.getElementById("affix-artboard"), function() {
    //   context.drawImage(this, 200, 200);
    // });
    //
    // var artBoardImage = canvas.toDataURL('image/png')
    // console.log(artBoardImage)
  }

  render() {
    return <div>
      <Header>
        <SearchBar addImage={this.addImage} />
        <button onClick={this.exportToCanvas}>Export</button>
      </Header>

      <Artboard>
        {this.state.imageURLs.map((url, ind) => <Pin url={url} key={ind} />)}
      </Artboard>
    </div>

  }

}
