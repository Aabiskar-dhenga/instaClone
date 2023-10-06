import React from "react";
import styles from "./Comment.module.css";
import { AiFillDelete } from "react-icons/ai";

const Comment = ({ item, setCommentArr, commentArr }) => {
  console.log("this are the all comments ", item);

  let handleDelete = (deletingId) => {
    let newData = commentArr.filter((item) => item.id !== deletingId);
    setCommentArr(newData);
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
