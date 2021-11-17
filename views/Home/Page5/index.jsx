//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel4 from '@/components/Carousel4'
import Titles from '@/components/Titles'
import cover5 from '@/public/cover5.jpg'
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from './Exhibition5.module.scss'

const Page5 = (props) => {
	const SLIDE_COUNT = 9;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main className={styles.container}>
			<div className={styles.coverContainer}>
				<div className={styles.coverimg}>
					<Image
						alt='cover'
						src={cover5}
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
					<p>1. Модон шогол</p>
					<p>2. Эсгий шогол</p>
					<p>3. Тугалын арьсан баринтаг</p>
					<p>4. Үнсэн самбар, хулсан үзэг</p>
					<p>5. Олсон боолт</p>
					<p>6. Судрын хавтас /бурхантай/</p>
					<p>7. Хулс, зэгсэн хавтас</p>
					<p>8. Судрын хавтас /зүү ороож оёсон/</p>
					<p>9. Судрын хавтас /оёмол/</p>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image
							alt='cover'
							src={Titles[4].image}
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
			<Carousel4 slides={slides} />
		</main>
	)
};

export default Page5;
