import * as React from "react";

class WelcomeUser extends React.Component {
    render() {
        return "Welcome User!";
    }
}

class WelcomeGuest extends React.Component {
    render() {
        return "Welcome Guest!";
    }
}

function LoginButton(props: any) {
    return <button onClick={props.handleLoginClick}>Login</button>;
}

function LogoutButton(props: any) {
    return <button onClick={props.handleLogoutClick}>Logout</button>;
}

type LoginControlProps = {};
type LoginControlState = { isLogin: boolean };
export class LoginControl extends React.Component<LoginControlProps, LoginControlState> {
    constructor(props: LoginControlProps) {
        super(props);
        this.state = {
            isLogin: false
        };
    }
    render() {
        const welcome = this.state.isLogin ? <WelcomeUser /> : <WelcomeGuest />;
        return (
            <div>
                {welcome}
                {
                    this.state.isLogin ? <LogoutButton handleLogoutClick={this.handleClick.bind(this, { isLogin: false })} />
                        : <LoginButton handleLoginClick={this.handleClick.bind(this, { isLogin: true })} />
                }
            </div>
        );

    }
    
    handleClick(args: any, e: React.SyntheticEvent<MouseEvent>) {
        console.log(args);
        this.setState({
            isLogin: args.isLogin
        });
    }
}