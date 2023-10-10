import React, { useContext, useState } from "react";
import styles from "./Signup.module.css";
import { AiFillFacebook } from "react-icons/ai";
import axios from "axios";
import { UserDetailContext } from "../../Usecontext/Usecontext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Signup = () => {
  let api = "https://dummyapi.io/data/v1/user/create";
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    picture: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg",
  });
  let { dispatch } = useContext(UserDetailContext);

  const handleRegisterInput = (event) => {
    const { value, name } = event.target;

    setRegisterData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  let CreateAccount = async () => {
    try {
      let { data, status } = await axios.post(api, registerData, {
        headers: {
          "app-id": "651562a4a14b3c63fae4a0d5",
        },
      });
      if (status === 200) {
        // navigate("/login");
        setRegisterSuccess(true);
        setUserData(data);
        setRegisterData({
          firstName: "",
          lastName: "",
          email: "",
        });
        dispatch({ type: "setUserInfo", payload: data });
        console.log("user Created successFully");
        console.log("this is data that is created", data);
      }
    } catch (error) {
      console.log("this is error", error);
    }
  };
  return (
    <div className={styles.appContainer}>
      <div className={styles.createuserContainer}>
        <h1 className={styles.heading}>Instagram</h1>
        <p className={styles.signupTxt}>
          Signup to see photos and videos from Your friends.
        </p>
        <div className={styles.btnWrapper}>
          <AiFillFacebook className={styles.fbIcon} />
          <h3>Login with Facebook</h3>
        </div>
        <div className={styles.orWrapper}>
          <div className={styles.line}></div>
          Or
          <div className={styles.line}></div>
        </div>
        <div className={styles.inputWrapper}>
          <input
            value={registerData.firstName}
            onChange={handleRegisterInput}
            className={styles.inputBox}
            placeholder="Enter the first Name"
            type="text"
            name="firstName"
          />
          <input
            onChange={handleRegisterInput}
            value={registerData.lastName}
            className={styles.inputBox}
            placeholder="Enter the Last Name"
            type="text"
            name="lastName"
          />
          <input
            value={registerData.email}
            onChange={handleRegisterInput}
            className={styles.inputBox}
            placeholder="Enter the Email"
            name="email"
            type="text"
          />
        </div>
        {registerSuccess && <div>{userData.id}</div>}
        <p className={styles.paragraph}>
          People who use our service may have uploaded your contact information
          to Instagram. Learn More
        </p>
        <p className={styles.paragraph}>
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </p>
        <button onClick={CreateAccount} className={styles.signupBtn}>
          Signup
        </button>

        <div className={styles.loginWrapper}>
          <p>Already Have a Account ?</p>
          <Link to={"/login"}>
            <p className={styles.loginBtn}>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
