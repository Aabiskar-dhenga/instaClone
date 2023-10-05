import React, { useEffect } from "react";
import styles from "./CommentSection.module.css";
import { useState } from "react";
import axios from "axios";

const CommentSection = ({ item }) => {
  const api = "https://dummyapi.io/data/v1/comment/create";
  let [PostId, setPostId] = useState("");
  let [OwnerId, setOwnerId] = useState("");
  let [InputComment, setInputComment] = useState("");
  let handleValue = (e) => {
    let comment = e.target.value;
    setInputComment(comment);
  };

  useEffect(() => {
    UpdatingId();
  }, []);

  let UpdatingId = () => {
    let post = item.id;
    let owner = item.owner.id;
    setOwnerId(owner);
    setPostId(post);
  };

  console.log("this is comment section", item);

  let CreateComment = async () => {
    let { data } = await axios.post(
      api,
      {
        message: InputComment,
        owner: OwnerId,
        post: PostId,
      },
      {
        headers: {
          "app-id": "651562a4a14b3c63fae4a0d5",
        },
      }
    );
    console.log("this comment api has called", data);
  };

  return (
    // what we need a commnet userID and post Id
    <div className={styles.commentContainer}>
      <input
        placeholder="Enter Your Comment"
        onChange={handleValue}
        value={InputComment}
        className={styles.inputBox}
        type="text"
      />
      <div className={styles.btnWrapper}>
        <button className={styles.cancelBtn}>Cancel</button>
        <button onClick={CreateComment} className={styles.commentBtn}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
