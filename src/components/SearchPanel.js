import React from 'react';
import 'antd/dist/antd.css';
import '../css/mainPage.css';

import {
    Input,
    Select,

} from 'antd';
import {
    AudioOutlined,
} from '@ant-design/icons';



const { Search } = Input;
const { Option } = Select;



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

    // 如果是父亲组件是主页，就新开一个页面，否则就在本页面展示结果
    onSearch(value){
        if(this.props.fromPage === "MainPage"){
            const w=window.open('about:blank');
            w.location.href="searchresult?keyword="+ encodeURI(value)+"&searchby="+this.state.searchWay;
        }
        else {
            window.location.href="searchresult?keyword="+ encodeURI(value)+"&searchby="+this.state.searchWay;
        }
    }

    selectChange(value){
        this.setState(prevState => {
            return {
                searchWay: value,
            };
        });
    }

    render() {

        return(
            <Input.Group compact>
                <Select style={{ width: '15%',textAlign:'center'} } defaultValue="0"
                        onChange={(e) => this.selectChange(e)}>
                    <Option value="0" style={{ textAlign: 'center'}}>全局搜索</Option>*/}
                    <Option value="1" style={{ textAlign: 'center'}}>书籍</Option>
                    <Option value="2" style={{ textAlign: 'center'}}>出版社</Option>*/}
                    <Option value="3" style={{ textAlign: 'center'}}>作者</Option>*/}
                    <Option value="4" style={{ textAlign: 'center'}}>简介全文搜索</Option>*/}
                    <Option value="5" style={{ textAlign: 'center'}}>Tag搜索</Option>*/}
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
