import React from 'react';
import './ProfileEdit.css';

const ProfileEdit = (props) => {
    return(
        <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('userDisplay')}>Go Back</p>
                <div style={{justifyContent: 'flex-start'}}>
                    <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}>Sign Out</p>
                </div>
            </nav>
            <div>
                <div className="tc pa4">
                    <img src="http://tachyons.io/img/logo.jpg" className="br-100 pa2 ba b--white-10 h4.5 w4.5" alt="avatar" />
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
        </div>
    );
};

export default ProfileEdit;