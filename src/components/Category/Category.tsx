import React from 'react'
import cx from 'classnames'
import { categoryProp } from '../../types'
import styles from './Category.module.scss'
const Category = ({ id, category, sub_categories, isSub, classname, onClick }: categoryProp) => {
    return (
        <button className={cx(styles.container, classname)} onClick={onClick}>
            <p className={styles.category}>{category}</p>
            {
                isSub && sub_categories.length ? sub_categories.map((val: any, index: any) => <p key={index} className={styles.category}>/{val?.sub}</p>) : <></>
            }

        </button>
    )
}

export default Category