import React, {useEffect, useState} from "react";
import TopBar from "../../components/TopBar/TopBar";
import {Button, Table, Tabs, Upload, message, Form} from "antd";
import {ShopOutlined, UploadOutlined} from "@ant-design/icons";

import Base64  from 'base-64';

import "../../utils/tools/crypto1/crypto/crypto.js";
import "../../utils/tools/crypto1/hmac/hmac.js";
import "../../utils/tools/crypto1/sha1/sha1.js";
import {accessId, picKey} from "../../config/BaseConfig";

const { TabPane } = Tabs;

const AliyunOSSUpload = ({ value, onChange }) => {
    const [OSSData, setOSSData] = useState(); // Mock get OSS api
    // const [PolicyData, setPolicyData] = useState(); // Mock get OSS api
    let PolicyData = "";
    // https://help.aliyun.com/document_detail/31988.html

    const mockGetOSSData = () => ({
        dir: 'image/',
        // expire: '1577811661',
        host: 'https://ebookpicture.oss-cn-hangzhou.aliyuncs.com',
        accessId: accessId,
        policy: getPolicy(),
        signature: getSignature(),
    });

    let getSignature = () => {
        let bytes =   Crypto.HMAC(Crypto.SHA1,PolicyData, picKey, { asBytes: true });
        return Crypto.util.bytesToBase64(bytes);
    };

    let getPolicy = () => {
        let policyText = {
            "expiration": "2023-07-30T12:00:00.000Z",
            "conditions": [
                ["content-length-range", 0, 1048576000]     // 设置上传文件的大小限制
            ]
        };


        let result = Base64.encode(JSON.stringify(policyText));
        PolicyData = result ;
        return result;
    };

    const init = async () => {
        try {
            const result = await mockGetOSSData();
            setOSSData(result);
        } catch (error) {
            message.error(error);
        }
    };

    useEffect(() => {
        init();
    }, []);

    const handleChange = ({ fileList }) => {
        console.log('Aliyun OSS:', fileList);
        onChange?.([...fileList]);
    };

    const onRemove = (file) => {
        const files = (value || []).filter((v) => v.url !== file.url);

        if (onChange) {
            onChange(files);
        }
    };

    const getExtraData = (file) => ({
        key: file.url,
        OSSAccessKeyId: OSSData?.accessId,
        policy: OSSData?.policy,
        Signature: OSSData?.signature,
    });

    const beforeUpload = async (file) => {
        if (!OSSData) return false;
        const expire = Number(OSSData.expire) * 1000;

        if (expire < Date.now()) {
            await init();
        }

        const suffix = file.name.slice(file.name.lastIndexOf('.'));
        const filename = Date.now() + suffix;   // @ts-ignore

        file.url = OSSData.dir + filename;
        return file;
    };

    const uploadProps = {
        name: 'file',
        fileList: value,
        action: OSSData?.host,
        onChange: handleChange,
        onRemove,
        data: getExtraData,
        beforeUpload,
        // Access-Control-Allow-Origin
        headers: {
            'X-Requested-With':null
        },
    };
    return (
        <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    );
};

class newBook extends React.Component{

    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><ShopOutlined />新品发布</>} key="1">

                            <Form
                                labelCol={{
                                    span: 4,
                                }}
                            >
                                <Form.Item label="Photos" name="photos">
                                    <AliyunOSSUpload />
                                </Form.Item>
                            </Form>

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

export default newBook;