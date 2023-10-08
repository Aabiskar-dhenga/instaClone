import React from "react";
import styles from "./SearchProfile.module.css";

const SearchProfile = ({ searcedResultCollection }) => {
  console.log("this is searcedResultCollection", searcedResultCollection);
  return (
    <div className={styles.profileWrapper}>
      <img
        src={searcedResultCollection.picture}
        className={styles.img}
        alt=""
      />
      <div className={styles.detail}>
        <h3 className={styles.name}>{searcedResultCollection.firstName}</h3>
        <p className={styles.address}>{searcedResultCollection.lastName}</p>
      </div>
    </div>
  );
};

export default SearchProfile;
