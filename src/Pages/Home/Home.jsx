import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Usercontainer from "../../Components/UserContainer/Usercontainer";
import Post from "../../Components/Post/Post";
import { Storydata } from "../../Utilis/Storydata";
import Story from "../../Components/Story/Story";
import axios from "axios";

const Home = () => {
  let [post, setPost] = useState([]);
  let [user, setUser] = useState([]);
  // api keys
  let postApi = "https://dummyapi.io/data/v1/post";
  // api keys end

  // useEffects
  useEffect(() => {
    postfetchApi();
  }, []);

  let postfetchApi = async () => {
    let { data, status } = await axios.get(postApi, {
      headers: {
        "app-id": "651562a4a14b3c63fae4a0d5",
      },
    });

    setPost(data.data);
  };

  return (
    <div className={styles.homeContainer}>
      {/* Sidebar starts from here  */}

      <Sidebar />

      {/* Sidebar ends from here */}
      {/* body container starts here  */}
      <div className={styles.centerBox}>
        <div className={styles.bodyContainer}>
          <div className={styles.storyImgContainer}>
            {Storydata.map((item) => {
              return <Story item={item} />;
            })}
          </div>

          {post.map((item) => {
            return <Post item={item} />;
          })}
        </div>
      </div>
      {/* and body container ends here  */}

      {/* left sidebar  */}

      <Usercontainer />

      {/* left sidebar ends here  */}
    </div>
  );
};

export default Home;
