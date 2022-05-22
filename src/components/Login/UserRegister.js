
import React, {useEffect, useRef, useState} from 'react';
import {Modal, Button, Form, Input, Checkbox} from 'antd';
import {checkUserExit, userRegister} from "../../service/userService";
import {postRequestReturnCallback} from "../../utils/ajax";

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label}是必填的项目哦 (*^▽^*)~',
    types: {
        email: '${label} 不是有效的，请仔细检查哦!',
        number: '${label} 不是有效的数字!',
    },
    number: {
        range: '${label}must be between ${min} and ${max}',
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};

class UserRegister extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            usernameValidate: "",
            usernameHelp: "",
        };
    }

    onFinish = (values: any) => {
        console.log(values);
        // Register 借口从这里开始写
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    usernameVerify = (data) => {
        if(data.target.value.length >= 6){
            this.setState({usernameValidate:"validating"});

            checkUserExit(data.target.value, (resp) => {
                console.log(resp);
                if(resp.status >=0){
                    this.setState({usernameValidate:"success",usernameHelp: "恭喜！用户名可用，赶紧注册吧~"});
                }
                else {
                    this.setState({usernameValidate:"error",usernameHelp: "用户名重复啦，请重新选择"});
                }
                //
            });
        }
        else
            this.setState({usernameValidate:"error",usernameHelp: "用户名需要六位以上才可以！"});
    }


    render() {
        const { visible } = this.state;
        return (
            <>
                <button
                className="loginFunction_button"
                onClick={this.showModal}
                type="button">注册
                </button>
                <Modal
                    title="欢迎注册EBook"
                    onCancel={this.handleCancel}
                    visible={visible}
                    okText="确认"
                    cancelText="取消"
                    footer={null}
                >
                    <Form {...layout} name="" onFinish={this.onFinish} validateMessages={validateMessages}>

                        {/*<Form.Item label="用户名" hasFeedback validateStatus={this.state.usernameValidate}*/}
                        {/*    help={this.state.usernameHelp} rules={[{ required: true}]}*/}
                        {/*>*/}
                        {/*    <Input/>*/}
                        {/*</Form.Item>*/}

                        <Form.Item
                            hasFeedback name="username" label="用户名" validateMessages={validateMessages}
                            validateStatus={this.state.usernameValidate} help={this.state.usernameHelp} rules={[{ required: true,},
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (value) {
                                        if(value.length <= 5)
                                            return Promise.reject(new Error('用户名长度至少6位，请重新输入'));
                                        else{
                                            return ;
                                        }
                                    }
                                    return Promise.reject(new Error('请输入长度六位以上的用户名'));
                                },
                            }),
                        ]}
                        >
                            <Input onChange={this.usernameVerify} />
                        </Form.Item>

                        <Form.Item
                            hasFeedback name="password" label="密码" validateMessages={validateMessages}
                            rules={[{required: true,},
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (value) {
                                            if(value.length <= 5){
                                                return Promise.reject(new Error('您输入的密码太短，请输入六位以上密码'));
                                            }
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('密码没有输入!请输入长度六位以上的密码'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            hasFeedback name="confirm" label="确认密码" dependencies={['password']}
                            rules={[{required: true,},
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (value && getFieldValue('password') === value) {
                                            if(value.length <= 5){
                                                return Promise.reject(new Error('您输入的密码太短，请输入六位以上密码'));
                                            }
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('您输入的两次密码不一致，请检查'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="email" label="电子邮件" rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="phone" label="电话号码">
                            <Input style={{width: '100%',}}/>
                        </Form.Item>

                        <Form.Item name="location" label="收货地址">
                            <Input style={{width: '100%',}}/>
                        </Form.Item>

                        <Form.Item name="agreement" valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('需要接受条款')),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                我已阅读并同意EBook购物平台
                                <a href="">服务条款</a>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
                            <Button type="primary" htmlType="submit">注册</Button>
                            <span> &nbsp;&nbsp;</span>
                            <Button onClick={this.hideModal}>取消</Button>
                        </Form.Item>
                    </Form>

                </Modal>

            </>
        );
    }
}
export default UserRegister;



// 由于下面的部分的是初学的时候用微软的fluent design设计的 和目前的项目的格格不入
// 暂且注释掉，如果后期考虑要重新使用，在做定夺，但是不要删除下面的代码！

// import '../../css/login.css'
// import React from "react";
// import {
//     ContextualMenu,
//     DefaultButton, DialogFooter,
//     FontWeights,
//     getTheme,
//     IconButton, initializeIcons,
//     mergeStyleSets,
//     Modal, PrimaryButton,
// } from "@fluentui/react";
//
//
// import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
// import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
// import {IButtonStyles} from "@fluentui/react";
// import {useBoolean, useId} from "@fluentui/react-hooks";
// import {IDragOptions} from "@fluentui/react";
// import {IIconProps} from "@fluentui/react";
//
//
// const iconProps = { iconName: 'Calendar' };
// const stackTokens = { childrenGap: 50 };
//
// const stackStyles: Partial<IStackStyles> = { root: { width: 500 } };
// const columnProps: Partial<IStackProps> = {
//     tokens: { childrenGap: 20 },
//     styles: { root: { width: 490 }},
// };
//
//
// initializeIcons();
//
//
// export const UserRegister: React.FunctionComponent = () => {
//     const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
//     const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
//     const [keepInBounds, { toggle: toggleKeepInBounds }] = useBoolean(false);
//     // Normally the drag options would be in a constant, but here the toggle can modify keepInBounds
//     const dragOptions = React.useMemo(
//         (): IDragOptions => ({
//             moveMenuItemText: 'Move',
//             closeMenuItemText: 'Close',
//             menu: ContextualMenu,
//             keepInBounds,
//         }),
//         [keepInBounds],
//     );
//
//     // Use useId() to ensure that the IDs are unique on the page.
//     // (It's also okay to use plain strings and manually ensure uniqueness.)
//     const titleId = useId('title');
//
//     return (
//         <>
//             <button
//                 onClick={showModal}
//                 text="Open Modal"
//                 className="loginFunction_button"
//                 type="button">注册
//             </button>
//
//             <Modal
//                 titleAriaId={titleId}
//                 isOpen={isModalOpen}
//                 onDismiss={hideModal}
//                 isBlocking={false}
//                 containerClassName={contentStyles.container}
//                 dragOptions={isDraggable ? dragOptions : undefined}
//             >
//                 <div className={contentStyles.header}>
//                     <span id={titleId}>用户注册</span>
//                     <IconButton
//                         styles={iconButtonStyles}
//                         iconProps={cancelIcon}
//                         ariaLabel="Close popup modal"
//                         onClick={hideModal}
//                     />
//                 </div>
//                 <div className={contentStyles.body}>
//                         <Stack {...columnProps}>
//                             <TextField
//                                 required label="用户名："
//                                 type="username"
//                             />
//                             <TextField
//                                 required
//                                 label="密码："
//                                 type="password"
//                                 canRevealPassword
//                                 revealPasswordAriaLabel="Show password" />
//                             <TextField
//                                 required label="重复密码："
//                                 type="password"
//                                 canRevealPassword
//                                 revealPasswordAriaLabel="Show password"
//                             />
//                             <TextField label="电子邮件："required type="email" />
//                         </Stack>
//                 </div>
//                     <PrimaryButton text="注册" onClick={hideModal} id="userRegisterComfirm"/>
//                     <DefaultButton text="取消" onClick={hideModal} id="userRegisterCancel"/>
//
//
//             </Modal>
//         </>
//     );
// };
//
// const cancelIcon: IIconProps = { iconName: 'Cancel' };
//
// const theme = getTheme();
// const contentStyles = mergeStyleSets({
//     container: {
//         display: 'flex',
//         flexFlow: 'column nowrap',
//         alignItems: 'stretch',
//     },
//     header: [
//
//         theme.fonts.xLargePlus,
//         {
//             flex: '1 1 auto',
//             borderTop: `4px solid ${theme.palette.themePrimary}`,
//             color: theme.palette.neutralPrimary,
//             display: 'flex',
//             alignItems: 'center',
//             fontWeight: FontWeights.semibold,
//             padding: '12px 12px 14px 24px',
//         },
//     ],
//     body: {
//         flex: '4 4 auto',
//         padding: '0 24px 24px 24px',
//         overflowY: 'hidden',
//         selectors: {
//             p: { margin: '14px 0' },
//             'p:first-child': { marginTop: 0 },
//             'p:last-child': { marginBottom: 0 },
//         },
//     },
// });
//
// const stackProps: Partial<IStackProps> = {
//     horizontal: true,
//     tokens: { childrenGap: 40 },
//     styles: { root: { marginBottom: 20 } },
// };
// const iconButtonStyles: Partial<IButtonStyles> = {
//     root: {
//         color: theme.palette.neutralPrimary,
//         marginLeft: 'auto',
//         marginTop: '4px',
//         marginRight: '2px',
//     },
//     rootHovered: {
//         color: theme.palette.neutralDark,
//     },
// };
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// //
// // class UserRegister extends React.Component{
// //     const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
// //     const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
// //     const [keepInBounds, { toggle: toggleKeepInBounds }] = useBoolean(false);
// //     // Normally the drag options would be in a constant, but here the toggle can modify keepInBounds
// //     const dragOptions = React.useMemo(
// //     (): IDragOptions => ({
// //         moveMenuItemText: 'Move',
// //         closeMenuItemText: 'Close',
// //         menu: ContextualMenu,
// //         keepInBounds,
// //     }),
// //     [keepInBounds],
// // );
// //
// //
// //
// //     render() {
// //         return (
// //             <>
// //                 <button className="loginFunction_button" onClick="toggleHideDialog">注册</button>
// //                 <Modal>
// //                     <p></p>
// //                 </Modal>
// //             </>
// //         );
// //     }
// //
// // }
// //
// //
// // export default UserRegister;
//


// // reset form fields when modal is form, closed
// const useResetFormOnCloseModal = ({ form, visible }) => {
//     const prevVisibleRef = useRef();
//     useEffect(() => {
//         prevVisibleRef.current = visible;
//     }, [visible]);
//     const prevVisible = prevVisibleRef.current;
//     useEffect(() => {
//         if (!visible && prevVisible) {
//             form.resetFields();
//         }
//     }, [visible]);
// };
//
//
// const UserRegister = () => {
//
//     const [form] = Form.useForm();
//     const [visible, setVisible] = useState(false);
//
//     useResetFormOnCloseModal({
//         form,
//         visible,
//     });
//
//     const onFinish = () => {
//         // form.isFieldsValidating();
//         // form.validateFields((err, values) => {
//         //     if (!err) {
//         //         console.log('Received values of form: ', values);
//         //     }
//         // });
//
//     };
//
//     const showModal = () => {
//         setVisible(true);
//     };
//
//     const hideModal = () => {
//         setVisible(false);
//     };
//
//     const handleCancel = () => {
//         // this.setState({ visible: false });
//     };
//
//     const handleModalOk = () => {
//         form.submit(
//             (value)=>{
//                 console.log(value);
//             }
//         );
//     }
//
//
//     return (
//         <>
//             <button
//                 className="loginFunction_button"
//                 onClick={showModal}
//                 type="button">注册
//             </button>
//             <Modal
//                 title="欢迎注册EBook"
//                 onCancel={hideModal}
//                 onOk={handleModalOk}
//                 visible={visible}
//                 okText="注册"
//                 cancelText="取消"
//             >
//                 <Form {...layout} name="" form={form} validateMessages={validateMessages}>
//                     <Form.Item name="username" label="用户名" rules={[{ required: true, message: '请输入用户名!',},
//                         ({ getFieldValue }) => ({
//                             validator(_, value) {
//                                 if (value) {
//                                     if(value.length < 5)
//                                         return Promise.reject(new Error('用户名长度至少5位，请重新输入'));
//                                     else{
//                                         console.log(value);
//                                         return Promise.resolve();
//                                     }
//                                 }
//                                 // return Promise.reject(new Error('请输入用户名!'));
//                             },
//                         }),
//
//                     ]}>
//                         <Input />
//                     </Form.Item>
//
//                     <Form.Item
//                         rules={[{required: true, message: '请输入密码!',},]}
//                         hasFeedback name="password" label="密码"
//                     >
//                         <Input.Password />
//                     </Form.Item>
//
//                     <Form.Item
//                         name="confirm" label="确认密码" dependencies={['password']}
//                         hasFeedback
//                         rules={[{required: true, message: '请再次输入密码!',},
//                             ({ getFieldValue }) => ({
//                                 validator(_, value) {
//                                     if (!value || getFieldValue('password') === value) {
//                                         return Promise.resolve();
//                                     }
//                                     return Promise.reject(new Error('您输入的两次密码不一致，请检查'));
//                                 },
//                             }),
//                         ]}
//                     >
//                         <Input.Password />
//                     </Form.Item>
//
//                     <Form.Item name={['user', 'email']} label="电子邮件" rules={[{ type: 'email' }]}>
//                         <Input />
//                     </Form.Item>
//
//                     <Form.Item
//                         name="agreement"
//                         valuePropName="checked"
//                         rules={[
//                             {
//                                 validator: (_, value) =>
//                                     value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
//                             },
//                         ]}
//                         {...tailFormItemLayout}
//                     >
//                         <Checkbox>
//                             我已阅读并同意EBook购物平台
//                             <a href="">服务条款</a>
//                         </Checkbox>
//                     </Form.Item>
//
//                     {/*<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>*/}
//                     {/*    <Button type="primary" onClick={this.onFinish}>注册</Button>*/}
//                     {/*</Form.Item>*/}
//                 </Form>
//
//
//             </Modal>
//
//         </>
//     );
// }