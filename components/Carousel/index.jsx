//Next, React (core node_modules) imports must be placed here
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/CarouselButton";
import { media } from "@/components/Media";
import { useNestedEmblaCarousel } from "@/components/NestedCarousel";
import InnerCarousel from "@/components/InnerCarousel";
//import STORE from '@/store'

import styles from "./Carousel.module.scss";

const Carousel = ({ slides }, props) => {
  const [viewportRef, embla] = useEmblaCarousel();
  const setLockParentScroll = useNestedEmblaCarousel(embla);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);
  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);
  return (
    <div className={styles.embla}>
      <div className={styles.navButton}>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <p>
          {selectedIndex + 1} of {media.length}
        </p>
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className={styles.emblaViewport} ref={viewportRef}>
        <div className={styles.emblaContainer}>
          {slides.map((currElement, index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.slideInner}>
                <div className={styles.slideImg}>
                  <div className={styles.image}>
                    <InnerCarousel
                      photos={media[index].image}
                      setLockParentScroll={setLockParentScroll}
                      count={selectedIndex}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.slideOuter}>
                <div className={styles.textDesc}>
                  <h4>{media[index].title}</h4>
                  <p>{media[index].text1}</p>
                  <p>{media[index].text2}</p>
                  <p>{media[index].text3}</p>
                  <p>{media[index].text4}</p>
                  <p>{media[index].text}</p>
                </div>
                <div className={styles.scriptImg}>
                  <Image
                    width="100%"
                    height="100%"
                    layout="responsive"
                    src={media[index].script}
                    alt="Poor Internet Connection."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
