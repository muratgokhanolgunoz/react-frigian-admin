/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react';
import Context from '../../../context/Context';
import AuthServices from '../../../services/AuthServices';
// import { authentication } from '../../../helpers/authentication';

const Login = () => {
    const context = useContext(Context);
    let authServices = new AuthServices();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (_e) => {
        _e.preventDefault();

        const payload = new FormData();
        payload.append("email", email);
        payload.append("password", password);
        payload.append("captcha", "");
        payload.append("secondid", "");

        authServices.authenticate(payload)
            .then((response) => {
                context.funcHandleSetToken(response.data.token);
            })
            .catch(() => console.log("Error when authenticate"));

        //context.funcHandleSetToken(authentication.login(payload));
    }

    return (
        <div id="login">
            <img id="login-form-img" src="https://frigian.net/assets/img/frigian-dark.png" alt=""></img>

            <form
                id="login-form"
                method="post"
                encType="multipart/form-data"
                onSubmit={(e) => handleLogin(e)}
            >
                <div className="login-form-row">
                    <label htmlFor="login-form-username">Username</label>
                    <input
                        id="login-form-username"
                        name="login-form-username"
                        type="text"
                        className="login-form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-form-row">
                    <label htmlFor="login-form-password">Password</label>
                    <input
                        id="login-form-password"
                        name="login-form-password"
                        type="password"
                        className="login-form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="login-form-row">
                    <button
                        id="login-form-submit"
                        className="login-form-submit"
                        type="submit"
                    >
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Login;