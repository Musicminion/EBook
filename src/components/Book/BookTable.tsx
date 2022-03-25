
// @ts-ignore
import React from "react";
import { useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { ProFormRadio, ProFormField } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import {BookOutlined} from "@ant-design/icons";
import {Tabs} from "antd";


const { TabPane } = Tabs;


const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

type testBookType = {
    id: React.Key;
    bookID?: number; bookTitle?:string;bookName?:string; bookPrice?:string; bookPlace?:string;
    bookAuthor?:string; bookShoper?:string; bookISBN?:string; bookSellnum?:string; bookremainNum?:string;
    bookPublisher?:string;
}


const testBook: testBookType[] = [
    {
        id:1,
        bookID:1,bookTitle:"2022新教材高中必刷题人教版A版必修第一、二册 新华书店正版",
        bookName:"高中必刷题", bookPrice:"42.00",bookPlace:"河南",bookAuthor:"必刷题编者",
        bookShoper: "高中教辅专卖店",bookISBN:"978123456789",bookSellnum:"986",bookremainNum:"1",
        bookPublisher: "首都师范大学出版社",
    },
    {
        id:2,
        bookID:2,bookTitle:"这就是物理 小学科普物理读物 知识百科全书",
        bookName:"这就是物理",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"这就是物理编者",
        bookShoper: "科普书籍专卖店",bookISBN:"978123456789",bookSellnum:"98",bookremainNum:"21",
        bookPublisher: "科学出版社",
    },
    {
        id:3,
        bookID:3,bookTitle:"大学数学教材高等数学教辅 参考书 微积分全册 上海交通大学出版",
        bookName:"微积分上册",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"上海交通大学数学系",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"286",bookremainNum:"31",
        bookPublisher: "上海交通大学出版社",
    },
    {
        id:4,
        bookID:4,bookTitle:"高中语文作文素材，人民日报教你写文章 热点素材 时事快讯",
        bookName:"热点素材",bookPrice:"19.20",bookPlace:"杭州",bookAuthor:"人民日报编写组",
        bookShoper: "高中语文教辅专卖店",bookISBN:"978123456789",bookSellnum:"126",bookremainNum:"1000",
        bookPublisher: "人民日报出版社",
    },
    {
        id:5,
        bookID:5,bookTitle:"密码编码学与网络安全原理与实践（第八版）电子工业出版",
        bookName:"密码编码学与网络安全原理与实践",bookPrice:"89.19",bookPlace:"北京",bookAuthor:"Author of this Book",
        bookShoper: "新华书店图书批发",bookISBN:"978123456789",bookSellnum:"16",bookremainNum:"100",
        bookPublisher: "电子工业出版社",
    },
    {
        id:6,
        bookID:6,bookTitle:"高级数据结构教材C++语言版 清华大学出版社 第三版",
        bookName:"数据结构",bookPrice:"39.19",bookPlace:"杭州",bookAuthor:"清华大学某教授",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"13",bookremainNum:"100",
        bookPublisher: "清华大学出版社",
    },
    {
        id:7,
        bookID:7,bookTitle:"离散数学 机械工业出版社出版 官方正版",
        bookName:"数据结构",bookPrice:"59.00",bookPlace:"云南",bookAuthor:"Author of 离散数学",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"12",bookremainNum:"100",
        bookPublisher: "机械工业出版社出版",
    },
    {
        id:8,
        bookID:8,bookTitle:"2022全新 深入理解计算机系统+计算机网络 打包销售",
        bookName:"深入理解计算机系统+计算机网络",bookPrice:"49.99",bookPlace:"武汉",bookAuthor:"合编本",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"2336",bookremainNum:"1240",
        bookPublisher: "机械工业出版社出版",
    },
    {
        id:9,
        bookID:9,bookTitle:"软件工程原理与实践教材 沈备军编著",
        bookName:"软件工程原理",bookPrice:"29.19",bookPlace:"上海",bookAuthor:"沈备军",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"123",bookremainNum:"130",
        bookPublisher: "上海交通大学出版社",
    },
    {
        id:10,
        bookID:10,bookTitle:"大学计算机网路教材 电子工业出版",
        bookName:"计算机网络",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"Alabama",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"1234",bookremainNum:"120",
        bookPublisher: "电子工业出版社出版",
    },
    {
        id:11,
        bookID:11,bookTitle:"四大名著《西游记》《水浒传》《三国演义》《红楼梦》套装书籍",
        bookName:"计算机网络",bookPrice:"129.29",bookPlace:"南京",bookAuthor:"曹雪芹、吴承恩等",
        bookShoper: "儿童图书店",bookISBN:"978123456789",bookSellnum:"986",bookremainNum:"100",
        bookPublisher: "商务出版社",
    },
    {
        id:12,
        bookID:12,bookTitle:"月刊Piano外文钢琴乐谱",
        bookName:"月刊Piano",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"汇编版本",
        bookShoper: "外文书店",bookISBN:"978123456789",bookSellnum:"566",bookremainNum:"127",
        bookPublisher: "XX出版社",
    },
    {
        id:13,
        bookID:13,bookTitle:"原神插画集【原神官方】原神插画集Vol.1套装礼盒GenshinImpact",
        bookName:"原神插画集",bookPrice:"29.19",bookPlace:"杭州",bookAuthor:"汇编版本",
        bookShoper: "外文书店",bookISBN:"978987654321",bookSellnum:"996",bookremainNum:"150",
        bookPublisher: "游戏/动漫/周边",
    },
    {
        id:14,
        bookID:14,bookTitle:"伊索寓言故事集合",
        bookName:"伊索寓言",bookPrice:"59.19",bookPlace:"深圳",bookAuthor:"汇编版本",
        bookShoper: "儿童图书店",bookISBN:"978987654321",bookSellnum:"76",bookremainNum:"140",
        bookPublisher: "浙江教育出版社",
    },
    {
        id:15,
        bookID:15,bookTitle:"【含12月新真题】六级英语真题试卷考试备考2022年6月复习资料单词词汇书历年模拟题卷子练习题大学6级听力阅读专项训练火星标学教育",
        bookName:"星火英语六级",bookPrice:"23.19",bookPlace:"云南",bookAuthor:"编者: 杨枫",
        bookShoper: "星火英语旗舰店书店",bookISBN:"978987654321",bookSellnum:"996",bookremainNum:"127",
        bookPublisher: "上海交通大学出版社",
    },
];


export default () => {
    const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
    const [dataSource, setDataSource] = useState<testBookType[]>([]);
    const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

    const columns: ProColumns<testBookType>[] = [
        {
            title: '书籍名称',
            dataIndex: 'bookTitle',
            formItemProps: (form, { rowIndex }) => {
                return {
                    rules: rowIndex > 1 ? [{ required: true, message: '此项为必填项' }] : [],
                };
            },
            // 第一行不允许编辑
            // editable: (text, record, index) => {
            //     return index !== 0;
            // },
            width: '20%',
            render: (text, record, _, action) => [
                <a href={"bookdetail?bookid="+(_+1)}>{text}</a>
            ],
        },
        {
            title: '书籍ISBN',
            dataIndex: 'bookISBN',
            formItemProps: (form, { rowIndex }) => {
                return {
                    rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
                };
            },
            width: '12%',
        },
        {
            title: '价格(元)',
            dataIndex: 'bookPrice',
            formItemProps: (form, { rowIndex }) => {
                return {
                    rules: rowIndex > 3 ? [{ required: true, message: '此项为必填项' }] : [],
                };
            },
            width: '12%',
            render: (text, record, _, action) => [
                <span>￥{text}</span>
            ],
        },
        {
            title: '发货地',
            dataIndex: 'bookPlace',
            formItemProps: (form, { rowIndex }) => {
                return {
                    rules: rowIndex > 4 ? [{ required: true, message: '此项为必填项' }] : [],
                };
            },
            width: '12%',
        },
        {
            title: '出版商',
            dataIndex: 'bookPublisher',
            formItemProps: (form, { rowIndex }) => {
                return {
                    rules: rowIndex > 5 ? [{ required: true, message: '此项为必填项' }] : [],
                };
            },
            width: '15%',
        },
        {
            title: '销售商',
            dataIndex: 'bookShoper',
            formItemProps: (form, { rowIndex }) => {
                return {
                    rules: rowIndex > 5 ? [{ required: true, message: '此项为必填项' }] : [],
                };
            },
            width: '15%',
        },


        // {
        //     title: '状态',
        //     key: 'state',
        //     dataIndex: 'state',
        //     valueType: 'select',
        //     width: '10%',
        //     valueEnum: {
        //         all: { text: '全部', status: 'Default' },
        //         open: {
        //             text: '下架中',
        //             status: 'Error',
        //         },
        //         closed: {
        //             text: '销售中',
        //             status: 'Success',
        //         },
        //     },
        // },
        // {
        //     title: '描述',
        //     dataIndex: 'decs',
        //     fieldProps: (from, { rowKey, rowIndex }) => {
        //         if (from.getFieldValue([rowKey || '', 'title']) === '不好玩') {
        //             return {
        //                 disabled: true,
        //             };
        //         }
        //         if (rowIndex > 9) {
        //             return {
        //                 disabled: true,
        //             };
        //         }
        //         return {};
        //     },
        // },
        // {
        //     title: '活动时间',
        //     dataIndex: 'created_at',
        //     valueType: 'date',
        // },
        {
            title: '操作',
            valueType: 'option',
            // width: 200,
            render: (text, record, _, action) => [
                <a
                    key="editable"
                    onClick={() => {
                        action?.startEditable?.(record.id);
                    }}
                >
                    编辑
                </a>,
                <a
                    key="delete"
                    onClick={() => {
                        setDataSource(dataSource.filter((item) => item.id !== record.id));
                    }}
                >
                    删除
                </a>,
            ],
        },
    ];

    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab={<><BookOutlined/>商品管理</>} key="1">
                    <EditableProTable<testBookType>
                        rowKey="id"
                        headerTitle=""
                        maxLength={30}
                        scroll={{
                            x: 960,
                        }}
                        recordCreatorProps={
                            position !== 'hidden'
                                ? {
                                    position: position as 'top',
                                    record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
                                }
                                : false
                        }
                        loading={false}
                        toolBarRender={() => [
                            <ProFormRadio.Group
                                key="render"
                                fieldProps={{
                                    value: position,
                                    onChange: (e) => setPosition(e.target.value),
                                }}
                                options={[
                                    {
                                        label: '添加到顶部',
                                        value: 'top',
                                    },
                                    {
                                        label: '添加到底部',
                                        value: 'bottom',
                                    },
                                    {
                                        label: '隐藏',
                                        value: 'hidden',
                                    },
                                ]}
                            />,
                        ]}
                        columns={columns}
                        request={async () => ({
                            data: testBook,
                            total: 15,
                            success: true,
                        })}
                        value={dataSource}
                        onChange={setDataSource}
                        editable={{
                            type: 'multiple',
                            editableKeys,
                            onSave: async (rowKey, data, row) => {
                                console.log(rowKey, data, row);
                                await waitTime(300);
                            },
                            onChange: setEditableRowKeys,
                        }}
                    />
                    {/*<ProCard title="表格数据" headerBordered collapsible defaultCollapsed>*/}
                    {/*    <ProFormField*/}
                    {/*        ignoreFormItem*/}
                    {/*        fieldProps={{*/}
                    {/*            style: {*/}
                    {/*                width: '100%',*/}
                    {/*            },*/}
                    {/*        }}*/}
                    {/*        mode="read"*/}
                    {/*        valueType="jsonCode"*/}
                    {/*        text={JSON.stringify(dataSource)}*/}
                    {/*    />*/}
                    {/*</ProCard>*/}

                </TabPane>
            </Tabs>
        </>
    );
};

