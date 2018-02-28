import React from 'react'
import Rnd from 'react-rnd'
import './Pin.scss'

export default class Pin extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    var divStyle = {
      backgroundImage: 'url(' + 'https://images.unsplash.com/photo-1494794347578-e22cd4049dad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=540de6a0408c13d94d832dbd0e48569a&auto=format&fit=crop&w=1350&q=80' + ')'
    }
    return <Rnd
      default={{
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      }}

      bounds="parent"

      ><div className="pin" style={divStyle}>
      </div>
      </Rnd>
  }

}
