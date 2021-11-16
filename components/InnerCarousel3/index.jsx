//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/CarouselButton";
import { mediaByIndex, length, mediaPhotoCount , photoLength, photoByCount} from "@/components/Media3";
import { useNestedEmblaCarousel } from "@/components/NestedCarousel";
import CarouselThumb from "@/components/CarouselThumb"
//import STORE from '@/store'

import styles from './InnerCarousel3.module.scss'

const InnerCarousel3 = ({photos ,setLockParentScroll , count }) => {
	const PHOTO_COUNT = photoLength[count];
	photos = Array.from(Array(PHOTO_COUNT).keys());
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
    console.log(count)
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

	useEffect(() => {
		if (!embla) return;
		embla.on("pointerDown", () => setLockParentScroll(true));
		embla.on("pointerUp", () => setLockParentScroll(false));
	}, [embla, setLockParentScroll]);

	return (
		<div className={styles.embla}>
			<div className={styles.emblaViewport} ref={mainViewportRef}>
				<div className={styles.emblaContainer}>
					{photos.map((index) => (
						<div className={styles.slide} key={index}>
							<div className={styles.slideInner}>
								<div className={styles.slideImg}>
									<div className={styles.image}>
									<Image
										layout='intrinsic'
										src={photoByCount(count , index)}
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
        
	);
};
export default InnerCarousel3;