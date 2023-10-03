import FilterByType from '@/components/FilterByType/FilterByType'
import styles from './SellersPage.module.scss'
import { SellersProp } from '@/types'

async function getSellers() {
    const data = await fetch(process.env.BASE_URL + '/users/getusers')
    return data.json()
}
async function Sellers() {
    const sellers = await getSellers()
    return (
        <div className={styles.main}>
            <FilterByType />
            <section className={styles.sellersContainer}>
                {
                    sellers?.map((value: SellersProp) => <p>{value.nama}</p>)
                }
            </section>
        </div>
    )
}

export default Sellers