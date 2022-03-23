import React from "react";
import SearchPanel from "./SearchPanel";
import '../css/Common.css'
import EBookTopBar from "./EBookTopBar";
import BookCard from "./Book/BookCard";
import {Button, Col, Collapse, Divider, List, Pagination, Row, Tabs, Typography} from 'antd';
import BookRow from "./Book/BookRow";
import {AppstoreOutlined, BarsOutlined} from "@ant-design/icons";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


class EBookSearchResultPage extends React.Component{
    constructor() {
        super();
        this.state = {
            searchContent: ""
        }
    }

    componentDidMount() {
        let url = decodeURI(window.location.search); //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        let theRequest = new Object();
        if ( url.indexOf( "?" ) != -1 ) {
            let str = url.substr( 1 );          //substr()方法返回从参数值开始到结束的字符串；
            let strs = str.split( "&" );
            for ( let i = 0; i < strs.length; i++ ) {
                theRequest[ strs[ i ].split( "=" )[ 0 ] ] = ( strs[ i ].split( "=" )[ 1 ] );
            }
            // alert(theRequest['keyword']);           //此时的theRequest就是我们需要的参数；
        }

    }


    render() {
        return (
            <div className="eBookPageContainer">
                <EBookTopBar></EBookTopBar>
                <div className="SearchPanel">
                    <SearchPanel id="MainPageSearchPanel"></SearchPanel>
                </div>
                <div className="MainContentsCard">
                    <Collapse>
                        <Panel header="精准查找"  key="1" extra={<Button size={"small"}>展开面板</Button>}>
                            <p>1</p>
                        </Panel>
                    </Collapse>

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><AppstoreOutlined/>卡片</>} key="1">
                            <BookCard bookID="1"/>
                            <BookCard bookID="2"/>
                            <BookCard bookID="3"/>
                            <BookCard bookID="4"/>
                            <BookCard bookID="5"/>
                            <BookCard bookID="6"/>
                            <BookCard bookID="7"/>
                            <BookCard bookID="8"/>

                            <div className="PageSelector">
                                <Pagination showSizeChanger defaultCurrent={1} total={50} />
                            </div>
                        </TabPane>
                        <TabPane tab={<><BarsOutlined/>列表</>} key="2">
                            <BookRow bookID="1"></BookRow>
                            <BookRow bookID="2"></BookRow>
                            <BookRow bookID="3"></BookRow>
                            <BookRow bookID="4"></BookRow>
                            <BookRow bookID="5"></BookRow>



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

export default EBookSearchResultPage;