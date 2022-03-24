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

export const AllBooks =[
    {bookID:0,bookTitle:"",bookPrice:"",bookPlace:"", bookShoper: "",bookISBN:"",bookSellnum:"",bookremainNum:""},
    {
        bookID:1,bookTitle:"2022新教材高中必刷题人教版A版必修第一、二册 新华书店正版",
        bookName:"高中必刷题", bookPrice:"42.00",bookPlace:"河南",bookAuthor:"必刷题编者",
        bookShoper: "高中教辅专卖店",bookISBN:"978123456789",bookSellnum:"986",bookremainNum:"1",
        bookPublisher: "首都师范大学出版社",
    },
    {
        bookID:2,bookTitle:"这就是物理 小学科普物理读物 知识百科全书",
        bookName:"这就是物理",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"这就是物理编者",
        bookShoper: "科普书籍专卖店",bookISBN:"978123456789",bookSellnum:"98",bookremainNum:"21",
        bookPublisher: "科学出版社",
    },
    {
        bookID:3,bookTitle:"大学数学教材 参考书 微积分全册 上海交通大学出版",
        bookName:"微积分上册",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"上海交通大学数学系",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"286",bookremainNum:"31",
        bookPublisher: "上海交通大学出版社",
    },
    {
        bookID:4,bookTitle:"高中语文作文素材，人民日报教你写文章 热点素材 时事快讯",
        bookName:"热点素材",bookPrice:"19.20",bookPlace:"杭州",bookAuthor:"人民日报编写组",
        bookShoper: "高中语文教辅专卖店",bookISBN:"978123456789",bookSellnum:"126",bookremainNum:"1000",
        bookPublisher: "人民日报出版社",
    },
    {
        bookID:5,bookTitle:"密码编码学与网络安全原理与实践（第八版）电子工业出版",
        bookName:"密码编码学与网络安全原理与实践",bookPrice:"89.19",bookPlace:"北京",bookAuthor:"Author of this Book",
        bookShoper: "新华书店图书批发",bookISBN:"978123456789",bookSellnum:"16",bookremainNum:"100",
        bookPublisher: "电子工业出版社",
    },
    {
        bookID:6,bookTitle:"高级数据结构教材C++语言版 清华大学出版社 第三版",
        bookName:"数据结构",bookPrice:"39.19",bookPlace:"杭州",bookAuthor:"清华大学某教授",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"13",bookremainNum:"100",
        bookPublisher: "清华大学出版社",
    },
    {
        bookID:7,bookTitle:"离散数学 机械工业出版社出版 官方正版",
        bookName:"数据结构",bookPrice:"59.00",bookPlace:"云南",bookAuthor:"Author of 离散数学",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"12",bookremainNum:"100",
        bookPublisher: "机械工业出版社出版",
    },
    {
        bookID:8,bookTitle:"2022全新 深入理解计算机系统+计算机网络 打包销售",
        bookName:"深入理解计算机系统+计算机网络",bookPrice:"49.99",bookPlace:"武汉",bookAuthor:"合编本",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"2336",bookremainNum:"1240",
        bookPublisher: "机械工业出版社出版",
    },
    {
        bookID:9,bookTitle:"软件工程原理与实践教材 沈备军编著",
        bookName:"软件工程原理",bookPrice:"29.19",bookPlace:"上海",bookAuthor:"沈备军",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"123",bookremainNum:"130",
        bookPublisher: "上海交通大学出版社",
    },
    {
        bookID:10,bookTitle:"大学计算机网路教材 电子工业出版",
        bookName:"计算机网络",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"Alabama",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"1234",bookremainNum:"120",
        bookPublisher: "电子工业出版社出版",
    },
    {
        bookID:11,bookTitle:"四大名著《西游记》《水浒传》《三国演义》《红楼梦》套装书籍",
        bookName:"计算机网络",bookPrice:"129.29",bookPlace:"南京",bookAuthor:"曹雪芹、吴承恩等",
        bookShoper: "儿童图书店",bookISBN:"978123456789",bookSellnum:"986",bookremainNum:"100",
        bookPublisher: "商务出版社",
    },
    {
        bookID:12,bookTitle:"月刊Piano外文钢琴乐谱",
        bookName:"月刊Piano",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"汇编版本",
        bookShoper: "外文书店",bookISBN:"978123456789",bookSellnum:"566",bookremainNum:"120",
        bookPublisher: "XX出版社",
    }
];



class BookOperation extends React.Component{
    constructor() {
        super();
        this.props = {
            bookKeyName: "",
        }
    }

    findBookByName(bookKeyName){

        let result = [];
        let i = 1;

        for (i=1;i<AllBooks.length;i++)
        {
            if(AllBooks[i].bookTitle.indexOf(bookKeyName)>=0)
            {
                result.push(<BookCard bookID={i.toString()}/>);
            }
        }
        return result;
    }

    // findBookByShoper(shoperKeyName){
    //     let result = [];
    //     let i = 0;
    //     for (i=1;i<=AllBooks.length();i++)
    //     {
    //         if(AllBooks[i].bookShoper.indexOf(shoperKeyName))
    //             result.push(<BookCard/>);
    //     }
    //     return result;
    // }

    render() {

        if(this.props.bookKeyName != null)
        {
            let result = this.findBookByName(this.props.bookKeyName);

            return(
                <>{result}</>
            );
        }

        else
            return(
                <></>
            );
    }

}

export default BookOperation;


