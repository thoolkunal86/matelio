/**
 * Login Form for authentication
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { Formik } from "formik";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { setCreds } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const  LoginForm = () => {
    const [login, {isloading}] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="flex justify-content-center">
            <div className="card">
                <h2 className="text-center">Login</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Email is Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'Password is Required';
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const userData = await login(values).unwrap();
                            dispatch(setCreds({...userData.results, values }));
                            navigate('/profile-edit');
                        } catch (error) {
                            
                        }
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                        <div className="field">
                            <InputText
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        <p className="p-error">{errors.email && touched.email && errors.email}</p>
                        </div>
                        <div className="field">
                            <InputText
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <p className="p-error">{errors.password && touched.password && errors.password}</p>
                        </div>
                        <div className="field text-center">
                            <Button  type="submit" label="Login" className="mt-2" disabled={isSubmitting}/>
                        </div>
                        </form>
                    )}
                    </Formik>
            </div>
        </div>
    )
}

export default LoginForm;