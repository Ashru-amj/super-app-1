import styles from './Category.module.css'

import React from 'react'

const Category = (props) => {

    function handleClick() {
        props.selectCategory(props.type); 
    }

  return (
    <div className={`${styles.chip_box} ${props.type} ${props.selected?styles.active:styles.inactive}`} onClick={handleClick}>
            <h5>{props.type}</h5>
            <div className={styles.img_box}>
                <img src={props.img} alt={props.type} />
            </div>
        </div>
  )
}

export default Category
