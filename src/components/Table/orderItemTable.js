import React from "react";
import {Button, Image, Input, Space, Table, Tag} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { DatePicker} from 'antd';
import {getAllOrderItem, getUserOrderItem} from "../../service/admin/adminService_order";


const { RangePicker } = DatePicker;

class OrderItemTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            orderData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
        };

        if(this.props.idAdmin){
            getAllOrderItem((data) => {
                // console.log(data);
                this.setState({
                    orderData:data.concat([])
                });
            });
        }
        else {
            getUserOrderItem((data)=>{
                // console.log(data);
                this.setState({
                    orderData:data.concat([])
                });
            });

        }
        // this.dateChange.bind(this);
    //    /order/getAllOrderItem
    }

    searchInput = null;
    setSearchText(val){
        this.setState({ searchText:val});
    }

    setSearchedColumn(val){
        this.setState({ searchedColumn:val});
    }

    setSearchTime(val){
        this.setState({searchTime:val});
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
            <div style={{padding: 8,}}>
                <Input
                    ref={this.searchInput} placeholder={`Search ${dataIndex}`} value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block',}}
                />
                <Space>
                    <Button
                        type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />} size="small" style={{width: 90,}}
                    >
                        搜索
                    </Button>
                    <Button
                        onClick={() => clearFilters && this.handleReset(clearFilters)} size="small"
                        style={{width: 90,}}
                    >
                        重置
                    </Button>
                    <Button
                        type="link" size="small"
                        onClick={() => {
                            confirm({closeDropdown: false,});
                            this.setSearchText(selectedKeys[0]);
                            this.setSearchedColumn(dataIndex);
                        }}
                    >
                        过滤
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
                // setTimeout(() => this.searchInput.current?.select(), 10);
            }
        },
        render: (text) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    getColumnSearchTimeProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{padding: 8,}}>
                {/*<Input*/}
                {/*    ref={this.searchInput} placeholder={`Search ${dataIndex}`} value={selectedKeys[0]}*/}
                {/*    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}*/}
                {/*    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}*/}
                {/*    style={{marginBottom: 8, display: 'block',}}*/}
                {/*/>*/}
                <Space>
                    <RangePicker renderExtraFooter={() => '请选择时间来精确查询~'}
                                 onChange={ (value, dateString) => {
                                     let startTime = new Date(dateString[0]).getTime();
                                     let endTime = new Date(dateString[1]).getTime();

                                     let comb = startTime + ":" + endTime;
                                     let obj = [];
                                     obj.push(comb);
                                     setSelectedKeys(obj);
                                 }}
                                 showTime showNow allowClear/>
                    <Button
                        type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />} size="small" style={{width: 90,}}
                    >
                        搜索
                    </Button>
                    <Button
                        onClick={() => clearFilters && this.handleReset(clearFilters)} size="small"
                        style={{width: 90,}}
                    >
                        重置
                    </Button>
                    <Button
                        type="link" size="small"
                        onClick={() => {
                            confirm({closeDropdown: false,});
                            this.setSearchText(selectedKeys[0]);
                            this.setSearchedColumn(dataIndex);
                        }}
                    >
                        过滤
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
        onFilter: (value, record) => {

            let tmp = value.split(":");
            console.log(tmp);

            let recordVal = parseInt(record[dataIndex].time);

            return parseInt(tmp[0]) <= recordVal && parseInt(tmp[1]) >= recordVal
        },
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                // setTimeout(() => this.searchInput.current?.select(), 10);
            }
        },
    });

    columns = [
        {
            title: '图片',
            dataIndex: 'imgtitle',
            key: 'imgtitle',
            render: (text) => <Image src={text} width={60}/>
        },
        {
            title: '书本名称',
            dataIndex: 'displaytitle',
            key: 'displaytitle',
            ...this.getColumnSearchProps("displaytitle"),
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (_, { tags }) => {
                if(parseInt(_) === -1)
                    return (
                        <Tag color={"red"}>已取消</Tag>
                    );
                else if(parseInt(_) === 0)
                    return (
                        <Tag color={"orange"} >购物车</Tag>
                    );
                else if(parseInt(_) === 1)
                    return (
                        <Tag color={"orange"} >未支付</Tag>
                    );

                else if(parseInt(_) === 2)
                    return (
                        <Tag color={"green"} >已支付</Tag>
                    );
                else if(parseInt(_) === 3)
                    return (
                        <Tag color={"blue"} >已完成</Tag>
                    );
            },
        },

        {
            title: '用户',
            dataIndex: 'belonguser',
            key: 'belonguser',
            ...this.getColumnSearchProps("belonguser"),
        },
        {
            //
            title: '购买数量',
            dataIndex: 'buynum',
            key: 'buynum',
        },
        {
            title: '时间',
            dataIndex: 'create_Itemtime',
            key: 'create_Itemtime',
            render: (text) => {return new Date(text.time).toLocaleString();},
            ...this.getColumnSearchTimeProps('create_Itemtime')
        },
    ];

    render() {
        return (
            <Table columns={this.columns} dataSource={this.state.orderData} />
        );
    }
}
export default OrderItemTable;