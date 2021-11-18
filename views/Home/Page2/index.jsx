//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel1 from '@/components/Carousel1'
import Titles from '@/components/Titles'
//import COMPOSITES from '@/composites'
import cover2 from '@/public/Cover2.png'
//import COMPONENT from '@/components'

import styles from './Exhibition2.module.scss'

const Page2 = (props) => {
	const photos = (selectedIndex) => {
		// console.log(selectedIndex)
		return Array.from(Array(2).keys());
	}
	const SLIDE_COUNT = 9;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<div className={styles.container}>
			<main className={styles.container}>
				<div className={styles.coverContainer}>
					<div className={styles.coverimg}>
						<Image
							alt='cover'
							src='/Cover2.png'
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
						<p>Дэлхий дахинд үнэт материалаар ном бүтээж байсан түүх маш олон бий. Гэхдээ тэдгээр нь тухай тухайн улсад ганц хоёр тоотой бүтээгдсэн байх боловч Монголчууд шиг олон төрлийн эрдэнэсээр олон тооны ном бүтээж байсан түүх бараг үгүй билээ. Энэ нь бидний өвөг дээдэс хэрхэн номыг эрхэмлэн дээдэлж байсны баталгаа болно. Бид өөрсдийн биедээ хөдсөн дээл өмсөвч судар номоо торгоор баринтаглан хоймортоо залдаг уламжлалтай ард түмэн билээ.</p>
					</div>
					<div className={styles.imgContainer}>
					<div className={styles.scriptImg}>
						<Image
							alt='cover'
							src={Titles[1].image}
							layout='responsive'
							objectFit='contain'
						/>
					</div>
					</div>
				</div>
				<Carousel1 slides={slides} photos={photos}/>
			</main>
		</div>
	)
};

export default Page2;
