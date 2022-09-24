import React from 'react';
import { Result, Button } from 'antd';
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../asset/background/eBooklogo.svg";
import {Link} from "react-router-dom";
import {urlDecoder} from "../../utils/urlDecoder";


class publishSuccess extends React.Component{
    targetbookid = "";
    constructor(props) {
        super(props);
        let url = decodeURI(window.location.search); //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        let theRequest = urlDecoder(url);
        console.log(theRequest);
        //请求示范: http://localhost:3000/eBook/publishSuccess?targetbookid=3
        if(theRequest["targetbookid"]!=null){
            this.targetbookid = theRequest["targetbookid"];
        }
        else{
            window.location.href = "/eBook/errorPage";
        }
    }


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
                        title="发布成功"
                        subTitle="您已经成功发布商品!"
                        extra={[
                            <>
                                <Link
                                    to={"/"}
                                >
                                    <Button type="primary" key="console">
                                        回到首页
                                    </Button>,
                                </Link>
                                <Link
                                    to={"/eBook/bookdetail?bookid="+this.targetbookid}
                                >
                                    <Button type="primary" key="console">
                                        查看商品
                                    </Button>,
                                </Link>
                            </>
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



export default publishSuccess;

//
// export default () => (
//
// );


