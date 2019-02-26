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
            status: []
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
                        status: [ ...this.state.status, user[i].status ]
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
        const { thisRoute, topics, status, empId } = this.state;
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
                <EmpIdDisplay topics={topics} status={status} empId={empId} onRouteChange={this.props.onRouteChange} routeChange={this.routeChange}/>
            }   
            </div>
        );
    };
}

export default Hr;
