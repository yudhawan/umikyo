'use client'
import React, { useState } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import { typeId } from '@/constant/typeId'
import styles from './FilterByType.module.scss'
function FilterByType() {
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')
    return (
        <div className={styles.filterContainer}>
            <SearchInput search={search} setSearch={setSearch} classname={styles.search} />
            <select onChange={e => setType(e.target.value)} className={styles.selectContainer}>
                {
                    typeId.map(val => <option key={val.kode} value={val.kode}>{val.value}</option>)
                }

            </select>
        </div>
    )
}

export default FilterByType