import React from 'react';
import './AddStatus.css';

const AddStatus = (props) => {
    let item = [];
    for (let i = 0; i < props.allTopics.length; i++)
    {
        item.push(
            <option value={props.allTopics[i]}>{props.allTopics[i]}</option>
        );
    }
    let status = 1;
    let topic = props.allTopics[0];
    const statusChange = (e) => {
        status = e.target.value;
    }
    const topicChange = (e) => {
        topic = e.target.value;
    }
    const addingStatus = () => {
        let done = true;
        fetch(`http://192.168.43.254:8083/evaluation/addstatus?empid=${props.user.empId}&statusid=${status}&topicname=${topic}`, {
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
                props.onRouteChange("addStatus");
            }
            else {
                props.onRouteChange("userDisplay");
            }
        });
    }
    return (
        <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('userDisplay')}>Go Back</p>
                <div style={{justifyContent: 'flex-start'}}>
                    <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}>Sign Out</p>
                </div>
            </nav>
            <div className="container shadow-4">
                <form className="measure center">
                    <legend className="f3 fw6 ph0 mh0 center">Add Status</legend>
                    <div className="mt3">
                        <select onChange={topicChange} className="dropdown" name="topics">
                            {item}
                        </select>
                    </div>
                    <div className="mv3">
                        <select onChange={statusChange} name="value">
                            <option value="1">Not Yet Started</option>
                            <option value="2">Beginner</option>
                            <option value="3">Intermediate</option>
                            <option value="4">Expert</option>
                        </select>
                    </div>
                    <div className="addLink">
                        <a onClick={() => addingStatus()} className="logreginput b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Add Topic</a>
                    </div>
                </form>     
            </div>
        </div>
    );
};

export default AddStatus;