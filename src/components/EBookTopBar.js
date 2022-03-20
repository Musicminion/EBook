import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Button } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    ShoppingOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;

function testClick1(){
    const winId=window.open('about:blank');
    winId.location.href="/ebook/booktable"
}

function testClick2(){
    const winId=window.open('about:blank');
    winId.location.href="/login/feedback"
}

class EBookTopBar extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu className="MainPageTopBar" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                <Menu.Item>
                    <Link to={{pathname:'/eBook'}}>eBook网上书城</Link>
                </Menu.Item>
                <SubMenu key="account" icon={<UserOutlined />} title="我的账户(暂定)">
                    <Menu.ItemGroup>
                        <Menu.Item key="setting:6">账户相关</Menu.Item>
                        <Menu.Item key="setting:7">支付方式</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="shoppingCart" icon={<ShoppingCartOutlined />} title="我的购物车">
                    <Menu.ItemGroup>
                        <Menu.Item key="setting:8" onClick={testClick1}>购物车</Menu.Item>
                        <Menu.Item key="setting:9" onClick={testClick1}>回收栏</Menu.Item>
                    </Menu.ItemGroup>

                </SubMenu>


                <SubMenu key="SubMenu" icon={<ShoppingOutlined />} title="我的订单">
                    <Menu.ItemGroup title="订单查询">
                         <Menu.Item key="setting:1" onClick={testClick1}>未付款</Menu.Item>
                         <Menu.Item key="setting:2" onClick={testClick1}>进行中</Menu.Item>
                         <Menu.Item key="setting:3" onClick={testClick1}>已完成</Menu.Item>
                    </Menu.ItemGroup>

                    <Menu.ItemGroup title="订单反馈">
                        <Menu.Item key="setting:4" onClick={testClick2}>联系卖家</Menu.Item>
                        <Menu.Item key="setting:5" onClick={testClick2}>联系平台</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <Menu.Item id="MainPageLoginDiv">
                    <Link
                        to={{pathname:'/login'}}>
                        <Button className="MainPageLoginButton">登录</Button>
                    </Link>
                </Menu.Item>

            </Menu>
        );
    }
}

export default EBookTopBar;
