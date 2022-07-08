import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import {DatePicker, Divider, Image, Table, Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import {
    getUserbookAllBuyNum,
    getUserbookTotalPay,
    getUserbookWithBuyNum
} from "../../service/statisticService";

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;


class MyStatistics extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
            UserbookAllBuyNum:0,
            UserbookTotalPay:0,
        }

        getUserbookAllBuyNum({},(data)=>{
            console.log(data);
            this.setState({
                UserbookAllBuyNum:parseInt(data)
            });
        });

        getUserbookWithBuyNum({},(data)=>{
            console.log(data);
            // this.state.userData
            this.setState({
                userData:data.concat([])
            });
        });

        getUserbookTotalPay({},(data)=>{
            console.log(data);
            this.setState({
                UserbookTotalPay:(parseInt(data)/100).toFixed(2)
            });
        });
    }


    onChange = (date, dateString) => {
        if(dateString.length >=2){
            let obj = {
                startDate: dateString[0],
                endDate: dateString[1],
            };

            getUserbookAllBuyNum(obj,(data)=>{
                console.log(data);
                this.setState({
                    UserbookAllBuyNum:parseInt(data)
                });
            });

            getUserbookWithBuyNum(obj,(data)=>{
                console.log(data);
                this.setState({
                    userData:data.concat([])
                });
            });

            getUserbookTotalPay(obj,(data)=>{
                console.log(data);
                this.setState({
                    UserbookTotalPay:(parseInt(data)/100).toFixed(2)
                });
            });

        }
    };

    columns = [
        {
            title: '书本图片',
            dataIndex: 3,
            key: 'imgtitle',
            render: (text) => <Image src={text} width={60}/>
        },
        {
            title: '书名称',
            dataIndex: 2,
            key: 'name',
        },
        {
            title: '购买数量',
            dataIndex: 1,
            key: 'buynum',
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
                    <h2 style={{color:"#ff78ac"}}>用户个人消费统计</h2>
                    <Divider/>
                    <span style={{color: "#ff5294"}}>统计范围：</span><RangePicker onChange={this.onChange} showTime/>
                    <br/>
                    <br/>
                    <span style={{color: "#ff5294"}}>统计结果：</span><span>购买书籍数量{this.state.UserbookAllBuyNum} 本 &nbsp;&nbsp;&nbsp;
                        消费金额￥ {this.state.UserbookTotalPay} 元（默认统计全部）
                    </span>
                    <br/>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />统计数据</>} key="1">


                            <Table columns={this.columns} dataSource={this.state.userData}/>;

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


export default MyStatistics;