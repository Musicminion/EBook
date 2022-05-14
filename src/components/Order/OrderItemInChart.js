import React from "react";

//  订单支付的逻辑 首先在用户进入到PayComfirm页面之前的时候，都是不会与服务器交互的，
//  进入到 eBook/paycomfirm?bookid=XXX&bookbuynum=XXX的时候，可以
//  选择填写购买的信息，单击按钮后，想服务器申请创建订单，这样可以避免恶意刷单
//
//      |-----------------------------------------------|
//      |interaction 1                                  |
//      |        POST request to create an order        |
//      |  client --------------------------> server    |
//      |                                               |
//      |       receive order create success            |
//      |  client <-------------------------- server    |
//      |                                               |
//      |                                               |
//      |interaction 2                                  |
//      |    GET  request to obtain an order info       |
//      |  client --------------------------> server    |
//      |         receive order info                    |
//      |  client <-------------------------- server    |
//      |                                               |
//      |  client : Display Order Info,Waiting For Pay  |
//      |                                               |
//      |interaction 3                                  |
//      |        POST request to update the order       |
//      |  client --------------------------> server    |
//      |                                               |
//      |         receive order make success            |
//      |  client <-------------------------- server    |


//
// class OrderItemInChart extends React.Component{
//
//
//     render() {
//         return (
//             <>
//
//             </>
//         );
//     }
// }