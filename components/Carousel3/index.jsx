//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/CarouselButton";
import { mediaByIndex, length, mediablabla, photoLength } from "@/components/Media3";
import { useNestedEmblaCarousel } from "@/components/NestedCarousel";
import CarouselThumb from "@/components/CarouselThumb"
import InnerCarousel3 from "@/components/InnerCarousel3"
//import STORE from '@/store'

import styles from './Carousel3.module.scss'

const Carousel3 = ({ slides }, props) => {

	const [viewportRef, embla] = useEmblaCarousel();
	const setLockParentScroll = useNestedEmblaCarousel(embla);
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
	const photos = Array.from(Array(mediablabla[selectedIndex]).keys());	useEffect(() => {
		if (!embla) return;
		setScrollSnaps(embla.scrollSnapList());
		embla.on("select", onSelect);
		onSelect();
	}, [embla, onSelect]);
	return (
		<div className={styles.embla}>
			<div className={styles.navButton}>
				<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
				<p>{selectedIndex + 1} of {length}</p>
				<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
			</div>
			<div className={styles.emblaViewport} ref={viewportRef}>
				<div className={styles.emblaContainer}>
					{slides.map((currElement, index) => (
						<div className={styles.slide} key={index}>
							<div className={styles.slideInner}>
								<div className={styles.slideImg}>
									<div className={styles.image}>
										<InnerCarousel3
											photos={photos}
											setLockParentScroll={setLockParentScroll}
											count={selectedIndex}
										/>
									</div>
								</div>
							</div>


							<div className={styles.slideOuter}>
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

export default Carousel3;
