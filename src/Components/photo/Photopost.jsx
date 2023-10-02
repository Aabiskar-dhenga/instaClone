import React from "react";
import styles from "./Photopost.module.css";
const Photopost = ({ item }) => {
  return (
    <div className={styles.postImgWrapper}>
      <img src={item?.image} className={styles.posts} alt="postImg" />
    </div>
  );
};

export default Photopost;
