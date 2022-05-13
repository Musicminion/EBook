import React from 'react';
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../asset/background/ebookLogo.svg";
import {Tabs} from "antd";
import {AppstoreOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import BookRowHeader from "../../components/Book/BookRowHeader";
import {orderQueryUserShopCart} from "../../service/orderService";


const { TabPane } = Tabs;

class myCart extends React.Component{
    constructor() {
        super();

        orderQueryUserShopCart(
            (resp) =>{
                console.log(resp);
            });

    }

    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <div className="PayComfirm_logoArea">
                        <img src={LogoEBook} className="PayComfirm_logo"/>
                    </div>

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><ShoppingCartOutlined/>我的购物车</>} key="1">



                        </TabPane>
                    </Tabs>


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

export default myCart;