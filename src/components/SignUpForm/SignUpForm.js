import React, { Component } from 'react';
import {SCHEMA} from '../../schemas/index';
import { Formik, Form, Field } from 'formik';

const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}

function SignUpForm(props) {
    const handleSubmitToFormik = (values,actions) => {
        console.log(values);
        actions.resetForm();
    }

    
        return (
            <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
                {(formikProps) => {
                    return (
                        <Form>
                            <Field placeholder='firstName' name='firstName'/>
                            <Field placeholder='lastName' name='lastName'/>
                            <Field placeholder='email' name='email'/>
                            <Field type='password' placeholder='password' name='password'/>
                            <button type='submit'>Send</button>
                        </Form>
                    );
                }}
            </Formik>
        );
}

export default SignUpForm;
