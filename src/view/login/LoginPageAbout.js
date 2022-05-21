import React from 'react';
import LoginStaticBackground from "../../components/Login/LoginStaticBackground";
import '../../css/login.css'
import '../../css/login_childPage.css'
import '../../css/Common.css'
import Hellologin from "../../asset/img/login/hello.png";


class LoginPageAbout extends React.Component{

    render() {
        return(
            <div className="aboutPageContainer">
                <LoginStaticBackground/>
                <div className="login_register_bgpic">
                    <img src={Hellologin} id="login_register_hello" alt="Image can't display!"/>
                </div>

                <div className="MainContentsCard">
                    <h3>第一次迭代 第一次作业</h3>
                    <h4>致谢名单</h4>
                    <li>
                        感谢批阅此次作业的助教/老师，在百忙之中抽出时间评审本次迭代/作业！
                    </li>
                    <li>
                        感谢<a href="https://www.csdn.net">CSDN网站</a>，为网站的搭建提供了多篇技术性问题修复的文章支持！
                    </li>
                    <li>
                        感谢<a href="https://www.w3school.com.cn">W3School网站</a>，为网页搭建的学习提供了Html、CSS、JavaScript的技术教程！
                    </li>
                    <li>
                        感谢<a href="src/view/login/LoginPageAbout">React</a>框架的所有Contributor，提供了完整的中文开发技术文档！
                    </li>
                    <li>
                        感谢<a href="https://ant.design/index-cn">©Ant Design</a>，为网页的图形界面优化、部分动画效果、部分图标素材提供了强大的支持！
                    </li>
                    <li>
                        感谢<a href="src/view/login/LoginPageAbout">©Apple苹果公司</a>、©socialmarketings广告达人公司，为登录界面的Hello的Logo提供了素材来源！
                    </li>

                    <li>
                        感谢<a href="https://space.bilibili.com/563010186">@AlbertYang学编程</a>(来自哔哩哔哩的up主)，为前端登录界面的编写提供了完整的视频教程与灵感来源！
                    </li>
                    <li>
                        感谢<a href="https://www.microsoft.com/design">©Microsoft Design</a> ，为网页中登录界面的图形界面优化、部分动画效果、部分图标素材提供了强大的支持！
                    </li>


                    <h4>开发日志</h4>
                    <li>2022.3.1 前期 学习CSS HTML JavaScript基础知识，了解React框架，尝试登录界面的设计，并实现了登录界面的跨平台响应式布局。</li>
                    <li>
                        2022.3.2 项目启动，设置Backup文件夹，每日备份。同时将前期写好的HTML文件、CSS迁移到脚手架React框架上来，解决了一些常见的图片不兼容的问题.
                        此外引入并学习了部分AntDesign的设计，了解组件开发的思想。
                    </li>
                    <li>
                        2022.3.3 学习路由跳转的知识，实现部分界面的跳转。此外全局网页设计布局确定以“半透明毛玻璃卡片式”作为主题，所以对AntDesign的底层CSS做出优化，
                        实现了透明搜索栏。 引入了微软的FluentDesign设计语言，使得用户注册界面和登录界面一体化，即“单击注册，将背景全部变暗的，展现出注册框，注册框的
                        样式还有待优化。具体优化在后期进行。
                    </li>
                    <li>
                        2022.3.4 对项目结构进行优化，进一步实现组件化开发。将一些具有共性的组件“导航栏”、“背景渲染”都抽取出来，增强通用性。修复了自行编写的CSS文件中CSS塌陷的
                        严重问题，使得页面中的父元素可以根据子元素的高度自动的调节。为后期的展示书籍的页面打下来基础。同时完善的登录界面的一些子页面的设计，将关于页面重新排版设计
                        使得所有登录界面的设计统一。所有的login的子站点都是Hello图标居中，并使用背景模糊化。
                    </li>
                    <li>
                        2022.3.5 设计了订单管理页面，设计了书籍详情页面，设计了搜索结果的界面，对项目结构有一部分的优化，例如把Login模块单独提出来，把书籍一系列的组成一个文件
                        夹（虽然也不是很确定是否最后也是这样，可能后期也会调整）事实上尽管页面都设计出来，后期在做具体功能的时候可能会有所增加或者是有所舍弃。当然一些界面的优化或
                        者是布局也需要更改（后期继续完善），具体来说第一次迭代部分小目标已经完成了，后期要对一些组件之间的通讯功能完善起来。
                    </li>
                    <li>
                        2022.3.11 实现登录界面表单的数据与states同步，在登录密码校验在前端完成时，登录判断密码可以实现。解决了Route相关的问题。
                    </li>
                    <li>
                        2022.3.12 在/package.json文件中的scripts做出了修改，增加了"server": "node src/server/index.js"字段，如果后期有错误请删除！
                    </li>
                    <li>
                        2022.3.21 增加网页背景音乐的播放功能，增加了可以选择音乐播放的功能，并可以控制音乐的播放进度，播放音量。
                    </li>
                    <li>
                        2022.3.22 通过localstorage实现了网站的登录功能，对于不同的用户，展示不同的顶部栏。顶部栏带有校验功能，可以校验用户的权限信息，根据权限来进行展示功能区
                        进一步优化了音乐播放器，尝试了动态背景
                    </li>
                    <li>
                        2022.3.25 第一次迭代全部完成。详情参见第一次迭代文档。
                    </li>

                </div>

                <div className="login_childfooter">
                    <p>CopyRight ©2022 All Rights Reserved.</p>
                </div>

            </div>
        );
    }
}

export default LoginPageAbout;