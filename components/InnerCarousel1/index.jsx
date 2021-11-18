//Next, React (core node_modules) imports must be placed here
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, DotButton } from "@/components/CarouselButton";
import CarouselThumb from "@/components/CarouselThumb";
//import STORE from '@/store'

import styles from "./InnerCarousel1.module.scss";

const InnerCarousel1 = ({ photos, setLockParentScroll, count }) => {
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
	useEffect(() => {
		if (!embla) return;
		embla.on("pointerDown", () => setLockParentScroll(true));
		embla.on("pointerUp", () => setLockParentScroll(false));
	  }, [embla, setLockParentScroll]);

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
			<div className={styles.container}>
				<div className={styles.embla}>
					<div className={styles.emblaViewport} ref={viewportRef}>
						<div className={styles.emblaContainer}>
							{photos.map((photo, index) => (
								<div className={styles.slide} key={index}>
									<div className={styles.slideInner}>
										<div className={styles.slideImg}>
											<div className={styles.image}>
												<Image
													layout="responsive"
													width="100%"
													height="100%"
													src={photo}
													alt="Poor Internet Connection."
												/>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default InnerCarousel1;
