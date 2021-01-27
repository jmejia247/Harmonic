import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
      this.props.removeErrors();
    }

    handleSubmit(e) {
      // debugger
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(this.props.closeModal);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    renderErrors() {
      const { errors } = this.props;
      return (
        <ul>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )
    }

    title() {
      let title;
      if (this.props.formType === 'Login') {
        return title = <h2 className='form-header'>Log In to Reverb</h2>;
      } else {
        return (title = (
          <h2 className="form-header">
            Join Millions of Musicians Around the World
          </h2>
        ));
      }
    }

    render() {
        return (
          <div>
            {/* <section className='modal-heading'>
              <h1 className='current-form'>{this.props.formType}</h1>
              {this.props.otherForm}
            </section> */}
            {this.title()}
            <form onSubmit={this.handleSubmit}>
              <section className="modal-body">
                <br />
                {this.renderErrors()}
                <br />
                <label className="label">
                  Email:
                  <input
                    className="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                  />
                </label>
                <br />
                <label className="label">
                  Password:
                  <input
                    className="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                </label>
                <br />
                <input
                  className="session-button"
                  type="submit"
                  value={this.props.formType}
                />
                <span
                  className="demo"
                  onClick={() =>
                    this.props
                      .login({ email: "demo", password: "password" })
                      .then(this.props.closeModal())
                  }
                >
                  Demo User
                </span>
              </section>
            </form>
          </div>
        );
    };
}

export default SessionForm;
