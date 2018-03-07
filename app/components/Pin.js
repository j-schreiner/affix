import React from 'react'
import Rnd from 'react-rnd'
import './Pin.scss'

export default class Pin extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.url + ')'
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
