import React from "react";
import {Button, Menu} from "antd";
import {Link} from "react-router-dom";
import {SoundOutlined, UserOutlined} from "@ant-design/icons";

const { SubMenu } = Menu;

function testClick1(){
    const winId=window.open('about:blank');
    winId.location.href="/ebook/booktable"
}

function testClick2(){
    const winId=window.open('about:blank');
    winId.location.href="/login/feedback"
}



class visitorTopBar extends React.Component{
    constructor() {
        super();
        this.state = {
            current: 'mail',
        };
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


    render() {
        return (
            <Menu className="MainPageTopBar" onClick={this.handleClick} mode="horizontal" >
                <Menu.Item>
                    <Link to={{pathname:'/eBook'}}>
                        eBook网上书城
                    </Link>
                </Menu.Item>

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
                    </Menu.ItemGroup>
                </SubMenu>

                <Menu.Item id="MainPageLoginDiv">
                    <Link
                        to={{pathname:'/login'}}>
                        <Button className="MainPageLoginButton"><UserOutlined/>登录</Button>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default visitorTopBar;