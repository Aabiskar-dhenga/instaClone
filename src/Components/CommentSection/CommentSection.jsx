import React, { useEffect, useState } from 'react'
import styles from "./CommentSection.module.css"
// import { useParams } from 'react-router'
import axios from 'axios'
import Comment from '../Comment/Comment';



const CommentSection = ({id}) => {

  let [ CommentCollection , setCommentCollection] = useState([])


    

    
  useEffect(() => {
    FetchComment();
  }, []);

    let api =`https://dummyapi.io/data/v1/post/${id}/comment`
    let FetchComment = async ()=>{
// alert("api Fetched")
      try{

        let { data }=  await axios.get(api,{
          headers:{
            "app-id": "651562a4a14b3c63fae4a0d5",
          }
        })
        let apiData =data.data;
        setCommentCollection(apiData)
        console.log("this is comment data ", data.data)
        
      }
      catch(error){
        console.log("this is api err", error)
      }
    }
  return (
    <div className={styles.commentSectionContainer}>
        <input className={styles.inputBox} placeholder='Enter Your Comment' type="text" />
        <div className={styles.btnWrapper}>
<button className={styles.cancelBtn}>Cancel</button>
        <button className={styles.commentBtn}>Comment</button>
        </div>
        <div className={styles.commentWrapper}>
          {
            CommentCollection.map((item)=>{

              return <Comment item={item} />

            })
            
          }
        </div>
    </div>
  )
}

export default CommentSection