// 特别注释 由于bookTitle 和 bookName 名词相近，所以做一个解释说明：
// bookTitle 类别淘宝网站的商品的关键词，通常来说关键词会很长，会带有很多的名词，这样会方便用户检索
// bookName 是书籍出版的标题，即我们汉语中《》书名号之间的内容，就是书的标题
//

// bookID           书的唯一标识符，一个整型的数字，而不是一个字符串！
// bookTitle        书的标题关键词，用于展示在卡片还有书籍列表的时候的一个超链接
// bookName         书的名字，书籍出版备案时候所使用的名字
// bookPrice        书的价格，字符串表示，精确到小数点后面的两位
// bookPlace        书的发货地
// bookAuthor       书的作者
// bookShoper       书的销售店家
// bookISBN         书的ISBN
// bookSellnum      书的销量
// bookremainNum    书的剩余库存
// bookPublisher    书的出版商


import React from "react";


import BookCard from "./BookCard";
import BookRow from "./BookRow";
import {Pagination} from "antd";

export const AllBooks =[
    {id:'0',bookID:0,bookTitle:"",bookPrice:"",bookPlace:"", bookShoper: "",bookISBN:"",bookSellnum:"",bookremainNum:""},
    {
        id:'1',
        bookID:1,bookTitle:"2022新教材高中必刷题人教版A版必修第一、二册 新华书店正版",
        bookName:"高中必刷题", bookPrice:"42.00",bookPlace:"河南",bookAuthor:"必刷题编者",
        bookShoper: "高中教辅专卖店",bookISBN:"978123456789",bookSellnum:"986",bookremainNum:"1",
        bookPublisher: "首都师范大学出版社",
    },
    {
        id:'2',
        bookID:2,bookTitle:"这就是物理 小学科普物理读物 知识百科全书",
        bookName:"这就是物理",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"这就是物理编者",
        bookShoper: "科普书籍专卖店",bookISBN:"978123456789",bookSellnum:"98",bookremainNum:"21",
        bookPublisher: "科学出版社",
    },
    {
        id:'3',
        bookID:3,bookTitle:"大学数学教材高等数学教辅 参考书 微积分全册 上海交通大学出版",
        bookName:"微积分上册",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"上海交通大学数学系",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"286",bookremainNum:"31",
        bookPublisher: "上海交通大学出版社",
    },
    {
        id:'4',
        bookID:4,bookTitle:"高中语文作文素材，人民日报教你写文章 热点素材 时事快讯",
        bookName:"热点素材",bookPrice:"19.20",bookPlace:"杭州",bookAuthor:"人民日报编写组",
        bookShoper: "高中语文教辅专卖店",bookISBN:"978123456789",bookSellnum:"126",bookremainNum:"1000",
        bookPublisher: "人民日报出版社",
    },
    {
        id:'5',
        bookID:5,bookTitle:"密码编码学与网络安全原理与实践（第八版）电子工业出版",
        bookName:"密码编码学与网络安全原理与实践",bookPrice:"89.19",bookPlace:"北京",bookAuthor:"Author of this Book",
        bookShoper: "新华书店图书批发",bookISBN:"978123456789",bookSellnum:"16",bookremainNum:"100",
        bookPublisher: "电子工业出版社",
    },
    {
        id:'6',
        bookID:6,bookTitle:"高级数据结构教材C++语言版 清华大学出版社 第三版",
        bookName:"数据结构",bookPrice:"39.19",bookPlace:"杭州",bookAuthor:"清华大学某教授",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"13",bookremainNum:"100",
        bookPublisher: "清华大学出版社",
    },
    {
        id:'7',
        bookID:7,bookTitle:"离散数学 机械工业出版社出版 官方正版",
        bookName:"数据结构",bookPrice:"59.00",bookPlace:"云南",bookAuthor:"Author of 离散数学",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"12",bookremainNum:"100",
        bookPublisher: "机械工业出版社出版",
    },
    {
        id:'8',
        bookID:8,bookTitle:"2022全新 深入理解计算机系统+计算机网络 打包销售",
        bookName:"深入理解计算机系统+计算机网络",bookPrice:"49.99",bookPlace:"武汉",bookAuthor:"合编本",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"2336",bookremainNum:"1240",
        bookPublisher: "机械工业出版社出版",
    },
    {
        id:'9',
        bookID:9,bookTitle:"软件工程原理与实践教材 沈备军编著",
        bookName:"软件工程原理",bookPrice:"29.19",bookPlace:"上海",bookAuthor:"沈备军",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"123",bookremainNum:"130",
        bookPublisher: "上海交通大学出版社",
    },
    {
        id:'10',
        bookID:10,bookTitle:"大学计算机网路教材 电子工业出版",
        bookName:"计算机网络",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"Alabama",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"1234",bookremainNum:"120",
        bookPublisher: "电子工业出版社出版",
    },
    {
        id:11,
        bookID:11,bookTitle:"四大名著《西游记》《水浒传》《三国演义》《红楼梦》套装书籍",
        bookName:"四大名著",bookPrice:"129.29",bookPlace:"南京",bookAuthor:"曹雪芹、吴承恩等",
        bookShoper: "儿童图书店",bookISBN:"978123456789",bookSellnum:"986",bookremainNum:"100",
        bookPublisher: "商务出版社",
    },
    {
        id:'12',
        bookID:12,bookTitle:"月刊Piano外文钢琴乐谱",
        bookName:"月刊Piano",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"汇编版本",
        bookShoper: "外文书店",bookISBN:"978123456789",bookSellnum:"566",bookremainNum:"127",
        bookPublisher: "XX出版社",
    },
    {
        id:'13',
        bookID:13,bookTitle:"原神插画集【原神官方】原神插画集Vol.1套装礼盒GenshinImpact",
        bookName:"原神插画集",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"汇编版本",
        bookShoper: "外文书店",bookISBN:"978987654321",bookSellnum:"996",bookremainNum:"150",
        bookPublisher: "游戏/动漫/周边",
    },
    {
        id:'14',
        bookID:14,bookTitle:"伊索寓言故事集合",
        bookName:"伊索寓言",bookPrice:"59.19",bookPlace:"深圳",bookAuthor:"汇编版本",
        bookShoper: "儿童图书店",bookISBN:"978987654321",bookSellnum:"76",bookremainNum:"140",
        bookPublisher: "浙江教育出版社",
    },
    {
        id:'15',
        bookID:15,bookTitle:"六级英语真题试卷考试单词词汇书历年模拟题卷子练习题大学6级听力阅读专项训练火星标学教育",
        bookName:"星火英语六级",bookPrice:"23.19",bookPlace:"云南",bookAuthor:"编者: 杨枫",
        bookShoper: "星火英语旗舰店书店",bookISBN:"978987654321",bookSellnum:"996",bookremainNum:"127",
        bookPublisher: "上海交通大学出版社",
    },
];


