import React from "react";
import { withRouter, Link } from "react-router-dom";
import './signup.scss'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
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
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history).then(() => this.props.login({
      email: this.state.email,
      password: this.state.password,
    }) );
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
      <div className="whole-signup">

          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="su-text-boxes">
              <h3>Sign into PetFlow!</h3>
              <div className="signup-form">
                <br />
                <div className="su-email-box">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                </div>
                <br />
                <div className = "su-username-box">
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="Username"
                  />
                </div>
                <br />
                <div className="su-password-box">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                </div>
                <br />
                <div className="su-password2-box">
                  <input
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                  />
                </div>
                <br />
               
                  <input className= "su-submit-button" type="submit" value="Submit" />
                <p className="su-linktoli">Already have an account? <Link to="/login">Login!</Link>  </p>
                {this.renderErrors()}
                </div>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
