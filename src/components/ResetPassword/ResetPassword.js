import React from 'react';

const ResetPassword = (props) => {
    let oldPassword = '';
    let newPassword = '';
    let confirmPassword = '';
    const oldPasswordChange = (e) => {
        oldPassword = e.target.value;
    }
    const newPasswordChange = (e) => {
        newPassword = e.target.value;
    }
    const newPasswordConfirmChange = (e) => {
        confirmPassword = e.target.value;
    }
    const onReset = () => {
        let done = true;
        if (confirmPassword === newPassword)
        {
            fetch(`http://192.168.43.254:8083/evaluation/resetpassword?empid=${props.user.empId}&newpassword=${newPassword}&oldpassword=${oldPassword}`, {
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
                    props.onRouteChange("editProfile");
                }
                else {
                    props.onRouteChange("resetPassword");
                }
            });
        }
        else {
            props.onRouteChange("resetPassword");
        }
    }
    return(
        <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('editProfile')}>Go Back</p>
                <div style={{justifyContent: 'flex-start'}}>
                    <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}>Sign Out</p>
                </div>
            </nav>
            <form className="measure center" method="POST">
                <div className="mt3">
                    <label className="db fw6 white lh-copy f5" htmlFor="old-password">Old Password</label>
                    <input onChange={oldPasswordChange} className="logreginput pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100" type="password" name="old-password"  id="old-password" required />
                </div>
                <div className="mv3">
                    <label className="db fw6 white lh-copy f5" htmlFor="password">New Password</label>
                    <input onChange={newPasswordChange} className="logreginput b pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100" type="password" name="password"  id="password" required />
                </div>
                <div className="mv3">
                    <label className="db fw6 white lh-copy f5" htmlFor="Confirmpassword">Confirm New Password</label>
                    <input onChange={newPasswordConfirmChange} className="logreginput b pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100" type="password" name="Confirmpassword"  id="Confirmpassword" required />
                </div>
                <div className="">
                    <a onClick={() => onReset()} className="logreginput b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib">Change Password</a>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;