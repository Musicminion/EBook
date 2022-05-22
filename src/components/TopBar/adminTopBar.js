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

                <SubMenu key="iEBook" icon={<AppstoreOutlined/>} title="iEBook">
                    <Menu.ItemGroup>
                        <Menu.Item key="myCart" ><Link to={{pathname:'/eBook/myCart'}}>我的购物车</Link></Menu.Item>
                        <Menu.Item key="myOrder" >我的订单</Menu.Item>
                        {/*<Menu.Item key="myFavorites" >我的收藏夹</Menu.Item>*/}
                        {/*<Menu.Item key="myFootPrint" >我的足迹</Menu.Item>*/}
                        {/*<Menu.Item key="myComment" >我的评价</Menu.Item>*/}
                    </Menu.ItemGroup>
                </SubMenu>

                <SubMenu key="account" icon={<SettingOutlined/>} title="全局系统管理">
                    <Menu.ItemGroup>
                        {/*<Menu.Item key="shoperManage">商家账户管理</Menu.Item>*/}
                        <Menu.Item key="userAccountManage">
                            <Link to={{pathname:'/eBook/admin/userManage'}}>用户账户管理</Link>
                        </Menu.Item>
                        <Menu.Item key="adminAccount">管理员账户</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="shoppingCart" icon={<ShoppingOutlined />} title="全局商户管理">
                    <Menu.ItemGroup>
                        <Menu.Item key="newGoods" >新品发布</Menu.Item>
                        <Menu.Item key="manageGoods" >商品管理</Menu.Item>
                        <Menu.Item key="manageOrder" >订单管理</Menu.Item>
                        <Menu.Item key="goodsComment" >商品评价</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <SubMenu key="myPurchase" icon={<LineChartOutlined/>} title="全局数据统计">
                    <Menu.ItemGroup>
                        <Menu.Item key="userData" >用户数据统计</Menu.Item>
                        <Menu.Item key="goodsData" >商品销量统计</Menu.Item>
                        <Menu.Item key="goodCLick" >商品浏览统计</Menu.Item>
                        <Menu.Item key="goodCommentData" >商品评价统计</Menu.Item>
                        <Menu.Item key="shoperSalenum" >商户销售量统计</Menu.Item>
                        <Menu.Item key="shoperSalemoney" >商户销售额统计</Menu.Item>
                        <Menu.Item key="shoperComment" >商户评价统计</Menu.Item>
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
