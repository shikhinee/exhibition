//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/CarouselButton";
import { Slide } from "@/components/CarouselSlide";
import { mediaByIndex, length } from "@/components/Media";
import librarycover from "@/public/librarycover.jpeg"
import CarouselThumb from "@/components/CarouselThumb"
//import STORE from '@/store'

import styles from './Carousel.module.scss'
import { indexOf } from 'lodash';

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
	console.log(length);
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
											width='1000'
											height='1000'
											layout='fill'
											src={mediaByIndex(index).image}
											alt="A cool cat."
										/>
									</div>
								</div>
							</div>
							<div className={styles.slideOuter}>
								<div className={styles.navButton}>
									<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
									<p>	{currElement + 1} of {length}</p>
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
