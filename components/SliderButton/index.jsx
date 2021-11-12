//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

import styles from './SliderButton.module.scss'

const SliderButton = ({ direction, moveSlide }) => {
	console.log(direction, moveSlide);
	 return (
		<button
		onClick={moveSlide}
		className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
		>
		<img src={direction === "next" ? rightArrow : leftArrow} />
		</button>
	)
};

export default SliderButton;
