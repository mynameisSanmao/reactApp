import React, { Component } from 'react'
export default class Child extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      names: ''
    }
  }
  componentWillReceiveProps(data) {
    console.log(data, 'data')
    this.setState({
      names: data.name
    })
  }
  componentDidMount() {
    console.log(this)
    this.setState({
      names: this.props.name
    })
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