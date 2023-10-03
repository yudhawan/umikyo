'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchInput from '@/components/SearchInput/SearchInput'
import Category from '@/components/Category/Category'
import { AppDispatch, RootState } from '../store'
import Product from '@/components/Products/Product'
import { getProducts } from '@/action/productSlice'
import { getCategories } from '@/action/categoriesSlice'
import styles from './ProductsPage.module.scss'
function Products() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('')
  const { categories } = useSelector((state: RootState) => state.categories)
  const { products } = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [])
  return (
    <div className={styles.main}>
      <SearchInput search={search} setSearch={setSearch} />
      <div className={styles.categoriesContainer}>
        <Category category={'All'} id={0} key={0} sub_categories={[]} onClick={() => setCat('')} />
        {
          categories?.map((val: any) => <Category category={val.category} id={val.id} key={val.id} sub_categories={val.sub_categories} onClick={() => setCat(val.category)} />)
        }
      </div>
      <div className={styles.products}>
        {
          products?.filter((val: any) => val.category.toLowerCase().includes(cat.toLowerCase())).filter((val: any) => val.product_name.toLowerCase().includes(search.toLowerCase())).map((val: any) => <Product key={val.id} category={val.category} description={val.description} grosir_min={val.grosir_min} grosir_price={val.grosir_price} id={val.id} images={val.images} price={val.price} product_name={val.product_name} stock={val.stock} sub={val.sub} />)
        }
      </div>
    </div>
  )
}

export default Products