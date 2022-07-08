import React from "react";
import {Button, DatePicker, Image, Space, Table, Tag} from "antd";

import {SearchOutlined} from "@ant-design/icons";
import {getAllOrder, getUserOrder} from "../../service/admin/adminService_order";
const { RangePicker } = DatePicker;

//return <Table columns={columns} dataSource={data} pagination={false} />;

class OrderTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            orderData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
        };

        if(this.props.idAdmin === 1){
            getAllOrder((data) => {
                console.log(data);
                this.setState({
                    orderData:data.concat([])
                });
            });
        }
        else{
            getUserOrder((data) => {
                console.log(data);
                this.setState({
                    orderData:data.concat([])
                });
            });
        }
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
            title: '订单编号',
            dataIndex: 'orderID',
            key: 'orderID',
        },
        {
            title: '所属用户',
            dataIndex: 'belonguser',
            key: 'belonguser',
        },

        {
            title: '联系方式',
            dataIndex: 'contactphone',
            key: 'contactphone',
        },
        {
            title: '用户地址',
            dataIndex: 'destination',
            key: 'destination',
        },
        {
            title: '邮政编码',
            dataIndex: 'postalcode',
            key: 'postalcode',
        },
        {
            title: '收件人',
            dataIndex: 'receivername',
            key: 'receivername',
        },
        {
            title: '总价',
            dataIndex: 'totalprice',
            key: 'totalprice',
            render: (text,record) => <p className="bookDetailPrice">￥{(parseInt(text)/100).toFixed(2)}</p>,
        },
        {
            title: '时间',
            dataIndex: 'create_time',
            key: 'create_time',
            render: (text) => {return new Date(text.time).toLocaleString();},
            ...this.getColumnSearchTimeProps('create_time')
        },

        //

    ];

    expandedRowRender = (record) => {

        console.log(record);
        const columns = [
            {
                title: '图片',
                dataIndex: 'bookurl',
                key: 'bookurl',
                render: (text) => <Image src={text} width={60}/>
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
                title: '标题',
                dataIndex: 'booktitle',
                key: 'booktitle',
                width: 300,
            },
            {
                title: '购买数量',
                dataIndex: 'buynum',
                key: 'buynum',
            },
            {
                title: '单价',
                render: (text,record) =>
                {
                    if(record.buynum!==0)
                        return (
                            <p className="bookDetailPrice">
                                ￥{(parseInt(record.payprice)/parseInt(record.buynum)/100).toFixed(2)}
                            </p>
                        );
                    else{
                        return (
                            <p className="bookDetailPrice">
                                ￥0.00
                            </p>
                        );
                    }

                }

            },
            {
                title: '支付金额',
                dataIndex: 'payprice',
                key: 'payprice',
                render: (text,record) => <p className="bookDetailPrice">￥{(parseInt(text)/100).toFixed(2)}</p>,
            },

        ];

        return <Table columns={columns} dataSource={record.chileItem} pagination={false} />;
    };

    render() {

        return(
            <Table
                columns={this.columns}
                expandable={{
                    expandedRowRender:(record) => this.expandedRowRender(record),
                    rowKey: "orderID"
                }}
                rowKey={"orderID"}
                // expandedRowRender=
                dataSource={this.state.orderData}
            />
        );
    }
}

export default OrderTable;

