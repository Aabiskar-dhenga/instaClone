import React, { useState } from "react";
import styles from "./createuser.module.css";
import { AiFillFacebook } from "react-icons/ai";
import axios from "axios";

const CreateUser = () => {
  let api = "https://dummyapi.io/data/v1/user/create";
  let [firstName, setfirstName] = useState();
  let [lastName, setlastName] = useState();
  let [email, setEmail] = useState();
  let handleName = (e) => {
    let name = e.target.value;
    setfirstName(name);
  };
  let handleLastName = (e) => {
    let lastname = e.target.value;
    setlastName(lastname);
  };
  let handleEmail = (e) => {
    let email = e.target.value;
    setEmail(email);
  };

  let CreateAccount = async () => {
    await axios.post(
      api,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
      {
        headers: {
          "app-id": "651562a4a14b3c63fae4a0d5",
        },
      }
    );
    setfirstName("");
    setfirstName("");
    setEmail("");
  };
  return (
    <div className={styles.appContainer}>
      <div className={styles.createuserContainer}>
        <h1 className={styles.heading}>Instagram</h1>
        <p className={styles.signupTxt}>
          Signup to see photos and videos <br /> from Your friends.
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
            onChange={handleName}
            className={styles.inputBox}
            placeholder="Enter the first Name"
            type="text"
          />
          <input
            onChange={handleLastName}
            className={styles.inputBox}
            placeholder="Enter the Last Name"
            type="text"
          />
          <input
            onChange={handleEmail}
            className={styles.inputBox}
            placeholder="Enter the Email"
            type="text"
          />
        </div>
        <p>
          People who use our service may have uploaded your contact information
          to Instagram. Learn More
        </p>
        <p>
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </p>
        <button onClick={CreateAccount} className={styles.signupBtn}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
