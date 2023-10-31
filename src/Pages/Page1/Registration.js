import React from 'react'
import styles from './Registration.module.css'
import LeftSide from '../../Component/LeftSide/LeftSide'
import RightSide from '../../Component/RightSide/RightSide'

const Registration = () => {
  return (
    <div className={styles.container}>
      <LeftSide/>
      <RightSide/>
    </div>
  )
}

export default Registration
