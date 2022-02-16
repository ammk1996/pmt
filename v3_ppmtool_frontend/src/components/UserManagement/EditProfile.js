import React, { Component } from "react";
import { Link } from "react-router-dom";
import MemberService from "../../actions/MemberService";
import AuthenticationService from "../../actions/AuthenticationService";
import { updateUser } from "../../actions/securityActions";
import PropTypes from "prop-types"

import { connect } from "react-redux";


class EditProfile extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
        user:[],
        id: "",
        userName: "",
        password: "",
        email: "",
        contact: "",
        fullname: "",
        designation: "",
        experience: "",
        skills: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.refreshUsers = this.refreshUsers.bind(this);
      }
    
      componentDidMount() {
        this.refreshUsers();
    
      }
      refreshUsers() {
        let nameofuser = AuthenticationService.getLoggedInUserName();
        MemberService.retriveUserByName(nameofuser).
          then((Response) => {
            this.setState({ user: Response.data });
          });
      }
    
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
      onSubmit(e) {
        e.preventDefault();
        let  nameofuser = AuthenticationService.getLoggedInUserName();
    
        const UpdateUser = {
          id:this.state.user.id,
          userName: this.state.user.userName,
          password: this.state.password,
          contact: this.state.contact,
          email: this.state.email,
          fullname: this.state.fullname,
          designation: this.state.designation,
          experience: this.state.experience,
          skills: this.state.skills
        };
    
        // console.log(UpdateProjectTask);
        this.props.updateUser(
            UpdateUser, this.props.history, nameofuser
        );
        console.log(this.state.id)
        console.log(this.state.email)
        console.log(UpdateUser)
      }
    
      render() {
        return (
          <div className="add-PBI">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h4 className="display-4 text-center">Update Profile</h4>
                  <br></br><br></br><br></br><br></br>
                  <div id="error"></div>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      Username:
                      <input type = "text" 
                        className="form-control form-control-lg"
                        placeholder={this.state.user.userName}
                        value={this.state.userName}
                        name="userName"
                        disabled
                        
                        
                      />
                     
                    </div>
                    <div className="form-group">
                      Password:
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder={this.state.user.password}
                        value={this.state.password}
                        name="password"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      Full Name:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.fullname}          
                        value={this.state.fullname}
                        name="fullname"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      Email:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.email}          
                        value={this.state.email}
                        name="email"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      Contact:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.contact}
                        value={this.state.contact}
                        name="contact"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      Designation:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.designation}          
                        value={this.state.designation}
                        name="designation"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      Skills:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.skills}          
                        value={this.state.skills}
                        name="skills"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      Experience:
                      <style>
                        textarea{};
                      </style>
                    </div>
                    <textarea 
                    id="experience"  
                    rows="4" cols="96" 
                    placeholder={this.state.user.experience}
                    value={this.state.experience}
                    name="experience"
                    onChange={this.onChange}></textarea>

             <input
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

EditProfile.propTypes = {
    updateUser: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    errors: state.errors,
  });

  export default connect(
    mapStateToProps,
    { updateUser }
  )(EditProfile);