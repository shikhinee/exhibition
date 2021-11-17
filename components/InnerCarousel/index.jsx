//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, DotButton } from "@/components/CarouselButton";
import { mediaByIndex, length, mediaPhotoCount, photoLength, photoByCount } from "@/components/Media";
import CarouselThumb from "@/components/CarouselThumb"
//import STORE from '@/store'

import styles from './InnerCarousel.module.scss'

const InnerCarousel = ({ photos, setLockParentScroll, count }) => {

	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
	  embla
	]);
  
	const onSelect = useCallback(() => {
	  if (!embla) return;
	  setSelectedIndex(embla.selectedScrollSnap());
	  setPrevBtnEnabled(embla.canScrollPrev());
	  setNextBtnEnabled(embla.canScrollNext());
	}, [embla, setSelectedIndex]);
  
	useEffect(() => {
	  if (!embla) return;
	  onSelect();
	  setScrollSnaps(embla.scrollSnapList());
	  embla.on("select", onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	return (
		<>
					<div className={styles.emblaDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
			<div className={styles.embla}>
				<div className={styles.emblaViewport} ref={viewportRef}>
					<div className={styles.emblaContainer}>
						{photos.map((index) => (
							<div className={styles.slide} key={index}>
								<div className={styles.slideInner}>
									<div className={styles.slideImg}>
										<div className={styles.image}>
											<Image
												layout='responsive'
												src={photoByCount(count, index)}
												alt="A cool cat."
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			</>
	);
};
export default InnerCarousel;