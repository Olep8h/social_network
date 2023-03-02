// import React, { useState } from "react";
//
// const LoginForm = (props) => {
//     const [login, setLogin] = useState("");
//     const [password, setPassword] = useState("");
//     const [rememberMe, setRememberMe] = useState(false);
//     return (
//         <form onSubmit={(e) => { e.preventDefault(); console.log({ login, password, rememberMe });}}>
//             <div>
//                 <input placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
//             </div>
//             <div>
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <div>
//                 <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} /> remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// const Login = (props) => {
//     return (
//         <div>
//             <h1>Login</h1>
//             <LoginForm />
//         </div>
//     )
// }
//
// export default Login;

import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {validateRequiredField} from "../../utilities/validators/validators";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../redux/authentication_reducer";
import classes from "./Login.module.css";
import style from "../common/FormControls/FormControls.module.css";


const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className={classes.email}>
                    <Field placeholder={"Email"}
                           name={"email"}
                           validate={[validateRequiredField]}
                           component={Input}/>
                </div>
                <div className={classes.password}>
                    <Field placeholder={"Password"}
                           name={"password"}
                           type={"password"}
                           validate={[validateRequiredField]}
                           component={Input}/>
                </div>
                <div className={classes.remember_me}>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </div>
                <div className={style.form_summary_error}>
                    {props.error}
                </div>
                  <div>
                    <button className={classes.login_button}>
                        Login
                        <div className={classes.arrow_wrapper}>
                            <div className={classes.arrow}></div>

                        </div>
                    </button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1 className={classes.login_caption}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);