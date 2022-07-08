import React from "react";
import TopBar from "../../../components/TopBar/TopBar";
import {Tabs, Form, Input, InputNumber, Button, Image} from "antd";
import {ShopOutlined} from "@ant-design/icons";
import FileUploader from "../../../components/Book/BookImgUploader";
import TextArea from "antd/es/input/TextArea";
import {picHost} from "../../../config/BaseConfig";
import {addBook, editOneBook} from "../../../service/admin/adminService_book";
import {urlDecoder} from "../../../utils/urlDecoder";
import {getBookByID} from "../../../service/bookservice";

const { TabPane } = Tabs;

class editBook extends React.Component{

    targetbookid = "";

    constructor() {
        super();

        this.state = {
            bookID: 0,          // 书本的ID
            bookTitle: "",
            bookName: "",
            bookAuthor: "",
            bookISBN: "",
            bookremainNum: 0,
            bookPublisher: "",
            bookPlace: "",
            bookSellnum: 0,
            bookPrice: 0,
            bookDescription: "",
            imageUrl:"",
        };

        let url = decodeURI(window.location.search); //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        let theRequest = urlDecoder(url);
        console.log(theRequest);
        //请求示范: http://localhost:3000/eBook/admin/editbook?targetbookid=3
        if(theRequest["targetbookid"]!=null){
            this.targetbookid = theRequest["targetbookid"];
            let that = this;
            getBookByID(this.targetbookid,(data) => {
                    let actualPrice = parseInt(data.price) / 100;
                    that.setState({
                        bookID: this.targetbookid,
                        bookTitle: data.displaytitle,
                        bookName:  data.bookname,
                        bookAuthor: data.author,
                        bookremainNum: data.inventory,
                        bookPublisher: data.publisher,
                        bookPlace: data.departure,
                        bookSellnum: data.sellnumber,
                        bookPrice: actualPrice,
                        bookISBN: data.isbn,
                        bookDescription: data.description,
                        imageUrl:data.imgtitle
                    });

                    that.formRef.current.setFieldsValue(
                        {
                            price: actualPrice,
                            inventory:data.inventory,
                            displaytitle:data.displaytitle,
                            bookname:data.bookname,
                            ISBN:data.isbn,
                            departure:data.departure,
                            author:data.author,
                            publisher:data.publisher,
                            description:data.description,
                        }
                    );
                }
            );
        }
        else{
            window.location.href = "/eBook/errorPage";
        }
    }

    imgUrl = "";
    formRef = React.createRef();

    onFinish = (values: any) => {
        let sendData = values;

        // 可能用户没有改变
        if(sendData.imgtitle==null){
            sendData.imgtitle = "nochange";
        }
        else{
            sendData.imgtitle = picHost + "/" +sendData.imgtitle;
        }

        sendData["bookID"]=this.state.bookID;
        console.log(sendData);

        editOneBook(sendData, (data) => {
                    if(data.status >= 0){
                        window.location.href = "/eBook/publishSuccess?targetbookid=" + data.data.bookID;
                    }
                    else
                        window.location.href = "/eBook/errorPage";
                }
            );
        // addBook(sendData,(data) => {
        //     window.location.href = "/eBook/publishSuccess?targetbookid=" + data.data.bookID;
        // });
    };

    render() {
        // if(parseInt(this.state.bookID) > 0)
        console.log(this.state);
        if(this.state!=null && this.state.bookID !=null){
            return (
                <div className="eBookPageContainer">
                    <TopBar/>
                    <div className="MainContentsCard_compact">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<><ShopOutlined />新品发布</>} key="1">


                                <Form labelCol={{span: 3, offset: 1}} wrapperCol={{span: 10, offset: 1}}
                                      onFinish={this.onFinish} ref={this.formRef}
                                >
                                    <Form.Item label="封面更新" name="imgtitle" valuePropName="fileList">
                                        <FileUploader parentNode={this}/>
                                        <br/>
                                        <Image src={this.state.imageUrl} width={100}></Image>
                                    </Form.Item>

                                    <Form.Item label="书籍价格" name="price"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的价格信息!',
                                               },]}
                                    >
                                        <InputNumber prefix="￥" step="1" min="0"
                                                     style={{width: 130,}} precision={2} defaultValue={0}
                                        />
                                    </Form.Item>

                                    <Form.Item label="书籍库存" name="inventory"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的库存信息!',
                                               },]}
                                    >
                                        <InputNumber step="1" min="0" style={{width: 130,}} defaultValue={0}
                                        />
                                    </Form.Item>

                                    <Form.Item label="书本标题" name="displaytitle"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的标题信息!',
                                               },]}
                                    >
                                        <Input placeholder="用于关键词搜索，宣传展示的标题，尽可能丰富"
                                               defaultValue={this.state.bookTitle}
                                        />
                                    </Form.Item>
                                    <Form.Item label="书本名称" name="bookname"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的名称信息!',
                                               },]}
                                    >
                                        <Input placeholder="用于归档备案，尽可能简洁，如:西游记"/>
                                    </Form.Item>
                                    <Form.Item label="书本ISBN" name="ISBN"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的ISBN信息!',
                                               },]}
                                    >
                                        <Input placeholder="样例:978-7-000-00000-0"/>
                                    </Form.Item>

                                    <Form.Item label="发货地点" name="departure"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的发货信息!',
                                               },]}
                                    >
                                        <Input placeholder="填写发货地点，尽可能简洁，如:上海"/>
                                    </Form.Item>

                                    <Form.Item label="书籍作者" name="author"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的作者信息!',
                                               },]}
                                    >
                                        <Input placeholder="填写书本作者"/>
                                    </Form.Item>

                                    <Form.Item label="书籍出版社" name="publisher"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的出版社信息!',
                                               },]}
                                    >
                                        <Input placeholder="填写出版社名称，如:人民教育出版社"/>
                                    </Form.Item>

                                    <Form.Item label="详情描述" name="description"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的简介信息!',
                                               },]}
                                    >
                                        <TextArea rows={5} placeholder="填写书籍的详情介绍，内容目录等"/>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                        <Button type="primary" htmlType="submit">
                                            发布商品
                                        </Button>
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
}

export default editBook;