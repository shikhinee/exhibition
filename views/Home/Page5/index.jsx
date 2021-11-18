//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel4 from '@/components/Carousel4'
import Titles from '@/components/Titles'
//import COMPOSITES from '@/composites'
import cover5 from '@/public/Cover5.png'
//import COMPONENT from '@/components'

import styles from './Exhibition5.module.scss'

const Page5 = (props) => {
	const photos = (selectedIndex) => {
		// console.log(selectedIndex)
		return Array.from(Array(2).keys());
	}
	const SLIDE_COUNT = 8;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main className={styles.container}>
			<div className={styles.coverContainer}>
				<div className={styles.coverimg}>
					<Image
						alt='cover'
						src='/Cover5.png'
						layout='fill'
						objectFit='cover'
						quality={100}
					/>
				</div>
				<div className={styles.shadow}>
				</div>
			</div>
			<div className={styles.containerDescription}>
				<div className={styles.text}>
					<h2>УЛАМЖЛАЛТ БИЧГИЙН ХЭРЭГЛЭГДЭХҮҮН</h2>
					<p>Монголчууд ном бүтээх аргыг Төвөдөөс сурсан гэж хэлж болно. Гэхдээ илүү ихээр нүүдэлчин соёл иргэншлийн нөлөө туссан байдгийг анзаарч болно. Нэг газраас нөгөө газар нүүдэллэн явагч ард түмэн мал аж ахуйн гаралтай бүтээгдэхүүнээр аяны дөрөө даах бичгийн хэрэглэгдэхүүн урлаж байжээ. Мөн хулс, даавуу, модоор төрөл бүрийн хэрэглэгдэхүүн урлаж ном судар бүтээж байсан арвин баялаг уламжлалтай билээ. Тэр бүхний дээжээс та бүхэндээ толилуулж байна.</p>
				</div>
				<div className={styles.imgContainer}>
				<div className={styles.scriptImg}>
						<Image
							alt='cover'
							src={Titles[4].image}
							layout='responsive'
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
			<Carousel4 slides={slides} photos={photos}/>
		</main>
	)
};

export default Page5;
