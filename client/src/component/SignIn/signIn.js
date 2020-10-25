import React, { Component, useCallback } from "react"
import { Field, formValues, reduxForm } from "redux-form";

function SignIn(props) {

    const handleValue = useCallback((values) => {
        console.log(values)
        // handle the click event
      }, []);

    const { handleSubmit, handleLogin } = props;
    return (
        <form onSubmit={handleSubmit(handleValue)}>
            <div>
                <label htmlFor="userName">User Name</label>
                <Field name="userName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="email">Phone Number</label>
                <Field name="phoneNumber" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="passowrd">Password</label>
                <Field name="passoword" component="input" type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}


export default reduxForm({
    form: 'sign-in',
})(SignIn)