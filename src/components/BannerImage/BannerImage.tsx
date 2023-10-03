import React from 'react'
import { Slide } from 'react-slideshow-image';
import { bannerProp } from '../../types'
import styles from './BannerImage.module.scss'
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
const BannerImage = ({ data }: { data: object[] }) => {
  return (
    <div className={styles.container}>
      <Slide autoplay={data.length > 1} arrows={data.length > 1} indicators={data.length > 1} >
        {
          data?.map(({ name, id }: bannerProp) =>
            <div className={styles.image} key={id}>
              <Image src={`${process.env.BASE_URL}/banner/img/${name}`} alt='name' width={1024} height={800} />
            </div>
          )
        }
      </Slide>
    </div>
  )
}

export default BannerImage