class BookOperation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            displayItem: [],
        };

        if(this.props.searchKeyName != null)
        {
            switch (this.props.searchTarget) {
                case 0:
                    this.findBookGlobal(this.props.searchKeyName);
                    break;
                case 1:
                    this.findBookByName(this.props.searchKeyName)
                    break;
                case 2:
                    this.findBookByShoper(this.props.searchKeyName)
                    break;
                case 3:
                    this.findBookByPublisher(this.props.searchKeyName);
                    break;
                case 4:
                    this.findBookByAuthor(this.props.searchKeyName);
                    break;
                default:
                    break;
            }

            if(this.props.requestType === "BookCard"){
                for (let i=0; i<Math.min(12,this.resultID[i]); i++)
                {
                    this.state.displayItem.push(<BookCard bookID={this.resultID[i].toString()}/>);
                }
            }

            if(this.props.requestType === "BookRow"){
                for (let j=0; j<Math.min(12,this.resultID[j]); j++)
                {
                    this.state.displayItem.push(<BookRow bookID={this.resultID[j].toString()}/>);
                }
            }
        }
        this.pageChange = this.pageChange.bind(this);
    }

    resultID=[];
    resultBook=[];

    findBookGlobal(KeyName){

        let i = 1;
        for (i=1;i<AllBooks.length;i++)
        {
            if(
                AllBooks[i].bookTitle.indexOf(KeyName)>=0 ||
                AllBooks[i].bookShoper.indexOf(KeyName)>=0||
                AllBooks[i].bookPublisher.indexOf(KeyName)>=0||
                AllBooks[i].bookAuthor.indexOf(KeyName)>=0
            )
            {
                this.resultID.push(i);
            }
        }
    }

    findBookByName(bookKeyName){
        let result = [];
        let i = 1;

        for (i=1;i<AllBooks.length;i++)
        {
            if(AllBooks[i].bookTitle.indexOf(bookKeyName)>=0)
            {
                this.resultID.push(i);
            }
        }
        return result;
    }

    findBookByShoper(shoperKeyName){
        let i = 1;

        for (i=1;i<AllBooks.length;i++)
        {
            if(AllBooks[i].bookShoper.indexOf(shoperKeyName)>=0)
            {
                this.resultID.push(i);
            }
        }
    }

    findBookByPublisher(publisherKeyName){
        let i = 1;

        for (i=1;i<AllBooks.length;i++)
        {
            if(AllBooks[i].bookPublisher.indexOf(publisherKeyName)>=0)
            {
                this.resultID.push(i);
            }
        }
    }

    findBookByAuthor(authorKeyName){
        let i = 1;
        for (i=1;i<AllBooks.length;i++)
        {
            if(AllBooks[i].bookAuthor.indexOf(authorKeyName)>=0)
            {
                this.resultID.push(i);
            }
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.render();
    }


    obj = [];

    pageChange(pageNumber){

        // this.state.displayItem = [];
        this.obj = [];

        // alert(pageNumber);
        let start = (pageNumber-1) * 12;
        let end= Math.min(pageNumber * 12,this.resultID.length);

        if(this.props.requestType === "BookRow"){
            for(let i=start; i<end; i++){
                this.obj.push(<BookRow bookID={this.resultID[i].toString()}/>);
            }
        }

        if(this.props.requestType === "BookCard"){
            for(let i=start; i<end; i++){
                this.obj.push(<BookCard bookID={this.resultID[i].toString()}/>);
            }
        }

        this.setState({
            displayItem : this.obj,
        });
    }

    render() {

        return(
            <>
                {this.state.displayItem}
                <div className="PageSelector">
                    <Pagination
                        defaultCurrent={1}
                        total={this.resultID.length}
                        onChange={this.pageChange}
                    />
                </div>
            </>
        );
    }

}

export default BookOperation;


