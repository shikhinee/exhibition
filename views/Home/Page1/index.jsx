//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel from '@/components/Carousel'
import Titles from '@/components/Titles'
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
						src='/Cover1.png'
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
					<p>Монгол Улсын Үндэсний Номын Санд түүхийн чухал баримт болох судар бичгүүд маш олон тоотой хадгалагддаг бөгөөд тэдгээрийн ихэнх нь Монгол улсад цор ганц хувиар хадгалагдаж буй гар бичмэлүүд байдаг. Мөн тэдгээр зохиол бүтээлийн ихэнхи нь монголын түүх болон буддын шашин, гүн ухааны хөлгөн судруудын дурсгал байдаг юм. Монголчуудын бүтээсэн сурвалж бичгүүд  хүн төрөлхтний оюуны соёлд жинтэй хувь нэмэр оруулдаг билээ. </p>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.scriptImg}>
						<Image
							alt='cover'
							src={Titles[0].image}
							layout='responsive'
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
