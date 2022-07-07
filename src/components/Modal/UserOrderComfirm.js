import React from "react";
import {Button, Modal} from "antd";
import {orderMakeFromShopCart} from "../../service/orderService";

//  [对话框]
//  [组件用途介绍]：用户订单确认的对话框
//  [组件使用场景]：用户支付的对接
//  [功能详细介绍]：对话框常态是隐藏的，单机按钮打开对话框


class UserOrderComfirm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            loading: false,
            visible: true,
        });
    };

    handleOk = () => {
        // 关闭对话框
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 0);

        // 和后端通讯
        let orderInfo = {
            receivename :this.props.parentNode.state.receivename,
            phonenumber: this.props.parentNode.state.phonenumber,
            postcode: this.props.parentNode.state.postcode,
            receiveaddress : this.props.parentNode.state.receiveaddress,
        };

        console.log(orderInfo);

        this.props.orderConfirm();


        //
        // orderMakeFromShopCart(this.props.bookIDGroup,this.props.bookNumGroup, orderInfo,
        //     (data) =>{
        //         console.log(data);
        //         if(data.status>=0)
        //             window.location.href="/eBook/purchaseSuccess";
        //         else
        //             window.location.href="/eBook/errorPage";
        //     }
        // );

    }

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <>
                <Button className="bookDetailAddToChart" onClick={this.showModal}>立即购买</Button>
                <Modal
                    visible={this.state.visible}
                    title="是否确认支付订单？"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button type="primary" onClick={this.handleOk}>
                            确认
                        </Button>,
                    ]}
                >
                    <p>单击"确认"将会为您创建订单</p>
                    <p>单击"取消"将会放弃创建订单</p>
                </Modal>
            </>
        );
    }
}

export default UserOrderComfirm;