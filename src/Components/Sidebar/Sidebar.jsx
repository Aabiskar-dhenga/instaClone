import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserDetailContext } from "../../Usecontext/Usecontext";

const Sidebar = () => {
  const {
    state: { userInfo },
  } = useContext(UserDetailContext);

  return (
    <div className={styles.sidebarContainer}>
      <Link className={styles.Link} to="/">
        <h3 className={styles.heading}>Instagram</h3>
      </Link>
      <div className={styles.sidebarContent}>
        <Link className={styles.Link} to="/">
          <div className={styles.iconWrapper}>
            <AiFillHome className={styles.sidebarIcon} />
            <p className={styles.sidebarP}>Home</p>
          </div>
        </Link>
        <div className={styles.iconWrapper}>
          <AiOutlineSearch className={styles.sidebarIcon} />
          <p className={styles.sidebarP}>Search</p>
        </div>
        {/* <div className={styles.iconWrapper}>
          <MdOutlineExplore className={styles.sidebarIcon} />
          <p className={styles.sidebarP}> Explore</p>
        </div>
        <div className={styles.iconWrapper}>
          <BiMoviePlay className={styles.sidebarIcon} />
          <p className={styles.sidebarP}>Reels</p>
        </div> */}
        {/* <div className={styles.iconWrapper}>
          <FaFacebookMessenger className={styles.sidebarIcon} />
          <p className={styles.sidebarP}>Messages</p>
        </div>
        <div className={styles.iconWrapper}>
          <IoIosNotifications className={styles.sidebarIcon} />
          <p className={styles.sidebarP}>Notification</p>
        </div>
        <div className={styles.iconWrapper}>
          <MdOutlineAddBox className={styles.sidebarIcon} />
          <p className={styles.sidebarP}>Create</p>
        </div> */}
        <Link to={`/profile/${userInfo.id}`} className={styles.iconWrapper}>
          <img className={styles.humanImg} src={userInfo.picture} alt="human" />
          <p className={styles.sidebarP}>Profile</p>
        </Link>
      </div>
      {/* <div className={styles.iconWrapper}>
        <FiMenu className={styles.sidebarIcon} />
        <p>More</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
