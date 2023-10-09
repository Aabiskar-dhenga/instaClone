import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import axios from "axios";
import { Searchmodal } from "../Searchmodal/Searchmodal";

const Navbar = () => {
  //   let id = "60d0fe4f5311236168a109f6";
  let userApi = "https://dummyapi.io/data/v1/user";
  //   let api = `https://dummyapi.io/data/v1/user/${id}`;
  let [userCollection, setUserCollection] = useState([]);
  let [searcedResultCollection, setsearcedResultCollection] = useState([]);
  let [SearchedInfo, setSearchedInfo] = useState();
  let [showModal, setShowModal] = useState(false);
  let handlChange = (e) => {
    let data = e.target.value;
    setSearchedInfo(data);
  };

  useEffect(() => {
    GetAllUser();
  }, []);

  let GetAllUser = async () => {
    let { data } = await axios.get(userApi, {
      headers: {
        "app-id": "651562a4a14b3c63fae4a0d5",
      },
    });
    let allTheData = data.data;
    setUserCollection(allTheData);
    console.log("get all user", allTheData);
  };
  let SearchedFetch = () => {
    alert("searched");
    let searcedResults = userCollection.filter((item) =>
      // (item) => item.firstName.startsWith(SearchedInfo),
      item.firstName.toLowerCase().startsWith(SearchedInfo.toLowerCase())
    );
    setsearcedResultCollection(searcedResults);
    setShowModal(true);
    console.log("this is searchedRsult", searcedResults);
  };
  return (
    <>
      <Searchmodal
        searcedResultCollection={searcedResultCollection}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <div className={styles.navbarContainer}>
        <input
          value={SearchedInfo}
          className={styles.inputBox}
          placeholder="Enter The Name "
          onChange={handlChange}
          type="text"
        />
        <button className={styles.searchBtn} onClick={SearchedFetch}>
          Search
        </button>
      </div>
    </>
  );
};

export default Navbar;
