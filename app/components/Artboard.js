import React from 'react'
import  './Artboard.scss'

export default class Artboard extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return <div className = "artboard">
        {this.props.children}
      </div>
  }

}
