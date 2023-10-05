import React from "react";
import styles from "./Comment.module.css";

const Comment = ({ item }) => {
  console.log("this are the all comments ", item);
  return (
    <div className={styles.commentBox}>
      <div className={styles.imgWrapper}>
        <img className={styles.commentImg} src={item?.owner?.picture} alt="" />
      </div>
      <div className={styles.commentArea}>
        <div className={styles.nameWrapper}>
          <p>{item?.owner.firstName}</p>
        </div>
        <div className={styles.commentWrapper}>
          <p className={styles.commentTxt}>{item?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
