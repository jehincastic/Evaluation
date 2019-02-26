import React from 'react';
import './AdminDisplay.css';

const AdminDisplay = (props) => {
    return(
        <div>
            <div className="pa4 tc">
                <div className="mainCircle circle tc shadow-5">
                    <i className="fa fa-user fa-4x iconCenter iconCenterMain"></i>
                    <p className="tc textPropName">Admin Portal</p>
                </div>
                <div className="1Circle circle tc shadow-5">
                    <a href="#" onClick={() => props.onRouteChange("displayEmployee")}>
                        <i className="fa fa-user fa-2x iconCenter"></i>
                        <p className="tc textPropName1">Display Employee</p>
                    </a>
                </div>
                <div className="2Circle circle tc shadow-5">
                    <a href="#" onClick={()=>props.onRouteChange("register")}>
                        <i className="fa fa-user-plus fa-2x iconCenter"></i>
                        <p className="tc textPropName1">Add Employee</p>
                    </a>
                </div>
                <div className="3Circle circle tc shadow-5">
                    <a href="#" onClick={()=>props.onRouteChange("addTopic")}>
                        <i className="fa fa-plus fa-2x iconCenter"></i>
                        <p className="tc textPropName1">Add Topic</p>
                    </a>
                </div>
                <div className="4Circle circle tc shadow-5">
                    <a href="#" onClick={()=>props.onRouteChange("displayEvaluvation")}>
                        <i className="fa fa-vcard fa-2x iconCenter"></i>
                        <p className="tc textPropName1">Display Evaluvation</p>
                    </a>
                </div>
            </div>
            <div>
                <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}><i className='fa fa-power-off fa-2x signOutIcon'></i></p>
            </div>
        </div>
    );
};

export default AdminDisplay;