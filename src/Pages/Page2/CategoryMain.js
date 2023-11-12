import React from 'react'
import { useState } from 'react';
import styles from './CategoryMain.module.css'
import { useNavigate } from 'react-router-dom';
import Category from '../../Component/Category/Category';
import categoryChips from '../../Component/Category/CategoryChipsData';
import SelectedCategory from '../../Component/SelectedCategory/SelectedCategory';


let nextId = 0;
const CategoryMain = () => {

    const navigate = useNavigate();

    const [seltedCategory, setSeltedCategory] = useState([]);
    const [chips, setChips] = useState(categoryChips);
    const [errorMessage, setErrorMessage] = useState(null);

    function isPresent(type) {
        for (const value in seltedCategory) {
            if (seltedCategory[value].type === type) {
                console.log("Enter click")
                return true;
            }
        }
        return false;
    }

    function selectCategory(type) {

        if (isPresent(type)) {
            setSeltedCategory(
                seltedCategory.filter(e =>
                    e.type !== type
                )
            )
        } else {

            setSeltedCategory([...seltedCategory, { id: nextId++, type: type }])
        }
        setChips(
            chips.map((chip) =>
                chip.type === type
                    ? { ...chip, selected: !chip.selected }
                    : chip
            )
        );
    }

    function onClickNext() {
        let selectedCategoty = seltedCategory.map((e) => e)

        if (selectedCategoty.length <= 2) {
            //  alert('Please Select any 3 Category')
            setErrorMessage("Select any 3 categories");
            return
        }
        localStorage.setItem('selectedCategory', JSON.stringify(selectedCategoty))
        navigate('/super-app-1/home');

    }

    return (
        <div className={styles.container}>
            <div className={styles.text_box}>
                <div className={styles.text}>
                    <h2>super app</h2>
                    <p>Choose your entertainment category</p>
                </div>
                <div className={styles.selted_box}>
                    {seltedCategory != null && seltedCategory.map((category) =>
                        <SelectedCategory key={category.id} type={category.type} selectCategory={selectCategory} />
                    )}
                </div>
                {errorMessage && (
                    <div style={{ color: 'red', fontSize: '20px'}}>
                        {errorMessage}
                    </div>
                )}
            </div>
            <div className={styles.category_box}>
                {chips.map((chip) =>
                    <Category
                        key={chip.id}
                        {...chip}
                        selectCategory={selectCategory}
                    />)}
            </div>
            <button
                className={styles.next_btn}
                onClick={onClickNext}>
                Next
            </button>
        </div>
    )
}

export default CategoryMain
