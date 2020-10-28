/*
 * @Author: Sanmao
 * @Date: 2020-10-26 17:10:53
 * @LastEditors: Sanmao
 * @LastEditTime: 2020-10-28 19:10:22
 * @Descripttion: 首页
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import MenuLeft from './components/NavLeft'
import Footer from './components/Footer'
import './assets/style/common.less'
export default class Admin extends Component {
    render() {
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <MenuLeft></MenuLeft>
                </Col>
                <Col span={21} className="main">
                    <Header>123</Header>
                    <Row className="content">content</Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}