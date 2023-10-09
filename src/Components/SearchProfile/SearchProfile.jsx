import React from "react";
import styles from "./SearchProfile.module.css";

const SearchProfile = ({ item }) => {
  console.log("this is searcedResultCollection", item);
  return (
    <div className={styles.profileWrapper}>
      <img src={item.picture} className={styles.img} alt="" />
      <div className={styles.detail}>
        <h3 className={styles.name}>{item.firstName}</h3>
        <p className={styles.address}>{item.lastName}</p>
      </div>
    </div>
  );
};

export default SearchProfile;
