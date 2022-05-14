import React from 'react';
import { Result, Button } from 'antd';
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../asset/background/ebookLogo.svg";
import {Link} from "react-router-dom";


class purchaseSuccess extends React.Component{
    render() {
        return(
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <div className="PayComfirm_logoArea">
                        <img src={LogoEBook} className="PayComfirm_logo"/>
                    </div>

                    <Result
                        status="success"
                        title="订购成功"
                        subTitle="感谢您关顾我们的EBook商店，欢迎您下次再来！"
                        extra={[
                            <Link
                                to={"/"}
                            >
                                <Button type="primary" key="console">
                                    回到首页
                                </Button>,
                            </Link>

                        ]}
                    />

                </div>
                <div className="clearOnly_compact">

                </div>
                <div className="Pagefooter">
                    <p>CopyRight © 2022 AllRights Reserved.ALL Developed By ZhangZiqian.</p>
                </div>
            </div>

        );
    }
}



export default purchaseSuccess;

//
// export default () => (
//
// );


