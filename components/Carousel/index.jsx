//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/CarouselButton";
import { mediaByIndex, length } from "@/components/Media";
import { useNestedEmblaCarousel } from "@/components/NestedCarousel";
import librarycover from "@/public/librarycover.jpeg"
import CarouselThumb from "@/components/CarouselThumb"
//import STORE from '@/store'

import styles from './Carousel.module.scss'
import { indexOf } from 'lodash';

// const NestedCarousel = ({ slides, setLockParentScroll }) => {
// 	const [viewportRef, embla] = useEmblaCarousel();

// 	useEffect(() => {
// 		if (!embla) return;
// 		embla.on("pointerDown", () => setLockParentScroll(true));
// 		embla.on("pointerUp", () => setLockParentScroll(false));
// 	}, [embla, setLockParentScroll]);
// 	console.log(mediaByIndex)

// 	return (
// 		<div className={styles.embla}>
// 			<div className={styles.emblaViewport} ref={viewportRef}>
// 				<div className={styles.emblaContainer}>
// 					{slides.map((index) => (
// 						<div className={styles.slide} key={index}>
// 							<div className={styles.slideInner}>
// 								<div className={styles.slideImg}>
// 									<div className={styles.image}>
									// <Image
									// 	layout='intrinsic'
									// 	src={mediaByIndex(index).image}
									// 	alt="A cool cat."
									// />
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const Carousel = ({ slides }) => {
	const [viewportRef, embla] = useEmblaCarousel();
	const setLockParentScroll = useNestedEmblaCarousel(embla);
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		embla.on("select", onSelect);
		onSelect();
	}, [embla, onSelect]);

	return (
		<div className={styles.embla}>
			<div className={styles.emblaViewport} ref={viewportRef}>
				<div className={styles.emblaContainer}>
					{slides.map((currElement, index) => (
						<div className={styles.slide} key={index}>
							<div className={styles.slideInner}>
								<div className={styles.slideImg}>
									<div className={styles.image}>
									<Image
										layout='intrinsic'
										src={mediaByIndex(index).image}
										alt="A cool cat."
									/>
									</div>
								</div>
							</div>


							<div className={styles.slideOuter}>
								<div className={styles.navButton}>
									<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
									<p>{index + 1} of {length}</p>
									<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
								</div>
								<div className={styles.text}>
									<div className={styles.textDesc}>
										<h4>{mediaByIndex(index).title}</h4>
										<p>{mediaByIndex(index).text}</p>
									</div>
									<div className={styles.scriptWidth}>
										<div className={styles.scriptImg}>
											<Image
												layout='fill'
												src={mediaByIndex(index).script}
												alt="A cool cat."
											/>
										</div>
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

export default Carousel;
