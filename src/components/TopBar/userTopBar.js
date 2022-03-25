import React from "react";
import {Avatar, Menu} from "antd";
import {Link} from "react-router-dom";
import {ShoppingCartOutlined, ShoppingOutlined, SoundOutlined, UserOutlined} from "@ant-design/icons";
import LoginPassport from "../Login/LoginPassport";

const { SubMenu } = Menu;

class userTopBar extends React.Component{

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
                    <Link to={{pathname:'/eBook'}}>eBook网上书城</Link>
                </Menu.Item>
                <SubMenu key="account" icon={<UserOutlined />} title="账号管理">
                    <Menu.ItemGroup>
                        <Menu.Item key="accountSafe">账号安全</Menu.Item>
                        <Menu.Item key="personalInfo">个人资料</Menu.Item>
                        <Menu.Item key="PayMethod">支付方式</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="iEBook" icon={<ShoppingCartOutlined />} title="iEBook">
                    <Menu.ItemGroup>
                        <Menu.Item key="myCart" >我的购物车</Menu.Item>
                        <Menu.Item key="myFavorites" >我的收藏夹</Menu.Item>
                        <Menu.Item key="myFootPrint" >我的足迹</Menu.Item>
                        <Menu.Item key="myOrder" >我的订单</Menu.Item>
                        <Menu.Item key="myComment" >我的评价</Menu.Item>
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
                        <Menu.Item key="music1" onClick={(e) => this.musicPlay("1")}>1: 勾指起誓</Menu.Item>
                        <Menu.Item key="music2" onClick={(e) => this.musicPlay("2")}>2: 雨幕</Menu.Item>
                        <Menu.Item key="music3" onClick={(e) => this.musicPlay("3")}>3: 1967</Menu.Item>
                        <Menu.Item key="music4" onClick={(e) => this.musicPlay("4")}>4: 人世间</Menu.Item>
                        <Menu.Item>上传我的音乐</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <Menu.Item id="MainPageLoginDiv">
                    <Avatar size="small" icon={<UserOutlined/>} />
                </Menu.Item>
            </Menu>
        );
    }
}

export default userTopBar;