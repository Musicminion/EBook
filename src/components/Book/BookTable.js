import React from 'react';
import { Button, Tooltip } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';

const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
};

export type TableListItem = {
    key: number;
    name: string;
    containers: number;
    creator: string;
    status: string;
    createdAt: number;
    memo: string;
};
const tableListDataSource: TableListItem[] = [];


const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];


for (let i = 0; i < 1500; i += 1) {
    tableListDataSource.push({
        key: i,
        name: 'BookName',
        ISBN: '978123456789',
        containers: Math.floor(Math.random() * 20),
        creator: creators[Math.floor(Math.random() * creators.length)],
        status: valueEnum[Math.floor(Math.random() * 10) % 4],
        createdAt: Date.now() - Math.floor(Math.random() * 100000),
        memo: i % 2 === 1 ? '较长的文字较长的文字较长的文字' : '简短备注文案',
    });
}


const columns: ProColumns<TableListItem>[] = [
    {
        title: '书籍名称',
        dataIndex: 'name',
        // width: 200,
        render: (_) => <a>{_}</a>,
    },
    {
        title: 'ISBN编号',
        dataIndex: 'ISBN',
        render: (_) => <a>{_}</a>,
    },
    {
        title: '购买数量',
        dataIndex: 'containers',
        width: 100,
        align: 'right',
        sorter: (a, b) => a.containers - b.containers,
    },
    {
        title: '状态',
        width: 80,
        dataIndex: 'status',
        initialValue: 'all',
        valueEnum: {
            all: { text: '全部', status: 'Default' },
            close: { text: '关闭', status: 'Default' },
            running: { text: '进行中', status: 'Processing' },
            withdraw: { text: '已撤销', status: 'WithDraw' },
            online: { text: '已完成', status: 'Success' },
            error: { text: '异常', status: 'Error' },
        },
    },
    {
        title: '客户姓名',
        width: 80,
        dataIndex: 'creator',
        valueEnum: {
            all: { text: '全部' },
            付小小: { text: '付小小' },
            曲丽丽: { text: '曲丽丽' },
            林东东: { text: '林东东' },
            陈帅帅: { text: '陈帅帅' },
            兼某某: { text: '兼某某' },
        },
    },
    {
        title: (
            <>
                创建时间
                <Tooltip placement="top" title="这是一段描述">
                    <QuestionCircleOutlined style={{ marginLeft: 4 }} />
                </Tooltip>
            </>
        ),
        width: 100,
        key: 'since',
        dataIndex: 'createdAt',
        valueType: 'date',
        sorter: (a, b) => a.createdAt - b.createdAt,
    },
    {
        title: '订单备注',
        dataIndex: 'memo',
        ellipsis: true,
        copyable: true,
        width: 280,
    },
    {
        title: '操作',
        width: 180,
        key: 'option',
        valueType: 'option',
        render: () => [
            <a key="link">编辑</a>,
            <a key="link2">查看</a>,
            <a key="link3">删除</a>,
            <TableDropdown
                key="actionGroup"
                menus={[
                    { key: 'copy', name: '功能1' },
                    { key: 'delete', name: '功能2' },
                ]}
            />,
        ],
    },
];


export default () => {
    return (
        <ProTable TableListItem
            columns={columns}
            request={(params, sorter, filter) => {
            // 表单搜索项会从 params 传入，传递给后端接口。
            console.log(params, sorter, filter);
            return Promise.resolve({
                data: tableListDataSource,
                success: true,
            });
        }}
            rowKey="key"
            pagination={{
            showQuickJumper: true,
        }}
            search={{
            optionRender: false,
            collapsed: false,
        }}
            dateFormatter="string"
            headerTitle="查询结果"
            toolBarRender={() => [
            <Button type="primary" key="primary">
                查询
            </Button>,
            <Button key="out">
                导出数据
                <DownOutlined />
            </Button>,
            <Button type="primary" key="primary">
                创建新订单
            </Button>,
        ]}
        />
    );
};