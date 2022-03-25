import React from "react";
import {Avatar, Badge, Menu} from "antd";
import {Link} from "react-router-dom";
import {ShoppingCartOutlined, ShoppingOutlined, SoundOutlined, UserOutlined} from "@ant-design/icons";
import LoginPassport from "../Login/LoginPassport";

const { SubMenu } = Menu;


class adminTopBar extends React.Component{
    musicPlay(musicId){
        let tmp = document.getElementById("BackgroundMusic");
        if(tmp)
        {
            tmp.setAttribute("src",require("../../asset/mp3/"+ musicId +".mp3"));
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

    render() {
        return (
            <Menu className="MainPageTopBar" onClick={this.handleClick}  mode="horizontal" >
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
                        <Menu.Item key="setting:10" >书籍编辑</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <SubMenu key="myPurchase" icon={<ShoppingOutlined />} title="订单管理">
                    <Menu.ItemGroup title="订单查询">
                        <Menu.Item key="setting:1" >未付款</Menu.Item>
                        <Menu.Item key="setting:2" >进行中</Menu.Item>
                        <Menu.Item key="setting:3" >已完成</Menu.Item>
                    </Menu.ItemGroup>

                    <Menu.ItemGroup title="订单反馈">
                        <Menu.Item key="setting:4" >评价汇总</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <SubMenu key="SubMenu" icon={<SoundOutlined />} title="背景音乐">
                    <Menu.ItemGroup title="播放设置">
                        <Menu.Item>
                            <audio className="webpageMusic" id="BackgroundMusic" controls="controls" loop="loop" preload="auto"
                                   src={require("../../asset/mp3/1.mp3")}>
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
                    <Menu.Item key="setting:23" onClick={(e) => this.logout()}>退出登录</Menu.Item>

                </SubMenu>
            </Menu>
        );
    }
}

export default adminTopBar;
