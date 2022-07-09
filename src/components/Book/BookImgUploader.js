import React from "react";
import {accessId, picHost} from "../../config/BaseConfig";
import Base64 from "base-64";
import {Button, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import "../../utils/tools/crypto1/crypto/crypto.js";
import "../../utils/tools/crypto1/hmac/hmac.js";
import "../../utils/tools/crypto1/sha1/sha1.js";
import {getSignatureForUpload} from "../../service/bookservice";

//  [组件用途介绍]：用于上传图片的组件，对接阿里云-杭州的存储桶，图片存储在存储桶里面
//  [组件使用场景]：管理员编辑书籍页面，或者添加书籍页面的时候，有一个上传组件的按钮
//  [功能详细介绍]：用户打开页面的时候，会基于实时生成一个Policy【包括允许上传的大小、时间】，用户上传图片后，
//               前端向后端发送Policy数据，后端根据密钥[AccessKey]，完成签名并且下发,这样保护了存储桶密
//               钥的安全性，回避前端自签名泄露信息的危险。

class FileUploader extends React.Component{
    PolicyData = "";
    value = {};

    constructor(props) {
        super(props);
        this.state = {
            OSSData : {
                dir: 'image/',
                // expire: '1577811661',
                host: picHost,
                accessId: accessId,
                policy: this.getPolicy(),
                signature: "",
            },
        };
        this.getSignature();
        getSignatureForUpload.bind(this);
        this.getExtraData.bind(this);
    }

    getExpirationTime = () => {
        let nowTime = new Date();
        let expTime = nowTime.setMinutes(nowTime.getMinutes() + 5);
        return new Date(expTime).toJSON();
    }

    getSignature(){

        getSignatureForUpload(this.PolicyData,(data)=>{
            let obj = Object.assign(this.state.OSSData, { signature: data.data.Signature });
            this.setState({OSSData : obj});
        });
    }


    getPolicy = () => {
        let policyText = {
            "expiration": this.getExpirationTime(),
            "conditions": [
                ["content-length-range", 0, 1048576000]// 设置上传文件的大小限制
            ]
        };

        let result = Base64.encode(JSON.stringify(policyText));
        this.PolicyData = result;
        return result;
    };

    beforeUpload = async (file) => {
        if (!this.state.OSSData) return false;
        if (!this.state.OSSData.signature || this.state.OSSData.signature === "") return false;
        // const expire = Number(this.state.OSSData.expire) * 1000;
        //
        // if (expire < Date.now()) {
        //     await init();
        // }

        const suffix = file.name.slice(file.name.lastIndexOf('.'));
        const filename = Date.now() + suffix;   // @ts-ignore

        file.url = this.state.OSSData.dir + filename;
        return file;
    };

    getExtraData = (file) => {

        return {
            key: file.url,
            OSSAccessKeyId: this.state.OSSData?.accessId,
            policy: this.state.OSSData?.policy,
            Signature: this.state.OSSData?.signature,
        };
    };

    handleChange = ({ fileList }) => {
        if(fileList != null && fileList.length >0){
            this.props.parentNode.imgUrl = fileList[0].url;
            this.props.parentNode.formRef.current.setFieldsValue({
                imgtitle: fileList[0].url
            });
        }
    };

    onRemove = (file) => {
        // const files = (this.value || []).filter((v) => v.url !== file.url);
        //
        // if (this.onChange) {
        //     this.onChange(files);
        // }
    };

    uploadProps = {
        name: 'file',
        // fileList: this.value,
        // action: this.state.OSSData?.host,
        action: picHost,
        onChange: this.handleChange,
        onRemove: this.onRemove,
        data: this.getExtraData,
        beforeUpload: this.beforeUpload,
        // // Access-Control-Allow-Origin
        headers: {
            'X-Requested-With':null
        },
    };

    render() {
        return (
            <Upload {...this.uploadProps}  listType="picture" maxCount={1} >
                <Button icon={<UploadOutlined/>}>Click to Upload</Button>
            </Upload>

        );
    }
}

export default FileUploader;



// 后面的是调试的代码，仅供有需要的时候参考
//
// const AliyunOSSUpload = ({ value, onChange }) => {
//     const [OSSData, setOSSData] = useState(); // Mock get OSS api
//     const [keyData, setkeyData] = useState(); // Mock get OSS api
//     // const [PolicyData, setPolicyData] = useState(); // Mock get OSS api
//     let PolicyData = "";
//     // let keyData = "";
//     // https://help.aliyun.com/document_detail/31988.html
//
//     const mockGetOSSData = () => ({
//         dir: 'image/',
//         // expire: '1577811661',
//         host: picHost,
//         accessId: accessId,
//         policy: getPolicy(),
//         // signature: "13vQnCAEZn3YqyfE/1iDGiWp8P8=",
//         signature: getSignature()
//     });
//
//     let getSignature = () => {
//         if (keyData != null){
//             console.log(keyData);
//             return keyData;
//         }
//         else{
//             alert("寄了");
//             return getSignature();
//         }
//             // return getSignature();
//     };
//
//     // 图片上传过期时间
//     let getExpirationTime = () => {
//         let nowTime = new Date();
//         return nowTime.setMinutes(nowTime.getMinutes() + 1);
//     }
//
//     let getPolicy = () => {
//         //2022-06-14T12:52:27.061Z
//         // let nowTime = new Date();
//         // let expTime = nowTime.setMinutes(nowTime.getMinutes() + 1);
//         //alert(new Date(expTime).toJSON());
//         let policyText = {
//             "expiration": "2023-07-30T12:00:00.000Z",
//             // "expiration": getExpirationTime(),
//             "conditions": [
//                 ["content-length-range", 0, 1048576000]// 设置上传文件的大小限制
//             ]
//         };
//
//         let result = Base64.encode(JSON.stringify(policyText));
//         PolicyData = result;
//
//         getSignatureForUpload(PolicyData , setkeyData , (data, setkeyData) =>{
//             // console.log(data.data.Signature);
//             // keyData = data.data.Signature;
//
//             setkeyData(data.data.Signature);
//             // alert(keyData);
//         });
//
//         return result;
//     };
//
//     const init = async () => {
//         try {
//             const result = await mockGetOSSData();
//             setOSSData(result);
//         } catch (error) {
//             message.error(error);
//         }
//     };
//
//     useEffect(() => {
//         init();
//     }, []);
//
//     const handleChange = ({ fileList }) => {
//         console.log('Aliyun OSS:', fileList);
//         onChange?.([...fileList]);
//     };
//
//     const onRemove = (file) => {
//         const files = (value || []).filter((v) => v.url !== file.url);
//
//         if (onChange) {
//             onChange(files);
//         }
//     };
//
//     const getExtraData = (file) => ({
//         key: file.url,
//         OSSAccessKeyId: OSSData?.accessId,
//         policy: OSSData?.policy,
//         Signature: OSSData?.signature,
//     });
//
//     const beforeUpload = async (file) => {
//         if (!OSSData) return false;
//         const expire = Number(OSSData.expire) * 1000;
//
//         if (expire < Date.now()) {
//             await init();
//         }
//
//         const suffix = file.name.slice(file.name.lastIndexOf('.'));
//         const filename = Date.now() + suffix;   // @ts-ignore
//
//         file.url = OSSData.dir + filename;
//
//         alert(file.url);
//         return file;
//     };
//
//     const uploadProps = {
//         name: 'file',
//         fileList: value,
//         action: OSSData?.host,
//         onChange: handleChange,
//         onRemove,
//         data: getExtraData,
//         beforeUpload,
//         // Access-Control-Allow-Origin
//         headers: {
//             'X-Requested-With':null
//         },
//     };
//
//
//     return (
//         <Upload {...uploadProps}  listType="picture" >
//             <Button icon={<UploadOutlined />}>Click to Upload</Button>
//         </Upload>
//     );
// };

// class fileUploader extends React.Component{
//     PolicyData = "";
//     value = {};
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             OSSData : {
//                 dir: 'image/',
//                 // expire: '1577811661',
//                 host: picHost,
//                 accessId: accessId,
//                 policy: this.getPolicy(),
//                 signature: "13vQnCAEZn3YqyfE/1iDGiWp8P8=",
//                 // signature: getSignature()
//             },
//         }
//     }
//
//     getPolicy = () => {
//         //2022-06-14T12:52:27.061Z
//         // let nowTime = new Date();
//         // let expTime = nowTime.setMinutes(nowTime.getMinutes() + 1);
//         //alert(new Date(expTime).toJSON());
//         let policyText = {
//             "expiration": "2023-07-30T12:00:00.000Z",
//             // "expiration": getExpirationTime(),
//             "conditions": [
//                 ["content-length-range", 0, 1048576000]// 设置上传文件的大小限制
//             ]
//         };
//
//         let result = Base64.encode(JSON.stringify(policyText));
//         this.PolicyData = result;
//
//         // getSignatureForUpload(PolicyData , setkeyData , (data, setkeyData) =>{
//         //     // console.log(data.data.Signature);
//         //     // keyData = data.data.Signature;
//         //
//         //     setkeyData(data.data.Signature);
//         //     // alert(keyData);
//         // });
//
//         return result;
//     };
//
//
//
//     beforeUpload = async (file) => {
//         if (!this.state.OSSData) return false;
//         // const expire = Number(this.state.OSSData.expire) * 1000;
//         //
//         // if (expire < Date.now()) {
//         //     await init();
//         // }
//
//         const suffix = file.name.slice(file.name.lastIndexOf('.'));
//         const filename = Date.now() + suffix;   // @ts-ignore
//
//         file.url = this.state.OSSData.dir + filename;
//
//         return file;
//     };
//
//     getExtraData = (file) => ({
//         key: file.url,
//         OSSAccessKeyId: this.state.OSSData?.accessId,
//         policy: this.state.OSSData?.policy,
//         Signature: this.state.OSSData?.signature,
//     });
//
//     handleChange = ({ fileList }) => {
//         console.log('Aliyun OSS:', fileList);
//         // onChange?.([...fileList]);
//     };
//
//     onRemove = (file) => {
//         const files = (this.value || []).filter((v) => v.url !== file.url);
//
//         if (this.onChange) {
//             this.onChange(files);
//         }
//     };
//
//     uploadProps = {
//         name: 'file',
//         fileList: this.value,
//         action: this.state.OSSData?.host,
//         onChange: this.handleChange,
//         onRemove: this.onRemove,
//         data: this.getExtraData,
//         beforeUpload: this.beforeUpload,
//         // // Access-Control-Allow-Origin
//         headers: {
//             'X-Requested-With':null
//         },
//     };
//
//     render() {
//         return (
//             <Upload {...this.uploadProps}  listType="picture" >
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//             </Upload>
//         );
//     }
// }
//
// export default fileUploader;

