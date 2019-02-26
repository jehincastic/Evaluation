import React from 'react';

class AddTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addedTopic: ""
        }
    }

    addTopicCall = () => {
        let done = true;
        fetch(`http://192.168.43.254:8083/administrator/addTopic?topicName=${this.state.addedTopic}`, {
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
            this.props.onRouteChange("addTopicSuccess");
          }
          else {
            this.props.onRouteChange("addTopicFailed");
          }
        });
    }
    
    addedTopic = (e) => {
        this.setState(Object.assign(this.state, { addedTopic: e.target.value }));
    }

    render() {
        return (
            <div>
                <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => this.props.onRouteChange('adminDisplay')}><i className='fa fa-arrow-circle-o-left fa-2x goBackIcon'></i></p>
                <form className="measure aligncenter center">
                    <legend className="f3 fw6 ph0 mh0 center"></legend>
                    <div className="mt3">
                        <label className="db tc fw6 lh-copy f2 white" htmlFor="addTopic">Add Topic Name</label>
                        <input onChange={this.addedTopic} className="logreginput pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100" type="text" name="addTopic"  id="addTopic" required />
                    </div>
                    <div className="tc">
                        <a onClick={() => this.addTopicCall()} className="logreginput b ph3 pv2 mv2 input-reset ba b--white bg-transparent grow pointer white f6 dib">Add Topic</a>
                    </div>
                </form>
                <div>
                    <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => this.props.onRouteChange('login')}><i className='fa fa-power-off fa-2x signOutIcon'></i></p>
                </div>
            </div>
        );
    };
};

export default AddTopic;