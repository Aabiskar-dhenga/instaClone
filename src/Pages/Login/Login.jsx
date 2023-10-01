import React from "react";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.loginAppContainer}>
      <div className={styles.loginWrapper}>
        <h1>Instagram</h1>
        <div className={styles.loginForm}>
          <input
            className={styles.userInputBox}
            placeholder="Phone number , username, or email"
            type="text"
          />
          <input
            className={styles.passwordInputBox}
            placeholder="Password"
            type="value"
          />
          <button className={styles.loginBtn}>Login</button>
        </div>
        <div className={styles.orWrapper}>
          <div className={styles.line}></div>
          <p>Or</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.Wrapper}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.facebookLogo}
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/facebook.png"
              alt="facebook"
            />
            <p style={{ color: "#385185", fontWeight: "600" }}>
              Log in with Facebook
            </p>
          </div>
          <p style={{ color: " #385185" }}>Forget Password ?</p>
        </div>
      </div>
      <div className={styles.signupWrapper}>
        <p>Don't have an account?</p>
        <p className={styles.signupTxt}>Sign up</p>
      </div>
    </div>
  );
};

export default Login;
