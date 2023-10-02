import React from "react";
import styles from "./SuggestionList.module.css";
import { Link } from "react-router-dom";

const SuggestionList = ({ data }) => {
  // console.log("this is data", data);
  return (
    <div className={styles.suggestionlistContainer}>
      <div className={styles.suggestionListname_imgWrapper}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.suggestionListProfile_img}
            src={data?.picture}
          />
        </div>
        <div className={styles.usernameWrapper}>
          <Link
            className={styles.profileRooute}
            state={data}
            to={`/profile/${data.id}`}
          >
            <p className={styles.username}>{data.firstName} </p>
          </Link>
          <p className={styles.userFollowed}>Followed by 97 other</p>
        </div>
      </div>
      <div className={styles.followWrapper}>
        <p className={styles.followTxt}>Follow</p>
      </div>
    </div>
  );
};

export default SuggestionList;
