/*
 * @Author: Sanmao
 * @Date: 2020-10-25 17:26:20
 * @LastEditors: Sanmao
 * @LastEditTime: 2020-10-26 20:11:09
 * @Descripttion: 
 */
import React, { Fragment } from 'react'
import Child from './child'
import './index.less'
import './scss.scss'
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
  changeInput = (e) => {
    console.log(e)
  }
  render() {
    return (
      <Fragment>
        <input value={this.state.count} className="p-10 m-10" onChange={this.changeInput}/>
        <button onClick={this.handleClick}>增加</button>
        <Child name={this.state.count}></Child>
      </Fragment>
    )


  }
}