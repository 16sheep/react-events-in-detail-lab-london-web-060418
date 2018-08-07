// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render(props) {
    return (<button onClick = {(event) => {
      //  const e = {...event}
      // console.log(e)
      // e.persist()
      event.persist()
      setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }}></button>
    )
  }
}//
