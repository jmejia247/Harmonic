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

    handleSubmit(e) {
      // debugger
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(this.props.closeModal);

      // if (this.props.processForm(this.state) && this.props.errors.length === 0) {
      //   debugger
      //   this.props.closeModal();
      // } 
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

    render() {
        const { errors } = this.props;
        return (
          <form onSubmit={this.handleSubmit}>
            <section className='modal-heading'>
              <h1>{this.props.formType}</h1>
              {this.props.otherForm}
            </section>
            <section className="modal-body">
              <br />
                {this.renderErrors()}
              <br />
              <label>
                Email:
                <input
                  className='email'
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  className='password'
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <br />
              <input className="session-button" type="submit" value={this.props.formType} />
            </section>
          </form>
        );
    };
}

export default SessionForm;
