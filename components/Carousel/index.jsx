//Next, React (core node_modules) imports must be placed here
import { Swiper, SwiperSlide } from 'swiper/react';
//import STORE from '@/store'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Carousel.module.scss'

const Carousel = (props) => {
	 return (
		<Swiper
		// install Swiper modules
		modules={[Navigation, Pagination, Scrollbar, A11y]}
		spaceBetween={50}
		slidesPerView={3}
		navigation
		pagination={{ clickable: true }}
		scrollbar={{ draggable: true }}
		onSwiper={(swiper) => console.log(swiper)}
		onSlideChange={() => console.log('slide change')}
	  >
		<SwiperSlide><div style={{height: 200, width: 1000, backgroundColor:'aliceblue'}}>Slide 1</div></SwiperSlide>
		<SwiperSlide><div style={{height: 200, width: 400, backgroundColor:'aliceblue'}}>Slide 2</div></SwiperSlide>
		<SwiperSlide><div style={{height: 200, width: 400, backgroundColor:'aliceblue'}}>Slide 3</div></SwiperSlide>
		<SwiperSlide><div style={{height: 200, width: 400, backgroundColor:'aliceblue'}}>Slide 4</div></SwiperSlide>
		...
	  </Swiper>
	)
};

export default Carousel;
