import React from "react";
import SearchPanel from "../components/SearchPanel";
import '../css/Common.css'
import TopBar from "../components/TopBar/TopBar";
import BookCard from "../components/Book/BookCard";
import {Button, Col, Collapse, Divider, Form, Input, List, Pagination, Row, Tabs, Typography} from 'antd';
import BookRow from "../components/Book/BookRow";
import {AppstoreOutlined, BarsOutlined} from "@ant-design/icons";
import BookOperation from "../components/Book/tmpBookData";
import '../css/searchResult.css'
import {urlDecoder} from "../utils/urlDecoder";


const { TabPane } = Tabs;
const { Panel } = Collapse;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class SearchResultPage extends React.Component{
    keyword ="";
    searchby = 0;

    constructor() {
        super();
        this.state = {
            searchContent: "",
            searchWay: 0,
        }
        let url = decodeURI(window.location.search); //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        let theRequest = urlDecoder(url);

        setTimeout(() => {
            this.setState({searchContent: theRequest['keyword']});
        }, 0);

        setTimeout(() => {
            this.setState({searchWay: parseInt(theRequest['searchby'])});
        }, 0);

        this.keyword = theRequest['keyword'];
        this.searchby = parseInt(theRequest["searchby"]);
    }

    componentDidMount() {

    }

    render() {
        // alert(this.state.searchContent);
        // if(this.state.searchContent!=null)
            return (
                <div className="eBookPageContainer">
                    <TopBar/>
                    <div className="SearchPanel">
                        <SearchPanel id="MainPageSearchPanel" fromPage="ResultPage"/>
                    </div>
                    <div className="MainContentsCard">
                        <Collapse>
                            <Panel header="精准查找"  key="1" extra={<Button size={"small"}>展开面板</Button>}>
                                <Form name="horizontal_login" layout="inline">
                                    <Form.Item
                                        label="书籍名"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="书籍ISBN"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="销售商家"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="出版社"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Form>

                                <br/>

                                <Form name="horizontal_login" layout="inline">
                                    <Form.Item
                                        label="发货地"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="书籍作者"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="书籍价格"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="销量区间"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Form>

                            </Panel>
                        </Collapse>

                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<><AppstoreOutlined/>卡片</>} key="1">
                                <BookOperation
                                    searchKeyName={this.keyword}
                                    searchTarget={this.searchby}
                                    requestType = "BookCard"
                                />

                                {/*<BookCard bookID="1"/>*/}

                            </TabPane>
                            <TabPane tab={<><BarsOutlined/>列表</>} key="2">
                                <BookOperation
                                    searchKeyName={this.keyword}
                                    searchTarget={this.searchby}
                                    requestType="BookRow"
                                />
                            </TabPane>

                        </Tabs>

                    </div>

                    <div className="clearOnly">
                    </div>

                    <div className="Pagefooter">
                        <p>CopyRight ©2022 All Rights Reserved.Developed By Zhang Ziqian.</p>
                    </div>

                </div>
            );
    }
}

export default SearchResultPage;