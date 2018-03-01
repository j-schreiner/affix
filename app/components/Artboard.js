import React from 'react'
import './Artboard.scss'

export default class Artboard extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return <div id="affix-artboard" className="artboard">
        {this.props.children}
      </div>
  }

}
