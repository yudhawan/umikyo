import { ProductsProp } from '../../types'
import cx from 'classnames'
import CartIcon from '../../icons/cart.svg'
import Icon from '../Icon/Icon'
import styles from './Product.module.scss'
import Image from 'next/image'

function Product({ category, description, grosir_min, grosir_price, id, images, price, product_name, stock, sub, classname, oneProduct }: ProductsProp) {
  return (
    <>
      {oneProduct ? <div className={cx(styles.cardContainer, classname, {
        [styles.oneProductContainer]: oneProduct
      })}>
        <div className={cx(styles.imgContainer, { [styles.imgContainerOneProduct]: oneProduct })}>
          <Image alt={product_name} src={images} width={210} height={200} />
        </div>
        <div className={cx(styles.info, { [styles.infoOneProduct]: oneProduct })}>
          <div className={styles.infoBlock}>
            <span className={cx(styles.infoName, { [styles.infoNameOneProduct]: oneProduct })}>{product_name}</span>
            <span className={styles.category}>{category}</span>
          </div>
          {/* <p className={cx(styles.infoPrice, { [styles.infoPriceOneProduct]: oneProduct })}>Rp. {price}</p> */}
          {oneProduct && <p className={styles.desc}>{description}</p>}
          <div className={styles.buttonProductContainer}>
            <div onClick={() => console.log('dsa')}><Icon name={CartIcon} className={styles.icon} /></div>
            <span onClick={() => console.log('dsa')} className={styles.buy}>buy</span>
          </div>
        </div>
      </div>
        : <a href={oneProduct ? '' : `product/${product_name}`} className={cx(styles.cardContainer, classname)}>
          <div className={cx(styles.imgContainer)}>
            <Image alt={product_name} src={images} width={210} height={200} />
          </div>
          <div className={cx(styles.info)}>
            <div className={styles.infoBlock}>
              <span className={cx(styles.infoName)}>{product_name}</span>
              <span className={styles.category}>{category}</span>
            </div>
            {/* <p className={cx(styles.infoPrice, { [styles.infoPriceOneProduct]: oneProduct })}>Rp. {price}</p> */}
            {oneProduct && <p className={styles.desc}>{description}</p>}
          </div>
        </a>}
    </>
  )
}

export default Product