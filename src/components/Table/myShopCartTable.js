// import React from "react";
// import {Table, Button, Image} from 'antd';
// import {orderQueryUserShopCart} from "../../service/orderService";
//
// const columns = [
//     {
//         title: '商品图片',
//         dataIndex: 'name',
//     },
//     {
//         title: '商品名',
//         dataIndex: 'age',
//     },
//     {
//         title: '数量',
//         dataIndex: 'address',
//     },
//     {
//         title: '单价',
//         dataIndex: '',
//     },
//     {
//         title: '操作',
//     },
// ];
//
// const data = [];
// for (let i = 0; i < 46; i++) {
//     data.push({
//         itemID: i,
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: 1,
//     });
//
// }
//
//
//
//
// class MyShopCartTable extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             selectedRowKeys: [], // Check here to configure the default column
//             loading: false,
//             cartdata: [],
//         };
//         orderQueryUserShopCart(
//             (resp) =>{
//                 this.state.cartdata = resp;
//                 console.log(resp);
//             });
//     }
//
//     start = () => {
//         this.setState({ loading: true });
//         // ajax request after empty completing
//         setTimeout(() => {
//             this.setState({
//                 selectedRowKeys: [],
//                 loading: false,
//             });
//         }, 1000);
//     };
//
//     onSelectChange = selectedRowKeys => {
//         console.log('selectedRowKeys changed: ', selectedRowKeys);
//         this.setState({ selectedRowKeys });
//     };
//
//     render() {
//         const { loading, selectedRowKeys } = this.state;
//         const rowSelection = {
//             selectedRowKeys,
//             onChange: this.onSelectChange,
//         };
//         const hasSelected = selectedRowKeys.length > 0;
//         return (
//             <div>
//                 <div style={{ marginBottom: 16 }}>
//                     {/*<Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>*/}
//                     {/*    Reload*/}
//                     {/*</Button>*/}
//                     <span style={{ marginLeft: 8 }}>
//                         {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
//                     </span>
//                 </div>
//                 <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//             </div>
//         );
//     }
// }
//
//
// export default MyShopCartTable;