import React from "react";
import SearchPanel from "../components/SearchPanel";
import '../css/Common.css'
import TopBar from "../components/TopBar/TopBar";
import {Button, Col, Collapse, Divider, Form, Input, List, Pagination, Row, Tabs, Typography} from 'antd';
import BookRow from "../components/Book/BookRow";
import {AppstoreOutlined, BarsOutlined} from "@ant-design/icons";
import '../css/searchResult.css'
import {urlDecoder} from "../utils/urlDecoder";
import BookCard from "../components/Book/BookCard";
import {getAllBookList, getBookByKeyWord} from "../service/bookservice";
import Search from "antd/es/input/Search";
import {findAuthorsByBookname} from "../service/microService";


const { TabPane } = Tabs;
const { Panel } = Collapse;

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class SearchResultPage extends React.Component{



    searchKeyWord ="";
    searchWay = 0;

    onSearchAuthors(key) {
        // alert(key);
        findAuthorsByBookname(key, (resp)=>{
            console.log(resp);
            this.setState({info_getter_authors: resp.data});
        })
    }


    constructor() {
        super();
        let theRequest = urlDecoder(decodeURI(window.location.search));
        //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        this.searchKeyWord = theRequest['keyword'];
        this.searchby = parseInt(theRequest["searchby"]);

        this.state = {
            searchData : [],
            info_getter_authors: '',
        };

        // 抓书 如果搜索的是空白的话抓取所有的内容
        if(this.searchKeyWord !== ""){
            //  全文搜索 描述信息
            getBookByKeyWord(this.searchby,this.searchKeyWord,
                (data)=>{
                    console.log(data);
                    this.setState({
                        searchData :data,
                    });
                });
        }
        else {
            getAllBookList(
                (data)=>{
                    console.log(data);
                    this.setState({
                        searchData :data,
                    });
                }
            );
        }
    }


    render() {
            return (
                <div className="eBookPageContainer">
                    <TopBar/>
                    <div className="SearchPanel">
                        <SearchPanel id="MainPageSearchPanel" fromPage="ResultPage"/>
                    </div>
                    <div className="MainContentsCard">

                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<><AppstoreOutlined/>卡片展示</>} key="1">
                                <List
                                    grid={{gutter: 10, column: 4}}
                                    dataSource={this.state.searchData}
                                    pagination={{
                                        onChange: page => {
                                            console.log(page);
                                        },
                                        pageSize: 12,
                                    }}

                                    renderItem={(item) => {
                                        return (
                                            <List.Item>
                                                <BookCard bookInfo={item}/>
                                            </List.Item>
                                        );
                                    }}
                                />

                            </TabPane>
                            <TabPane tab={<><BarsOutlined/>列表展示</>} key="2">
                                <List
                                    grid={{gutter: 10, column: 1}}
                                    dataSource={this.state.searchData}
                                    pagination={{
                                        onChange: page => {
                                            console.log(page);
                                        },
                                        pageSize: 12,
                                    }}

                                    renderItem={(item) => {
                                        return (
                                            <List.Item>
                                                <BookRow bookInfo={item}/>
                                            </List.Item>
                                        );
                                    }}
                                />

                            </TabPane>
                            <TabPane tab={<><BarsOutlined/>信息筛选</>} key="3">
                                <div>
                                    <span>微服务：按照书名查询作者：</span>
                                    <br/>
                                    <Search
                                        placeholder="输入书名"
                                        allowClear
                                        enterButton="查找"
                                        size="middle"
                                        style={{ width: 204 }}
                                        onSearch={(value)=>{this.onSearchAuthors(value)}}
                                    />
                                    <br/>
                                    <br/>
                                    <span>&nbsp;查询结果：{this.state.info_getter_authors}</span>
                                </div>
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
