import React from "react";
import TopBar from "../../../components/TopBar/TopBar";
import {Button, Input, Select, Space, Table, Tabs, Tag} from "antd";
import {getAllUserList, setUserLoginPermit} from "../../../service/adminService_user";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';

const { Option } = Select;
const { TabPane } = Tabs;

// 处理变更是否允许登录的功能
const handleChange_ForBidLogin = (value,username) => {
    setUserLoginPermit(username,value,(data)=>{console.log(data)});
};

class userManage extends React.Component{
    searchInput = null;

    constructor() {
        super();
        this.state = {
            userData: [],
            searchText: "",
            searchedColumn: "",
        }
        getAllUserList((data)=>{
            this.setState({
                userData:data.concat([])
            });
            console.log(data);
        });
    }

    setSearchText(val){
        this.setState({ searchText:val});
    }

    setSearchedColumn(val){
        this.setState({ searchedColumn:val});
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

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={this.searchInput}
                    placeholder={`Search ${dataIndex}`} value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block',}}
                />
                <Space>
                    <Button
                        type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />} size="small" style={{width: 90,}}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && this.handleReset(clearFilters)} size="small"
                        style={{width: 90,}}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link" size="small"
                        onClick={() => {
                            confirm({closeDropdown: false,});
                            this.setSearchText(selectedKeys[0]);
                            this.setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
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
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.current?.select(), 10);
            }
        },
        render: (text) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a>{text}</a>,
            ...this.getColumnSearchProps('username'),
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
            },
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            ...this.getColumnSearchProps('name'),
        },
        {
            title: '电话号码',
            dataIndex: 'telephone',
            key: 'telephone',
            ...this.getColumnSearchProps('telephone'),
        },
        {
            title: '电子邮件',
            dataIndex: 'email',
            key: 'email',
            render: (text) => <a href={"mailto:"+text}>{text}</a>,
            ...this.getColumnSearchProps('email'),
        },
        {
            title: '用户住址',
            dataIndex: 'useraddress',
            key: 'useraddress',
            ...this.getColumnSearchProps('useraddress'),
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
    ];

    render() {
        // console.log(this.state.userData);
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UserOutlined />全局用户管理</>} key="1">
                            <Table columns={this.columns} dataSource={this.state.userData} />
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

export default userManage;