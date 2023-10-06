import React, { useEffect, useState } from "react";
import styles from "./Usercontainer.module.css";
import SuggestionList from "../SuggestionList/SuggestionList";
import { Suggestiondata } from "../../Utilis/Suggestiondata";
import axios from "axios";

const Usercontainer = () => {
  let [user, setUser] = useState([]);
  let userApi = "https://dummyapi.io/data/v1/user";

  useEffect(() => {
    userFetchApi();
  }, []);

  let userFetchApi = async () => {
    let { data, status } = await axios.get(userApi, {
      headers: {
        "app-id": "651562a4a14b3c63fae4a0d5",
      },
    });
    // console.log("this is userData", data);
    setUser(data.data);
  };
  return (
    <div className={styles.userContainer}>
      <div className={styles.userCard}>
        <div className={styles.cardHPD}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.userProfile}
              src="https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=600"
              alt="userprofile"
            />
          </div>
          <div className={styles.usernameWrapper}>
            <p className={styles.Name}>aabiskardhenga</p>
            <p className={styles.username}>Aabiskar Dhenga</p>
          </div>
        </div>
        <div>
          <p className={styles.switchBtn}>Switch</p>
        </div>
      </div>
      <div className={styles.userContainerSuggestionTextWrapper}>
        <p className={styles.suggestionTxt}>Suggested for you</p>
        <p className={styles.seeallTxt}>See All</p>
      </div>
      <div className={styles.suggestionListWrapper}>
        {user.map((data) => {
          return <SuggestionList data={data} />;
        })}
      </div>
    </div>
  );
};

export default Usercontainer;
