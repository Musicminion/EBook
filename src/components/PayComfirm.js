import React, { useState } from 'react';
import {Modal, Button, Image} from 'antd';

const PayComfirm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" danger onClick={showModal} className="BookDetailBuy">
                购买
            </Button>
            <Modal title="订单确认" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Image src={require('../asset/img/book/4.jpg')}></Image>
                <p>即将要购买"商品名称：书籍名"</p>
                <p className="BookCard_bookPrice">￥20.99 </p>
            </Modal>
        </>
    );
};

export default PayComfirm;