import React from "react";
import {Avatar, Badge, Menu} from "antd";
import {Link} from "react-router-dom";
import {AppstoreOutlined, SoundOutlined} from "@ant-design/icons";
import LoginPassport from "../Login/LoginPassport";
import loginPassport from "../Login/LoginPassport";
import {userInfoRequest} from "../../service/userService";

const { SubMenu } = Menu;

class userTopBar extends React.Component{
    constructor() {
        super();
        this.state = {
            iconBase64 : ""
        };
        userInfoRequest((resp)=>{
            console.log(resp);
            this.setState({iconBase64: resp.data.userIcon.iconBase64})
        });
    }

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

                <SubMenu key="iEBook" icon={<AppstoreOutlined/>} title="iEBook">
                    <Menu.ItemGroup>
                        <Menu.Item key="myAccount" ><Link to={{pathname:'/eBook/myAccount'}}>我的账户</Link></Menu.Item>
                        <Menu.Item key="myCart" ><Link to={{pathname:'/eBook/myCart'}}>我的购物车</Link></Menu.Item>
                        <Menu.Item key="myOrder" ><Link to={{pathname:'/eBook/myOrder'}}>我的订单</Link></Menu.Item>
                        <Menu.Item key="myComment" >
                            <Link to={{pathname:'/eBook/myStatistics'}}>我的统计</Link>
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
                        <Menu.Item key="music1" onClick={(e) => this.musicPlay("1")}>1: 勾指起誓</Menu.Item>
                        <Menu.Item key="music2" onClick={(e) => this.musicPlay("2")}>2: 雨幕</Menu.Item>
                        <Menu.Item key="music3" onClick={(e) => this.musicPlay("3")}>3: 1967</Menu.Item>
                        <Menu.Item key="music4" onClick={(e) => this.musicPlay("4")}>4: 人世间</Menu.Item>
                        <Menu.Item>上传我的音乐</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <SubMenu
                    id="MainPageLoginDiv"
                    title={"Hello! "+loginPassport.getNickName()}
                    icon={
                        <Badge count={0} size="small">
                            {/*<Avatar size="middle" icon={<UserOutlined/>}/>*/}
                            <Avatar size="middle" src={this.state.iconBase64}/>
                        </Badge>
                    }
                >
                    <Menu.Item key="setting:22">我的消息</Menu.Item>
                    <Menu.Item key="setting:23" onClick={(e) => this.logout()}>退出登录</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default userTopBar;

{/*<SubMenu key="account" icon={<UserOutlined />} title="账号管理">*/}
{/*    <Menu.ItemGroup>*/}
{/*        <Menu.Item key="accountSafe">账号安全</Menu.Item>*/}
{/*        <Menu.Item key="personalInfo">个人资料</Menu.Item>*/}
{/*        <Menu.Item key="PayMethod">支付方式</Menu.Item>*/}
{/*    </Menu.ItemGroup>*/}
{/*</SubMenu>*/}
