//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel2 from '@/components/Carousel2'
import Titles from '@/components/Titles'
//import COMPOSITES from '@/composites'
import cover3 from '@/public/Cover3.png'
//import COMPONENT from '@/components'

import styles from './Exhibition3.module.scss'

const Page3 = (props) => {
	const photos = (selectedIndex) => {
		// console.log(selectedIndex)
		return Array.from(Array(2).keys());
	}
	const SLIDE_COUNT = 9;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main className={styles.container}>
			<div className={styles.coverContainer}>
				<div className={styles.coverimg}>
					<Image
						alt='cover'
						src='/Cover3.png'
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
					<p>МУҮНС нь олон төрлийн ном бүтээлийг хадгалсан байдгаас бид түүхэн ач холбогдол, ур хийц, ашигласан материалд үндэслэн хамгийн онцгой бүтээлүүдээ сорчлон толилуулж байна. Жишээлбэл 71.1 метр цаасан дээр бичигдсэн хуйлмал "Эрдэнийн товч" нь яах аргагүй өвөрмөц байдлаар бүтээгдсэн онцгой өв билээ.</p>
				</div>
				<div className={styles.imgContainer}>
				<div className={styles.scriptImg}>
						<Image
							alt='cover'
							src={Titles[2].image}
							layout='responsive'
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
			<Carousel2 slides={slides} photos={photos}/>
		</main>
	)
};

export default Page3;
