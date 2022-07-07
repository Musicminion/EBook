import React, { createElement, useState } from 'react';
import {Comment, Tooltip, Avatar, Divider} from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import '../../css/BookComment.css'

const BookComment = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <>
            <Comment
                actions={actions}
                author={<a>小明</a>}
                avatar={<Avatar src={"https://joeschmoe.io/api/v1/1"} alt="Han Solo" />}
                content={
                    <>
                        <p>
                            书籍包装精美，物美价廉，内容非常实在。阅读之后受益匪浅。
                        </p>
                    </>

                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <Divider/>
            <Comment
                actions={actions}
                author={<a>小王</a>}
                avatar={<Avatar src={"https://joeschmoe.io/api/v1/2"} alt="user" />}
                content={
                    <>
                        <p>
                            速度很快，书的质量也很高。
                            包装情况：结实完好 内容生动性：丰富全面 内容阅读感受：很好 色彩情况：棒 印刷质量：高 纸张品质：一流
                        </p>

                    </>

                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <Divider/>
            <Comment
                actions={actions}
                author={<a>小张</a>}
                avatar={<Avatar src={"https://joeschmoe.io/api/v1/3"} alt="Han Solo" />}
                content={
                    <>
                        <p>
                            书略微有些陈旧而已，但是不影响阅读。用了半个月吧 里面的赏析还有作文都很符合现在的高考命题趋势
                            社会主义核心价值观什么的 有专门的框框积累素材 内容真的很好哦
                        </p>
                    </>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <Divider/>
            <Comment
                actions={actions}
                author={<a>小李</a>}
                avatar={<Avatar src={"https://joeschmoe.io/api/v1/4"} alt="Han Solo" />}
                content={<><p>很好</p></>}
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <Divider/>
        </>

    );
};

export default BookComment;