import React from "react";
import styles from "./Post.module.css";
import { SlOptions } from "react-icons/sl";

const Post = ({ item }) => {
  console.log("this is post item", item);
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeadingContainer}>
        <div className={styles.postProfileImageWrapper}>
          <img
            className={styles.postProfileImage}
            src={item.owner.picture}
            alt="profileImg"
          />
          <p className={styles.postUsername}>
            {item.owner?.firstName}
            {item.owner?.lastName}
          </p>
        </div>
        <SlOptions />
      </div>
      <div className={styles.postImgWrapper}>
        <img className={styles.postImg} src={item.image} alt="img" />
      </div>
    </div>
  );
};

export default Post;
