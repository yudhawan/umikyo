
import React from 'react'
import cx from 'classnames'
import styles from './SearchInput.module.scss'
import { SearchInputProps, eventProp } from '../../types'

const SearchInput = ({ search, setSearch, classname }: SearchInputProps) => {
    return (
        <div className={cx(styles.searchContainer, classname)}>
            <input type='text' value={search} onChange={(e: eventProp) => setSearch(e.currentTarget.value)} className={styles.search} placeholder='Search' />
        </div>
    )
}

export default SearchInput