import React from "react";
import { withRouter, Link } from "react-router-dom";
import './login.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/expenses");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className = "whole-login">
        <div className="form-container" >
          <form onSubmit={this.handleSubmit}>
            
            <div className="text-boxes">
              <h3>Login to your PetFlow Account!</h3>
              <div className="email-box">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </div>
              <br />
              <div className="password-box">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              </div>
              <br />
              <input className="submit-button" type="submit" value="Submit" />
              <br />
              {this.renderErrors()}
              <div className="linktosu">
                <p>Don't have an account? Sign up <Link to="/signup">here!</Link>  </p>
              </div>
            </div>
            
          </form>
          
        </div>
    </div>
    );
  }
}

export default withRouter(LoginForm);
