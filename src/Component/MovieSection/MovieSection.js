import React from 'react'
import styles from './MovieSection.module.css'
const MovieSection = (props) => {
  return (
    <div className={styles.container}>
      <img src={`https://image.tmdb.org/t/p/w200/${props.img}`} alt="img" />
    </div>
  )
}

export default MovieSection
