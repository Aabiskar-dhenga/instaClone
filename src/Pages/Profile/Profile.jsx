import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Profile.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { IoPersonAddSharp } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import Storyhighlight from "../../Components/Storyhighlights/Storyhighlight";
import { Highlight } from "../../Utilis/Highlights";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { PiTagSimpleFill } from "react-icons/pi";
import Photopost from "../../Components/photo/Photopost";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { UserDetailContext } from "../../Usecontext/Usecontext";

const Profile = () => {
  // const { state } = useLocation();
  const {
    state: { userInfo },
  } = useContext(UserDetailContext);
  const { id } = useParams();
  let [pData, setProfileData] = useState();
  let [Post, setPost] = useState([]);
  let [profilePicture, setprofilePicture] = useState();
  const fileRef = useRef();
  useEffect(() => {
    ProfileUserData();
  }, []);

  useEffect(() => {
    PostApiFetch();
  }, []);

  let updateImgApi = `https://dummyapi.io/data/v1/user/${userInfo.id}`;
  const getImageUrlApi = `https://wrapfile.onrender.com/api/file/getFileUrl`;
  let api = `https://dummyapi.io/data/v1/user/${id}`;
  let postapi = `https://dummyapi.io/data/v1/user/${id}/post`;
  const ProfileUserData = async () => {
    let { data } = await axios.get(api, {
      headers: {
        "app-id": "651562a4a14b3c63fae4a0d5",
      },
    });
    let profileDatas = data;
    setProfileData(profileDatas);
  };

  const handleFileINputChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files, file);
    handleGetFileUrl(file);
  };

  const handleGetFileUrl = (file) => {
    if (!file) return;
    const reader = new FileReader();
    const [type] = file?.type.split("/");
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      let url = reader.result;
      console.log(url);
      if (url) {
        const { status, data } = await axios.post(getImageUrlApi, {
          data: url,
          type,
        });
        if (status === 200) {
          const imgUrl = data.message;
          UpdateProfileImg(imgUrl);
        }
      }
    };

    reader.onerror = () => {
      console.log("some error while reading file");
    };
  };

  let handleProfilePicture = (e) => {
    let picture = e.target.value;
    setprofilePicture(picture);
  };

  let UpdateProfileImg = async (img) => {
    await axios.put(
      updateImgApi,
      {
        picture: img,
      },
      {
        headers: {
          "app-id": "651562a4a14b3c63fae4a0d5",
        },
      }
    );
  };

  const PostApiFetch = async () => {
    let { data } = await axios.get(postapi, {
      headers: {
        "app-id": "651562a4a14b3c63fae4a0d5",
      },
    });
    let post = data.data;
    setPost(post);
    console.log("this is fuckin data", data);
  };
  // console.log
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <div className={styles.profileBox}>
        <div className={styles.profileDetailContainer}>
          <div className={styles.profileImgWrapper}>
            <input
              type="file"
              name=""
              id=""
              ref={fileRef}
              style={{ display: "none" }}
              onChange={handleFileINputChange}
            />
            <img
              className={styles.profileImg}
              src={pData?.picture}
              alt="profileImg"
              value={profilePicture}
              onChange={handleProfilePicture}
              onClick={() => fileRef.current.click()}
            />
          </div>
          <div className={styles.profileDetails}>
            <div className={styles.nameWrapper}>
              <h3 className={styles.userName}>{pData?.firstName}</h3>
              <button className={styles.followBtn}>Follow</button>
              <button className={styles.messageBtn}>Message</button>
              <div className={styles.addIconWrapper}>
                <IoPersonAddSharp className={styles.addIcon} />
              </div>
              <SlOptions className={styles.threeDots} />
            </div>
            <div className={styles.followWrapper}>
              <p className={styles.posts}>
                <span className={styles.number}>1,345 </span> posts
              </p>
              <p className={styles.followerList}>
                <span className={styles.number}>122k</span>
                followers
              </p>
              <p className={styles.followingList}>
                <span className={styles.number}>184</span>
                following
              </p>
            </div>
            <div className={styles.nameWrapper}>
              {/* <p>{pData.title}</p> */}
              <p className={styles.name}>{pData?.lastName}</p>
            </div>
            <div className={styles.bioWrapper}>
              <p className={styles.bio}>
                {pData?.location?.city} {pData?.location?.state}
                <br />
                {pData?.location?.country} {pData?.location?.street} <br />
                {pData?.phone}
              </p>
              <p className={styles.followedBy}>
                <span className={styles.followedbyTxt}>Followed by</span>
                cr7Horaa, codingGuru...
              </p>
            </div>
          </div>
        </div>

        <div className={styles.storyHighlightsWrapper}>
          {Highlight.map((item) => {
            return <Storyhighlight item={item} />;
          })}
        </div>
        <div className={styles.postContainer}>
          <div className={styles.line}></div>
          <div className={styles.categoryProfile}>
            <div className={styles.categoryWrapper}>
              <BsFillPostcardHeartFill />
              <p>Post</p>
            </div>
            <div className={styles.categoryWrapper}>
              <MdOutlineVideoLibrary />
              <p>Reels</p>
            </div>
            <div className={styles.categoryWrapper}>
              <PiTagSimpleFill />
              <p>Tagged</p>
            </div>
          </div>
          <div className={styles.PostWrapper}>
            {Post.map((item) => {
              return <Photopost item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
