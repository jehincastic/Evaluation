import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        let done = true;        
        if (this.state.signInEmail === "admin1523@chainsys.com" && this.state.signInPassword === "Admin@1234") {
            this.props.onRouteChange("adminDisplay");
        }
        else if (this.state.signInEmail === "hr@chainsys.com" && this.state.signInEmail === "hr@1234") {
            this.props.onRouteChange("hrDisplay");
        }
        else {
            this.props.loginDetails(this.state.signInEmail, this.state.signInPassword);
        }
    }
    render() {
        return (
            <div className="container shadow-4">
                <form className="measure center" method="POST">
                    <legend className="f3 fw6 ph0 mh0 center"><i className="fa fa-user-circle-o fa-4x"></i></legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input onChange={this.onEmailChange} className="logreginput pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input onChange={this.onPasswordChange} className="logreginput b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required />
                    </div>
                    <div className="">
                        <a onClick={this.onSubmitSignIn} className="logreginput b ph3 pv2 input-reset ba black b--black bg-transparent grow pointer f6 dib" type="submit">Sign in</a>
                    </div>
                </form>     
            </div>
        );
    };
};

export default Login;