//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel from '@/components/Carousel'
import Titles from '@/components/Titles'
import cover4 from '@/public/cover4.jpg'
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './Exhibition4.module.scss'

const Page4 = (props) => {
	const SLIDE_COUNT = 6;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main className={styles.container}>
			<div className={styles.coverContainer}>
				<div className={styles.coverimg}>
					<Image
						alt='cover'
						src={cover4}
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
					<h2>IV. МОНГОЛЧУУДЫН БИЧИГ ҮСГИЙН ДУРСГАЛ</h2>
					<p>1. Соёмбо үсгийн цагаан толгой</p>
					<p>2. Суут Богд Чингис хааны тууж оршвой /тод үсгээр/</p>
					<p>3. Буянт хан хөвгүүний намтар /вагиндра үсгээр/</p>
					<p>4. Хэвтээ дөрвөлжин үсэг</p>
					<p>5. Галиг үсэг оршвой /али гали үсгээр/ </p>
					<p>6. Дөрвөлжин үсгийн дурсга</p>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image
							alt='cover'
							src={Titles[3].image}
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

export default Page4;
