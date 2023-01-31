import React, { useState } from "react";

const LoginForm = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    return (
        <form onSubmit={(e) => { e.preventDefault(); console.log({ login, password, rememberMe });}}>
            <div>
                <input placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login;

// import React from "react";
// import {Field, reduxForm} from "redux-form";
//
//
// const LoginForm = (props) => {
//     return (
//             <form onSubmit={props.handleSubmit}>
//                 <div>
//                     <Field placeholder={"Login"} name={"login"} component={"input"}/>
//                 </div>
//                 <div>
//                     <Field placeholder={"Password"} name={"password"} component={"input"}/>
//                 </div>
//                 <div>
//                     <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
//                 </div>
//                 <div>
//                     <button>Login</button>
//                 </div>
//             </form>
//     )
// }
//
// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
//
//
// const Login = (props) => {
//     const onSubmit = (formData) => {
//         console.log(formData);
//     }
//     return (
//         <div>
//             <h1>Login</h1>
//             <LoginReduxForm onSubmit={onSubmit}/>
//         </div>
//     )
// }
//
// export default Login;