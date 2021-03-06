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
                    <RangePicker renderExtraFooter={() => '??????????????????????????????~'}
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
                        ??????
                    </Button>
                    <Button
                        onClick={() => clearFilters && this.handleReset(clearFilters)} size="small"
                        style={{width: 90,}}
                    >
                        ??????
                    </Button>
                    <Button
                        type="link" size="small"
                        onClick={() => {
                            confirm({closeDropdown: false,});
                            this.setSearchText(selectedKeys[0]);
                            this.setSearchedColumn(dataIndex);
                        }}
                    >
                        ??????
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
            title: '????????????',
            dataIndex: 'orderID',
            key: 'orderID',
        },
        {
            title: '????????????',
            dataIndex: 'belonguser',
            key: 'belonguser',
        },

        {
            title: '????????????',
            dataIndex: 'contactphone',
            key: 'contactphone',
        },
        {
            title: '????????????',
            dataIndex: 'destination',
            key: 'destination',
        },
        {
            title: '????????????',
            dataIndex: 'postalcode',
            key: 'postalcode',
        },
        {
            title: '?????????',
            dataIndex: 'receivername',
            key: 'receivername',
        },
        {
            title: '??????',
            dataIndex: 'totalprice',
            key: 'totalprice',
            render: (text,record) => <p className="bookDetailPrice">???{(parseInt(text)/100).toFixed(2)}</p>,
        },
        {
            title: '??????',
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
                title: '??????',
                dataIndex: 'bookurl',
                key: 'bookurl',
                render: (text) => <Image src={text} width={60}/>
            },
            {
                title: '??????',
                dataIndex: 'status',
                key: 'status',
                render: (_, { tags }) => {
                    if(parseInt(_) === -1)
                        return (
                            <Tag color={"red"}>?????????</Tag>
                        );
                    else if(parseInt(_) === 0)
                        return (
                            <Tag color={"orange"} >?????????</Tag>
                        );
                    else if(parseInt(_) === 1)
                        return (
                            <Tag color={"orange"} >?????????</Tag>
                        );

                    else if(parseInt(_) === 2)
                        return (
                            <Tag color={"green"} >?????????</Tag>
                        );
                    else if(parseInt(_) === 3)
                        return (
                            <Tag color={"blue"} >?????????</Tag>
                        );
                },
            },
            {
                title: '??????',
                dataIndex: 'booktitle',
                key: 'booktitle',
                width: 300,
            },
            {
                title: '????????????',
                dataIndex: 'buynum',
                key: 'buynum',
            },
            {
                title: '??????',
                render: (text,record) =>
                {
                    if(record.buynum!==0)
                        return (
                            <p className="bookDetailPrice">
                                ???{(parseInt(record.payprice)/parseInt(record.buynum)/100).toFixed(2)}
                            </p>
                        );
                    else{
                        return (
                            <p className="bookDetailPrice">
                                ???0.00
                            </p>
                        );
                    }

                }

            },
            {
                title: '????????????',
                dataIndex: 'payprice',
                key: 'payprice',
                render: (text,record) => <p className="bookDetailPrice">???{(parseInt(text)/100).toFixed(2)}</p>,
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

