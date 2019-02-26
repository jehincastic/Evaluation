import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpEmail: '',
            signUpPassword: '',
            signUpId: '',
            signUpName: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signUpEmail: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({signUpPassword: event.target.value})
    }

    onIdChange = (event) => {
        this.setState({signUpId: event.target.value})
    }

    onNameChange = (event) => {
        this.setState({signUpName: event.target.value})
    }

    onSignUpClick = () => {
        let done = true;
        fetch(`http://192.168.43.254:8083/administrator/addUser?email=${this.state.signUpEmail}&empid=${this.state.signUpId}&name=${this.state.signUpName}&password=${this.state.signUpPassword}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
            else {
                done = false;
            }
        })
        .then(user => {
            if (done) {
                this.props.onRouteChange("registerSuccess")
            }
            else {
                this.props.onRouteChange("registerFailed");
            }
        });
    }

    render () {
        return(
            <div>
                <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => this.props.onRouteChange('adminDisplay')}><i className='fa fa-arrow-circle-o-left fa-2x goBackIcon'></i></p>
                <div className="container-register container shadow-4">
                    <form className="measure center">
                        <legend className="f3 fw6 ph0 mh0 center"><i className="fa white fa-user-plus fa-4x"></i></legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5 white" htmlFor="employee-id">Employee ID</label>
                            <input onChange={this.onIdChange} className="logreginput pa2 input-reset ba bg-transparent hover-bg-transparent hover-white w-100" type="text" name="employee-id"  id="employee-id" required />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5 white" htmlFor="username">Username</label>
                            <input onChange={this.onNameChange} className="logreginput pa2 input-reset ba bg-transparent hover-bg-transparent hover-white w-100" type="text" name="username"  id="username" required />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5 white" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="logreginput pa2 input-reset ba bg-transparent hover-bg-transparent hover-white w-100" type="email" name="email-address"  id="email-address" required />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5 white" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="logreginput b pa2 input-reset ba bg-transparent hover-bg-transparent hover-white w-100" type="password" name="password"  id="password" required />
                        </div>
                        <div className="">
                            <a onClick={() => this.onSignUpClick()} className="logreginput b ph3 pv2 input-reset ba b--white bg-transparent grow pointer white f6 dib" type="submit">Add User</a>
                        </div>
                    </form>     
                </div>
                <div>
                    <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => this.props.onRouteChange('login')}><i className='fa fa-power-off fa-2x signOutIcon'></i></p>
                </div>
            </div>
        );
    };
};

export default Register;