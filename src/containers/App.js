import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import UserDisplay from '../components/UserDisplay/UserDisplay';
import ProfileEdit from '../components/ProfileEdit/ProfileEdit';
import AddStatus from '../components/AddStatus/AddStatus';
import AdminDisplay from '../components/AdminDisplay/AdminDisplay';
import Hr from '../components/Hr/Hr';
import AddTopic from '../components/AddTopic/AddTopic';
import UpdateStatus from '../components/UpdateStatus/UpdateStatus'
import DisplayEmployee from '../components/DisplayEmployee/DisplayEmployee';
import DispalyEvaluvation from '../components/DisplayEvaluvation/DisplayEvaluvation';
import ResetPassword from '../components/ResetPassword/ResetPassword';
import FlashMassage from 'react-flash-message';
import './App.css';
import Loader from '../components/Loader/Loader';

const particlesOption = {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      route: "login",
      user: {
        name: '',
        empId: '',
        topic:[],
        status:[],
        createdOn:[],
        updatedOn:[]
      },
      admin: {
        employeeId:[],
        employeeName:[]
      },
      evaluvation: {
        name: [],
        topic:[],
        status:[],
        createdOn:[],
        updatedOn:[]
      },
      allTopics:[]
    }
  }

  updateValue = (topic, status) => {
    for (let i = 0; i < this.state.user.topic.length; i++ )
    {
        if (this.state.user.topic[i] === topic) {
            if (status === 1) {
                this.state.user.status[i] = "Not Yet Started";
            } else if (status === 2) {
                this.state.user.status[i] = "Beginner";
            } else if (status === 3) {
                this.state.user.status[i] = "Intermediate";
            } else if (status === 4) {
                this.state.user.status[i] = "Expert";
            }
        }
    }
  }

  loginDetails = (email, pass) => {
    this.setState(Object.assign(this.state, {
      email: email,
      password: pass
    }));
    
    this.onRouteChange("loginLoad");
  }

  loadUser = (data) => {
    this.setState(Object.assign(this.state.user, { 
      name: data.name,
      empId: data.id
    }));
    let done = true;
    this.getTopics();
  }

  getTopics = () => {
    let done = true;
    fetch(`http://192.168.43.254:8083/evaluation/userInfo?employeeId=${this.state.user.empId}`, {
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
        this.loadTopic(user);
        this.onRouteChange("userDisplay");
      }
      else {
          this.onRouteChange("loading");
      }
    });
  }

  loadTopic = (data) => {
    this.setState(Object.assign(this.state.user, { 
      topic: [],
      createdOn: [],
      updatedOn: [],
      status: []
    }));
    for (let i = 0; i < data.length; i++) {
      let date = data[i].createdOn.split('T')[0];
      let updatedDate = '------'
      if (data[i].updatedOn !== null) {
        updatedDate = data[i].updatedOn.split('T')[0];
      }
      this.setState(Object.assign(this.state.user, { 
        topic: [ ...this.state.topic, data[i].topic.name ],
        createdOn: [ ...this.state.createdOn, date ],
        updatedOn: [ ...this.state.updatedOn, updatedDate ],
        status: [ ...this.state.status, data[i].status.name ]
      }));
    }
  }

  onRouteChange = (route) => {
    if (route === "displayEmployee")
    {
      let done = true;
      fetch(`http://192.168.43.254:8083/administrator/dispayUsers`, {
        method: 'get',
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
        this.setState(Object.assign(this.state.admin, { 
          employeeId: [],
          employeeName: []
        }));
        if (done) {
          for (let i = 2; i < user.length; i++ )
          {
            this.setState(Object.assign(this.state.admin, { 
              employeeId: [ ...this.state.admin.employeeId, user[i].id ],
              employeeName: [ ...this.state.admin.employeeName, user[i].name ]
            }));
          }
        }
        else {
          this.onRouteChange("adminDisplay");
        }
      });
    }
    else if (route === "update") {
      this.getTopics();
    }
    else if (route === "loginLoad")
    {
      let done = true;
      fetch(`http://192.168.43.254:8083/evaluation/login?email=${this.state.email}&password=${this.state.password}`, {
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
          this.loadUser(user);
        }
        else {
            this.onRouteChange("loginError");
        }
      });
    }
    else if (route === "addStatus") 
    {
      let done = true;
      fetch(`http://192.168.43.254:8083/evaluation/displaytopics`, {
        method: 'get',
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
        this.setState(Object.assign(this.state, { 
          allTopics: []
        }));
        if (done) {
          for (let i = 0; i < user.length; i++ )
          {
            this.setState(Object.assign(this.state, { 
              allTopics: [ ...this.state.allTopics, user[i].name ]
            }));
          }
        }
        else {
          this.onRouteChange("adminDisplay");
        }
      });
    }
    else if (route === "displayEvaluvation") 
    { 
      let done = true;
      fetch(`http://192.168.43.254:8083/administrator/displayEvaluation`, {
        method: 'get',
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
        this.setState(Object.assign(this.state.evaluvation, { 
          name: [],
          topic:[],
          status:[],
          createdOn:[],
          updatedOn:[]
        }));
        if (done) {
          for (let i = 0; i < user.length; i++ )
          {
            this.setState(Object.assign(this.state.evaluvation, { 
              name: [ ...this.state.evaluvation.name, user[i].employee.name ],
              topic: [ ...this.state.evaluvation.topic, user[i].topic.name ],
              status: [ ...this.state.evaluvation.status, user[i].status.name ],            
              createdOn: [ ...this.state.evaluvation.createdOn, user[i].createdOn ],
              updatedOn: [ ...this.state.evaluvation.updatedOn, user[i].updatedOn ]
            }));
          }
        }
        else {
          this.onRouteChange("adminDisplay");
        }
      });
    }
    this.setState({ route: route });
  }

  render() {
    const { allTopics,evaluvation,route,user,admin } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOption}/>
        { 
          route === "loginError" ? 
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Invalid Username/Password</div>
            </FlashMassage>
          <Login loginDetails={this.loginDetails} user={user} onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> 
          </div> :
          route === "login"?
          <Login loginDetails={this.loginDetails} user={user} onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> :
          route === "registerSuccess"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">User Added Successfully</div>
            </FlashMassage>
            <Register onRouteChange={this.onRouteChange}/>
          </div>:
          route === "registerFailed"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">User Failed To Add</div>
            </FlashMassage>
            <Register onRouteChange={this.onRouteChange}/>
          </div>:
          route === "register"?
          <Register onRouteChange={this.onRouteChange}/> :
          route === "userDisplay"?
          <UserDisplay user={user} onRouteChange={this.onRouteChange}/> :
          route === "editProfile"?  
          <ProfileEdit user={user} onRouteChange={this.onRouteChange}/>:
          route === "editProfileSuccess"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Password Changed Successfully</div>
            </FlashMassage>
            <ProfileEdit user={user} onRouteChange={this.onRouteChange}/>
          </div>:
          route === "addStatusSuccess"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Topic Added Successfully</div>
            </FlashMassage>
            <AddStatus allTopics = {allTopics} user = {user} onRouteChange={this.onRouteChange}/>
          </div> :
          route === "addStatusError"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Topic Already Added</div>
            </FlashMassage>
            <AddStatus allTopics = {allTopics} user = {user} onRouteChange={this.onRouteChange}/>
          </div> :
          route === "addStatus"?
          <AddStatus allTopics = {allTopics} user = {user} onRouteChange={this.onRouteChange}/>:
          route === "updateStatusSuccess"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Status Updated Successfully</div>
            </FlashMassage>
            <UpdateStatus updateValue={this.updateValue} user={user} onRouteChange={this.onRouteChange}/>
          </div>:
          route === "updateStatusFailed"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Topic Updated Failed</div>
            </FlashMassage>
            <UpdateStatus updateValue={this.updateValue} user={user} onRouteChange={this.onRouteChange}/>
          </div>:
          route === "updateStatus"?
          <UpdateStatus updateValue={this.updateValue} user={user} onRouteChange={this.onRouteChange}/>:
          route === "adminDisplay"?
          <AdminDisplay onRouteChange={this.onRouteChange}/>:
          route === "hrDisplay"?
          <Hr onRouteChange={this.onRouteChange}/>:
          route === "addTopicSuccess"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Topic Added Successfully</div>
            </FlashMassage>
            <AddTopic onRouteChange={this.onRouteChange}/>:            
          </div>:
          route === "addTopicFailed"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Topic Failed to Add</div>
            </FlashMassage>
            <AddTopic onRouteChange={this.onRouteChange}/>:            
          </div>:
          route === "addTopic"?
          <AddTopic onRouteChange={this.onRouteChange}/>:
          route === "displayEmployee"?
          <DisplayEmployee admin={admin} onRouteChange={this.onRouteChange}/>:
          route === "displayEvaluvation"?
          <DispalyEvaluvation evaluvation={evaluvation} onRouteChange={this.onRouteChange} />:
          route === "resetPassword"?
          <ResetPassword onRouteChange={this.onRouteChange} user={user} />:          
          route === "resetPasswordFailed"?
          <div>
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="shadow-4 flash-message">Password Failed To Update</div>
            </FlashMassage>
            <ResetPassword onRouteChange={this.onRouteChange} user={user} />
          </div>:
          <Loader />
        }
      </div>
    );
  }
}

export default App;
