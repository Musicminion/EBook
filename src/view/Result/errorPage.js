import React from 'react';
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../../src/asset/background/eBooklogo.svg";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";

class errorPage extends React.Component{

    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <div className="PayComfirm_logoArea">
                        <img src={LogoEBook} className="PayComfirm_logo" alt={""}/>
                    </div>

                    <Result
                        status="error"
                        title="出错了"
                        subTitle="出现错误，如有需要，请联系管理员"
                        extra={[
                            <Link to={"/"}>
                                <Button type="primary" key="console">回到首页</Button>,
                            </Link>,

                            <Link to={"/login/feedback"}>
                                <Button type="primary" key="console">反馈问题</Button>,
                            </Link>
                        ]}
                    />

                </div>
                <div className="clearOnly_compact"></div>
                <div className="Pagefooter">
                    <p>CopyRight © 2022 AllRights Reserved.ALL Developed By ZhangZiqian.</p>
                </div>
            </div>
        );
    }

}

export default errorPage;