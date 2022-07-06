import '../../css/login_childPage.css'
import '../../css/Common.css'
import React from "react";
import Hellologin from "../../asset/img/login/hello.png";
import LoginStaticBackground from "../../components/Login/LoginStaticBackground";
import {Button, Form, Input, Typography} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/lib/typography/Text";

class RulesPage extends React.Component{

    render() {
        return(
            <div className="RegisterPageContainer">
                <LoginStaticBackground/>

                <div className="login_register_bgpic">
                    <img src={Hellologin} id="login_register_hello" alt="Image can't display!"/>
                </div>

                <div className="MainContentsCard">
                    <Typography>
                        <h3>使用协议</h3>
                        <Paragraph>
                            欢迎您与各eBook平台经营者（详见定义条款）共同签署本《平台服务协议》（下称“本协议”）并使用EBook平台服务！
                        </Paragraph>

                        <Paragraph>
                            <ul>
                                <li>
                                    <Text strong>第一条：</Text>
                                    您需要确认，在您开始注册程序使用eBook平台服务前，您应当具备中华人民共和国法律规定的与您行为相适应的民事
                                    行为能力。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的一切后果。
                                </li>
                                <li>
                                    <Text strong>第二条：</Text>
                                    您的账户为您自行设置并由您保管，第三方任何时候均不会主动要求您提供您的账户密码。因此，建议您务必保管好您的账户，
                                    并确保您在每个上网时段结束时退出登录并以正确步骤离开平台。
                                </li>
                                <li>
                                    <Text strong>第三条：</Text>
                                    eBook可根据国家法律法规变化及维护交易秩序、保护消费者权益需要，不时修改本协议、补充协议，变更后的协议、补充
                                    协议（下称 “变更事项”）将通过法定程序并以本协议第八条约定的方式通知您。
                                </li>
                                <li>
                                    <Text strong>第四条：</Text>
                                    如您不同意变更事项，您有权于变更事项确定的生效日前联系淘宝反馈意见。如反馈意见得以采纳，淘宝将酌情调整变更事项。
                                </li>

                            </ul>
                        </Paragraph>

                    </Typography>

                </div>

            </div>
        );
    }
}



export default RulesPage;