import React from "react";
import styles from "./SearchProfile.module.css";
import { Link, useLocation } from "react-router-dom";

const SearchProfile = ({ item }) => {
  // let { id } = useLocation();
  console.log("this is searcedResultCollection", item);
  return (
    <Link to={`/profile/${item.id}`}>
      <div className={styles.profileWrapper}>
        <img src={item.picture} className={styles.img} alt="" />
        <div className={styles.detail}>
          <h3 className={styles.name}>{item.firstName}</h3>
          <p className={styles.address}>{item.lastName}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchProfile;
