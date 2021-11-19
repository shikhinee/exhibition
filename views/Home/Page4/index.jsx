//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'
import Carousel3 from '@/components/Carousel3'
import Titles from '@/components/Titles'
//import COMPOSITES from '@/composites'
import cover4 from '@/public/Cover4.png'
//import COMPONENT from '@/components'

import styles from './Exhibition4.module.scss'

const Page4 = (props) => {
	const photos = (selectedIndex) => {
		// console.log(selectedIndex)
		return Array.from(Array(2).keys());
	}
	const SLIDE_COUNT = 6;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main className={styles.container}>
			<div className={styles.coverContainer}>
				<div className={styles.coverimg}>
					<Image
						alt='cover'
						src="/Cover4.png"
						layout='fill'
						objectFit='cover'
						quality={100}
						priority
					/>
				</div>
				<div className={styles.shadow}>
				</div>
			</div>
			<div className={styles.containerDescription}>
				<div className={styles.text}>
					<h2>IV. МОНГОЛЧУУДЫН БИЧИГ ҮСГИЙН ДУРСГАЛ</h2>
					<p>Элдэв магтаалын үг үл илүүдэх бахдам түүх соёлын минь гэрч бол манай өвөг дээдсийн бүтээж хэрэглэж байсан олон төрлийн бичиг үсэг болно. Монголчуудын бичиг үсгээс Юань гүрний үед хамаарах дөрвөлжин бичгийн дурсгал өнөөгийн бидэнд маш бага үлдэж хоцорчээ. Гэхдээ бидний өвөг дээдсийн бичиг үсгийн нотолгоо болсон баримтуудыг МУҮНС нь сан хөмрөгтөө хадгалж байдаг.  Мөн 16-р зуунд Харчин Аюуш Гүүш Али-Гали буюу гадаад үгийг галиглах журмыг зохиосноор Монгол хэлт орчуулга хэл зүйн хувьд цэгцэрч байсан түүхтэй. Энэхүү баримт бүхнийг та бүхэндээ толилуулж байна.</p>
				</div>
				<div className={styles.imgContainer}>
				<div className={styles.scriptImg}>
						<Image
							alt='cover'
							src={Titles[3].image}
							layout='responsive'
							objectFit='contain'
							priority
						/>
					</div>
				</div>
			</div>
			<Carousel3 slides={slides} photos={photos}/>
		</main>
	)
};

export default Page4;
