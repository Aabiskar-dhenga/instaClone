import React from "react";
import styles from "./Post.module.css";
import { SlOptions } from "react-icons/sl";
import { AiFillDelete } from "react-icons/ai";
import CommentSection from "../CommentSection/CommentSection";

const Post = ({ item }) => {
  console.log("this is post item", item);
  // let handleDelete = () => {};

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
        {/* <AiFillDelete className={styles.deleteIcon} onClick={handleDelete(item.id)} /> */}
      </div>
      <CommentSection />
    </div>
  );
};

export default Post;
