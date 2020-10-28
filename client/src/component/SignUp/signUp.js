import React, { Component, useCallback } from "react"
import { Field, formValues, reduxForm, SubmissionError } from "redux-form";


const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    )
}


function SignUp(props) {

    const handleValue = useCallback(async (values) => {
        const { onRegisterUser } = props;
        const { name, email, phoneNumber, password } = values;

        if (!name) {
            throw new SubmissionError({
                name: 'please enter name',
                _error: 'Please fill the values!'
            })
        } else if (!email) {
            throw new SubmissionError({
                email: 'no email entered',
                _error: 'Please fill the values!'
            })
        } else if (!phoneNumber) {
            throw new SubmissionError({
                phoneNumber: 'not valid number',
                _error: 'Please fill the values!'
            })
        } else if (!password || password.length < 7 ) {
            throw new SubmissionError({
                password: 'password must be more than 7 characters',
                _error: 'Please fill the values!'
            })
        } 

        await onRegisterUser(values);
    }, []);

    const { handleSubmit, handleLogin } = props;
    return (
        <form onSubmit={handleSubmit(handleValue)}>
            <div>
                <label htmlFor="userName">User Name</label>
                <Field name="name" component={renderField} type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component={renderField} type="email" />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field name="phoneNumber" component={renderField} type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component={renderField} type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}


export default reduxForm({
    form: 'sign-up',
})(SignUp)