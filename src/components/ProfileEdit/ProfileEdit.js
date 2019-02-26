import React from 'react';
import './ProfileEdit.css';

const ProfileEdit = (props) => {
    let url = "http://flathash.com/"+ props.user.empId;
    return(
        <div>
            <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('userDisplay')}><i className='fa fa-arrow-circle-o-left fa-2x goBackIcon'></i></p>
            <div>
                <div className="tc pa4">
                    <img src={url} className="sizefix br-100 pa2 ba b--white-10 h4.5 w4.5" alt="avatar" />
                </div>
                <br></br>
                <h1 class="f4-ns tc fw6 textName">{`${props.user.name}`}</h1>
                <br></br>
                <div className="mw9 ph3-ns">
                    <div className="cf tc ph2-ns push">
                        <a onClick={() => props.onRouteChange("resetPassword")} class="f4 link dim ph4 pv3 mb3 dib white bg-red btnedit" href="#0">Reset Password</a>                        
                    </div>
                </div>
            </div>
            <div>
                <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}><i className='fa fa-power-off fa-2x signOutIcon'></i></p>
            </div>
        </div>
    );
};

export default ProfileEdit;