import cx from 'classnames'
import Icon from '../../components/Icon/Icon'
import { getSimilarLink, urlIcons } from '../../services/linkServices'
import { usePathname } from 'next/navigation'
import styles from './MobileMenuNavigation.module.scss'
import Link from 'next/link'
const MobileMenuNavigation = () => {
    const pathname = usePathname()
    const url = pathname.replace('/', '')
    return (
        <ul className={styles.container}>
            {
                urlIcons.filter(val => val.url !== 'setting' && val.url !== 'checkout').map(val => (
                    <li key={val.url}>
                        <Link href={val.url} onClick={() => {
                            if (val.url === 'cart') console.log('ss')
                        }} className={styles.menu} key={val.url}>
                            <Icon name={val.icon} className={cx(styles.icon, {
                                [styles.iconActive]: val.url === getSimilarLink(url ? url : '/')
                            })} />
                            <p className={cx(styles.textMenu, {
                                [styles.textMenuActive]: val.url === getSimilarLink(url ? url : '/')
                            })}>{val.url === '/' ? 'home' : val.url === 'konfirmasi' ? 'konfirm' : val.url}</p>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MobileMenuNavigation