/*
 * @Author: Sanmao
 * @Date: 2020-10-26 17:11:45
 * @LastEditors: Sanmao
 * @LastEditTime: 2020-10-28 20:18:43
 * @Descripttion: Header组件
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import util from "../../utils/utils"
import './index.less'
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: "Sanmao"
            },
            sysTime: ''
        }
    }
    componentWillMount() {
        this.getWeatherAPIDate()
        setInterval(() => {
            let sysTime = util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)

    }
    /**
     * @description 获取天气
     */
    getWeatherAPIDate = () => {

    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>{this.state.user.name}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        <span>首页</span>
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}