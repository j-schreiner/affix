import React from 'react'
import Pin from './Pin'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div className = "container">
      <Pin/>
      <Pin/>
      <Pin/>
    </div>
  }

}
