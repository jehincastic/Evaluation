import React from 'react';
import HrDisplay from '../HrDisplay/HrDisplay';
import EmpIdDisplay from '../EmpIdDisplay/EmpIdDisplay';

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
        fetch(`http://192.168.43.254:8083/HR/login?empid=${empId}`, {
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
                this.routeChange("hr");
            }
        });
    }

    render() {
        const { thisRoute, topics, status, empId } = this.state;
        return (
            <div>
            {thisRoute === "hr"?
                <HrDisplay searchCall={this.searchCall} onRouteChange={this.props.onRouteChange} />:
                <EmpIdDisplay topics={topics} status={status} empId={empId} routeChange={this.routeChange}/>
            }   
            </div>
        );
    };
}

export default Hr;
