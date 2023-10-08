import React from "react";
import styles from "./Comment.module.css";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const Comment = ({ item, setCommentArr, commentArr }) => {
  // console.log("this are the all comments ", item);

  let handleDelete = async (deletingId) => {
    try {
      await axios.delete(`https://dummyapi.io/data/v1/comment/${item.id}`, {
        headers: {
          "app-id": "651562a4a14b3c63fae4a0d5",
        },
      });

      let newData = commentArr.filter((item) => item.id !== deletingId);

      setCommentArr(newData);
    } catch (error) {}
  };
  return (
    <div className={styles.commentBox}>
      <div className={styles.imgWrapper}>
        <img className={styles.commentImg} src={item?.owner?.picture} alt="" />
      </div>
      <div className={styles.commentArea}>
        <div className={styles.nameWrapper}>
          <h3 className={styles.name}>{item?.owner.firstName}</h3>
        </div>
        <div className={styles.commentWrapper}>
          <p className={styles.commentTxt}>{item?.message}</p>
          <AiFillDelete
            className={styles.deleteBtn}
            onClick={() => handleDelete(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
