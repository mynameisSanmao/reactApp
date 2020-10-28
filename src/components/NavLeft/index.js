/*
 * @Author: Sanmao
 * @Date: 2020-10-26 17:16:01
 * @LastEditors: Sanmao
 * @LastEditTime: 2020-10-28 19:10:02
 * @Descripttion: 
 */
import React from 'react'
import { Menu } from 'antd';
import logoImg from "../../assets/img/logo.png"
import menuList from "../../config/menuConfig"
import './index.less'
const { SubMenu } = Menu;

export default class MenuLeft extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            menuData: ''
        }
    }
    componentWillMount() {
        const menuData = this.setMenuData(menuList)
        this.setState({
            menuData
        })
    }
    setMenuData = (data) => {
        return data.map(item => {
            if (item.children) {

                return <SubMenu key={item.key} title={item.title}>{this.setMenuData(item.children)}</SubMenu>
            } else {
                return <Menu.Item key={item.key}>{item.title}</Menu.Item>
            }
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src={logoImg} />
                    <h2>Smart Fabric</h2>
                </div>
                <Menu mode="vertical" theme="dark">
                    {
                        this.state.menuData.map(item => {
                            return item
                        })
                    }
                </Menu>

            </div>
        )
    }
}
