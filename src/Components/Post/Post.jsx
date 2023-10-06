import React from "react";
import styles from "./Post.module.css";
import { SlOptions } from "react-icons/sl";
// import { AiFillDelete } from "react-icons/ai";
import CommentSection from "../CommentSection/CommentSection";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const Post = ({ item, post, setPost }) => {
  let handleDeletePost = (deletingId) => {
    let data = post.filter((item) => item.id !== deletingId);
    setPost(data);
  };

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
        <Menu
          menuButton={
            <MenuButton>
              <SlOptions />
            </MenuButton>
          }
          transition
        >
          <MenuItem>
            <button onClick={() => handleDeletePost(item.id)}>delete</button>
          </MenuItem>
        </Menu>
      </div>
      <div className={styles.postImgWrapper}>
        <img className={styles.postImg} src={item.image} alt="img" />
      </div>
      <CommentSection item={item} />
    </div>
  );
};

export default Post;
