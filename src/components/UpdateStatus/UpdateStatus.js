import React from 'react';
import './UpdateStatus.css';

const UpdateStatus = (props) => {
    let topic = props.user.topic[0];
    let status = '';
    if (props.user.status[0] === "Not Yet Started") {
        status = 1;
    } else if (props.user.status[0] === "Beginner") {
        status = 2;
    } else if (props.user.status[0] === "Intermediate") {
        status = 3;
    } else if (props.user.status[0] === "Expert") {
        status = 4;
    }
    const updatedStatus = () => {
        props.updateValue(topic, status);
        let done = true;
        fetch(`http://192.168.43.254:8083/evaluation/updatestatus?empid=${props.user.empId}&statusid=${status}&topicname=${topic}`, {
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
                props.onRouteChange("updateStatusSuccess");
            }
            else {
                props.onRouteChange("updateStatusFailed");
            }
        });
    }
    const topicdisp = (e) => {
        topic = e.target.value;
    };
    const statusdisp = (e) => {
        status = e.target.value;
    };
    let items = [];
    let selectTopic = [];
    for (let i = 0; i < props.user.topic.length; i++) {
        selectTopic.push(
            <option className='black' value={props.user.topic[i]}>{props.user.topic[i]}</option>
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
                                    <a onClick={() => props.onRouteChange("update")} href="#">
                                        <i className="icon-hover w2 h2 w3-ns h3-ns br-100 fa fa-chevron-left fa-2x"></i>
                                    </a>
                                    <div className="tooltip">
                                        <a onClick={() => props.onRouteChange("update")} href="#">Go Back</a>
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
                    <div className="containerUpdate shadow-4 tc">
                        <h2 className="tc titleUpdate">Update Status</h2>
                        <select className='white bg-transparent white-border' onChange={topicdisp} defaultValue='1' name="updateValue">
                            {selectTopic}
                        </select>
                        <select className='move white bg-transparent white-border' onChange={statusdisp} defaultValue={status} name="updateValue">
                            <option className='black' value='1'>Not Yet Started</option>
                            <option className='black' value='2'>Beginner</option>
                            <option className='black' value='3'>Intermediate</option>
                            <option className='black' value='4'>Expert</option>
                        </select>
                        <br />
                        <a onClick={() => updatedStatus()} className="logreginput btn-center b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f4 dib">Update</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStatus;