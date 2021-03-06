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
            title: '??????',
            dataIndex: 'imgtitle',
            key: 'imgtitle',
            render: (text) => <Image src={text} width={60}/>
        },
        {
            title: '????????????',
            dataIndex: 'displaytitle',
            key: 'displaytitle',
            ...this.getColumnSearchProps('displaytitle'),
        },
        {
            title: '????????????',
            dataIndex: 'bookname',
            key: 'bookname',
            // render: (text,record) => <a href={"/eBook/bookdetail?bookid="+record.id}>{text}</a>,
            ...this.getColumnSearchProps('bookname'),
        },
        {
            title: '??????',
            dataIndex: 'author',
            key: 'author',
            ...this.getColumnSearchProps('author'),
        },
        {
            title: '?????????',
            dataIndex: 'publisher',
            key: 'publisher',
            ...this.getColumnSearchProps('publisher'),
        },
        {
            title: '??????',
            dataIndex: 'price',
            key: 'price',
            render: (text,record) => <p className="bookDetailPrice">???{(parseInt(text)/100).toFixed(2)}</p>,
        },
        {
            title: '??????',
            dataIndex: 'inventory',
            key: 'inventory',
            width: 75,
        },
        {
            title: '??????',
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
            title: '??????',
            width: 250,
            render: (text,record) =>
                <>
                    <Button style={{margin:"3px"}} href={"/eBook/bookdetail?bookid="+record.id}>??????</Button>
                    <Button style={{margin:"3px"}} type="primary" href={"/eBook/admin/editbook?targetbookid="+record.id}>??????</Button>
                    <Popconfirm
                        title="????????????????????????????????????????????????????????????????????????????????????????" onConfirm={()=>{this.deleteBook(record.id)}}
                        // onCancel={cancel}
                        okText="??????" cancelText="??????"
                    >
                        <Button style={{margin:"3px"}} type="primary" danger>??????</Button>
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
                alert("????????????????????????!");
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
                        <TabPane tab={<><UnorderedListOutlined />????????????</>} key="1">
                            <Table columns={this.columns} dataSource={this.state.bookData} onChange={this.onChange}/>
                        </TabPane>
                    </Tabs>
                </div>

                <div className="clearOnly_compact">

                </div>
                <div className="Pagefooter">
                    <p>CopyRight ?? 2022 AllRights Reserved.ALL Developed By ZhangZiqian.</p>
                </div>



            </div>
        );
    }
}

export default BookManage;


