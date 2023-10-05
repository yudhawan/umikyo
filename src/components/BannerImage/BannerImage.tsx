import React from 'react'
import { Slide } from 'react-slideshow-image';
import { bannerProp } from '../../types'
import styles from './BannerImage.module.scss'
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
const BannerImage = ({ data }: { data: bannerProp[] }) => {
  return (
    <div className={styles.container}>
      <Slide autoplay={data.length > 1} arrows={data.length > 1} indicators={data.length > 1} >
        {
          data?.map((val) =>
            <div className={styles.image} key={val.id}>
              <Image src={val.image} alt='name' width={1024} height={800} />
            </div>
          )
        }
      </Slide>
    </div>
  )
}

export default BannerImage