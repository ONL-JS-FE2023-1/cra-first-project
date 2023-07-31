import {SCHEMA} from '../../schemas/index';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
            <Formik initialValues={initialState} onSubmit={handleSubmitToFormik} validationSchema={SCHEMA}>
                {(formikProps) => {
                    return (
                        <Form style={{display: 'flex', flexDirection: 'column'}}>
                            <Field placeholder='firstName' name='firstName'/>
                            <ErrorMessage name='firstName' component="p" />
                            <Field placeholder='lastName' name='lastName'/>
                            <ErrorMessage name='lastName' component="p" />
                            <Field placeholder='email' name='email'/>
                            <ErrorMessage name='email' component="p" />
                            <Field type='password' placeholder='password' name='password'/>
                            <ErrorMessage name='password' component="p" />
                            <button type='submit'>Send</button>
                        </Form>
                    );
                }}
            </Formik>
        );
}

export default SignUpForm;


/*

ДЗ.
Зробити маленьку форму авторизації (email,pass) за допомогою Formik

*/
