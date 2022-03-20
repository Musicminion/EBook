import '../../css/login.css'
import React from "react";
import {
    ContextualMenu,
    DefaultButton, DialogFooter,
    FontWeights,
    getTheme,
    IconButton, initializeIcons,
    mergeStyleSets,
    Modal, PrimaryButton,
} from "@fluentui/react";


import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {IButtonStyles} from "@fluentui/react";
import {useBoolean, useId} from "@fluentui/react-hooks";
import {IDragOptions} from "@fluentui/react";
import {IIconProps} from "@fluentui/react";


const iconProps = { iconName: 'Calendar' };
const stackTokens = { childrenGap: 50 };

const stackStyles: Partial<IStackStyles> = { root: { width: 500 } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 20 },
    styles: { root: { width: 490 }},
};


initializeIcons();


export const LoginCompUserRegister: React.FunctionComponent = () => {
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
    const [keepInBounds, { toggle: toggleKeepInBounds }] = useBoolean(false);
    // Normally the drag options would be in a constant, but here the toggle can modify keepInBounds
    const dragOptions = React.useMemo(
        (): IDragOptions => ({
            moveMenuItemText: 'Move',
            closeMenuItemText: 'Close',
            menu: ContextualMenu,
            keepInBounds,
        }),
        [keepInBounds],
    );

    // Use useId() to ensure that the IDs are unique on the page.
    // (It's also okay to use plain strings and manually ensure uniqueness.)
    const titleId = useId('title');

    return (
        <>
            <button
                onClick={showModal}
                text="Open Modal"
                className="loginFunction_button"
                type="button">注册
            </button>

            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isBlocking={false}
                containerClassName={contentStyles.container}
                dragOptions={isDraggable ? dragOptions : undefined}
            >
                <div className={contentStyles.header}>
                    <span id={titleId}>用户注册</span>
                    <IconButton
                        styles={iconButtonStyles}
                        iconProps={cancelIcon}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </div>
                <div className={contentStyles.body}>
                        <Stack {...columnProps}>
                            <TextField
                                required label="用户名："
                                type="username"
                            />
                            <TextField
                                required
                                label="密码："
                                type="password"
                                canRevealPassword
                                revealPasswordAriaLabel="Show password" />
                            <TextField
                                required label="重复密码："
                                type="password"
                                canRevealPassword
                                revealPasswordAriaLabel="Show password"
                            />
                            <TextField label="电子邮件："required type="email" />
                        </Stack>
                </div>
                    <PrimaryButton text="注册" onClick={hideModal} id="userRegisterComfirm"/>
                    <DefaultButton text="取消" onClick={hideModal} id="userRegisterCancel"/>


            </Modal>
        </>
    );
};

const cancelIcon: IIconProps = { iconName: 'Cancel' };

const theme = getTheme();
const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
    },
    header: [

        theme.fonts.xLargePlus,
        {
            flex: '1 1 auto',
            borderTop: `4px solid ${theme.palette.themePrimary}`,
            color: theme.palette.neutralPrimary,
            display: 'flex',
            alignItems: 'center',
            fontWeight: FontWeights.semibold,
            padding: '12px 12px 14px 24px',
        },
    ],
    body: {
        flex: '4 4 auto',
        padding: '0 24px 24px 24px',
        overflowY: 'hidden',
        selectors: {
            p: { margin: '14px 0' },
            'p:first-child': { marginTop: 0 },
            'p:last-child': { marginBottom: 0 },
        },
    },
});

const stackProps: Partial<IStackProps> = {
    horizontal: true,
    tokens: { childrenGap: 40 },
    styles: { root: { marginBottom: 20 } },
};
const iconButtonStyles: Partial<IButtonStyles> = {
    root: {
        color: theme.palette.neutralPrimary,
        marginLeft: 'auto',
        marginTop: '4px',
        marginRight: '2px',
    },
    rootHovered: {
        color: theme.palette.neutralDark,
    },
};































//
//
// class LoginCompUserRegister extends React.Component{
//     const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
//     const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
//     const [keepInBounds, { toggle: toggleKeepInBounds }] = useBoolean(false);
//     // Normally the drag options would be in a constant, but here the toggle can modify keepInBounds
//     const dragOptions = React.useMemo(
//     (): IDragOptions => ({
//         moveMenuItemText: 'Move',
//         closeMenuItemText: 'Close',
//         menu: ContextualMenu,
//         keepInBounds,
//     }),
//     [keepInBounds],
// );
//
//
//
//     render() {
//         return (
//             <>
//                 <button className="loginFunction_button" onClick="toggleHideDialog">注册</button>
//                 <Modal>
//                     <p></p>
//                 </Modal>
//             </>
//         );
//     }
//
// }
//
//
// export default LoginCompUserRegister;

