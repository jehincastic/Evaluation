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
                this.props.onRouteChange("adminDisplay")
            }
            else {
                this.props.onRouteChange("register");
            }
        });
    }

    render () {
        return(
            <div>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p className='f3 link dim white underline pa3 pointer' onClick={() => this.props.onRouteChange('adminDisplay')}>Go Back</p>
                    <div style={{justifyContent: 'flex-start'}}>
                        <p className='f3 link dim white underline pa3 pointer' onClick={() => this.props.onRouteChange('login')}>Sign Out</p>
                    </div>
                </nav>
                <div className="container-register container shadow-4">
                    <form className="measure center">
                        <legend className="f3 fw6 ph0 mh0 center"><i className="fa fa-user-plus fa-4x"></i></legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="employee-id">Employee ID</label>
                            <input onChange={this.onIdChange} className="logreginput pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="employee-id"  id="employee-id" required />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="username">Username</label>
                            <input onChange={this.onNameChange} className="logreginput pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" required />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="logreginput pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="logreginput b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required />
                        </div>
                        <div className="">
                            <a onClick={() => this.onSignUpClick()} className="logreginput b ph3 pv2 input-reset ba b--black bg-transparent grow pointer black f6 dib">Sign Up</a>
                        </div>
                    </form>     
                </div>
            </div>
        );
    };
};

export default Register;