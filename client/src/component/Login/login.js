import React, { Component, Suspense } from "react"
import { Field, formValues, reduxForm } from "redux-form";

class Login extends Component {

    render() {
        const handleValue = (values)  => {
            const { handleLogin } = this.props;
            handleLogin(values);
        }
    
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(handleValue)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        );
    }
}


export default reduxForm({
    form: 'login',
})(Login)