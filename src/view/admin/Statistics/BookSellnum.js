import React from "react";
import TopBar from "../../../components/TopBar/TopBar";
import {Button, DatePicker, Image, Table, Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import {getBookSellData, getuserConsumeData} from "../../../service/statisticService";

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

class BookSellnum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sellData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
        }

    //    getBookSellData
        getBookSellData({},(data)=>{
            console.log(data);
            this.setState({
                sellData:data.concat([])
            });
        });

    }



    columns = [
        {
            title: '书本图片',
            dataIndex: 3,
            key: 'imgtitle',
            render: (text) => <Image src={text} width={60}/>
        },
        {
            title: '书本名称',
            dataIndex: 2,
            key: 'bookname',
            // ...this.getColumnSearchProps(0),
        },
        {
            title: '书本销量',
            dataIndex: 1,
            key: 'sellnum',
            sorter: {
                compare: (a, b) => a[1] - b[1],
                multiple: 1,
            },
        },
        {
            title: '查看详情页',
            key: 'detail',
            render: (text,record) => <a href={"/eBook/bookdetail?bookid="+record[0]}>查看</a>
        },
    ];



    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />书籍销量统计表</>} key="1">
                            <span>统计范围：</span><RangePicker onChange={this.onChange} showTime/>

                            <Table columns={this.columns} dataSource={this.state.sellData}/>;

                        </TabPane>
                        <TabPane tab={<><UnorderedListOutlined />书籍销量统计图</>} key="2">

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

export default BookSellnum;