import React, { useCallback, useState } from "react"
import { Field, reduxForm, SubmissionError } from "redux-form";


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

function Login(props) {



    const handleValue = useCallback(async (values) => {
        const { onHandleLoginUser, history } = props;
        let { email, password } = values;

        if (!email) {
            throw new SubmissionError({
                email: 'no email entered',
              _error: 'Login failed!'
            })
          } else if (!password) {
            throw new SubmissionError({
              password: 'no password',
              _error: 'Login failed!'
            })
          } 
        await onHandleLoginUser(values);
    }, []);

    const { error, handleSubmit, submitting, loginError } = props

    return (
        <form onSubmit={handleSubmit(handleValue)}>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component={renderField} type="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component={renderField} type="password" />
            </div>
            {error && <strong>{error}</strong>}
            {loginError && <strong>{loginError}</strong>}
            <button type="submit" disabled={submitting}>
                Log In
            </button>
        </form>
    );
}


export default reduxForm({
    form: 'login',
})(Login)