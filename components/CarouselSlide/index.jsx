//Next, React (core node_modules) imports must be placed here
import { useState, useCallback } from "react";

//import STORE from '@/store'

import styles from './CarouselSlide.module.scss'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

 export const Slide = ({ imgSrc, inView }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <div className={`${hasLoaded ? `${styles.slide} ${styles.hasLoaded}` : `${styles.slide}`}`}>
      <div className={styles.slideInner}>
        <img
          className={styles.slideImg}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          onLoad={setLoaded}
          alt="A cool cat."
        />
      </div>
    </div>
  );
};
