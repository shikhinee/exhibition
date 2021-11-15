//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/CarouselButton";
import { mediaByIndex, length, mediaPhotoCount , photoLength} from "@/components/Media";
import { useNestedEmblaCarousel } from "@/components/NestedCarousel";
import CarouselThumb from "@/components/CarouselThumb"
//import STORE from '@/store'

import styles from './InnerCarousel.module.scss'

const InnerCarousel = ({ setLockParentScroll , count }) => {
	const [viewportRef, embla] = useEmblaCarousel();
    const PHOTO_COUNT = photoLength[count];
 	const photos = Array.from(Array(PHOTO_COUNT).keys());
    // console.log(mediaPhotoCount(0))

	useEffect(() => {
		if (!embla) return;
		embla.on("pointerDown", () => setLockParentScroll(true));
		embla.on("pointerUp", () => setLockParentScroll(false));
	}, [embla, setLockParentScroll]);

	return (
		<div className={styles.embla}>
			<div className={styles.emblaViewport} ref={viewportRef}>
				<div className={styles.emblaContainer}>
					{photos.map((index) => (
						<div className={styles.slide} key={index}>
							<div className={styles.slideInner}>
								<div className={styles.slideImg}>
									<div className={styles.image}>

									
									<Image
										layout='intrinsic'
										src={mediaByIndex(index).image[0]}
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
export default InnerCarousel;