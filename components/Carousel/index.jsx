//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/CarouselButton";
import { Slide } from "@/components/CarouselSlide";
import { mediaByIndex } from "@/components/Media";
import librarycover from "@/public/librarycover.jpeg"

//import STORE from '@/store'

import styles from './Carousel.module.scss'

const Carousel = ({ slides }) => {
	const [viewportRef, embla] = useEmblaCarousel({
		loop: true,
		skipSnaps: false
	});
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
					{slides.map((index) => (
						<div className={styles.slide} key={index}>
							<div className={styles.slideInner}>
								<Image
									className={styles.slideImg}
									src={mediaByIndex(index)}
									alt="A cool cat."
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
			<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
		</div>
	);
};

export default Carousel;
