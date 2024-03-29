//Next, React (core node_modules) imports must be placed here
import Image from "next/image"
//import STORE from '@/store'

import styles from './CarouselThumb.module.scss'

const CarouselThumb = ({ selected, onClick, imgSrc }) => {
	 return (
<div
    className={` ${
      selected ? `${styles.slide} ${styles.slideThumb} ${styles.isSelected}`: `${styles.slide} ${styles.slideThumb}`
    }`}
  >
    <button
      onClick={onClick}
      className={`${styles.slideInner} ${styles.slideInnerThumb}`}
      type="button"
    >
      <div className={styles.image}>
      <Image className={styles.slideThumbnail} src={imgSrc} priority alt="A cool cat." />
      <div>Image</div>
      </div>
    </button>
  </div>
	)
};

export default CarouselThumb;
