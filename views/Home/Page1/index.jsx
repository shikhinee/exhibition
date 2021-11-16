//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel from '@/components/Carousel'
import Titles from '@/components/Titles'
import cover1 from '@/public/cover1.jpg'
//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import styles from './Exhibition1.module.scss'
import {mediablabla} from '@/components/Media'

const Page1 = (props) => {

	const photos = (selectedIndex) => {
		// console.log(selectedIndex)
		return Array.from(Array(2).keys());
	}

	const SLIDE_COUNT = 10;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main className={styles.container}>
			<div className={styles.coverContainer}>
				<div className={styles.coverimg}>
					<Image
						alt='cover'
						src={cover1}
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
					<h2>I. СУРВАЛЖ БИЧГИЙН ДЭЭЖИС</h2>
					<p>1. Жалзэ тэмбан Ганжуур</p>
					<p>2. Лувсанданзан &apos;Эртний хаадын үндэслэсэн төр ёсны зохиолыг товчлон хураасан алтан товч хэмээх оршвой&apos;</p>
					<p>3. Чингисээс эхлэн Халхын бүх олон ноёдын угсаа залгамжилсан хүрдэн зургийн бичмэл</p>
					<p>4. Асрагч нэртийн түүх</p>
					<p>5. Эрдэнийн товч /Өргөө эх/</p>
					<p>6. Чингисийн дурсгалын түүвэр</p>
					<p>7. Ж. Цэвээн &apos;Монгол улсын түүх&apos;</p>
					<p>8. &apos;Мэргэд гарахын орон&apos; толь бичгийн гар бичмэл</p>
					<p>9. Богдын өргөмжлөл</p>
					<p>10. Оюун түлхүүр</p>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image
							alt='cover'
							src={Titles[0].image}
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
			<Carousel slides={slides} photos={photos} />
		</main>
	)
};

export default Page1;
