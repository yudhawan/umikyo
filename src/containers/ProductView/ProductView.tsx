
import Product from '../../components/Products/Product'
import styles from './ProductView.module.scss'
function ProductView() {
  // const params = useParams()
  return (
    <div className={styles.main}>
      {/* {
        data?.filter(({ product_name }: any) => product_name === params.name)?.map((val: any) => <Product key={val.id} category={val.category} description={val.description} grosir_min={val.grosir_min} grosir_price={val.grosir_price} id={val.id} images={val.images} price={val.price} product_name={val.product_name} stock={val.stock} sub={val.sub} classname={styles.product} oneProduct />)
      } */}
    </div>
  )
}

export default ProductView