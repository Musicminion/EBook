import React from "react";
import TopBar from "../../../components/TopBar/TopBar";
import {Button, DatePicker, Image, Input, Space, Table, Tabs} from "antd";
import {SearchOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {getuserConsumeData} from "../../../service/statisticService";
import Highlighter from "react-highlight-words";

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;


class UserConsumption extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
        }

        getuserConsumeData({},(data)=>{
            console.log(data);
            this.setState({
                userData:data.concat([])
            });
        });

    }


    searchInput = null;
    setSearchText(val){
        this.setState({ searchText:val});
    }

    setSearchedColumn(val){
        this.setState({ searchedColumn:val});
    }

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setSearchText(selectedKeys[0]);
        this.setSearchedColumn(dataIndex);
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setSearchText('');
    };

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={this.searchInput}
                    placeholder={`Search ${dataIndex}`} value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block',}}
                />
                <Space>
                    <Button
                        type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />} size="small" style={{width: 90,}}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && this.handleReset(clearFilters)} size="small"
                        style={{width: 90,}}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link" size="small"
                        onClick={() => {
                            confirm({closeDropdown: false,});
                            this.setSearchText(selectedKeys[0]);
                            this.setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.current?.select(), 10);
            }
        },
        // render: (text) =>
        //     this.state.searchedColumn === dataIndex ? (
        //         <Highlighter
        //             highlightStyle={{
        //                 backgroundColor: '#ffc069',
        //                 padding: 0,
        //             }}
        //             searchWords={[this.state.searchText]}
        //             autoEscape
        //             textToHighlight={text ? text.toString() : ''}
        //         />
        //     ) : (
        //         text
        //     ),
    });

    onChange = (date, dateString) => {
        if(dateString.length >=2){
            let obj = {
                startDate: dateString[0],
                endDate: dateString[1],
            };
            getuserConsumeData(obj,(data)=>{
                console.log(data);
                this.setState({
                    userData:data.concat([])
                });
            });
            console.log(obj);
        }
    };

    columns = [
        {
            title: '用户',
            dataIndex: 0,
            key: 'user',
            ...this.getColumnSearchProps(0),
        },
        {
            title: '消费金额',
            dataIndex: 1,
            key: 'payAll',
            render: (text,record) => <p className="bookDetailPrice">￥{(parseInt(text)/100).toFixed(2)}</p>,
            sorter: {
                compare: (a, b) => a[1] - b[1],
                multiple: 1,
            },
        },
    ];


    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />用户消费统计表</>} key="1">
                            <span>统计范围：</span><RangePicker onChange={this.onChange} showTime/>

                            <Table columns={this.columns} dataSource={this.state.userData}/>;

                        </TabPane>
                        <TabPane tab={<><UnorderedListOutlined />用户消费统计图</>} key="2">

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


export default UserConsumption;