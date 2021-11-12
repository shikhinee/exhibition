//Next, React (core node_modules) imports must be placed here

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
      className={`${styles.slideInner} ${slideInnerThumb}`}
      type="button"
    >
      <img className={styles.slideThumbnail} src={imgSrc} alt="A cool cat." />
    </button>
  </div>
	)
};

export default CarouselThumb;
