import React from 'react';

class sessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >

                <input type="text" value={this.state.email} onChange={this.update('email')} />

                <input type="password" value={this.state.password} onChange={this.update('password')} />

                <input type="submit" value={this.props.formtype} />
                
            </form>
        )
    };
}

export default sessionForm;
