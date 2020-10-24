import React, { Component, Suspense } from "react"
import { Field, formValues, reduxForm } from "redux-form";

class SignIn extends Component {

    render() {
        const handleValue = (values)  => {
            console.log(values)
        }
    
        const { handleSubmit, handleLogin } = this.props;
        return (
            <form onSubmit={handleSubmit(handleValue)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <div>
                    <label htmlFor="email">Phone Number</label>
                    <Field name="phoneNumber" component="input" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}


export default reduxForm({
    form: 'sign-in',
})(SignIn)