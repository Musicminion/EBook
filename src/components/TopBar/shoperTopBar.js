import React from "react";
import {Avatar, Badge, Menu} from "antd";
import {Link} from "react-router-dom";
import {
    LineChartOutlined, ShopOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    SoundOutlined,
    UserOutlined
} from "@ant-design/icons";
import LoginPassport from "../Login/LoginPassport";
import loginPassport from "../Login/LoginPassport";

const { SubMenu } = Menu;

class shoperTopBar extends React.Component{

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
            <Menu className="MainPageTopBar" onClick={this.handleClick} mode="horizontal" >
                <Menu.Item>
                    <Link to={{pathname:'/eBook'}}>eBook书城 商店管理</Link>
                </Menu.Item>
                <SubMenu key="account" icon={<UserOutlined />} title="账号管理">
                    <Menu.ItemGroup>
                        <Menu.Item key="accountSafe">账号安全</Menu.Item>
                        <Menu.Item key="personalInfo">个人资料</Menu.Item>
                        <Menu.Item key="receiveMethod">收款方式</Menu.Item>
                        <Menu.Item key="shopInfo">商店资料</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="shoppingCart" icon={<ShopOutlined/>} title="商店管理">
                    <Menu.ItemGroup>
                        <Menu.Item key="newGoods" >新品发布</Menu.Item>
                        <Menu.Item key="manageGoods" >商品管理</Menu.Item>
                        <Menu.Item key="manageOrder" >订单管理</Menu.Item>
                        <Menu.Item key="goodsComment" >商品评价</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <SubMenu key="myPurchase" icon={<LineChartOutlined />} title="数据统计">
                    <Menu.Item key="sellData" >商品销量统计</Menu.Item>
                    <Menu.Item key="readData" >商品浏览统计</Menu.Item>
                    <Menu.Item key="commentData" >商品评价统计</Menu.Item>
                    <Menu.Item key="customerData" >客户数据统计</Menu.Item>
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
                    title={"商户: "+loginPassport.getNickName()}
                    icon={<Badge count={1} size="small"><Avatar size="middle" icon={<UserOutlined/>}/></Badge>}
                >
                    <Menu.Item key="setting:22">我的消息</Menu.Item>
                    <Menu.Item key="setting:23" onClick={this.logout}>退出登录</Menu.Item>

                </SubMenu>
            </Menu>
        );
    }
}

export default shoperTopBar;