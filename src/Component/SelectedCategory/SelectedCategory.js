import React from 'react'
import styles from './SelectedCategory.module.css'

const SelectedCategory = (props) => {

    function onClick(){
        props.selectCategory(props.type)
      }
  return (
    <div className={styles.selected_card}>
      <div>{props.type}</div>
      <button onClick={onClick}>x</button>
    </div>
  )
}

export default SelectedCategory
