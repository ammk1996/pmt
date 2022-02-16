import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../actions/AuthenticationService";
import MemberService from "../actions/MemberService";
import * as AiIcons from "react-icons/ai";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
    this.refreshUsers = this.refreshUsers.bind(this);
  }

  componentDidMount() {
    this.refreshUsers();
  }
  refreshUsers() {
    let username = AuthenticationService.getLoggedInUserName();
    MemberService.retriveUserByName(username).then((Response) => {
      this.setState({ user: Response.data });
    });
  }

  render() {
    return (
      <>
        <div style={{ color: "#fff", textAlign: "center" }}>
          <h1 className="display-4">Profile</h1><br/>
          <p className="lead text-center">Thank you for using jarvis </p><br/><br/><br/>

          <form >
          
            <p>Username:     {this.state.user.userName}</p><br/>
            <p>Password:    {this.state.user.password}</p><br/>
            <p>Full Name:   {this.state.user.fullname}</p><br/>
            <p>Email:   {this.state.user.email}</p><br/>
            <p>Contact:   {this.state.user.contact}</p><br/>
            <p>Designation:   {this.state.user.designation}</p><br/>
            <p>Skills:    {this.state.user.skills}</p><br/>
            <p>Experience:    {this.state.user.experience}</p><br/>

              

            

            
            
            

            
          

            

          
          <div className="container center">
            <React.Fragment>
              <Link to="/editprofile" className="btn btn-lg btn-info center">
                Edit Your Profile
              </Link>
            </React.Fragment>
          </div>


        </form>
          
        </div>
      </>
    );
  }
}

export default Profile;
