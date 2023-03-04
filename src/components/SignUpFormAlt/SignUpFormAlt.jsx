import React, { Component } from "react";
import { signUp } from "../../utilities/users-service";
import "./signupstyle.css";

class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { ...this.state };
    delete formData.error;
    delete formData.confirm;
    try {
      const user = await signUp(formData);
      this.props.setUser(user);
      // console.log(user);  //token
    } catch (e) {
      console.log(e);
      // An error occurred
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div>
          <div class="signup-card">
            <div class="signup-card-logo">
              <img src="logo.png" alt="logo" />
            </div>
            <div class="signup-card-header">
              <h1>Sign Up</h1>
              <div>Please signup to use the platform</div>
            </div>
            <form
              class="text-boxes"
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <div class="form-item">
                <span class="form-item-icon material-symbols-rounded"></span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="emailForm"
                  value={this.state.name}
                  onChange={this.handleChange}
                  autofocus
                  required
                />
              </div>
              <div class="form-item">
                <span class="form-item-icon material-symbols-rounded"></span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  id="passwordForm"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div class="form-item">
                <span class="form-item-icon material-symbols-rounded"></span>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="passwordForm"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div class="form-item">
                <span class="form-item-icon material-symbols-rounded"></span>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="passwordForm"
                  name="confirm"
                  value={this.state.confirm}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit" disabled={disable}>
                Sign Up
              </button>
            </form>
            <div class="signup-card-footer">
              Already have an account? <a href="#">Login.</a>
            </div>
          </div>
          <div class="signup-card-social">
            <div>Other Sign-Up Options</div>
            <div class="signup-card-social-btns">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-google"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

export default SignUpForm;
