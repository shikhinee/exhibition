//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel1 from '@/components/Carousel1'
import Titles from '@/components/Titles'
import cover2 from '@/public/cover2.jpg'
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './Exhibition2.module.scss'

const Page2 = (props) => {
	const SLIDE_COUNT = 9;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<div className={styles.container}>
			<main className={styles.container}>
				<div className={styles.coverContainer}>
					<div className={styles.coverimg}>
						<Image
							alt='cover'
							src={cover2}
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
						<h2>II.  ЭРДЭНЭСЭЭР УРЛАСАН БҮТЭЭЛИЙН ДЭЭЖИС</h2>
						<p>1. Есөн эрдэнийн Ганжуур</p>
						<p>2. Есөн эрдэнийн Жадамба</p>
						<p>3. Алтан Жадамба </p>
						<p>4. Алтан Жадамба /зүмбэртэй/</p>
						<p>5. Мөнгөн Сандуйн жүд</p>
						<p>6. Жадамба /найман тахилтай/</p>
						<p>7. Хутагт билгийн чанад хязгаараа (хязгаарт) хүрсэн найман мянгат оршвой /Жадамба/</p>
						<p>8. Ц. Бавуудорж &apos;Монголын их амар амгалан&apos;</p>
						<p>9. Хутагт очироор огтлогч билгийн чанад хязгаараа (хязгаарт) хүрсэн их хөлгөн судар оршвой</p>
					</div>
					<div className={styles.imgContainer}>
						<div className={styles.img}>
							<Image
								alt='cover'
								src={Titles[1].image}
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</div>
				</div>
				<Carousel1 slides={slides} />
			</main>
		</div>
	)
};

export default Page2;
