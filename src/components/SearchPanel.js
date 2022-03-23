import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/mainPage.css';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { Route, useHistory } from "react-router-dom";

import {
    Input,
    Select,

} from 'antd';
import {
    AudioOutlined,
    CopyOutlined,
    DownOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
} from '@ant-design/icons';
import {history} from "./PublicHistory";
import {createBrowserHistory} from "history";


const { Search } = Input;
const { Option } = Select;

const options = [
];

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

// const onSearch = value => console.log(value);
function onSearch(value){
    const w=window.open('about:blank');
    w.location.href="searchresult?keyword="+ encodeURI(value);
}

class SearchPanel extends React.Component{


    render() {

        return(
            <Input.Group compact>
                <Select style={{ width: '15%',textAlign:'center'} } defaultValue="书籍">
                    <Option value="BookCard" style={{ textAlign: 'center'}}>书籍</Option>
                    <Option value="Shop" style={{ textAlign: 'center'}}>店铺</Option>
                    <Option value="publisher" style={{ textAlign: 'center'}}>出版社</Option>*/}
                    <Option value="Author" style={{ textAlign: 'center'}}>作者</Option>*/}
                    <Option value="Global" style={{ textAlign: 'center'}}>全局搜索</Option>*/}
                </Select>

                <Search
                    placeholder="input search text"
                    enterButton="&nbsp;&nbsp;&nbsp;搜&nbsp;&nbsp;&nbsp;索&nbsp;&nbsp;&nbsp;"
                    size="middle"
                    suffix={suffix}
                    onSearch={onSearch}
                    style={{ width: '85%'}}
                />

                {/*/eBook/searchresult*/}
            </Input.Group>
        );
    }

}



export default SearchPanel;