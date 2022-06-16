import React from "react";
import {Image, Table} from "antd";
import {getAllOrder} from "../../service/orderService";


//return <Table columns={columns} dataSource={data} pagination={false} />;



class OrderTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orderData: [],
        };

        getAllOrder((data) => {
            console.log(data);
            this.setState({
                orderData:data.concat([])
            });
        });

    }

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