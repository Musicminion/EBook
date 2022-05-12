import React from 'react';
import {Route, Redirect} from 'react-router-dom'

import {message} from "antd";
import LoginPassport from "../components/Login/LoginPassport";

export default class PrivateRoute extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false,
            hasAuthed: false,
        };
    }

    checkAuth = (data) => {
        console.log(data);
        if (data.status >= 0) {
            console.log(data);
            this.setState({isAuthed: true, hasAuthed: true});
        } else {
            message.error(data.msg);
            LoginPassport.removeLocalPassport();
            this.setState({isAuthed: false, hasAuthed: true});
        }
    };

    componentDidMount() {
        LoginPassport.checkSession(this.checkAuth);
    }

    render() {
        const {component: Component, path="/",exact=false,strict=false} = this.props;
        console.log(this.state.isAuthed);
        if (!this.state.hasAuthed) {
            return null;
        }

        return <Route path={path} exact={exact} strict={strict} render={props => (
            this.state.isAuthed ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
            )
        )}/>
    }
}

