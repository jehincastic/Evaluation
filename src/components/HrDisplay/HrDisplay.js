import React from 'react';
import './HrDisplay.css';

class HrDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: ""
        }
    }

    searchChange = (e) => {
        this.setState(Object.assign(this.state, { empId: e.target.value }));
    }

    render() {
        return(
            <div>
                <form className="measure aligncenter center">
                    <legend className="f3 fw6 ph0 mh0 center"></legend>
                    <div className="mt3">
                        <label className="db tc fw6 lh-copy f2 white" htmlFor="empId">Employee Id</label>
                        <input onChange={this.searchChange} className="logreginput pa2 input-reset ba bg-transparent white hover-bg-transparent hover-white w-100" type="number" name="empId"  id="empid" required />
                    </div>
                    <div className="tc">
                        <a onClick={() => this.props.searchCall(this.state.empId)} className="logreginput b ph3 pv2 mv2 input-reset ba b--white bg-transparent grow pointer white f6 dib">Search</a>
                    </div>
                </form>
                <div>
                    <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => this.props.onRouteChange('login')}><i className='fa fa-power-off fa-2x signOutIcon'></i></p>
                </div>
            </div>
        );
    };
};

export default HrDisplay;