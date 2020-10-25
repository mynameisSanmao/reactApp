import React, { Component } from 'react'
export default class Child extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      names: ''
    }
  }

  render() {
    return (
      <div>
        <p>我是子组件</p>
        <div>{this.props.name}</div>
        <div>{this.state.names}</div>
      </div>
    )
  }
}