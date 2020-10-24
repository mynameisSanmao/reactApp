import React, { Fragment } from 'react'
import Child from './child'
export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  handleClick = () => {
    console.log(123)
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <Fragment>
        <input value={this.state.count} />
        <button onClick={this.handleClick}>增加</button>
        <Child name={this.state.count}></Child>
      </Fragment>
    )


  }
}