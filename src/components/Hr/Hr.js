import React from 'react';
import HrDisplay from '../HrDisplay/HrDisplay';
import EmpIdDisplay from '../EmpIdDisplay/EmpIdDisplay';
import FlashMassage from 'react-flash-message';

class Hr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: "",
            topics: [],
            status: [],
            createdOn: [],
            updatedOn: [],
            thisRoute: "hr"
        }
    }

    routeChange = (route) => {
        this.setState({ thisRoute: route });
    }

    searchCall = (empId) => {
        let done = true;
        this.setState(Object.assign(this.state, { 
            topics: [],
            status: [],
            createdOn: [],
            updatedOn: []
        }));
        fetch(`http://192.168.43.254:8083/HR/searchUser?empid=${empId}`, {
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
                for(let i = 0; i < user.length; i++) {      
                    this.setState(Object.assign(this.state, { 
                        topics: [ ...this.state.topics, user[i].topic ],
                        status: [ ...this.state.status, user[i].status ],
                        createdOn: [...this.state.createdOn, user[i].createdOn],
                        updatedOn: [...this.state.updatedOn, user[i].updatedOn]
                    }));
                }   
                this.setState(Object.assign(this.state, { 
                    empId:  empId
                }));
                this.routeChange("display");
            }
            else {
                this.routeChange("displayFailed");
            }
        });
    }

    render() {
        const { thisRoute, topics, status, empId, createdOn, updatedOn } = this.state;
        return (
            <div>
            {thisRoute === "hr"?
                <HrDisplay searchCall={this.searchCall} onRouteChange={this.props.onRouteChange} />:
            thisRoute === "displayFailed"?
            <div>
                <FlashMassage duration={5000} persistOnHover={true}>
                    <div className="shadow-4 flash-message">Employee ID faied to find.</div>
                </FlashMassage>
                <HrDisplay searchCall={this.searchCall} onRouteChange={this.props.onRouteChange} />                
            </div>:
                <EmpIdDisplay createdOn={createdOn} updatedOn={updatedOn} topics={topics} status={status} empId={empId} onRouteChange={this.props.onRouteChange} routeChange={this.routeChange}/>
            }   
            </div>
        );
    };
}

export default Hr;
