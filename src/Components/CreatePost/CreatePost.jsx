import React, { useEffect, useState } from "react";
import styles from "./CreatePost.module.css";
import { BiSolidVideoPlus } from "react-icons/bi";
import { FaPhotoVideo } from "react-icons/fa";
import { TfiFaceSmile } from "react-icons/tfi";
import axios from "axios";
const CreatePost = () => {
  let postApi = "https://dummyapi.io/data/v1/post/create";
  let [InputStatus, setStatus] = useState("");
  let [InputUrl, setInputUrl] = useState("");
  let handleInput = (e) => {
    let statusTxt = e.target.value;
    setStatus(statusTxt);
  };

  let handleUrlInput = (e) => {
    let url = e.target.value;

    setInputUrl(url);
  };

  let PostCreate = async () => {
    try {
      if (InputUrl.length > 0 && InputStatus.length > 0) {
        const { data, status } = await axios.post(
          postApi,
          {
            text: InputStatus,
            image: InputUrl,

            likes: 122,
            tags: ["programming"],
            owner: "60d0fe4f5311236168a109cb",
          },
          {
            headers: {
              "app-id": "651562a4a14b3c63fae4a0d5",
            },
          }
        );
        if (status == 200) {
          alert("successful");
        }
      } else {
        alert("can't post enter something");
      }
    } catch (error) {
      console.log(error);
    }
    setStatus("");
    setInputUrl("");
  };

  return (
    <div className={styles.createPostContainer}>
      <div className={styles.UpperBox}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputBox}
            value={InputStatus}
            onChange={handleInput}
            placeholder="What's on Your mind Aabiskar ?"
            type="text"
          />
        </div>
      </div>
      <div className={styles.lowerBox}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputBox}
            value={InputUrl}
            onChange={handleUrlInput}
            placeholder="What's on Your mind Aabiskar ?"
            type="text"
          />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <button
          onClick={PostCreate}
          className="text-slate-900 bg-red-500	  cursor-pointer"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
