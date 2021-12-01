/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from "react";
import Context from "../../../context/Context";
import { showToast } from "../../../core/functions";
import { authentication } from "../../../helpers/authentication";
import style from "./Login.module.scss";

const Login = () => {
    const context = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (_e) => {
        _e.preventDefault();

        const payload = new FormData();
        payload.append("email", email);
        payload.append("password", password);
        payload.append("captcha", "");
        payload.append("secondid", "");

        authentication
            .login(payload)
            .then((response) => {
                if (
                    response.data.token !== undefined &&
                    response.data.token !== null &&
                    response.data.token !== ""
                ) {
                    context.funcHandleSetToken(response.data.token);
                } else {
                    showToast(
                        "top-right",
                        "Authentication failed",
                        "error",
                        10000
                    );
                }
            })
            .catch((response) => {
                console.warn(response);
                showToast("top-right", response, "error", 10000);
            });
    };

    return (
        <div className={style.login}>
            <img
                className={style.loginFormImg}
                src="https://frigian.net/assets/img/frigian-dark.png"
                alt=""
            ></img>

            <form                
                className={style.loginForm}
                method="post"
                encType="multipart/form-data"
                onSubmit={(e) => handleLogin(e)}
            >
                <div className={style.loginFormRow}>
                    <label htmlFor="login-form-username">eMail</label>
                    <input
                        id="login-form-username"
                        name="login-form-username"
                        type="text"
                        className="login-form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={style.loginFormRow}>
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
                <div className={style.loginFormRow}>
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
};
export default Login;
