import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDetailContext } from "../../Usecontext/Usecontext";
const Login = () => {
  const navigate = useNavigate();
  let [email, setEmail] = useState();
  let { state, dispatch } = useContext(UserDetailContext);
  // let api =;

  let handleEmail = (e) => {
    let enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  let checkIfThisIdIsValid = async () => {
    try {
      let { data, status } = await axios.get(
        `https://dummyapi.io/data/v1/user/${email}`,
        {
          headers: {
            "app-id": "651562a4a14b3c63fae4a0d5",
          },
        }
      );
      if (status === 200) {
        // add the user data to context api   ""data""
        dispatch({ type: "setUserInfo", payload: data });
        navigate("/");
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div className={styles.loginAppContainer}>
      <div className={styles.loginWrapper}>
        <h1 className={styles.heading}>Instagram</h1>
        <div className={styles.loginForm}>
          <input
            onChange={handleEmail}
            className={styles.userInputBox}
            placeholder="Your secret login id"
            type="text"
          />
          {/* <input
            className={styles.passwordInputBox}
            placeholder="Password"
            type="value"
          /> */}
          <button className={styles.loginBtn} onClick={checkIfThisIdIsValid}>
            Login
          </button>
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
        <Link to={"/signup"}>
          <p className={styles.signupTxt}>Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
