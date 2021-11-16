//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel from '@/components/Carousel'
import Titles from '@/components/Titles'
import cover3 from '@/public/cover3.jpg'
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './Exhibition3.module.scss'

const Page3 = (props) => {
	const SLIDE_COUNT = 9;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main className={styles.container}>
			<div className={styles.coverContainer}>
				<div className={styles.coverimg}>
					<Image
						alt='cover'
						src={cover3}
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
					<h2>III. ОНЦГОЙ БҮТЭЭЛИЙН ДЭЭЖИС</h2>
					<p>1. Сахиусан Дара эх</p>
					<p>2. Цогт нууц хураангуйн үндэс /Сандуйн жүд/</p>
					<p>3. Арван бурханы тангараг </p>
					<p>4. Энх-Амгалангийн Жадамба</p>
					<p>5. Эрдэнийн товч /хуйлмал/</p>
					<p>6. Үлгэрийн далай /төмөр хавтастай/</p>
					<p>7. С. Шагж &apos;Дөт зам&apos;</p>
					<p>8. Монголын нууц товчоо /хамгийн анхны хэвлэл/</p>
					<p>9. Итгэл /зүү ороож оёсон/</p>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image
							alt='cover'
							src={Titles[2].image}
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
			<Carousel slides={slides} />
		</main>
	)
};

export default Page3;
