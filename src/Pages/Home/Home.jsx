import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Usercontainer from "../../Components/UserContainer/Usercontainer";
import Post from "../../Components/Post/Post";
import Story from "../../Components/Story/Story";
import axios from "axios";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  let [post, setPost] = useState([]);
  let [user, setUser] = useState([]);
  let [StoryData, setStoryData] = useState([]);

  // api keys
  let postApi = "https://dummyapi.io/data/v1/post";
  let apiStory = "https://dummyapi.io/data/v1/user";
  // api keys end

  // useEffects
  useEffect(() => {
    postfetchApi();
  }, []);
  useEffect(() => {
    FetchStory();
  }, []);

  let postfetchApi = async () => {
    let { data, status } = await axios.get(postApi, {
      headers: {
        "app-id": "651562a4a14b3c63fae4a0d5",
      },
    });

    setPost(data.data);
    console.log("this are the post", post);
  };

  let FetchStory = async () => {
    let { data } = await axios.get(apiStory, {
      headers: {
        "app-id": "651562a4a14b3c63fae4a0d5",
      },
    });
    let storydata = data.data;
    setStoryData(storydata);
  };

  return (
    <div className={styles.homeContainer}>
      {/* Sidebar starts from here  */}

      <Sidebar />

      {/* Sidebar ends from here */}
      {/* body container starts here  */}
      <div className={styles.centerBox}>
        <Navbar />
        <div className={styles.bodyContainer}>
          <div className={styles.storyImgContainer}>
            {StoryData.map((item) => {
              return <Story item={item} />;
            })}
          </div>

          <CreatePost postfetchApi={postfetchApi} />
          <div className={styles.postWrapper}>
            {post.map((item) => {
              return <Post post={post} setPost={setPost} item={item} />;
            })}
          </div>
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
