import React from 'react';
import 'antd/dist/antd.css';
import {Menu} from 'antd';
import VisitorTopBar from "./visitorTopBar";
import UserTopBar from "./userTopBar";
import ShoperTopBar from "./shoperTopBar";
import AdminTopBar from "./adminTopBar";
import loginPassport from "../Login/LoginPassport";

const { SubMenu } = Menu;

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


    componentWillMount() {
        let userPrivilege = loginPassport.getPrivilege();
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
        // const { current } = this.state;
        switch (this.state.userPermissionLevel) {
            case 3:
                return (
                    <VisitorTopBar/>
                );
                break;
            case 2:
                return(
                    <UserTopBar/>
                );
                break;
            case 1:
                return(
                    <ShoperTopBar/>
                );
                break;
            case 0:
                return(
                    <AdminTopBar/>
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
