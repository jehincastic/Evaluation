import React from 'react';
import './UserDisplay.css';

const UserDisplay = (props) => {
    let items = [];
    for (let i = 0; i < props.user.topic.length; i++) {
        items.push(
            <tr className="stripe-dark">
                <td className="pa3">{i+1}</td>
                <td className="pa3">{props.user.topic[i]}</td>
                <td className="pa3">{props.user.status[i]}</td>
                <td className="pa3">{props.user.createdOn[i]}</td>
                <td className="pa3">{props.user.updatedOn[i]}</td>
            </tr>
        )
    }
    return (
        <div>
            <div className="text mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-100 w-20-ns pv6 pa2 mv5">
                        <ul className="list pl0 mt0 measure center">
                            <li className="flex items-center lh-copy pa2 ph0-l b--black-10">
                                <div className="wrapper">
                                    <a onClick={() => props.onRouteChange("editProfile")} href="#">    
                                        <i className="icon-hover w2 h2 w3-ns h3-ns br-100 fa fa-address-book-o fa-2x"></i>
                                    </a>
                                    <div className="tooltip">
                                        <a onClick={() => props.onRouteChange("editProfile")} href="#">Edit Profile</a>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center lh-copy pa2 ph0-l b--black-10">
                                <div className="wrapper">
                                    <a onClick={() => props.onRouteChange("addStatus")} href="#">
                                        <i className="icon-hover w2 h2 w3-ns h3-ns br-100 fa fa-plus-circle fa-2x"></i>
                                    </a>
                                    <div className="tooltip">
                                        <a onClick={() => props.onRouteChange("addStatus")} href="#">Add Status</a>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center lh-copy pa2 ph0-l b--black-10">
                                <div className="wrapper">
                                    <a onClick={() => props.onRouteChange("updateStatus")} href="#">
                                        <i className="icon-hover w2 h2 w3-ns h3-ns br-100 fa fa-refresh fa-2x"></i>
                                    </a>
                                    <div className="tooltip">
                                        <a onClick={() => props.onRouteChange("updateStatus")} href="#">Update Status</a>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center lh-copy pa2 ph0-l b--black-10">
                                <div className="wrapper">
                                    <a onClick={() => props.onRouteChange("login")} href="#">
                                        <i className="icon-hover w2 h2 w3-ns h3-ns br-100 fa fa-power-off fa-2x"></i>
                                    </a>
                                    <div className="tooltip">
                                        <a onClick={() => props.onRouteChange("login")} href="#">Sign Out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="contain shadow-4"></div>
                    </div>
                    <div className="fl w-100 w-80-ns pa2">
                        <h1 className="tc">{`Welcome ${props.user.name}`}</h1>
                        <div className="pa4">
                            <div className="overflow-auto">
                                <table className="f6 w-100 mw8 center" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="fw6 tl pa3">S.NO</th>
                                        <th className="fw6 tl pa3">TOPICS</th>
                                        <th className="fw6 tl pa3">STATUS</th>
                                        <th className="fw6 tl pa3">STARTED</th>
                                        <th className="fw6 tl pa3">MODIFIED</th>
                                    </tr>
                                </thead>
                                <tbody className="lh-copy">
                                    {items}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDisplay;