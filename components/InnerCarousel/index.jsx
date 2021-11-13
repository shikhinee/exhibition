//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

import styles from './InnerCarousel.module.scss'

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "@/components/CarouselThumb";
import { mediaByIndex } from "../media";

const EmblaCarousel = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.viewport} ref={mainViewportRef}>
          <div className={styles.container}>
            {slides.map((index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.slideInner}>
                  <img
                    className={styles.slideImg}
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.thumb}>
        <div className={styles.viewport} ref={thumbViewportRef}>
          <div className={styles.containerThumb}>
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={mediaByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
