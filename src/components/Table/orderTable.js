import React from "react";
import {Button, DatePicker, Image, Space, Table} from "antd";
import {getAllOrder, getUserOrder} from "../../service/orderService";
import {SearchOutlined} from "@ant-design/icons";
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
                this.setState({
                    orderData:data.concat([])
                });
            });
        }
        else{
            getUserOrder((data) => {
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
                    <p className="bookDetailPrice">
                        ￥{(parseInt(record.payprice)/parseInt(record.buynum)/100).toFixed(2)}
                    </p>
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

// import { DownOutlined } from '@ant-design/icons';
// import { Badge, Dropdown, Menu, Space, Table } from 'antd';
// const menu = (
//     <Menu
//         items={[
//             {
//                 key: '1',
//                 label: 'Action 1',
//             },
//             {
//                 key: '2',
//                 label: 'Action 2',
//             },
//         ]}
//     />
// );
//
// const OrderTable = () => {
//     const expandedRowRender = () => {
//         const columns = [
//             {
//                 title: 'Date',
//                 dataIndex: 'date',
//                 key: 'date',
//             },
//             {
//                 title: 'Name',
//                 dataIndex: 'name',
//                 key: 'name',
//             },
//             {
//                 title: 'Status',
//                 key: 'state',
//                 render: () => (
//                     <span>
//             <Badge status="success" />
//             Finished
//           </span>
//                 ),
//             },
//             {
//                 title: 'Upgrade Status',
//                 dataIndex: 'upgradeNum',
//                 key: 'upgradeNum',
//             },
//             {
//                 title: 'Action',
//                 dataIndex: 'operation',
//                 key: 'operation',
//                 render: () => (
//                     <Space size="middle">
//                         <a>Pause</a>
//                         <a>Stop</a>
//                         <Dropdown overlay={menu}>
//                             <a>
//                                 More <DownOutlined />
//                             </a>
//                         </Dropdown>
//                     </Space>
//                 ),
//             },
//         ];
//         const data = [];
//
//         for (let i = 0; i < 3; ++i) {
//             data.push({
//                 key: i,
//                 date: '2014-12-24 23:12:00',
//                 name: 'This is production name',
//                 upgradeNum: 'Upgraded: 56',
//             });
//         }
//
//         return <Table columns={columns} dataSource={data} pagination={false} />;
//     };
//
//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'Platform',
//             dataIndex: 'platform',
//             key: 'platform',
//         },
//         {
//             title: 'Version',
//             dataIndex: 'version',
//             key: 'version',
//         },
//         {
//             title: 'Upgraded',
//             dataIndex: 'upgradeNum',
//             key: 'upgradeNum',
//         },
//         {
//             title: 'Creator',
//             dataIndex: 'creator',
//             key: 'creator',
//         },
//         {
//             title: 'Date',
//             dataIndex: 'createdAt',
//             key: 'createdAt',
//         },
//         {
//             title: 'Action',
//             key: 'operation',
//             render: () => <a>Publish</a>,
//         },
//     ];
//     const data = [];
//
//     for (let i = 0; i < 3; ++i) {
//         data.push({
//             key: i,
//             name: 'Screem',
//             platform: 'iOS',
//             version: '10.3.4.5654',
//             upgradeNum: 500,
//             creator: 'Jack',
//             createdAt: '2014-12-24 23:12:00',
//         });
//     }
//
//     return (
//         <Table
//             className="components-table-demo-nested"
//             columns={columns}
//             expandable={{
//                 expandedRowRender,
//             }}
//             dataSource={data}
//         />
//     );
// };
//
// export default OrderTable;