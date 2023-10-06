import React, { useEffect } from "react";
import styles from "./CommentSection.module.css";
import { useState } from "react";
import axios from "axios";
import Comment from "../Comment/Comment";

const CommentSection = ({ item }) => {
  // console.log("this is okkitem", item);

  const api = `https://dummyapi.io/data/v1/post/${item.id}/comment`;
  const CommentApi = "https://dummyapi.io/data/v1/comment/create";
  let [PostId, setPostId] = useState("");
  let [OwnerId, setOwnerId] = useState("");
  const [commentArr, setCommentArr] = useState([]);
  let [InputComment, setInputComment] = useState("");
  let handleValue = (e) => {
    let comment = e.target.value;
    setInputComment(comment);
  };

  useEffect(() => {
    UpdatingId();
    GetAllCommentByPost();
  }, [item]);

  let UpdatingId = () => {
    let post = item.id;
    let owner = item.owner.id;
    setOwnerId(owner);
    setPostId(post);
  };

  const GetAllCommentByPost = async () => {
    try {
      const { data } = await axios.get(api, {
        headers: {
          "app-id": "651562a4a14b3c63fae4a0d5",
        },
      });
      let comment = data.data;
      setCommentArr(comment);
      // console.log("fucking comment array ", data);
    } catch (error) {
      console.log("this is the err", error);
    }
  };

  let CreateComment = async () => {
    try {
      if (InputComment.length > 0) {
        let { data } = await axios.post(
          CommentApi,
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
        // console.log("this comment api has called", data);
        setInputComment("");
        GetAllCommentByPost();
        alert("successfull commented");
      } else {
        alert("Enter the comment");
      }
    } catch (error) {
      console.log("this is error", error);
    }
  };

  return (
    // what we need a commnet userID and post Id
    <div className={styles.commentContainer}>
      <div className={styles.inputWrapper}>
        <input
          placeholder="Enter Your Comment"
          onChange={handleValue}
          value={InputComment}
          className={styles.inputBox}
          type="text"
        />
        <button onClick={CreateComment} className={styles.commentBtn}>
          Comment
        </button>
      </div>
      <div className={styles.commentWrapper}>
        {commentArr.map((item) => {
          return (
            <Comment
              commentArr={commentArr}
              setCommentArr={setCommentArr}
              item={item}
            />
          );
        })}
        {/* id */}
      </div>
    </div>
  );
};

export default CommentSection;
