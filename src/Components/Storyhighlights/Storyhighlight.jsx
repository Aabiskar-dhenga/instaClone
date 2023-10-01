import React from 'react'
import styles from "./Storyhighlight.module.css"

const Storyhighlight = ({item}) => {
  return (
    <div className={styles.highlightCard}>
        <div className={styles.imgWrapper}>

        
        <img src={item.img} alt="highlightImg"  className={styles.highlightImg} />
        </div>
        <p>{item.title}</p>
    </div>
  )
}

export default Storyhighlight