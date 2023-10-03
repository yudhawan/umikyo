'use client'
import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { usePathname, useRouter } from 'next/navigation'
import Icon from '../../components/Icon/Icon'
import shopee from '../../icons/shopee.svg'
import whatsapp from '../../icons/whatsapp.svg'
import tiktok from '../../icons/tiktok.svg'
import instagram from '../../icons/instagram.svg'
import cart from '../../icons/cart.svg'
import user from '../../icons/user.svg'
import userSolid from '../../icons/userSolid.svg'
import { getSimilarLink, urlIcons } from '../../services/linkServices'
import Basket from '../Basket/Basket'
import styles from './Headers.module.scss'

function Headers() {
  const [showCart, setShowCart] = useState<boolean>(false)
  const pathname = usePathname()
  const url = pathname.replace('/', '')

  return (
    <div style={{ position: 'relative' }}>
      {showCart && <Basket setAction={setShowCart} action={showCart} />}
      <header className={styles.container}>
        <Icon name={userSolid} className={styles.iconUserMob} />
        <section className={styles.menu}>
          <Link href={"/"} className={styles.title} replace><img src={'./logo.png'} /></Link>
          {
            urlIcons.filter((val) => val.url !== 'setting' && val.url !== 'cart' && val.url !== 'checkout').map((val, index) => (
              <Link replace key={val.url} href={val.url} className={cx(styles.menuList, {
                [styles.menuListActive]: val.url === getSimilarLink(url ? url : '/')
              })} id={`${index}`}>
                <Icon name={val.icon} className={styles.icon} />
                <h2>{val.url === '/' ? 'home' : val.url}</h2>
              </Link>
            ))
          }
          <Link replace href={'/signup'} className={cx(styles.joinMenu, styles.menuList, {
            [styles.menuListActive]: '/signup' === getSimilarLink(url ? url : '/')
          })}><h2 >JOIN</h2></Link>
        </section>
        <section className={styles.rightMenu}>
          <button className={styles.cartIcon} onClick={() => setShowCart(!showCart)}>
            <Icon name={cart} />
            <span className={styles.badge}>4</span>
          </button>
          <button className={styles.cartIcon}>
            <Icon name={user} />
          </button>
        </section>
      </header>

      <ul className={styles.containerFooter}>
        <li className={styles.sosmed}>
          <Link target="_blank" rel="noopener noreferrer" href={'https://www.instagram.com/umikyo.official/'} className={styles.iconSosmed}>
            <Icon name={instagram} />
          </Link>
        </li>
        <li className={styles.sosmed}>
          <Link target="_blank" rel="noopener noreferrer" href={'https://api.whatsapp.com/send?phone=6282332411031'} className={styles.iconSosmed}>
            <Icon name={whatsapp} />
          </Link>
        </li>
        <li className={styles.sosmed}>
          <Link target="_blank" rel="noopener noreferrer" href={'https://www.tiktok.com/'} className={cx(styles.iconSosmed, styles.iconSosmedTiktok)}>
            <Icon name={tiktok} />
          </Link>
        </li>
        <li className={styles.sosmed}>
          <Link target="_blank" rel="noopener noreferrer" href={'https://shopee.co.id/umikyo.official?smtt=0.0.9'} className={cx(styles.iconSosmed, styles.iconSosmedShopee)}>
            <Icon name={shopee} />
          </Link>
        </li>
      </ul>
    </div >
  )
}

export default Headers