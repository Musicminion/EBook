import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import {Select, Space, Table, Tabs, Tag} from "antd";
import {getAllUserList, setUserLoginPermit} from "../../service/adminService_user";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
const { Option } = Select;
const { TabPane } = Tabs;
// 处理变更是否允许登录的功能
const handleChange_ForBidLogin = (value,username) => {
    // alert(`selected ${value}`);
    // alert(`selected ${username}`);
    // alert(value);
    setUserLoginPermit(username,value,(data)=>{console.log(data)});
};


const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '权限',
        dataIndex: 'privilege',
        key: 'privilege',
        render: (_, { tags }) => {
            if(parseInt(_) === 0)
                return (
                    <Tag color={"geekblue"}>超级管理员</Tag>
                );
            else if(parseInt(_) === 2)
                return (
                    <Tag color={"green"} >普通用户</Tag>
                );
        }
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '电话号码',
        dataIndex: 'telephone',
        key: 'telephone',
    },
    {
        title: '电子邮件',
        dataIndex: 'email',
        key: 'email',
        render: (text) => <a href={"mailto:"+text}>{text}</a>,
    },
    {
        title: '用户住址',
        dataIndex: 'useraddress',
        key: 'useraddress',
    },
    {
        title: '登录许可',
        dataIndex: 'forbidlogin',
        key: 'forbidlogin',
        render: (num,record) => (
            <>
                <Select
                    defaultValue={num === 0 ? "允许":"禁止"}
                    style={{
                        width: 80,
                    }}
                    onChange={(value)=>handleChange_ForBidLogin(value,record.username)}
                >
                    <Option value="0">允许</Option>
                    <Option value="1">禁止</Option>
                </Select>
            </>
        ),
    },
    //useraddress
    // {
    //     title: '权限',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    // {
    //     title: 'Age',
    //     dataIndex: 'age',
    //     key: 'age',
    // },
    // {
    //     title: 'Address',
    //     dataIndex: 'address',
    //     key: 'address',
    // },
    //
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];
const data = [
    {
        key: '1',
        username: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        username: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        username: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },


];

class userManage extends React.Component{
    constructor() {
        super();

        this.state = {
            userData: []
        }

        getAllUserList((data)=>{
            //console.log(data);
            this.setState({
                userData:data.concat([])
            });
        });

    }

    render() {
        console.log(this.state.userData);
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UserOutlined />全局用户管理</>} key="1"></TabPane>

                    </Tabs>
                    <Table columns={columns} dataSource={this.state.userData} />

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

export default userManage;