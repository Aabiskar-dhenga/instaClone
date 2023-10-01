import React from "react";
import styles from "./Photopost.module.css";
const Photopost = () => {
  return (
    <div className={styles.postImgWrapper}>
      <img
        src="https://images.pexels.com/photos/1192057/pexels-photo-1192057.jpeg?auto=compress&cs=tinysrgb&w=600"
        className={styles.posts}
        alt="postImg"
      />
    </div>
  );
};

export default Photopost;
