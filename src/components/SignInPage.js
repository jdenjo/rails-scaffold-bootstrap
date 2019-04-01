// Import with { ... } is a named import which allows
// multiple exports from one file. However, each import
// must be referenced by name.
import React, { Component } from "react";
import { Session } from "./requests";

// Examples of named exports:
// export class Component { ... }
// export const Component = ...

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget: form } = event;
    // const form = event.currentTarget;
    const formData = new FormData(form);

    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    }).then(data => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: "Wrong email or password" }]
        });
      } else {
        this.props.history.push(`/`);
        // The "history", "location" & "match" props are available to
        // any component that is rendered by <Route> component from
        // "react-router-dom"

        // Docs on props from <Route>:
        // https://reacttraining.com/react-router/web/api/history
        if (typeof this.props.onSignIn === "function") {
          this.props.onSignIn();
        }
      }
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <main>
        <h1>Sign In</h1>
        {/* form.addEventListener('submit', this.createSession) */}
        <form onSubmit={this.createSession}>
          {errors.length > 0 ? (
            <div className="FormErrors">
              {errors.map(e => e.message).join(", ")}
            </div>
          ) : null}
          <div>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label> <br />
            <input type="password" name="password" id="password" />
          </div>

          <input type="submit" value="Sign In" />
        </form>
      </main>
    );
  }
}

export default SignInPage;
