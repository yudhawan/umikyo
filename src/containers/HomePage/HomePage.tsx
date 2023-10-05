'use client'
import { useState, useEffect } from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import BannerImage from '../../components/BannerImage/BannerImage'
import Icon from '../../components/Icon/Icon'
import ProductsIcon from '../../icons/swatch.svg'
import TestimonyIcon from '../../icons/image.svg'
import Products from '../../components/Products/Product'
import Testimonies from '../../components/Testimonies/Testimonies'
import { AppDispatch, RootState, useRootSelector } from '@/app/store'
import { getProducts } from '@/action/productSlice'
import styles from './HomePage.module.scss'
import { bannerProp } from '@/types'

const HomePage = ({ banners }: { banners: bannerProp[] }) => {
  const { products } = useRootSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()
  const [toggle, setToggle] = useState(true)
  const [dataTestimonies, setDataTestimonies] = useState<object[]>([])
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div className={styles.mainContainer}>
      <BannerImage data={banners} />
      <div className={styles.container}>
        <div className={styles.switchContainer}>
          <button className={cx(styles.title, { [styles.activeIcon]: toggle })} onClick={() => setToggle(true)}>
            <Icon name={ProductsIcon} className={styles.icon} />
          </button>
          <button className={cx(styles.title, { [styles.activeIcon]: !toggle })} onClick={() => setToggle(false)}>
            <Icon name={TestimonyIcon} className={styles.icon} />
          </button>
        </div>
        {
          toggle ?
            <div className={styles.productsContainer}>
              <h1>Products</h1>
              <div className={styles.products}>
                {
                  products?.map((val: any) => <Products key={val.id} category={val.category} description={val.description} grosir_min={val.grosir_min} grosir_price={val.grosir_price} id={val.id} images={val.images} price={val.price} product_name={val.product_name} stock={val.stock} sub={val.sub} />)
                }
              </div>
            </div> :
            <div className={styles.testimonyContainer}>
              <h1>Testimonies</h1>
              <div className={styles.testimonies}>
                {
                  dataTestimonies?.map((val: any) => <Testimonies id={val.id} img={val.img} key={val.id} />)
                }
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default HomePage