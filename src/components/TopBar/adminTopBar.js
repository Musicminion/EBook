import React from "react";
import {Avatar, Badge, Menu} from "antd";
import {Link} from "react-router-dom";
import {
    AppstoreOutlined,
    LineChartOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    SoundOutlined,
    UserOutlined
} from "@ant-design/icons";
import LoginPassport from "../Login/LoginPassport";
import loginPassport from "../Login/LoginPassport";

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


                <SubMenu key="account" icon={<SettingOutlined/>} title="全局系统管理">
                    <Menu.ItemGroup>
                        <Menu.Item key="userAccountManage">
                            <Link to={{pathname:'/eBook/admin/userManage'}}>用户账户管理</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="shoppingCart" icon={<ShoppingOutlined />} title="全局商品管理">
                    <Menu.ItemGroup>
                        <Menu.Item key="newGoods" >
                            <Link to={{pathname:'/eBook/admin/newBook'}}>新品发布</Link>
                        </Menu.Item>
                        <Menu.Item key="manageGoods" >
                            <Link to={{pathname:'/eBook/admin/bookManage'}}>商品管理</Link>
                        </Menu.Item>
                        <Menu.Item key="manageOrder">
                            <Link to={{pathname:'/eBook/admin/orderManage'}}>订单管理</Link>
                        </Menu.Item>
                        <Menu.Item key="goodsComment" >商品评价</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <SubMenu key="myPurchase" icon={<LineChartOutlined/>} title="全局数据统计">
                    <Menu.ItemGroup>
                        <Menu.Item key="userData" >
                            <Link to={{pathname:'/eBook/admin/statistics/userConsumption'}}>用户消费统计</Link>
                        </Menu.Item>
                        <Menu.Item key="goodsData" >
                            <Link to={{pathname:'/eBook/admin/statistics/bookSellnum'}}>书籍销量统计</Link>
                        {/*/eBook/admin/statistics/bookSellnum*/}
                        </Menu.Item>
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
                    title={"管理员: " + loginPassport.getNickName()}
                    icon={<Badge count={0} size="small"><Avatar size="middle" icon={<UserOutlined/>}/></Badge>}
                >
                    <Menu.Item key="setting:22">我的消息</Menu.Item>
                    <Menu.Item key="setting:23" onClick={(e) => this.logout()}>退出登录</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default adminTopBar;
