import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../asset/background/ebookLogo.svg";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";


class NoItemPage extends React.Component{
    render() {
        return(
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <div className="PayComfirm_logoArea">
                        <img src={LogoEBook} className="PayComfirm_logo" alt={""}/>
                    </div>
                    <Result
                        status="404"
                        title="Empty!"
                        subTitle={"没有任何的项目在购物车或要需要您的支付 ~ 如有问题请联系管理员"}
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

export default NoItemPage;