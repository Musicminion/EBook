// 本页面是书籍的详情界面
import React,{ createElement, useState } from 'react';
import {
    Button,
    Card,
    Comment,
    Descriptions, Divider,
    Image,
    InputNumber,
    Menu,
    Modal,
    Pagination,
    Select,
    Tabs, Tooltip,
    Typography
} from "antd";
import TopBar from "../components/TopBar";
import "../css/BookDetail.css"
import { Radio } from 'antd';
import PayComfirm from "../components/PayComfirm";
import {AllBooks} from "../components/Book/tmpBookData";
import {AppstoreOutlined, BarsOutlined, BookOutlined, CommentOutlined} from "@ant-design/icons";
import BookCard from "../components/Book/BookCard";
import BookRow from "../components/Book/BookRow";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Demo from "../components/bookComment";


const { TabPane } = Tabs;




// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

class BookDetailPage extends React.Component{

    constructor() {
        super();
        this.state = {
            bookID: 0
        }
    }

    componentDidMount() {
        let url = decodeURI(window.location.search); //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        let theRequest = new Object();
        if ( url.indexOf( "?" ) != -1 ) {
            let str = url.substr( 1 );          //substr()方法返回从参数值开始到结束的字符串；
            let strs = str.split( "&" );
            for ( let i = 0; i < strs.length; i++ ) {
                theRequest[strs[i].split("=" )[0]] = (strs[ i ].split("=" )[1]);
            }
            let BookIDnum = parseInt(theRequest['bookid']);
            setTimeout(() => {
                this.setState({bookID: BookIDnum});
            }, 0);
        }
    }

    render() {


        if(this.state.bookID > 0){
            let BookID = this.state.bookID;

            return (
                <div>
                    <div className="eBookPageContainer">
                        <TopBar/>
                        <div className="MainContentsCard">

                            <div className="BookDetailTop">
                                <div className="BookDetailImg">
                                    <Image src={require('../asset/img/book/'+BookID+'.jpg')}/>
                                </div>

                                <div className="BookDescription">
                                    <Descriptions title={AllBooks[BookID].bookTitle}>
                                        <Descriptions.Item label="书籍名称">{AllBooks[BookID].bookName}</Descriptions.Item>
                                        <Descriptions.Item label="书籍ISBN">{AllBooks[BookID].bookISBN}</Descriptions.Item>
                                        <Descriptions.Item label="作者">{AllBooks[BookID].bookAuthor}</Descriptions.Item>
                                        <Descriptions.Item label="库存量">{AllBooks[BookID].bookremainNum}</Descriptions.Item>
                                        <Descriptions.Item label="出版社">{AllBooks[BookID].bookSellnum}</Descriptions.Item>
                                        <Descriptions.Item label="发货地点">发货地点XXXXXXX</Descriptions.Item>
                                        <Descriptions.Item label="月销量">100本</Descriptions.Item>
                                        <Descriptions.Item label="其他备注">无</Descriptions.Item>
                                    </Descriptions>

                                    <p className="BookCard_bookPrice">单价：￥20.99</p>
                                    <p>购买数量：
                                        <InputNumber min={1} max={100} defaultValue={1}/>
                                    </p>

                                    <Button type="primary" className="BookDetailAddChart">加入购物车</Button>
                                    {/*<Button type="primary" danger className="BookDetailBuy">立即购买</Button>*/}
                                    <PayComfirm/>
                                </div>


                            </div>

                            <br/>
                            <br/>

                            <div>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab={<><BookOutlined/>商品描述</>} key="1">
                                        <Typography>
                                            <Paragraph>
                                                《西游记》是中国古代第一部浪漫主义章回体长篇神魔小说。现存明刊百回本《西游记》均无作者署名，作者是明代吴承恩。
                                                全书主要描写了孙悟空出世及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，
                                                经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。该小说以“玄奘取经”这一历史事件为蓝本，经作
                                                者的艺术加工，深刻地描绘出明代百姓的社会生活状况。
                                            </Paragraph>

                                            <Paragraph>
                                                《西游记》是中国神魔小说的经典之作，达到了古代长篇浪漫主义小说的巅峰，与《三国演义》《水浒传》《红楼梦》并称
                                                为中国古典四大名著。《西游记》自问世以来在民间广为流传，各式各样的版本层出不穷。明代刊本有六种，清代刊本、抄本
                                                也有七种，典籍所记已佚版本十三种。鸦片战争以后，大量中国古典文学作品被译为西文，《西游记》渐渐传入欧美，被译为
                                                英、法、德、意、西、手语、世（世界语）、斯（斯瓦西里语）、俄、捷、罗、波、日、朝、越等语言。
                                            </Paragraph>

                                            <Paragraph>
                                                东胜神州傲来国海边有一花果山，山顶一石，秉受日月精华，产下一个石猴。石猴在花果山做了众猴
                                                之王，为求长生，出海求仙，在西牛贺州拜菩提祖师为师。祖师为其取法名孙悟空，并授与七十二般
                                                变化及翻筋斗云之法。孙悟空回到花果山，占山为王，号为美猴王。苦于无兵刃，遂去东海龙宫求取
                                                ，龙王及兄弟送他一支如意金箍棒及一身披挂。孙悟空又去幽冥界把自己的名字从生死簿上勾掉。龙
                                                王，地藏王上天庭告状，太白金星建议招安孙悟空，玉帝准奏。
                                            </Paragraph>
                                            <div className="bookDetailImage">
                                                <Image  src={require("../asset/bookdescription/1/1.jpg")}></Image>
                                            </div>



                                        </Typography>


                                    </TabPane>
                                    <TabPane tab={<><CommentOutlined/>用户评价</>} key="2">
                                        <Demo/>
                                        <Demo/>
                                        <Demo/>
                                        <Demo/>
                                        <Demo/>
                                        <Demo/>
                                        <Demo/>
                                    </TabPane>

                                </Tabs>

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

        else{
            return (<></>);
        }
    }

}

export default BookDetailPage;




