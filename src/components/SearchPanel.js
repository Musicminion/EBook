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

class SearchPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchWay: 0,
        };

    }

    onSearch(value){
        const w=window.open('about:blank');
        w.location.href="searchresult?keyword="+ encodeURI(value)+"&searchby="+this.state.searchWay;
    }

    SelectChange(value){
        // alert(value);
        //
        // this.setState((preState, props)=>{searchWay:parseInt(value)});

        // this.setState({searchWay:parseInt(value)});
        // setTimeout(() => {
        //     this.setState({searchWay:parseInt(value)});
        // }, 0);

        this.setState(prevState => {
            return {
                searchWay: value,
            };
        });

    }

    render() {

        return(
            <Input.Group compact>
                <Select style={{ width: '15%',textAlign:'center'} } defaultValue="0" onChange={(e) => this.SelectChange(e)}>
                    <Option value="1" style={{ textAlign: 'center'}}>书籍</Option>
                    <Option value="2" style={{ textAlign: 'center'}}>店铺</Option>
                    <Option value="3" style={{ textAlign: 'center'}}>出版社</Option>*/}
                    <Option value="4" style={{ textAlign: 'center'}}>作者</Option>*/}
                    <Option value="0" style={{ textAlign: 'center'}}>全局搜索</Option>*/}
                </Select>

                <Search
                    placeholder="input search text"
                    enterButton="&nbsp;&nbsp;&nbsp;搜&nbsp;&nbsp;&nbsp;索&nbsp;&nbsp;&nbsp;"
                    size="middle"
                    suffix={suffix}
                    onSearch={(e) => this.onSearch(e) }
                    style={{ width: '85%'}}
                />

            </Input.Group>
        );
    }

}



export default SearchPanel;