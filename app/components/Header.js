import React from 'react'
import Rnd from 'react-rnd'
import './Header.scss'

export default class Pin extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <header className="header">
        <h1 className="title">affix.</h1>
        {this.props.children}
      </header>
  }

}
