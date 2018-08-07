// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render(props) {
    return <button onClick = {(e) => {
      this.props.onReceiveCoordinates([e.clientX, e.clientY])}}>Coords</button>
  }
}
