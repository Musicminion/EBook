import React from "react";
import TopBar from "../../../components/TopBar/TopBar";
import {Button, Image, Input, Popconfirm, Space, Table, Tabs} from "antd";
import {SearchOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {getAllUserList} from "../../../service/admin/adminService_user";
import {getAllBookList} from "../../../service/bookservice";
import Highlighter from "react-highlight-words";
import {deleteOneBook} from "../../../service/admin/adminService_book";


const { TabPane } = Tabs;


class BookManage extends React.Component{


    constructor() {
        super();
        this.state = {
            bookData: [],
            searchText: "",
            searchedColumn: "",
        }

        getAllBookList((data)=>{
            this.setState({
                bookData:data.concat([])
            });
            console.log(data);
        });
    }

    searchInput = null;
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
            title: '图片',
            dataIndex: 'imgtitle',
            key: 'imgtitle',
            render: (text) => <Image src={text} width={60}/>
        },
        {
            title: '展示标题',
            dataIndex: 'displaytitle',
            key: 'displaytitle',
            ...this.getColumnSearchProps('displaytitle'),
        },
        {
            title: '书籍名称',
            dataIndex: 'bookname',
            key: 'bookname',
            // render: (text,record) => <a href={"/eBook/bookdetail?bookid="+record.id}>{text}</a>,
            ...this.getColumnSearchProps('bookname'),
        },
        {
            title: '作者',
            dataIndex: 'author',
            key: 'author',
            ...this.getColumnSearchProps('author'),
        },
        {
            title: '出版社',
            dataIndex: 'publisher',
            key: 'publisher',
            ...this.getColumnSearchProps('publisher'),
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            render: (text,record) => <p className="bookDetailPrice">￥{(parseInt(text)/100).toFixed(2)}</p>,
        },
        {
            title: '库存',
            dataIndex: 'inventory',
            key: 'inventory',
            width: 75,
        },
        {
            title: '销量',
            dataIndex: 'sellnumber',
            key: 'sellnumber',
            width: 75,
            sorter: {
                compare: (a, b) => a.sellnumber - b.sellnumber,
                multiple: 1,
            },
        },
        //
        {
            title: '操作',
            width: 250,
            render: (text,record) =>
                <>
                    <Button style={{margin:"3px"}} href={"/eBook/bookdetail?bookid="+record.id}>查看</Button>
                    <Button style={{margin:"3px"}} type="primary" href={"/eBook/admin/editbook?targetbookid="+record.id}>编辑</Button>
                    <Popconfirm
                        title="确认要删除书籍?操作不可撤销，且删除前请确认该书下没有订单！" onConfirm={()=>{this.deleteBook(record.id)}}
                        // onCancel={cancel}
                        okText="删除" cancelText="取消"
                    >
                        <Button style={{margin:"3px"}} type="primary" danger>删除</Button>
                    </Popconfirm>
                </>,
        },

    ];

    deleteBook = (bookID) =>{
        let obj = {
            bookID: bookID,
        };
        deleteOneBook(obj,(data)=>{
            if(data.status >= 0){
                alert("您已成功删除此书!");
                window.location.reload();
            }
        });

    }


    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />书籍管理</>} key="1">
                            <Table columns={this.columns} dataSource={this.state.bookData} onChange={this.onChange}/>
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

export default BookManage;


