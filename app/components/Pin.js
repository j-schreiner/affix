import React from 'react'
import Rnd from 'react-rnd'

export default class Pin extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <Rnd
      default={{
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      }}
><div className = "plswrk"></div></Rnd>
  }

}
