import React from "react";
import styles from "./CommentSection.module.css";

const CommentSection = () => {
  let handleValue = (e) => {};
  return (
    <div className={styles.commentContainer}>
      <input
        placeholder="Enter Your Comment"
        onChange={handleValue}
        className={styles.inputBox}
        type="text"
      />
      <div className={styles.btnWrapper}>
        <button className={styles.cancelBtn}>Cancel</button>
        <button className={styles.commentBtn}>Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
