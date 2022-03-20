// 本页面是书籍的详情界面
import React,{ useState } from 'react';
import {Button, Card, Descriptions, Image, InputNumber, Menu, Modal, Select} from "antd";
import EBookTopBar from "../EBookTopBar";
import "../../css/BookDetail.css"
import { Radio } from 'antd';
import PayComfirm from "../PayComfirm";



class BookDetailPage extends React.Component{

    render() {
        return (
            <div >
                <div className="eBookPageContainer">
                    <EBookTopBar/>
                    <div className="MainContentsCard">

                        <div className="BookDetailTop">
                            <div className="BookDetailImg">
                                <Image src={require('../../asset/img/book/4.jpg')}></Image>
                            </div>

                            <div className="BookDescription">
                                <Descriptions title="测试书籍名称测试书籍名称测试书籍名称">
                                    <Descriptions.Item label="书籍名称">测试书籍名称</Descriptions.Item>
                                    <Descriptions.Item label="书籍ISBN">9780000000000</Descriptions.Item>
                                    <Descriptions.Item label="作者">书籍作者</Descriptions.Item>
                                    <Descriptions.Item label="库存量">200本</Descriptions.Item>
                                    <Descriptions.Item label="出版社">XXXXXXXX出版社</Descriptions.Item>
                                    <Descriptions.Item label="发货地点">发货地点XXXXXXX</Descriptions.Item>
                                    <Descriptions.Item label="月销量">100本</Descriptions.Item>
                                    <Descriptions.Item label="其他备注">无</Descriptions.Item>
                                </Descriptions>


                                <p className="BookCard_bookPrice">单价：￥20.99</p>
                                <p>购买数量：
                                    <InputNumber min={1} max={10} defaultValue={1}/>
                                </p>

                                <Button type="primary" className="BookDetailAddChart">加入购物车</Button>
                                {/*<Button type="primary" danger className="BookDetailBuy">立即购买</Button>*/}
                                <PayComfirm/>
                            </div>


                        </div>

                        <div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>详细描述 测试</li>
                            <li>详细描述 测试</li>
                            <li>详细描述 测试</li>
                            <li>详细描述 测试</li>
                            <li>详细描述 测试</li>
                            <li>详细描述 测试</li>
                            <li>详细描述 测试</li>
                            <li>详细描述 测试</li>
                            <li>详细描述 测试</li>


                        </div>


                    </div>


                    <div className="clearOnly">

                    </div>

                    <div className="Pagefooter">
                        <p>CopyRight ©2022 All Rights Reserved.Developed By Zhang Ziqian.</p>
                    </div>



                </div>
            </div>

        );
    }

}

export default BookDetailPage;




