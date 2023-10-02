import React from "react";
import styles from "./Story.module.css";

const Story = ({ item }) => {
  return (
    <div className={styles.storyWrapper}>
      <div className={styles.storyImgWrapper}>
        <img
          className={styles.storyPhoto}
          src={item.picture}
          alt="ladkikophoto"
        />
      </div>
      <p className={styles.storyName}>{item.firstName}</p>
    </div>
  );
};

export default Story;
