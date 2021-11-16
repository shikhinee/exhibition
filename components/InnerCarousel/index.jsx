//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/CarouselButton";
import { mediaByIndex, length, mediaPhotoCount, photoLength, photoByCount } from "@/components/Media";
import CarouselThumb from "@/components/CarouselThumb"
//import STORE from '@/store'

import styles from './InnerCarousel.module.scss'

const InnerCarousel = ({ photos, setLockParentScroll, count }) => {

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

	useEffect(() => {
		if (!embla) return;
		embla.on("pointerDown", () => setLockParentScroll(true));
		embla.on("pointerUp", () => setLockParentScroll(false));
	}, [embla, setLockParentScroll]);

	return (
		<div className={styles.container}>
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
			<div className={styles.emblaThumb}>
				<div className={styles.emblaViewport} ref={thumbViewportRef}>
					<div className={`${styles.emblaContainer} ${styles.emblaContainerThumb}`}>
						{photos.map((index) => (
							<CarouselThumb
								onClick={() => onThumbClick(index)}
								selected={index === selectedIndex}
								imgSrc={photoByCount(count, index)}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>

	);
};
export default InnerCarousel;