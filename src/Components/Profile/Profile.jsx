import React from "react";
import styles from "./Profile.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { IoPersonAddSharp } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import Storyhighlight from "../Storyhighlights/Storyhighlight";
import { Highlight } from "../../Utilis/Highlights";
import {BsFillPostcardHeartFill} from "react-icons/bs"
import {MdOutlineVideoLibrary}  from "react-icons/md"
import {PiTagSimpleFill} from "react-icons/pi"

const Profile = () => {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <div className={styles.profileBox}>
        <div className={styles.profileDetailContainer}>
          <div className={styles.profileImgWrapper}>
            <img
              className={styles.profileImg}
              src="https://images.pexels.com/photos/3180275/pexels-photo-3180275.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="profileImg"
            />
          </div>
          <div className="profileDetails">
            <div className={styles.nameWrapper}>
              <p className={styles.userName}>Suraksya Panta</p>
              <button className={styles.followBtn}>Follow</button>
              <button className={styles.messageBtn}>Message</button>
              <div  className={styles.addIconWrapper}>

              <IoPersonAddSharp className={styles.addIcon} />
              </div>
              <SlOptions className={styles.threeDots} />
            </div>
            <div className={styles.followWrapper}>
              <p className={styles.posts}>1,345 posts</p>
              <p className={styles.followerList}>122k followers</p>
              <p className={styles.followingList}>184 following</p>
            </div>
            <div className={styles.nameWrapper}>
              <p className={styles.name}>Surakysha Panta</p>
            </div>
            <div className={styles.bioWrapper}>
              <p className={styles.bio}>
                hey I am Surakhya panta i am professional actor <br />
                and I love dancing and i <br />
                am also a very big part of nepal best <br />
                documentaries
              </p>
              <p>Followed by mirumgr, shrinkhala_, dayahangrai + 1 more</p>
            </div>
          </div>
        </div>
        <div className={styles.storyHighlightsWrapper}>
          {
            Highlight.map((item)=>{
              return <Storyhighlight item={item}/>
            })
          }
        </div>
        <div className={styles.postContainer}>
          <div className={styles.line}></div>
          <div className={styles.categoryProfile}>
            <div className={styles.categoryWrapper}>
              <BsFillPostcardHeartFill/>
              <p>Post</p>
            </div>
            <div className={styles.categoryWrapper}>
              <MdOutlineVideoLibrary/>
              <p>Reels</p>
            </div>
            <div className={styles.categoryWrapper}>
              <PiTagSimpleFill/>
              <p>Tagged</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;