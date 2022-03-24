import React from 'react';
import 'antd/dist/antd.css';
import {Avatar, Badge, Menu} from 'antd';
import { Button } from 'antd';
import {
    ShoppingCartOutlined,
    UserOutlined,
    ShoppingOutlined, SoundOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import LoginPassport from "./Login/LoginPassport";



const { SubMenu } = Menu;

function testClick1(){
    const winId=window.open('about:blank');
    winId.location.href="/ebook/booktable"
}

function testClick2(){
    const winId=window.open('about:blank');
    winId.location.href="/login/feedback"
}


class TopBar extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'mail',
            userPermissionLevel: 3,
        };
    }

    // 暂定 userPermissionLevel 0 超级管理员，1 商店用户 2 普通用户 3 未登录用户

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    musicPlay(musicId){
        let tmp = document.getElementById("BackgroundMusic");
        if(tmp)
        {
            tmp.setAttribute("src",require("../../src/asset/mp3/"+ musicId +".mp3"));
            tmp.play();
        }
        else
        {
            console.log("获取失败");
        }
    }

    logout(){
        LoginPassport.logout(
            () => {
                window.location.href="/";
            }
        );
    }
    componentDidMount() {
        let userPrivilege =localStorage.getItem('ebookPrivilege');
        if(userPrivilege!=null)
        {
            // this.setState({ userPermissionLevel: userPricilege});
            this.setState(prevState => {
                return {
                    userPermissionLevel: userPrivilege -'0',
                };
            });
        }
        else{
            this.setState({userPermissionLevel: 3});
        }
    }

    render() {
        const { current } = this.state;
        switch (this.state.userPermissionLevel) {
            case 3:
                return (
                    <Menu className="MainPageTopBar" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                        <Menu.Item>
                            <Link to={{pathname:'/eBook'}}>eBook网上书城</Link>
                        </Menu.Item>

                        <SubMenu key="SubMenu" icon={<SoundOutlined />} title="背景音乐">
                            <Menu.ItemGroup title="播放设置">
                                <Menu.Item>
                                    <audio className="webpageMusic" id="BackgroundMusic" controls="controls" loop="loop" preload="auto"
                                           src={require("../../src/asset/mp3/1.mp3")}>
                                        你的浏览器版本太低，不支持播放
                                    </audio>
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="我的音乐">
                                <Menu.Item key="setting:18" onClick={(e) => this.musicPlay("1")}>1: 勾指起誓</Menu.Item>
                                <Menu.Item key="setting:19" onClick={(e) => this.musicPlay("2")}>2: 雨幕</Menu.Item>
                                <Menu.Item key="setting:20" onClick={(e) => this.musicPlay("3")}>3: 1967</Menu.Item>
                                <Menu.Item key="setting:21" onClick={(e) => this.musicPlay("4")}>4: 人世间</Menu.Item>
                                <Menu.Item>上传我的音乐</Menu.Item>
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
                break;
            case 2:
                return(
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

                        <SubMenu key="myPurchase" icon={<ShoppingOutlined />} title="我的订单">
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

                        <SubMenu key="SubMenu" icon={<SoundOutlined />} title="背景音乐">
                            <Menu.ItemGroup title="播放设置">
                                <Menu.Item>
                                    <audio className="webpageMusic" id="BackgroundMusic" controls="controls" loop="loop" preload="auto"
                                           src={require("../../src/asset/mp3/1.mp3")}>
                                        你的浏览器版本太低，不支持播放
                                    </audio>
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="我的音乐">
                                <Menu.Item key="setting:18" onClick={(e) => this.musicPlay("1")}>1: 勾指起誓</Menu.Item>
                                <Menu.Item key="setting:19" onClick={(e) => this.musicPlay("2")}>2: 雨幕</Menu.Item>
                                <Menu.Item key="setting:20" onClick={(e) => this.musicPlay("3")}>3: 1967</Menu.Item>
                                <Menu.Item key="setting:21" onClick={(e) => this.musicPlay("4")}>4: 人世间</Menu.Item>
                                <Menu.Item>上传我的音乐</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <Menu.Item id="MainPageLoginDiv">
                            <Avatar size="small" icon={<UserOutlined/>} />
                        </Menu.Item>
                    </Menu>
                );
                break;
            case 1:
                return(
                    <Menu className="MainPageTopBar" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                        <Menu.Item>
                            <Link to={{pathname:'/eBook'}}>eBook书城 商店管理</Link>
                        </Menu.Item>
                        <SubMenu key="account" icon={<UserOutlined />} title="我的账户">
                            <Menu.ItemGroup>
                                <Menu.Item key="setting:6">账户相关</Menu.Item>
                                <Menu.Item key="setting:7">支付方式</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="shoppingCart" icon={<ShoppingCartOutlined />} title="我的商店">
                            <Menu.ItemGroup>
                                <Menu.Item key="setting:8" onClick={testClick1}>商品管理</Menu.Item>
                                <Menu.Item key="setting:9" onClick={testClick1}>数据统计</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="myPurchase" icon={<ShoppingOutlined />} title="客户订单">
                            <Menu.ItemGroup title="订单查询">
                                <Menu.Item key="setting:1" onClick={testClick1}>未付款</Menu.Item>
                                <Menu.Item key="setting:2" onClick={testClick1}>进行中</Menu.Item>
                                <Menu.Item key="setting:3" onClick={testClick1}>已完成</Menu.Item>
                            </Menu.ItemGroup>

                            <Menu.ItemGroup title="订单反馈">
                                <Menu.Item key="setting:4" onClick={testClick2}>评价汇总</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="SubMenu" icon={<SoundOutlined />} title="背景音乐">
                            <Menu.ItemGroup title="播放设置">
                                <Menu.Item>
                                    <audio className="webpageMusic" id="BackgroundMusic" controls="controls" loop="loop" preload="auto"
                                           src={require("../../src/asset/mp3/1.mp3")}>
                                        你的浏览器版本太低，不支持播放
                                    </audio>
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="我的音乐">
                                <Menu.Item key="setting:18" onClick={(e) => this.musicPlay("1")}>1: 勾指起誓</Menu.Item>
                                <Menu.Item key="setting:19" onClick={(e) => this.musicPlay("2")}>2: 雨幕</Menu.Item>
                                <Menu.Item key="setting:20" onClick={(e) => this.musicPlay("3")}>3: 1967</Menu.Item>
                                <Menu.Item key="setting:21" onClick={(e) => this.musicPlay("4")}>4: 人世间</Menu.Item>
                                <Menu.Item>上传我的音乐</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu
                            id="MainPageLoginDiv"
                            title="商户 张子谦"
                            icon={<Badge count={1} size="small"><Avatar size="middle" icon={<UserOutlined/>}/></Badge>}
                        >
                            <Menu.Item key="setting:22">我的消息</Menu.Item>
                            <Menu.Item key="setting:23" onClick={this.logout}>退出登录</Menu.Item>

                        </SubMenu>
                    </Menu>
                );
                break;
            case 0:
                return(
                    <Menu className="MainPageTopBar" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                        <Menu.Item>
                            <Link to={{pathname:'/eBook'}}>eBook 管理后台</Link>
                        </Menu.Item>
                        <SubMenu key="account" icon={<UserOutlined />} title="用户管理">
                            <Menu.ItemGroup>
                                <Menu.Item key="setting:6">商家账户管理</Menu.Item>
                                <Menu.Item key="setting:7">用户账户管理</Menu.Item>
                                <Menu.Item key="setting:100">管理员账户</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="shoppingCart" icon={<ShoppingCartOutlined />} title="书籍管理">
                            <Menu.ItemGroup>
                                <Menu.Item key="setting:10" onClick={testClick1}>书籍编辑</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="myPurchase" icon={<ShoppingOutlined />} title="订单管理">
                            <Menu.ItemGroup title="订单查询">
                                <Menu.Item key="setting:1" onClick={testClick1}>未付款</Menu.Item>
                                <Menu.Item key="setting:2" onClick={testClick1}>进行中</Menu.Item>
                                <Menu.Item key="setting:3" onClick={testClick1}>已完成</Menu.Item>
                            </Menu.ItemGroup>

                            <Menu.ItemGroup title="订单反馈">
                                <Menu.Item key="setting:4" onClick={testClick2}>评价汇总</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="SubMenu" icon={<SoundOutlined />} title="背景音乐">
                            <Menu.ItemGroup title="播放设置">
                                <Menu.Item>
                                    <audio className="webpageMusic" id="BackgroundMusic" controls="controls" loop="loop" preload="auto"
                                           src={require("../../src/asset/mp3/1.mp3")}>
                                        你的浏览器版本太低，不支持播放
                                    </audio>
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="我的音乐">
                                <Menu.Item key="setting:18" onClick={(e) => this.musicPlay("1")}>1: 勾指起誓</Menu.Item>
                                <Menu.Item key="setting:19" onClick={(e) => this.musicPlay("2")}>2: 雨幕</Menu.Item>
                                <Menu.Item key="setting:20" onClick={(e) => this.musicPlay("3")}>3: 1967</Menu.Item>
                                <Menu.Item key="setting:21" onClick={(e) => this.musicPlay("4")}>4: 人世间</Menu.Item>
                                <Menu.Item>上传我的音乐</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu
                            id="MainPageLoginDiv"
                            title="超级管理员 张子谦"
                            icon={<Badge count={1} size="small"><Avatar size="middle" icon={<UserOutlined/>}/></Badge>}
                        >
                            <Menu.Item key="setting:22">我的消息</Menu.Item>
                            <Menu.Item key="setting:23" onClick={this.logout}>退出登录</Menu.Item>

                        </SubMenu>
                    </Menu>
                );
                break;

            default:
                return (
                  <></>
                );
        }
    }
}



export default TopBar;
