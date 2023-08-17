import { Tabs, Tab } from 'react-bootstrap'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import './index.css'

export default function index() {

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Must Be A Valid Email!')
            .required('Email Address Is Mandatory!'),
        password: Yup.string()
            .required('Password Is Mandatory!'),
    });

    const signupSchema = Yup.object().shape({
        username: Yup.string()
            .min(5, 'Too Short')
            .max(15, 'Too Long')
            .required('User Name Is Mandatory!'),
        email: Yup.string()
            .email('Must Be A Valid Email!')
            .required('Email Address Is Mandatory!'),
        password: Yup.string()
            .required('Password Is Mandatory!'),
    });

    return (
        <div className="logon-main">
            <Tabs defaultActiveKey="login" className="mb-3">
                <Tab eventKey="login" title="LOGIN">
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validationSchema={loginSchema}
                        onSubmit={
                            values => {
                                console.log(values)
                            }
                        }
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input type="email" name="email" placeholder="  Email Address" onChange={handleChange} onBlur={handleBlur} /><br />
                                <ErrorMessage errors={errors} touched={touched} name="email">{ msg => <span>{msg}</span> }</ErrorMessage><br />
                                <input type="password" name="password" placeholder="  Password" onChange={handleChange} onBlur={handleBlur} /><br />
                                <ErrorMessage errors={errors} touched={touched} name="password">{ msg => <span>{msg}</span> }</ErrorMessage><br />
                                <br />
                                <button type="submit">LOGIN</button>
                            </form>
                        )}
                    </Formik>
                </Tab>
                <Tab eventKey="signup" title="SIGNUP">
                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            password: ""
                        }}
                        validationSchema={signupSchema}
                        onSubmit={
                            values => {
                                console.log(values)
                            }
                        }
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="username" placeholder="  User Name" onChange={handleChange} onBlur={handleBlur} /><br />
                                <ErrorMessage errors={errors} touched={touched} name="username" className="error-message">{ msg => <span>{msg}</span> }</ErrorMessage><br />
                                <input type="email" name="email" placeholder="  Email Address" onChange={handleChange} onBlur={handleBlur} /><br />
                                <ErrorMessage errors={errors} touched={touched} name="email" className="error-message">{ msg => <span>{msg}</span> }</ErrorMessage><br />
                                <input type="password" name="password" placeholder="  Password" onChange={handleChange} onBlur={handleBlur} /><br />
                                <ErrorMessage errors={errors} touched={touched} name="password" className="error-message">{ msg => <span>{msg}</span> }</ErrorMessage><br />
                                <br />
                                <button type="submit">SIGNUP</button>
                            </form>
                        )}
                    </Formik>
                </Tab>
            </Tabs>
        </div>
    );
}