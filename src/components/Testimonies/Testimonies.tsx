import { TestimoniesProp } from "../../types"
import styles from './Testimonies.module.scss'
const Testimonies = ({ id, img }: TestimoniesProp) => {
    return <div className={styles.card}>
        <img src={process.env.REACT_APP_BASE_URL + '/banner/img/' + img} />
    </div>

}

export default Testimonies